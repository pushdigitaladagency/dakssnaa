import { chromium } from 'playwright';
import { mkdirSync, writeFileSync } from 'node:fs';
const phase = process.argv[2] || 'before';
const base = process.argv[3] || 'http://localhost:8080';
const browser = await chromium.launch({headless:true});
mkdirSync(`screenshots/${phase}`, {recursive:true});
const results = [];
for (const [width,height] of [[320,568],[375,667],[390,844],[414,896],[430,932],[768,1024],[1280,800]]) {
  const context = await browser.newContext({viewport:{width,height},hasTouch:width<1000});
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', e=>errors.push(e.message));
  page.on('console', m=>{if(m.type()==='error')errors.push(m.text())});
  for (const route of ['/', '/privacy', '/terms']) {
    await page.goto(base+route, {waitUntil:'networkidle'});
    await page.evaluate(()=>document.fonts.ready);
    await page.addStyleTag({content:'html {scroll-behavior:auto !important}'});
    const problems = new Map();
    for (let y=0; y<await page.evaluate(()=>document.documentElement.scrollHeight); y+=height*0.75) {
      await page.evaluate(y=>window.scrollTo(0,y),y);
      await page.waitForTimeout(90);
      const found = await page.evaluate(()=>{
        const bad=[];
        for (const el of document.querySelectorAll('main *, footer *')) {
          if (!(el instanceof HTMLElement) || el.closest('[aria-hidden="true"]') || el.closest('.marquee-track,.marquee-track-rev,.infra-track,.snap-row'))continue;
          const r=el.getBoundingClientRect(), s=getComputedStyle(el);
          if (!r.width || !r.height || s.opacity==='0' || r.bottom<0 || r.top>innerHeight)continue;
          if(r.right>innerWidth+1 || r.left < -1 || (el.scrollWidth>el.clientWidth+2 && ['visible','clip'].includes(s.overflowX) && !el.matches('img,video,canvas') && !el.querySelector('.marquee-track,.marquee-track-rev,.infra-track,.snap-row')))
            bad.push({tag:el.tagName,cls:el.className,text:el.innerText?.slice(0,90),left:Math.round(r.left),right:Math.round(r.right),client:el.clientWidth,scroll:el.scrollWidth});
        }
        return bad;
      });
      found.forEach(p=>problems.set(p.tag+p.cls+p.text,p));
    }
    await page.evaluate(()=>window.scrollTo(0,0));
    await page.waitForTimeout(1100);
    const name=route==='/'?'home':route.slice(1);
    await page.screenshot({path:`screenshots/${phase}/${width}-${name}.png`,fullPage:true});
    const layout=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,cadHeight:document.querySelector('#cad')?.getBoundingClientRect().height,sections:[...document.querySelectorAll('main>section, main>figure,footer')].map(e=>({id:e.id||e.getAttribute('aria-label')||e.tagName,top:e.getBoundingClientRect().top,height:e.getBoundingClientRect().height})),brokenImages:[...document.images].filter(i=>i.complete&&!i.naturalWidth).map(i=>i.src)}));
    results.push({width,height,route,layout,problems:[...problems.values()],errors:[...new Set(errors)]});
    console.log(JSON.stringify({width,route,overflow:layout.scroll-width,cadHeight:layout.cadHeight,problems:problems.size,errors:[...new Set(errors)]}));
  }
  await context.close();
}
writeFileSync(`screenshots/${phase}/report.json`,JSON.stringify(results,null,2));
await browser.close();
