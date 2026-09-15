import { chromium } from 'playwright';
import { mkdirSync, writeFileSync } from 'node:fs';
const phase=process.argv[2]||'before';
const browser=await chromium.launch();
mkdirSync(`screenshots/${phase}`,{recursive:true});
const report=[];
for(const [width,height] of [[1280,800],[320,568],[768,1024]]){
 const page=await browser.newPage({viewport:{width,height},hasTouch:width<1000});
 await page.goto('http://localhost:8080/',{waitUntil:'networkidle'});
 await page.evaluate(()=>document.fonts.ready);
 await page.addStyleTag({content:'html {scroll-behavior:auto!important}'});
 for(const selector of ['#top','#cad','#about','#capabilities','#projects','#partners','#contact','footer']){
   await page.locator(selector).evaluate(e=>e.scrollIntoView());
   await page.waitForTimeout(1800);
   await page.screenshot({path:`screenshots/${phase}/${width}-${selector.replace('#','')}-detail.png`});
 }
 await page.locator('#projects').scrollIntoViewIfNeeded();
 await page.waitForTimeout(1200);
 await page.locator('#projects button').first().click();
 await page.waitForTimeout(300);
 await page.screenshot({path:`screenshots/${phase}/${width}-dialog.png`});
 report.push({width,dialog:await page.locator('[aria-labelledby="project-title"]').evaluate(e=>({width:e.clientWidth,scroll:e.scrollWidth,panel:e.firstElementChild.scrollWidth}))});
 await page.getByRole('button',{name:'Close project'}).click();
 if(width<1000){
   await page.evaluate(()=>window.scrollTo(0,0));await page.waitForTimeout(600);
   await page.getByRole('button',{name:'Open menu'}).click();
   await page.screenshot({path:`screenshots/${phase}/${width}-menu.png`});
   report.push({width,menu:await page.locator('#mobile-nav').evaluate(e=>({height:e.clientHeight,scroll:e.scrollHeight,links:[...e.querySelectorAll('a')].map(a=>({text:a.textContent,y:a.getBoundingClientRect().y,height:a.getBoundingClientRect().height}))}))});
 }
 await page.close();
}
writeFileSync(`screenshots/${phase}/details.json`,JSON.stringify(report,null,2));
console.log(JSON.stringify(report));
await browser.close();
