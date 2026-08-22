/* Volvo exterior/interior guide — mobile-first seat visual mapping. */
(function(){
'use strict';
if(window.__ci20260822j)return;
window.__ci20260822j=true;

var D={
  XC90:{label:'XC90',era:'my26',offset:4,groups:[
    {label:'PLUS BRIGHT',sub:'B6 AWD PLUS BRIGHT',v:[['RP00','Charcoal','차콜','Nordico','Brown Ash',0],['RPE0','Cardamom','카다멈','Nordico','Brown Ash',1]]},
    {label:'ULTRA BRIGHT / ULTRA DARK',sub:'B6 ULTRA BRIGHT · B6 ULTRA DARK · T8 ULTRA BRIGHT',v:[['RCE0','Cardamom','카다멈','Nappa Leather','Brown Ash',2],['RC00','Charcoal','차콜','Nappa Leather','Grey Ash',3],['UC00','Blond','블론드','Nappa Leather','Grey Ash',4]]}
  ]},
  XC60:{label:'XC60',era:'my26',offset:9,groups:[
    {label:'PLUS BRIGHT',sub:'B5 AWD PLUS BRIGHT',v:[['RP00','Charcoal','차콜','Nordico','Natural Driftwood',0],['RPE0','Cardamom','카다멈','Nordico','Natural Driftwood',1]]},
    {label:'ULTRA BRIGHT / ULTRA DARK',sub:'B5 ULTRA BRIGHT · B5 ULTRA DARK · T8 ULTRA BRIGHT',v:[['UC00','Blond','블론드','Nappa Leather','White Driftwood',2],['RC00','Charcoal','차콜','Nappa Leather','Natural Driftwood',3]]}
  ]},
  S90:{label:'S90',era:'my26',offset:13,groups:[
    {label:'PLUS BRIGHT',sub:'B5 PLUS BRIGHT',v:[['RP00','Charcoal','차콜','Nordico','Brown Ash',0]]},
    {label:'ULTRA BRIGHT / ULTRA DARK',sub:'B5 ULTRA BRIGHT · B5 ULTRA DARK · T8 ULTRA BRIGHT',v:[['RCE0','Cardamom','카다멈','Nappa Leather','Brown Ash',1],['RC00','Charcoal','차콜','Nappa Leather','Grey Ash',2],['UC00','Blond','블론드','Nappa Leather','Grey Ash',3]]}
  ]},
  XC40:{label:'XC40',era:'my26',offset:17,groups:[
    {label:'PLUS BRIGHT',sub:'B4 AWD PLUS BRIGHT',v:[['RD00','Charcoal','차콜','Leather','Driftwood',0],['UD70','Blond','블론드','Leather','Driftwood',1]]},
    {label:'ULTRA BRIGHT / ULTRA DARK',sub:'B4 AWD ULTRA BRIGHT · B4 AWD ULTRA DARK',v:[['UD70','Blond','블론드','Leather','Driftwood',2],['RD00','Charcoal','차콜','Leather','Driftwood',3]]}
  ]},
  V60CC:{label:'V60 Cross Country',era:'my26',offset:21,groups:[
    {label:'ULTRA',sub:'B5 AWD ULTRA',v:[['RC20','Amber','앰버','Nappa Leather','Linear Lime',0],['RC00','Charcoal','차콜','Nappa Leather','Driftwood',1],['RC30','Maroon Brown','마룬 브라운','Nappa Leather','Linear Lime',2],['UC00','Blond','블론드','Nappa Leather','Driftwood',3]]}
  ]},
  EX30:{label:'EX30',era:'my26',offset:0,groups:[
    {label:'CORE',sub:'CORE',v:[['R310','Indigo','인디고','Textile & Nordico','Denim',0]]},
    {label:'ULTRA',sub:'ULTRA',v:[['R540','Breeze','브리즈','Pixel Knit & Nordico','Particle',1],['R220','Mist','미스트','Tailored Wool Blend','Flax',2]]}
  ]},
  EX30CC:{label:'EX30 Cross Country',era:'my26',offset:3,groups:[
    {label:'ULTRA',sub:'ULTRA',v:[['R430','Pine','파인','Wool Blend & Nordico','Flax',0]]}
  ]},
  EX90:{label:'EX90',era:'my27',offset:0,groups:[
    {label:'Twin Motor PLUS · 7인승',sub:'Twin Motor PLUS · 7-Seater',v:[['RG10','Cardamom','카다멈','Nordico','Brown Ash',0],['AG60','Dawn','던','Nordico','Light Ash',1],['RG00','Charcoal','차콜','Nordico','Brown Ash',2]]},
    {label:'Twin Motor ULTRA · 7인승',sub:'Twin Motor ULTRA · 7-Seater',v:[['RC10','Cardamom','카다멈','Nappa Leather','Brown Ash',3],['RC00','Charcoal','차콜','Nappa Leather','Light Ash',4],['AC60','Dawn','던','Nappa Leather','Light Ash',5]]},
    {label:'Twin Motor ULTRA · 6인승',sub:'Twin Motor ULTRA · 6-Seater',v:[['AC60','Dawn','던','Nappa Leather','Light Ash',6],['RC10','Cardamom','카다멈','Nappa Leather','Brown Ash',7],['RC00','Charcoal','차콜','Nappa Leather','Light Ash',8]]},
    {label:'Performance ULTRA · 7인승',sub:'Twin Motor Performance ULTRA · 7-Seater',v:[['AC60','Dawn','던','Nappa Leather','Light Ash',9],['RC10','Cardamom','카다멈','Nappa Leather','Brown Ash',10],['RC00','Charcoal','차콜','Nappa Leather','Light Ash',11]]},
    {label:'Performance ULTRA · 6인승',sub:'Twin Motor Performance ULTRA · 6-Seater',v:[['AC60','Dawn','던','Nappa Leather','Light Ash',12],['RC10','Cardamom','카다멈','Nappa Leather','Brown Ash',13],['RC00','Charcoal','차콜','Nappa Leather','Light Ash',14]]}
  ]},
  ES90:{label:'ES90',era:'my27',offset:15,groups:[
    {label:'PLUS',sub:'Single Motor Extended Range PLUS · Twin Motor PLUS',v:[['RD10','Cardamom','카다멈','Nordico','Birch',0],['RD00','Charcoal','차콜','Nordico','Birch',1],['AD60','Dawn','던','Nordico','Light Ash',2]]},
    {label:'ULTRA',sub:'Single Motor Extended Range ULTRA · Twin Motor ULTRA · Performance ULTRA',v:[['AC60','Dawn','던','Nappa Leather','Light Ash',3],['RC10','Cardamom','카다멈','Nappa Leather','Birch',4],['RC00','Charcoal','차콜','Nappa Leather','Birch',5]]}
  ]}
};
var DOT={Charcoal:'#323331',Blond:'#d6d0c2',Cardamom:'#9a8064',Dawn:'#d7d5cd',Amber:'#a57b50','Maroon Brown':'#68433d',Indigo:'#34495d',Breeze:'#d5e1df',Mist:'#d7d3ca',Pine:'#69776a'};
var currentModel='XC90',currentGroup=0,currentVariant=0,resizeTimer=0;
function esc(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function model(){return D[currentModel]||D.XC90}
function group(){var m=model();return m.groups[currentGroup]||m.groups[0]}
function variant(){var g=group();return g.v[currentVariant]||g.v[0]}
function atlasInfo(m,v){var global=(m.offset||0)+v[5],chunk=Math.floor(global/5)+1,local=global%5;return {global:global,chunk:chunk,local:local,src:'assets/interiors/'+m.era+'-c'+chunk+'.webp?v=20260822j'}}
function cropSpec(kind){return kind==='detail'?{x:193,w:83}:{x:5,w:186}}
function positionSprite(img,frame,kind,a){if(!img||!frame)return;var fw=frame.clientWidth;if(!fw)return;var c=cropSpec(kind),scale=fw/c.w;img.style.width=(280*scale)+'px';img.style.height='auto';img.style.left=(-c.x*scale)+'px';img.style.top=(-((a.local*117)+20)*scale)+'px'}
function positionAll(){var box=document.querySelector('#colors .ci-interior');if(!box)return;var m=model(),v=variant(),a=atlasInfo(m,v);positionSprite(box.querySelector('.ci-main-photo'),box.querySelector('.ci-main-frame'),'main',a);positionSprite(box.querySelector('.ci-detail-photo'),box.querySelector('.ci-detail-frame'),'detail',a)}
function loadPhoto(img,src,done){if(!img)return;if(img.getAttribute('src')===src&&img.complete){if(done)done();return}img.onload=function(){img.onload=null;if(done)done()};img.src=src}
function selectedHtml(v){return '<div class="ci-selected-head"><span class="ci-dot" style="--dot:'+esc(DOT[v[1]]||'#bbb')+'"></span><div><b>'+esc(v[0])+'</b><span>'+esc(v[1])+' · '+esc(v[2])+'</span></div></div><div class="ci-selected-lines"><div><b>시트 소재</b><span>'+esc(v[3])+'</span></div><div><b>인테리어 데코</b><span>'+esc(v[4])+'</span></div><div><b>적용 구성</b><span>'+esc(group().sub)+'</span></div></div>'}
function applyVariant(idx){var box=document.querySelector('#colors .ci-interior'),m=model(),g=group();if(!box||!g.v.length)return;currentVariant=Math.max(0,Math.min(idx,g.v.length-1));var v=variant(),a=atlasInfo(m,v);box.querySelectorAll('.ci-seat-btn').forEach(function(b){b.classList.toggle('active',Number(b.dataset.variant)===currentVariant);b.setAttribute('aria-pressed',Number(b.dataset.variant)===currentVariant?'true':'false')});box.querySelector('.ci-step-photo strong').textContent='3. 선택한 실내 확인 · '+v[0]+' '+v[2];box.querySelector('.ci-main-label').textContent=m.label+' · '+g.label+' · '+v[0];box.querySelector('.ci-detail-label').textContent='데코 / 소재 디테일';box.querySelector('.ci-selected').innerHTML=selectedHtml(v);var main=box.querySelector('.ci-main-photo'),detail=box.querySelector('.ci-detail-photo');[main,detail].forEach(function(img){img.dataset.photoKey=currentModel+'-'+currentGroup+'-'+v[0]+'-'+a.global;img.dataset.photoRow=String(a.global);img.alt=m.label+' '+g.label+' '+v[0]+' '+v[1]+' 실내'});box.querySelector('.ci-main-frame').dataset.code=v[0];box.querySelector('.ci-detail-frame').dataset.code=v[0];loadPhoto(main,a.src,function(){positionAll()});loadPhoto(detail,a.src,function(){positionAll()});requestAnimationFrame(positionAll)}
function renderGroup(idx){var box=document.querySelector('#colors .ci-interior'),m=model();if(!box)return;currentGroup=Math.max(0,Math.min(idx,m.groups.length-1));currentVariant=0;box.querySelectorAll('.ci-trim-btn').forEach(function(b){b.classList.toggle('active',Number(b.dataset.group)===currentGroup)});var g=group();box.querySelector('.ci-seat-buttons').innerHTML=g.v.map(function(v,i){return '<button type="button" class="ci-seat-btn" data-variant="'+i+'" aria-pressed="false"><span class="ci-dot" style="--dot:'+esc(DOT[v[1]]||'#bbb')+'"></span><span class="ci-seat-copy"><b>'+esc(v[0])+'</b><small>'+esc(v[2])+'</small></span></button>'}).join('');applyVariant(0)}
function renderModel(key){currentModel=D[key]?key:'XC90';currentGroup=0;currentVariant=0;var box=document.querySelector('#colors .ci-interior'),m=model();if(!box)return;box.querySelectorAll('.ci-model-btn').forEach(function(b){b.classList.toggle('active',b.dataset.key===currentModel)});box.querySelector('.ci-trim-tabs').innerHTML=m.groups.map(function(g,i){return '<button type="button" class="ci-trim-btn" data-group="'+i+'">'+esc(g.label)+'</button>'}).join('');renderGroup(0)}
function tab(mode){var sec=document.getElementById('colors');if(!sec)return;sec.querySelectorAll('.ci-tab').forEach(function(b){b.classList.toggle('active',b.dataset.mode===mode)});var i=sec.querySelector('.ci-interior');if(mode==='interior'){sec.classList.add('ci-show-interior');i.classList.add('active');requestAnimationFrame(positionAll)}else{sec.classList.remove('ci-show-interior');i.classList.remove('active')}}
function init(){var sec=document.getElementById('colors'),wrap=sec&&sec.querySelector('.color-wrap');if(!sec||!wrap)return;var h=sec.querySelector('.color-head'),h2=h&&h.querySelector('h2'),p=h&&h.querySelector('p');if(h2)h2.textContent='컬러 · 인테리어 가이드';if(p)p.textContent='외장 컬러와 실제 실내 트림·시트 조합을 나눠 확인할 수 있습니다.';document.querySelectorAll('a[href="#colors"]').forEach(function(a){a.textContent='컬러·인테리어'});var old=sec.querySelector('.ci-tabs');if(old)old.remove();var oldI=sec.querySelector('.ci-interior');if(oldI)oldI.remove();var tabs=document.createElement('div');tabs.className='ci-tabs';tabs.innerHTML='<button type="button" class="ci-tab active" data-mode="exterior">외장 컬러</button><button type="button" class="ci-tab" data-mode="interior">실내 트림 · 시트</button>';h.insertAdjacentElement('afterend',tabs);var keys=['XC90','XC60','S90','XC40','V60CC','EX30','EX30CC','EX90','ES90'];var box=document.createElement('div');box.className='ci-interior';box.innerHTML='<div class="ci-model-tabs">'+keys.map(function(k){return '<button type="button" class="ci-model-btn" data-key="'+k+'">'+esc(D[k].label)+'</button>'}).join('')+'</div><div class="ci-step"><strong>1. 실내 트림 / 좌석 구성</strong><span>먼저 적용 구성을 선택하세요.</span></div><div class="ci-trim-tabs"></div><div class="ci-step"><strong>2. 시트 컬러 선택</strong><span>코드를 누르면 아래 실제 이미지가 바뀝니다.</span></div><div class="ci-seat-buttons"></div><div class="ci-step ci-step-photo"><strong>3. 선택한 실내 확인</strong><span>시트가 크게 보이도록 모바일 화면을 우선 조정했습니다.</span></div><div class="ci-visual"><div class="ci-main-wrap"><div class="ci-main-frame"><img class="ci-sprite ci-main-photo" decoding="async"><span class="ci-image-tag ci-main-label"></span></div></div><div class="ci-visual-side"><div class="ci-detail-wrap"><div class="ci-detail-frame"><img class="ci-sprite ci-detail-photo" decoding="async"></div><span class="ci-detail-label"></span></div><div class="ci-selected" aria-live="polite"></div></div></div><div class="ci-note">※ 실내 이미지는 Volvo The ONE 자료의 해당 코드 이미지를 기준으로 표시합니다. 화면 색감은 실제 차량과 차이가 있을 수 있으므로 최종 선택은 실차 또는 공식 샘플로 확인해주세요.</div>';var note=sec.querySelector('.color-note');(note&&note.parentNode?note.parentNode:wrap).appendChild(box);tabs.addEventListener('click',function(e){var b=e.target.closest('.ci-tab');if(b)tab(b.dataset.mode)});box.addEventListener('click',function(e){var m=e.target.closest('.ci-model-btn');if(m){renderModel(m.dataset.key);return}var t=e.target.closest('.ci-trim-btn');if(t){renderGroup(Number(t.dataset.group));return}var s=e.target.closest('.ci-seat-btn');if(s){applyVariant(Number(s.dataset.variant))}});window.addEventListener('resize',function(){clearTimeout(resizeTimer);resizeTimer=setTimeout(positionAll,80)},{passive:true});renderModel('XC90');tab('exterior');window.openVolvoInteriorGuide=function(k){tab('interior');renderModel(D[k]?k:'XC90');sec.scrollIntoView({behavior:'smooth',block:'start'})}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();