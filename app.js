'use strict';
// New phrases inspired by the complete text conversation. These are not chat quotes.
const compliments = [
  "Ты слишком рарная\nЯ до сих пор не понимаю как мне так повезло! 💜",
  "Опять сижу улыбаюсь в телефон\nДовольна?)",
  "Как можно быть такой красивой?",
  "Ты мой любимый повод отвлечься!",
  "Хочу скорее начать засыпать за 20 минут!",
  "Нравится, гад!",
  "Ну всё, растаял мальчик...",
  "Красивая, умная, еще и шаришь! ",
  "Посадик разорвется от нашего дуэта!",
  "Твоя улыбка это читкод в моей игре!",
  "В тебе столько всего интересного\nЯ еще не всё рассмотрел\nПродолжай удивлять!",
  "Опять любуюсь тобой вместо важных дел...",
  "Умница!",
  "Ангелочек!",
  "Мяу!",
  "💜💜💜",
  "🥰🥰🥰",
  "Укушу, откушу!",
  "Дефицит объятий!\nСрочно исправлять! Обнимаю! 🥰",
  "Щас б с тобой по йогурту и спать...",
  "Спасибо что ты есть!",
  "Редкий дроп! Легендарный!",
  "Очень тебе рад)",
  "Скромняяяшка)",
  "Н тебя полюбоваться\nИ день уже не зря прошел",
  "Ты даже думаешь красиво!",
  "Из всех точек пространства\nМне интереснее всего та, где ты!",
  "Мир к тебе не готов!\nА я готовился!",
  "Ты мне и без ангельских крыльев нравишься!\nНо с крыльями конечно вообще пиздец...",
  "С тобой даже обычный день\nВспоминаешь как хороший",
  "Вне конкуренции!",
  "И сверкают глаза!",
  "У тебя очень хороший вкус\nМне нравится что ты именно такая",
  "Солнышко!\nВ Сочи без тебя пошли дожди...",
  "Смотрю на тебя и радуюсь\nПросто радуюсь",
  "Ну хоть замяукай меня!\n Все равно буду довольный сидеть и слушать",
  "Обнимаю! 🥰",
  "Морковку будешь? 🥕🥕🥕",
  "Умная девченка\nКрасивая девченка\nСтрастная девченка",
  "Урурушка :3",
  "Мне нравится что у тебя свое мнение\nДаже когда оно мешает мне быть правым :)",
  "В тебе очень много необычных сочетаний!",
  "Двенадцать объятий это минимум\nС тобой хоть вечность!",
  "Ангелочек мой\nТы даже когда вредничаешь красивая!",
  "Поближе бы скорее оказаться нам двоим...",
  "Ты классная!",
  "Сижу счастливый как дурак\nВо всем кролик виноват",
  "Вдохновляешь 💜",
  "Водопады говно конечно были...\nНо компанию я выбрал вообще отличную!",
  "Норм так погуляли",
  "Те пять дней вспоминаются\nКак будто маленькую жизнь прожили!",
  "Ты умеешь сделать так\nЧто потом скучаешь даже по обычной прогулке\nОпасный человек",
  "Я бы еще раз поехал на ту экскурсию!",
  "Девочка со вкусом попалась",
  "Мне нравится что ты шаришь\nМожно всякую странную музыку скинуть\nИ не объяснять полчаса что со мной не так",
  "Спасибо, что заставляешь меня задыхаться!",
  "Твое боброе утро, весь день делает радостным!",
  "Ты бы видела мою довольную рожу\nКогда твое имя в уведомлениях появляется",
  "Не люблю поведение котов\nНо мою кровать можешь занять",
  "Ты какой-то очень хороший случай",
  "Очень нравится ощущение\nКогда смотрю на твои кружки",
  "Мне нравится твоя прическа\nИ как ты под ней улыбаешься\nКомплект вообще удачный!",
  "Странная!",
  "Серебрянная сталь?",
  "Греческая Богиня\nПрости что я был так слеп!",
  "Тысячи раз скажу о твоей красоте\nИ тысячи раз как в первый буду рад!",
  "Я уже говорил что хочу тебя сьесть?",
  "Я был так счастлив\n Когда услышал что ты на 1 день перенесла поезд",
  "Охото всю вселенную держать в своей ладони\nА затем подарить ее тебе!",
  "И раскрасили они серую Москву!",
  "С тобой даже раннее утро выглядит нормальной идеей",
  "Ты будешь очень приятным будильником!",
  "Мне нравится что рядом с тобой\nМожно просто выдохнуть\nИ не придумывать из себя кого-то",
  "И самостоятельная и нежная",
  "Ты умеешь говорить прямо\nИногда я конечно получаю по самоуверенности\nНо это грин флаг.",
  "Да тут уже все понятно\nЗа этой девочкой сила",
  "Я рад что у меня появился человек\nКоторому охото дарить свои труды",
  "Ты меня иногда так смешишь)",
  "Нормис!",
  "С тобой не надо придумывать праздник\nИ так он каждый день будет",
  "Я могу сколько угодно умничать\nА ты меня обнимешь\nИ всё. И доволен гад!",
  "Вообще ты очень уютный человек",
  "После объятий с тобой\nЯ подниму на 5 кг больше\nСтася-Стероид",
  "Ты достойная причина отдохнуть",
  "Твой смех бы в избранное сохранить",
  "Хорошая девочка!",
  "Очень хочу твоего супа поесть уже!",
  "<3"
];
const text = document.querySelector('#compliment');
const generate = document.querySelector('#generate');
const copy = document.querySelector('#copy');
const number = document.querySelector('#number');
const toast = document.querySelector('#toast');
const previous = document.querySelector('#previous');
const seek = document.querySelector('#seek');
const shuffle = document.querySelector('#shuffle');
const player = document.querySelector('.winamp');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
let current = 16, deck = [], busy = false, toastTimer, renderTimer, pulseTimer;
let history = [current], historyPosition = 0, mixed = true;
function refill() {
  deck = compliments.map((_, i) => i).filter(i => i !== current);
  for(let i=deck.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[deck[i],deck[j]]=[deck[j],deck[i]];}
}
function stars(){
  if(reduced.matches)return;
  const r=generate.getBoundingClientRect();
  for(let i=0;i<5;i++){
    const s=document.createElement('span');s.className='sparkle';s.textContent=i%2?'✧':'✦';
    s.style.left=`${r.x+Math.random()*r.width}px`;s.style.top=`${r.y-5+Math.random()*25}px`;s.style.fontSize=`${10+Math.random()*13}px`;
    s.style.animationDelay=`${i*.07}s`;document.querySelector('#sparkles').append(s);setTimeout(()=>s.remove(),2200);
  }
}
function render(index){
  clearTimeout(renderTimer);clearTimeout(pulseTimer);busy=true;current=index;
  seek.value=String(index);seek.setAttribute('aria-valuetext',`Комплимент ${index+1} из ${compliments.length}`);
  copy.disabled=true;previous.disabled=historyPosition===0;
  text.classList.add('changing');player.classList.add('pulse');
  renderTimer=setTimeout(()=>{
    text.textContent=compliments[index];number.textContent=String(index+1);
    text.classList.remove('changing');copy.disabled=false;busy=false;
  },reduced.matches?0:160);
  pulseTimer=setTimeout(()=>player.classList.remove('pulse'),1300);
}
function remember(index){history=history.slice(0,historyPosition+1);history.push(index);historyPosition++;render(index);}
generate.addEventListener('click',()=>{
  if(busy)return;
  if(historyPosition<history.length-1){historyPosition++;render(history[historyPosition]);}
  else{if(!deck.length)refill();remember(mixed?deck.pop():(current+1)%compliments.length);}
  stars();
});
previous.addEventListener('click',()=>{if(busy||historyPosition===0)return;historyPosition--;render(history[historyPosition]);});
shuffle.addEventListener('click',()=>{mixed=!mixed;shuffle.setAttribute('aria-pressed',String(mixed));refill();});
seek.addEventListener('input',()=>{const index=Number(seek.value);if(index!==current){deck=deck.filter(i=>i!==index);remember(index);}});
text.textContent=compliments[current];
number.textContent=String(current+1);
seek.value=String(current);
seek.setAttribute('aria-valuetext',`Комплимент ${current+1} из ${compliments.length}`);
function showToast(message){clearTimeout(toastTimer);toast.textContent=message;toast.classList.add('visible');toastTimer=setTimeout(()=>toast.classList.remove('visible'),2400);}
copy.addEventListener('click',async()=>{
  const value=text.innerText;
  try{
    if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(value);}
    else{const area=document.createElement('textarea');area.value=value;area.setAttribute('readonly','');area.style.position='fixed';area.style.opacity='0';document.body.append(area);area.select();const ok=document.execCommand('copy');area.remove();if(!ok)throw new Error('copy unavailable');copy.focus();}
    showToast('Забирай с собой 💜');
  }catch{showToast('Выдели текст и скопируй — он твой 💜');}
});

const dialog=document.querySelector('#gallery-dialog');
const photos=[...document.querySelectorAll('.photo')].map(figure=>({src:figure.querySelector('img').getAttribute('src'),alt:figure.querySelector('img').alt,caption:figure.querySelector('figcaption').textContent}));
let photoIndex=0, photoOpener;
function showPhoto(index){
  photoIndex=(index+photos.length)%photos.length;
  const photo=photos[photoIndex],img=document.querySelector('#large-photo');
  img.src=photo.src;img.alt=photo.alt;
  document.querySelector('#photo-caption').textContent=photo.caption;
  document.querySelector('#photo-position').textContent=`${String(photoIndex+1).padStart(2,'0')} / ${String(photos.length).padStart(2,'0')}`;
}
document.querySelectorAll('.photo-open').forEach(button=>button.addEventListener('click',()=>{photoOpener=button;showPhoto(Number(button.dataset.photo));dialog.showModal();}));
dialog.addEventListener('close',()=>photoOpener?.focus({preventScroll:true}));
function closePhoto(){dialog.close();photoOpener?.focus({preventScroll:true});}
dialog.addEventListener('cancel',event=>{event.preventDefault();closePhoto();});
document.querySelector('#close-photo').addEventListener('click',closePhoto);
document.querySelector('#photo-prev').addEventListener('click',()=>showPhoto(photoIndex-1));
document.querySelector('#photo-next').addEventListener('click',()=>showPhoto(photoIndex+1));
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closePhoto();}});
dialog.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();closePhoto();}if(event.key==='ArrowLeft'){event.preventDefault();showPhoto(photoIndex-1);}if(event.key==='ArrowRight'){event.preventDefault();showPhoto(photoIndex+1);}});


