/* Volvo color/interior guide — consolidated stable implementation, 2026-08-22.
   One source of truth for model/trim/seat-code -> official interior image mapping.
   Uses high-resolution atlas rows rendered by canvas to avoid CSS sprite drift/pixelation.
*/
(function(){
'use strict';
if(window.__VOLVO_INTERIOR_STABLE_20260822__) return;
window.__VOLVO_INTERIOR_STABLE_20260822__ = true;
/* Prevent retired interior injectors from wrapping model-modal functions if stale files are cached. */
window.__volvoDetailEnhanceV4 = true;
window.__ci20260822j = true;

var DATA={
  XC90:{label:'XC90',era:'my26',groups:[
    {label:'PLUS BRIGHT',sub:'B6 AWD PLUS BRIGHT',items:[
      {code:'RP00',en:'Charcoal',ko:'차콜',seat:'Nordico',deco:'Brown Ash',row:4},
      {code:'RPE0',en:'Cardamom',ko:'카다멈',seat:'Nordico',deco:'Brown Ash',row:5}
    ]},
    {label:'ULTRA BRIGHT / ULTRA DARK',sub:'B6 ULTRA BRIGHT · B6 ULTRA DARK · T8 ULTRA BRIGHT · T8 ULTRA DARK',items:[
      {code:'RCE0',en:'Cardamom',ko:'카다멈',seat:'Nappa Leather',deco:'Brown Ash',row:6},
      {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Grey Ash',row:7},
      {code:'UC00',en:'Blond',ko:'블론드',seat:'Nappa Leather',deco:'Grey Ash',row:8}
    ]}
  ]},
  XC60:{label:'XC60',era:'my26',groups:[
    {label:'PLUS BRIGHT',sub:'B5 AWD PLUS BRIGHT',items:[
      {code:'RP00',en:'Charcoal',ko:'차콜',seat:'Nordico',deco:'Natural Driftwood',row:9},
      {code:'RPE0',en:'Cardamom',ko:'카다멈',seat:'Nordico',deco:'Natural Driftwood',row:10}
    ]},
    {label:'ULTRA BRIGHT / ULTRA DARK',sub:'B5 ULTRA BRIGHT · B5 ULTRA DARK · T8 ULTRA BRIGHT',items:[
      {code:'UC00',en:'Blond',ko:'블론드',seat:'Nappa Leather',deco:'White Driftwood',row:11},
      {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Natural Driftwood',row:12}
    ]}
  ]},
  S90:{label:'S90',era:'my26',groups:[
    {label:'PLUS BRIGHT',sub:'B5 PLUS BRIGHT',items:[
      {code:'RP00',en:'Charcoal',ko:'차콜',seat:'Nordico',deco:'Brown Ash',row:13}
    ]},
    {label:'ULTRA BRIGHT / ULTRA DARK',sub:'B5 ULTRA BRIGHT · B5 ULTRA DARK · T8 ULTRA BRIGHT',items:[
      {code:'RCE0',en:'Cardamom',ko:'카다멈',seat:'Nappa Leather',deco:'Brown Ash',row:14},
      {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Grey Ash',row:15},
      {code:'UC00',en:'Blond',ko:'블론드',seat:'Nappa Leather',deco:'Grey Ash',row:16}
    ]}
  ]},
  XC40:{label:'XC40',era:'my26',groups:[
    {label:'PLUS BRIGHT',sub:'B4 AWD PLUS BRIGHT',items:[
      {code:'RD00',en:'Charcoal',ko:'차콜',seat:'Leather',deco:'Driftwood',row:17},
      {code:'UD70',en:'Blond',ko:'블론드',seat:'Leather',deco:'Driftwood',row:18}
    ]},
    {label:'ULTRA BRIGHT / ULTRA DARK',sub:'B4 AWD ULTRA BRIGHT · B4 AWD ULTRA DARK',items:[
      {code:'UD70',en:'Blond',ko:'블론드',seat:'Leather',deco:'Driftwood',row:19},
      {code:'RD00',en:'Charcoal',ko:'차콜',seat:'Leather',deco:'Driftwood',row:20}
    ]}
  ]},
  V60CC:{label:'V60 Cross Country',era:'my26',groups:[
    {label:'ULTRA',sub:'B5 AWD ULTRA',items:[
      {code:'RC20',en:'Amber',ko:'앰버',seat:'Nappa Leather',deco:'Linear Lime',row:21},
      {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Driftwood',row:22},
      {code:'RC30',en:'Maroon Brown',ko:'마룬 브라운',seat:'Nappa Leather',deco:'Linear Lime',row:23},
      {code:'UC00',en:'Blond',ko:'블론드',seat:'Nappa Leather',deco:'Driftwood',row:24}
    ]}
  ]},
  EX30:{label:'EX30',era:'my26',groups:[
    {label:'CORE',sub:'CORE',items:[{code:'R310',en:'Indigo',ko:'인디고',seat:'Textile & Nordico',deco:'Denim',row:0}]},
    {label:'ULTRA',sub:'ULTRA',items:[
      {code:'R540',en:'Breeze',ko:'브리즈',seat:'Pixel Knit & Nordico',deco:'Particle',row:1},
      {code:'R220',en:'Mist',ko:'미스트',seat:'Tailored Wool Blend',deco:'Flax',row:2}
    ]}
  ]},
  EX30CC:{label:'EX30 Cross Country',era:'my26',groups:[
    {label:'ULTRA',sub:'ULTRA',items:[{code:'R430',en:'Pine',ko:'파인',seat:'Wool Blend & Nordico',deco:'Flax',row:3}]}
  ]},
  EX90:{label:'EX90',era:'my27',groups:[
    {label:'Twin Motor PLUS · 7인승',sub:'Twin Motor PLUS · 7-Seater',items:[
      {code:'RG10',en:'Cardamom',ko:'카다멈',seat:'Nordico',deco:'Brown Ash',row:0},
      {code:'AG60',en:'Dawn',ko:'던',seat:'Nordico',deco:'Light Ash',row:1},
      {code:'RG00',en:'Charcoal',ko:'차콜',seat:'Nordico',deco:'Brown Ash',row:2}
    ]},
    {label:'Twin Motor ULTRA · 7인승',sub:'Twin Motor ULTRA · 7-Seater',items:[
      {code:'RC10',en:'Cardamom',ko:'카다멈',seat:'Nappa Leather',deco:'Brown Ash',row:3},
      {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Light Ash',row:4},
      {code:'AC60',en:'Dawn',ko:'던',seat:'Nappa Leather',deco:'Light Ash',row:5}
    ]},
    {label:'Twin Motor ULTRA · 6인승',sub:'Twin Motor ULTRA · 6-Seater',items:[
      {code:'AC60',en:'Dawn',ko:'던',seat:'Nappa Leather',deco:'Light Ash',row:6},
      {code:'RC10',en:'Cardamom',ko:'카다멈',seat:'Nappa Leather',deco:'Brown Ash',row:7},
      {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Light Ash',row:8}
    ]},
    {label:'Performance ULTRA · 7인승',sub:'Twin Motor Performance ULTRA · 7-Seater',items:[
      {code:'AC60',en:'Dawn',ko:'던',seat:'Nappa Leather',deco:'Light Ash',row:9},
      {code:'RC10',en:'Cardamom',ko:'카다멈',seat:'Nappa Leather',deco:'Brown Ash',row:10},
      {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Light Ash',row:11}
    ]},
    {label:'Performance ULTRA · 6인승',sub:'Twin Motor Performance ULTRA · 6-Seater',items:[
      {code:'AC60',en:'Dawn',ko:'던',seat:'Nappa Leather',deco:'Light Ash',row:12},
      {code:'RC10',en:'Cardamom',ko:'카다멈',seat:'Nappa Leather',deco:'Brown Ash',row:13},
      {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Light Ash',row:14}
    ]}
  ]},
  ES90:{label:'ES90',era:'my27',groups:[
    {label:'PLUS',sub:'Single Motor Extended Range PLUS · Twin Motor PLUS',items:[
      {code:'RD10',en:'Cardamom',ko:'카다멈',seat:'Nordico',deco:'Birch',row:15},
      {code:'RD00',en:'Charcoal',ko:'차콜',seat:'Nordico',deco:'Birch',row:16},
      {code:'AD60',en:'Dawn',ko:'던',seat:'Nordico',deco:'Light Ash',row:17}
    ]},
    {label:'ULTRA',sub:'Single Motor Extended Range ULTRA · Twin Motor ULTRA · Performance ULTRA',items:[
      {code:'AC60',en:'Dawn',ko:'던',seat:'Nappa Leather',deco:'Light Ash',row:18},
      {code:'RC10',en:'Cardamom',ko:'카다멈',seat:'Nappa Leather',deco:'Birch',row:19},
      {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Birch',row:20}
    ]}
  ]}
};
var ATLAS={
  my26:{src:'assets/interiors/stable/my26.webp?v=20260822stable2',width:1120,rowH:468},
  my27:{src:'assets/interiors/stable/my27.webp?v=20260822stable2',width:1120,rowH:468}
};
var DOT={Charcoal:'#323331',Blond:'#d6d0c2',Cardamom:'#9a8064',Dawn:'#deddd8',Amber:'#9a724c','Maroon Brown':'#6a4540',Indigo:'#48586b',Breeze:'#cfddd9',Mist:'#d7d2c8',Pine:'#6d786c'};
var MAIN_CROP={x:20,y:80,w:744,h:388};
var DETAIL_CROP={x:772,y:80,w:332,h:388};
var state={model:'XC90',group:0,item:0};
var imageCache={};
var renderSerial=0;

function esc(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function model(){return DATA[state.model]||DATA.XC90}
function group(){var m=model();return m.groups[state.group]||m.groups[0]}
function item(){var g=group();return g.items[state.item]||g.items[0]}
function atlasFor(era){
  if(imageCache[era]) return imageCache[era];
  imageCache[era]=new Promise(function(resolve,reject){
    var img=new Image();
    img.decoding='async';
    img.onload=function(){resolve(img)};
    img.onerror=function(){delete imageCache[era];reject(new Error('interior atlas load failed: '+era))};
    img.src=ATLAS[era].src;
  });
  return imageCache[era];
}
function draw(canvas,img,row,crop){
  if(!canvas||!img) return;
  canvas.width=crop.w*2; canvas.height=crop.h*2;
  var ctx=canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.imageSmoothingEnabled=true; ctx.imageSmoothingQuality='high';
  ctx.drawImage(img,crop.x,row*ATLAS[model().era].rowH+crop.y,crop.w,crop.h,0,0,canvas.width,canvas.height);
  canvas.dataset.renderOk='1';
}
function selectedHTML(v){
  return '<div class="vci-selected-head"><span class="vci-dot" style="--dot:'+esc(DOT[v.en]||'#bbb')+'"></span><div><b>'+esc(v.code)+'</b><span>'+esc(v.en)+' · '+esc(v.ko)+'</span></div></div>'+ '<div class="vci-meta"><div><small>시트 소재</small><b>'+esc(v.seat)+'</b></div><div><small>인테리어 데코</small><b>'+esc(v.deco)+'</b></div><div><small>적용 구성</small><b>'+esc(group().sub)+'</b></div></div>';
}
function applyItem(idx){
  var box=document.querySelector('#colors .vci-interior'); if(!box)return;
  var g=group(); state.item=Math.max(0,Math.min(Number(idx)||0,g.items.length-1)); var v=item();
  box.querySelectorAll('.vci-seat-btn').forEach(function(b){var on=Number(b.dataset.item)===state.item;b.classList.toggle('active',on);b.setAttribute('aria-pressed',on?'true':'false')});
  var title=box.querySelector('.vci-photo-title'); if(title)title.textContent='3. 선택한 실내 확인 · '+v.code+' '+v.ko;
  var selected=box.querySelector('.vci-selected'); if(selected)selected.innerHTML=selectedHTML(v);
  var main=box.querySelector('.vci-main-canvas'),detail=box.querySelector('.vci-detail-canvas');
  [main,detail].forEach(function(c){if(c){c.dataset.renderOk='0';c.dataset.code=v.code;c.dataset.row=String(v.row)}});
  var status=box.querySelector('.vci-photo-status'); if(status){status.textContent='이미지 불러오는 중…';status.classList.remove('error')}
  var serial=++renderSerial;
  atlasFor(model().era).then(function(img){
    if(serial!==renderSerial)return;
    draw(main,img,v.row,MAIN_CROP); draw(detail,img,v.row,DETAIL_CROP);
    if(status)status.textContent='Volvo The ONE 공식 이미지 기준';
    box.dataset.currentCode=v.code; box.dataset.currentRow=String(v.row); box.dataset.currentEra=model().era;
  }).catch(function(){if(serial!==renderSerial)return;if(status){status.textContent='이미지를 불러오지 못했습니다. 새로고침 후 다시 확인해주세요.';status.classList.add('error')}});
}
function renderGroup(idx){
  var box=document.querySelector('#colors .vci-interior'),m=model();if(!box)return;
  state.group=Math.max(0,Math.min(Number(idx)||0,m.groups.length-1));state.item=0;
  box.querySelectorAll('.vci-group-btn').forEach(function(b){b.classList.toggle('active',Number(b.dataset.group)===state.group)});
  var g=group(),seat=box.querySelector('.vci-seat-buttons');
  seat.innerHTML=g.items.map(function(v,i){return '<button type="button" class="vci-seat-btn" data-item="'+i+'" aria-pressed="false"><span class="vci-dot" style="--dot:'+esc(DOT[v.en]||'#bbb')+'"></span><span><b>'+esc(v.code)+'</b><small>'+esc(v.ko)+'</small></span></button>'}).join('');
  applyItem(0);
}
function renderModel(key){
  var box=document.querySelector('#colors .vci-interior');if(!box)return;
  state.model=DATA[key]?key:'XC90';state.group=0;state.item=0;
  box.querySelectorAll('.vci-model-btn').forEach(function(b){b.classList.toggle('active',b.dataset.model===state.model)});
  var tabs=box.querySelector('.vci-group-tabs'),m=model();
  tabs.innerHTML=m.groups.map(function(g,i){return '<button type="button" class="vci-group-btn" data-group="'+i+'">'+esc(g.label)+'</button>'}).join('');
  renderGroup(0);
}
function setMode(mode){
  var sec=document.getElementById('colors');if(!sec)return;
  var interior=sec.querySelector('.vci-interior');
  sec.classList.toggle('vci-interior-mode',mode==='interior');
  sec.querySelectorAll('.vci-mode-btn').forEach(function(b){var on=b.dataset.mode===mode;b.classList.toggle('active',on);b.setAttribute('aria-selected',on?'true':'false')});
  if(interior)interior.hidden=mode!=='interior';
  if(mode==='interior')applyItem(state.item);
}
function init(){
  var sec=document.getElementById('colors'),wrap=sec&&sec.querySelector('.color-wrap'),head=sec&&sec.querySelector('.color-head');
  if(!sec||!wrap||!head)return;
  sec.querySelectorAll('.ci-tabs,.ci-interior').forEach(function(n){n.remove()});
  sec.classList.remove('ci-show-interior');
  var h2=head.querySelector('h2'),p=head.querySelector('p');
  if(h2)h2.textContent='컬러 · 인테리어 가이드';
  if(p)p.textContent='외장 컬러와 실제 실내 트림·시트 조합을 분리해, 고객이 필요한 정보만 빠르게 확인할 수 있습니다.';
  document.querySelectorAll('a[href="#colors"]').forEach(function(a){a.textContent='컬러·인테리어'});
  var oldTabs=sec.querySelector('.vci-mode-tabs');if(oldTabs)oldTabs.remove();
  var oldBox=sec.querySelector('.vci-interior');if(oldBox)oldBox.remove();
  var tabs=document.createElement('div');tabs.className='vci-mode-tabs';tabs.setAttribute('role','tablist');tabs.innerHTML='<button type="button" class="vci-mode-btn active" data-mode="exterior" role="tab" aria-selected="true">외장 컬러</button><button type="button" class="vci-mode-btn" data-mode="interior" role="tab" aria-selected="false">실내 트림 · 시트</button>';head.insertAdjacentElement('afterend',tabs);
  var order=['XC90','XC60','S90','XC40','V60CC','EX30','EX30CC','EX90','ES90'];
  var box=document.createElement('section');box.className='vci-interior';box.hidden=true;
  box.innerHTML='<div class="vci-model-tabs">'+order.map(function(k){return '<button type="button" class="vci-model-btn" data-model="'+k+'">'+esc(DATA[k].label)+'</button>'}).join('')+'</div>'+ '<div class="vci-step"><b>1. 실내 트림 / 좌석 구성</b><span>적용할 트림과 좌석 구성을 먼저 선택하세요.</span></div><div class="vci-group-tabs"></div>'+ '<div class="vci-step"><b>2. 시트 컬러 선택</b><span>색상 코드를 누르면 아래 실제 이미지가 함께 바뀝니다.</span></div><div class="vci-seat-buttons"></div>'+ '<div class="vci-step vci-photo-step"><b class="vci-photo-title">3. 선택한 실내 확인</b><span class="vci-photo-status">Volvo The ONE 공식 이미지 기준</span></div>'+ '<div class="vci-visual"><figure class="vci-main-card"><canvas class="vci-main-canvas" aria-label="선택한 실내 전체 모습"></canvas><figcaption>실내 전체 · 시트 컬러 확인</figcaption></figure><aside class="vci-side"><figure class="vci-detail-card"><canvas class="vci-detail-canvas" aria-label="선택한 인테리어 데코 및 소재 디테일"></canvas><figcaption>데코 · 소재 디테일</figcaption></figure><div class="vci-selected" aria-live="polite"></div></aside></div>'+ '<p class="vci-note">※ 실제 차량의 색감은 조명·화면 환경에 따라 다르게 보일 수 있습니다. 최종 색상은 전시장 실차 또는 공식 자료로 확인해주세요.</p>';
  tabs.insertAdjacentElement('afterend',box);
  sec.addEventListener('click',function(e){
    var modeBtn=e.target.closest('.vci-mode-btn');if(modeBtn){setMode(modeBtn.dataset.mode);return}
    var modelBtn=e.target.closest('.vci-model-btn');if(modelBtn){renderModel(modelBtn.dataset.model);return}
    var groupBtn=e.target.closest('.vci-group-btn');if(groupBtn){renderGroup(groupBtn.dataset.group);return}
    var seatBtn=e.target.closest('.vci-seat-btn');if(seatBtn){applyItem(seatBtn.dataset.item);return}
  });
  renderModel('XC90');setMode('exterior');
  document.documentElement.setAttribute('data-interior-stable','20260822-1');
}
window.openVolvoInteriorGuide=function(key){
  if(!document.querySelector('#colors .vci-interior'))init();
  setMode('interior');renderModel(key||'XC90');
  var sec=document.getElementById('colors');if(sec&&typeof sec.scrollIntoView==='function')sec.scrollIntoView({behavior:'smooth',block:'start'});
};
window.getVolvoInteriorState=function(){var v=item();return {model:state.model,group:state.group,item:state.item,code:v.code,row:v.row,era:model().era,groupLabel:group().label,color:v.en,colorKo:v.ko}};
window.__VOLVO_INTERIOR_DATA__=DATA;
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
