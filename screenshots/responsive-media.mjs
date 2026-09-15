import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { writeFileSync } from 'node:fs';
const browser=await chromium.launch();
const report=[];
for(const [width,height] of [[320,568],[390,844],[768,1024]]){
 const page=await browser.newPage({viewport:{width,height},hasTouch:true,isMobile:true,deviceScaleFactor:2});
 await page.goto('http://localhost:8081/',{waitUntil:'networkidle'});
 await page.addStyleTag({content:'html {scroll-behavior:auto!important}'});
 if(width<768){
  await page.locator('#cad').scrollIntoViewIfNeeded();await page.waitForTimeout(1200);
  assert(await page.locator('#cad video').evaluate(v=>!v.paused&&v.currentTime>0),'mobile CAD video is not playing');
  const row=page.locator('.snap-row');await row.scrollIntoViewIfNeeded();await page.waitForTimeout(1000);
  const rect=await row.boundingBox();
  const cdp=await page.context().newCDPSession(page);
  const y=Math.min(height-90,rect.y+100);
  await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:width-50,y}]});
  for(let i=1;i<=8;i++)await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:width-50-i*(width-100)/8,y}]});
  await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
  await page.waitForTimeout(400);
  assert(await row.evaluate(e=>e.scrollLeft>0),'sector cards did not swipe');
 }
 const plant=page.locator('section[aria-label="High-precision laser processing"]');
 const metrics=await plant.evaluate(e=>({top:e.getBoundingClientRect().top+scrollY,height:e.offsetHeight}));
 await page.evaluate(y=>scrollTo(0,y),metrics.top+100);await page.waitForTimeout(1200);
 const canvas=plant.locator('canvas');
 const first=await canvas.evaluate(c=>c.toDataURL());
 await page.evaluate(y=>scrollTo(0,y),metrics.top+(metrics.height-height)*0.8);await page.waitForTimeout(1200);
 const second=await canvas.evaluate(c=>c.toDataURL());
 assert.notEqual(first,second,'plant reel did not advance');
 assert.equal(await plant.locator(':scope > div').evaluate(e=>getComputedStyle(e).position),'fixed');
 await page.setViewportSize({width:width+20,height});await page.waitForTimeout(300);
 assert.equal(await canvas.evaluate(c=>c.width),(width+20)*2,'canvas did not resize at the current frame');
 await page.setViewportSize({width,height});
 await page.evaluate(()=>scrollTo(0,0));await page.waitForTimeout(600);
 await page.getByRole('button',{name:'Open menu'}).tap();
 await page.keyboard.press('Escape');assert.equal(await page.locator('#mobile-nav').isVisible(),false);
 report.push({width,height,video:width<768,swipe:width<768,plantScrub:true,canvasResize:true,escapeClosesMenu:true});
 console.log(JSON.stringify(report.at(-1)));
 await page.close();
}
await browser.close();
writeFileSync('screenshots/production/media.json',JSON.stringify(report,null,2));
