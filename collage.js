'use strict';
const pleasantWord=document.querySelector('#pleasant-word');
const pleasantPhrases=['нравишься.','красотка.','сияешь.','мне снишься.','вдохновляешь.','моя радость.','чудо.','умница.','очаровываешь.','самая милая.','радуешь.','моя слабость.'];
let lastPleasant=-1;try{lastPleasant=Number(sessionStorage.getItem('stasia:last-pleasant')??-1);}catch{}
const pleasantOptions=pleasantPhrases.map((_,i)=>i).filter(i=>i!==lastPleasant);
const pleasantChoice=pleasantOptions[Math.floor(Math.random()*pleasantOptions.length)];
if(pleasantWord)pleasantWord.textContent=pleasantPhrases[pleasantChoice];
try{sessionStorage.setItem('stasia:last-pleasant',String(pleasantChoice));}catch{}
function fitPleasant(){
  if(!pleasantWord)return;
  pleasantWord.style.fontSize='';
  const range=document.createRange();range.selectNodeContents(pleasantWord);
  const natural=range.getBoundingClientRect().width,available=pleasantWord.clientWidth;
  if(natural>available-3)pleasantWord.style.fontSize=`${parseFloat(getComputedStyle(pleasantWord).fontSize)*(available-3)/natural}px`;
}
// Calendar days in Moscow; the day we met is day one.
function updateAcquaintanceDay(now=new Date()){
  const target=document.querySelector('#acquaintance-day');if(!target)return;
  const parts=new Intl.DateTimeFormat('en-US',{timeZone:'Europe/Moscow',year:'numeric',month:'numeric',day:'numeric'}).formatToParts(now);
  const value=type=>Number(parts.find(part=>part.type===type).value);
  const today=Date.UTC(value('year'),value('month')-1,value('day'));
  const day=String(Math.max(1,Math.round((today-Date.UTC(2026,9,10))/86400000)+1));
  if(target.textContent!==day){target.textContent=day;window.dispatchEvent(new Event('resize'));}
}
updateAcquaintanceDay();
setInterval(updateAcquaintanceDay,60000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)updateAcquaintanceDay();});
window.addEventListener('pageshow',()=>updateAcquaintanceDay());
const collage=document.querySelector('#collage');
if(collage){
  const frames=[...collage.querySelectorAll('.photo')];
  const ordered=frames.map(frame=>({frame,rx:Math.random(),ry:Math.random(),angle:(Math.random()-.5)*26,size:Math.random()}));
  for(let i=ordered.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[ordered[i],ordered[j]]=[ordered[j],ordered[i]];}
  const scraps=[...collage.querySelectorAll('.collage-piece')].map(piece=>({piece,angle:(Math.random()-.5)*23,rx:Math.random(),ry:Math.random()}));
  const stickers=scraps.filter(entry=>entry.piece.matches('.silver-star,.chrome-heart,.postmark'));
  const paperScraps=scraps.filter(entry=>!stickers.includes(entry));
  let lastWidth=0;
  function arrangeCollage(){
    const width=collage.clientWidth;if(!width)return;
    lastWidth=width;collage.classList.add('arranged');
    const mobile=width<650,columns=mobile?2:3,cell=width/columns;
    const rows=Math.ceil(ordered.length/columns),gaps=[];
    let top=mobile?50:65;
    for(let row=0;row<rows;row++){
      let rowBottom=top;
      const entries=ordered.slice(row*columns,(row+1)*columns);
      entries.forEach((entry,col)=>{
        const {frame,rx,ry,angle,size}=entry,img=frame.querySelector('img');
        const aspect=Number(img.getAttribute('width'))/Number(img.getAttribute('height'));
        const w=cell*((aspect<.9?.65:.73)+size*.22);
        frame.style.setProperty('--aspect',aspect);frame.style.setProperty('--angle',`${angle}deg`);
        frame.style.width=`${w}px`;
        const h=frame.offsetHeight,radians=Math.abs(angle)*Math.PI/180;
        const extraX=(h*Math.sin(radians)+w*Math.cos(radians)-w)/2;
        let x=col*cell+(cell-w)/2+(rx-.5)*cell*.22;
        if(entries.length===1)x=(width-w)/2+(rx-.5)*width*.15;
        x=Math.max(extraX+7,Math.min(width-w-extraX-7,x));
        const extraY=(w*Math.sin(radians)+h*Math.cos(radians)-h)/2;
        const y=top+ry*(mobile?80:175)+Math.max(0,extraY);
        frame.style.left=`${x}px`;frame.style.top=`${y}px`;
        rowBottom=Math.max(rowBottom,y+h+extraY);
        if(frame.querySelector('[data-photo="4"]'))document.querySelector('#portraits').style.top=`${y}px`;
      });
      const gapHeight=mobile?190:220;
      gaps.push({top:rowBottom+25,bottom:rowBottom+gapHeight});
      top=rowBottom+gapHeight+25;
    }
    paperScraps.forEach((entry,i)=>{
      const group=i%gaps.length,groupEntries=paperScraps.filter((_,j)=>j%gaps.length===group),slot=groupEntries.indexOf(entry),gap=gaps[group];
      const slotWidth=width/groupEntries.length,preferred=Number(entry.piece.dataset.width)||140;
      const w=Math.min(preferred,slotWidth-(mobile?17:35));
      entry.piece.style.width=`${w}px`;entry.piece.style.setProperty('--angle',`${entry.angle}deg`);
      const h=entry.piece.offsetHeight,extra=Math.abs(Math.sin(entry.angle*Math.PI/180))*h/2;
      const x=slot*slotWidth+(slotWidth-w)/2+(entry.rx-.5)*(mobile?7:20);
      entry.piece.style.left=`${Math.max(extra+4,Math.min(width-w-extra-4,x))}px`;
      entry.piece.style.top=`${gap.top+entry.ry*(mobile?25:45)}px`;
      top=Math.max(top,gap.top+entry.ry*(mobile?25:45)+h+25);
    });
    stickers.forEach((entry,i)=>{
      const frame=ordered[(i*2+1)%ordered.length].frame;
      const w=Math.min(Number(entry.piece.dataset.width),mobile?76:105);
      entry.piece.style.width=`${w}px`;entry.piece.style.setProperty('--angle',`${entry.angle}deg`);
      const x=parseFloat(frame.style.left)+(entry.rx>.5?frame.offsetWidth-w*.3:-w*.55);
      entry.piece.style.left=`${Math.max(8,Math.min(width-w-8,x))}px`;
      entry.piece.style.top=`${parseFloat(frame.style.top)-entry.piece.offsetHeight*.25}px`;
    });
    collage.style.height=`${Math.ceil(top+20)}px`;
  }
  function refreshComposition(){fitPleasant();arrangeCollage();}
  window.addEventListener('resize',refreshComposition);
  if(typeof ResizeObserver!=='undefined')new ResizeObserver(entries=>{if(Math.abs(entries[0].contentRect.width-lastWidth)>1)refreshComposition();}).observe(collage);
  arrangeCollage();fitPleasant();
}
window.addEventListener('load',fitPleasant);

