import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
const base=process.argv[2]||'http://localhost:8080';
const output=process.argv[3]||'interactions';
mkdirSync(`screenshots/${output}`,{recursive:true});
const browser=await chromium.launch();
const report=[];
for(const [width,height] of [[320,568],[375,667],[390,844],[414,896],[430,932],[768,1024],[1280,800]]){
 const page=await browser.newPage({viewport:{width,height},hasTouch:width<1000});
 const errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
 await page.goto(base,{waitUntil:'networkidle'});
 await page.evaluate(()=>document.fonts.ready);
 await page.addStyleTag({content:'html {scroll-behavior:auto!important}'});
 const activate=async locator=>{await locator.scrollIntoViewIfNeeded();await locator[width<1000?'tap':'click']()};
 const fit=async(label)=>{
  const measure=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,clipping:getComputedStyle(document.documentElement).overflowX}));
  assert(measure.scroll<=width+1,`${label}: document overflow ${measure.scroll}/${width}`);
  assert(!['hidden','clip'].includes(measure.clipping),`${label}: root clipping`);
 };
 // Each navigation link must close the menu and reach the correct section.
 if(width<1000){
  for(const [label,id] of [['About','about'],['Capabilities','capabilities'],['Infrastructure','infrastructure'],['Projects','projects'],['Partners','partners'],['Contact','contact']]){
   await page.evaluate(()=>window.scrollTo(0,0));await page.waitForTimeout(600);
   await activate(page.getByRole('button',{name:'Open menu'}));
   await activate(page.getByRole('navigation',{name:'Mobile',exact:true}).getByRole('link',{name:label,exact:true}));
   await page.waitForTimeout(1000);
   assert.equal(await page.locator('#mobile-nav').isVisible(),false);
   assert.equal(new URL(page.url()).hash,`#${id}`);
   assert.equal(await page.evaluate(()=>document.body.style.overflow),'');
   const pos=await page.locator(`#${id}`).boundingBox();
   assert(pos.y>=-2 && pos.y<height,`${id} did not scroll into view: ${pos.y}`);
   await fit(label);
  }
 }
 // Open every project, switch every gallery image, and reach its final action.
 const cards=page.locator('#projects button');
 for(let i=0;i<await cards.count();i++){
  await cards.nth(i).scrollIntoViewIfNeeded();await page.waitForTimeout(1400);
  await activate(cards.nth(i));
  const dialog=page.getByRole('dialog',{name:await page.locator('#project-title').innerText(),exact:true});
  assert(await dialog.isVisible());
  const panel=await dialog.evaluate(e=>({width:e.firstElementChild.clientWidth,scroll:e.firstElementChild.scrollWidth,height:e.firstElementChild.clientHeight}));
  assert(panel.scroll<=panel.width+1,`project ${i} panel overflow`);
  assert(panel.height<=height,`project ${i} panel too tall`);
  const thumbs=dialog.getByRole('button',{name:/View image/});
  for(let j=0;j<await thumbs.count();j++){
   await activate(thumbs.nth(j));assert.equal(await thumbs.nth(j).getAttribute('aria-pressed'),'true');
  }
  const cta=dialog.getByRole('link',{name:'Discuss a similar programme'});
  await cta.scrollIntoViewIfNeeded();
  const rect=await cta.boundingBox();assert(rect.x>=0&&rect.x+rect.width<=width+1&&rect.height>=44,'dialog CTA must fit and be touch sized');
  if(i===0)await page.screenshot({path:`screenshots/${output}/${width}-dialog-bottom.png`});
  await activate(dialog.getByRole('button',{name:'Close project'}));
  assert.equal(await page.locator('#project-title').count(),0);
 }
 // Validate and submit locally; never send an email or make a call.
 await page.locator('form').scrollIntoViewIfNeeded();await page.waitForTimeout(1500);
 await activate(page.getByRole('button',{name:'Submit enquiry'}));
 assert.equal(await page.getByRole('alert').innerText(),'Please enter your name.');
 for(const [name,value] of [['Name','Responsive Tester'],['Company','Mobile QA'],['Email','qa@example.com'],['Phone','1234567890'],['Message','Responsive layout verification only.']])await page.getByLabel(name,{exact:true}).fill(value);
 await page.getByLabel('Requirement type').selectOption('Advanced Manufacturing');
 if(width<1000)assert.equal(await page.getByLabel('Name',{exact:true}).evaluate(e=>getComputedStyle(e).fontSize),'16px');
 await page.screenshot({path:`screenshots/${output}/${width}-form.png`});
 await activate(page.getByRole('button',{name:'Submit enquiry'}));
 assert(await page.getByRole('heading',{name:'Thank you, Responsive Tester.'}).isVisible());
 await page.waitForTimeout(1000);
 if(width<1120){
  const confirmation=await page.getByRole('heading',{name:'Thank you, Responsive Tester.'}).boundingBox();
  assert(confirmation.y>=0&&confirmation.y+confirmation.height<height-56,'confirmation is outside the mobile viewport');
 }
 await fit('form success');
 await page.screenshot({path:`screenshots/${output}/${width}-success.png`});
 await page.evaluate(()=>window.scrollTo(0,document.documentElement.scrollHeight));
 await page.waitForTimeout(500);
 const terms=page.locator('footer').getByRole('link',{name:'Terms',exact:true});
 const r=await terms.boundingBox();assert(r.y+r.height<=height-(width<1120?56:0)+1,'footer link obscured by action bar');
 await activate(terms);await page.waitForURL('**/terms');await page.waitForLoadState('networkidle');
 await fit('terms');
 // Check the legal-page navigation returns home and restores scrolling.
 if(width<1000){
  await page.evaluate(()=>window.scrollTo(0,0));await page.waitForTimeout(600);
  await activate(page.getByRole('button',{name:'Open menu'}));
  await activate(page.getByRole('navigation',{name:'Mobile',exact:true}).getByRole('link',{name:'Contact',exact:true}));
  await page.waitForURL('**/#contact');await page.waitForTimeout(1200);
  assert.equal(await page.locator('#mobile-nav').isVisible(),false);
 }
 assert.deepEqual(errors,[]);
 report.push({width,height,ok:true,projects:10,menu:width<1000,form:true,footer:true,consoleErrors:errors});
 console.log(JSON.stringify(report.at(-1)));
 await page.close();
}
// Every redirect, including each old project-detail URL, remains usable.
const page=await browser.newPage({viewport:{width:390,height:844},hasTouch:true});
const slugs=[...readFileSync('src/data/projects.ts','utf8').matchAll(/slug: "([^"]+)"/g)].map(m=>m[1]);
for(const [route,hash] of [['about','about'],['capabilities','capabilities'],['contact','contact'],['facilities','infrastructure'],['industries','about'],['partnerships','partners'],['projects','projects'],['quality-rd','capabilities'],...slugs.map(s=>[`projects/${s}`,'projects'])]){
 await page.goto(`${base}/${route}`,{waitUntil:'networkidle'});
 assert.equal(new URL(page.url()).hash,`#${hash}`);
 assert(await page.locator(`#${hash}`).isVisible());
}
report.push({redirects:8+slugs.length,ok:true});
// Rotation: cleanup the CAD stage and an open menu's scroll lock.
await page.goto(base,{waitUntil:'networkidle'});
await page.setViewportSize({width:768,height:1024});await page.waitForTimeout(300);
await page.setViewportSize({width:390,height:844});await page.waitForTimeout(300);
assert((await page.locator('#cad').boundingBox()).height>320,'CAD collapsed after rotation');
assert.equal(await page.locator('#cad>div').evaluate(e=>e.style.position),'');
await page.setViewportSize({width:568,height:320});
await page.evaluate(()=>window.scrollTo(0,0));await page.waitForTimeout(600);
await page.getByRole('button',{name:'Open menu'}).tap();
await page.getByRole('navigation',{name:'Mobile',exact:true}).getByRole('link',{name:/\+91/}).scrollIntoViewIfNeeded();
await page.screenshot({path:`screenshots/${output}/landscape-menu.png`});
const navMetrics=await page.locator('#mobile-nav nav').evaluate(e=>({height:e.clientHeight,scroll:e.scrollHeight,top:e.scrollTop}));
assert(navMetrics.scroll>navMetrics.height&&navMetrics.top>0,'landscape menu cannot scroll');
await page.setViewportSize({width:1280,height:800});await page.waitForTimeout(300);
assert.equal(await page.evaluate(()=>document.body.style.overflow),'');
await page.setViewportSize({width:390,height:844});await page.waitForTimeout(300);
assert.equal(await page.locator('#mobile-nav').isVisible(),false);
report.push({rotation:true,landscapeMenu:true,ok:true});
await browser.close();
writeFileSync(`screenshots/${output}/report.json`,JSON.stringify(report,null,2));
