/* Volvo color/interior guide — resilient material-card implementation, 2026-08-23.
   Deliberately uses no interior image assets, canvas, sprites or atlas crops.
*/
(function(){
'use strict';
if(window.__VOLVO_INTERIOR_MATERIAL_CARDS_20260823__) return;
window.__VOLVO_INTERIOR_MATERIAL_CARDS_20260823__=true;
/* Block retired/cached interior injectors from adding a second UI. */
window.__VOLVO_INTERIOR_STABLE_20260822__=true;
window.__volvoDetailEnhanceV4=true;
window.__ci20260822j=true;

var DATA={
  XC90:{label:'XC90',groups:[
    {label:'PLUS BRIGHT',sub:'B6 AWD PLUS BRIGHT',items:[
      {code:'RP00',en:'Charcoal',ko:'차콜',seat:'Nordico',deco:'Brown Ash'},
      {code:'RPE0',en:'Cardamom',ko:'카다멈',seat:'Nordico',deco:'Brown Ash'}
    ]},
    {label:'ULTRA BRIGHT / ULTRA DARK',sub:'B6 ULTRA BRIGHT · B6 ULTRA DARK · T8 ULTRA BRIGHT · T8 ULTRA DARK',items:[
      {code:'RCE0',en:'Cardamom',ko:'카다멈',seat:'Nappa Leather',deco:'Brown Ash'},
      {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Grey Ash'},
      {code:'UC00',en:'Blond',ko:'블론드',seat:'Nappa Leather',deco:'Grey Ash'}
    ]}
  ]},
  XC60:{label:'XC60',groups:[
    {label:'PLUS BRIGHT',sub:'B5 AWD PLUS BRIGHT',items:[
      {code:'RP00',en:'Charcoal',ko:'차콜',seat:'Nordico',deco:'Natural Driftwood'},
      {code:'RPE0',en:'Cardamom',ko:'카다멈',seat:'Nordico',deco:'Natural Driftwood'}
    ]},
    {label:'ULTRA BRIGHT / ULTRA DARK',sub:'B5 ULTRA BRIGHT · B5 ULTRA DARK · T8 ULTRA BRIGHT',items:[
      {code:'UC00',en:'Blond',ko:'블론드',seat:'Nappa Leather',deco:'White Driftwood'},
      {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Natural Driftwood'}
    ]}
  ]},
  S90:{label:'S90',groups:[
    {label:'PLUS BRIGHT',sub:'B5 PLUS BRIGHT',items:[
      {code:'RP00',en:'Charcoal',ko:'차콜',seat:'Nordico',deco:'Brown Ash'}
    ]},
    {label:'ULTRA BRIGHT / ULTRA DARK',sub:'B5 ULTRA BRIGHT · B5 ULTRA DARK · T8 ULTRA BRIGHT',items:[
      {code:'RCE0',en:'Cardamom',ko:'카다멈',seat:'Nappa Leather',deco:'Brown Ash'},
      {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Grey Ash'},
      {code:'UC00',en:'Blond',ko:'블론드',seat:'Nappa Leather',deco:'Grey Ash'}
    ]}
  ]},
  XC40:{label:'XC40',groups:[
    {label:'PLUS BRIGHT',sub:'B4 AWD PLUS BRIGHT',items:[
      {code:'RD00',en:'Charcoal',ko:'차콜',seat:'Leather',deco:'Driftwood'},
      {code:'UD70',en:'Blond',ko:'블론드',seat:'Leather',deco:'Driftwood'}
    ]},
    {label:'ULTRA BRIGHT / ULTRA DARK',sub:'B4 AWD ULTRA BRIGHT · B4 AWD ULTRA DARK',items:[
      {code:'UD70',en:'Blond',ko:'블론드',seat:'Leather',deco:'Driftwood'},
      {code:'RD00',en:'Charcoal',ko:'차콜',seat:'Leather',deco:'Driftwood'}
    ]}
  ]},
  V60CC:{label:'V60 Cross Country',groups:[
    {label:'ULTRA',sub:'B5 AWD ULTRA',items:[
      {code:'RC20',en:'Amber',ko:'앰버',seat:'Nappa Leather',deco:'Linear Lime'},
      {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Driftwood'},
      {code:'RC30',en:'Maroon Brown',ko:'마룬 브라운',seat:'Nappa Leather',deco:'Linear Lime'},
      {code:'UC00',en:'Blond',ko:'블론드',seat:'Nappa Leather',deco:'Driftwood'}
    ]}
  ]},
  EX30:{label:'EX30',groups:[
    {label:'CORE',sub:'CORE',items:[{code:'R310',en:'Indigo',ko:'인디고',seat:'Textile & Nordico',deco:'Denim'}]},
    {label:'ULTRA',sub:'ULTRA',items:[
      {code:'R540',en:'Breeze',ko:'브리즈',seat:'Pixel Knit & Nordico',deco:'Particle'},
      {code:'R220',en:'Mist',ko:'미스트',seat:'Tailored Wool Blend',deco:'Flax'}
    ]}
  ]},
  EX30CC:{label:'EX30 Cross Country',groups:[
    {label:'ULTRA',sub:'ULTRA',items:[{code:'R430',en:'Pine',ko:'파인',seat:'Wool Blend & Nordico',deco:'Flax'}]}
  ]},
  EX90:{label:'EX90',groups:[
    {label:'Twin Motor PLUS · 7인승',sub:'Twin Motor PLUS · 7-Seater',items:[
      {code:'RG10',en:'Cardamom',ko:'카다멈',seat:'Nordico',deco:'Brown Ash'},
      {code:'AG60',en:'Dawn',ko:'던',seat:'Nordico',deco:'Light Ash'},
      {code:'RG00',en:'Charcoal',ko:'차콜',seat:'Nordico',deco:'Brown Ash'}
    ]},
    {label:'Twin Motor ULTRA · 7인승',sub:'Twin Motor ULTRA · 7-Seater',items:[
      {code:'RC10',en:'Cardamom',ko:'카다멈',seat:'Nappa Leather',deco:'Brown Ash'},
      {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Light Ash'},
      {code:'AC60',en:'Dawn',ko:'던',seat:'Nappa Leather',deco:'Light Ash'}
    ]},
    {label:'Twin Motor ULTRA · 6인승',sub:'Twin Motor ULTRA · 6-Seater',items:[
      {code:'AC60',en:'Dawn',ko:'던',seat:'Nappa Leather',deco:'Light Ash'},
      {code:'RC10',en:'Cardamom',ko:'카다멈',seat:'Nappa Leather',deco:'Brown Ash'},
      {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Light Ash'}
    ]},
    {label:'Performance ULTRA · 7인승',sub:'Twin Motor Performance ULTRA · 7-Seater',items:[
      {code:'AC60',en:'Dawn',ko:'던',seat:'Nappa Leather',deco:'Light Ash'},
      {code:'RC10',en:'Cardamom',ko:'카다멈',seat:'Nappa Leather',deco:'Brown Ash'},
      {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Light Ash'}
    ]},
    {label:'Performance ULTRA · 6인승',sub:'Twin Motor Performance ULTRA · 6-Seater',items:[
      {code:'AC60',en:'Dawn',ko:'던',seat:'Nappa Leather',deco:'Light Ash'},
      {code:'RC10',en:'Cardamom',ko:'카다멈',seat:'Nappa Leather',deco:'Brown Ash'},
      {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Light Ash'}
    ]}
  ]},
  ES90:{label:'ES90',groups:[
    {label:'PLUS',sub:'Single Motor Extended Range PLUS · Twin Motor PLUS',items:[
      {code:'RD10',en:'Cardamom',ko:'카다멈',seat:'Nordico',deco:'Birch'},
      {code:'RD00',en:'Charcoal',ko:'차콜',seat:'Nordico',deco:'Birch'},
      {code:'AD60',en:'Dawn',ko:'던',seat:'Nordico',deco:'Light Ash'}
    ]},
    {label:'ULTRA',sub:'Single Motor Extended Range ULTRA · Twin Motor ULTRA · Performance ULTRA',items:[
      {code:'AC60',en:'Dawn',ko:'던',seat:'Nappa Leather',deco:'Light Ash'},
      {code:'RC10',en:'Cardamom',ko:'카다멈',seat:'Nappa Leather',deco:'Birch'},
      {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Birch'}
    ]}
  ]}
};

var COLOR={
  Charcoal:{dot:'#343634',paint:'linear-gradient(135deg,#181a1a 0%,#3a3d3b 42%,#212322 100%)'},
  Blond:{dot:'#d7d0c1',paint:'linear-gradient(135deg,#e8e1d3 0%,#cfc5b3 48%,#eee8dd 100%)'},
  Cardamom:{dot:'#9b8064',paint:'linear-gradient(135deg,#b79d81 0%,#84694f 52%,#c3aa8d 100%)'},
  Dawn:{dot:'#deddd8',paint:'linear-gradient(135deg,#f0efec 0%,#d3d1ca 50%,#e7e5df 100%)'},
  Amber:{dot:'#9a724c',paint:'linear-gradient(135deg,#b68a5d 0%,#805a38 55%,#c39b70 100%)'},
  'Maroon Brown':{dot:'#6a4540',paint:'linear-gradient(135deg,#845b54 0%,#54342f 54%,#966b63 100%)'},
  Indigo:{dot:'#48586b',paint:'linear-gradient(135deg,#64758a 0%,#394858 55%,#75879a 100%)'},
  Breeze:{dot:'#cfddd9',paint:'linear-gradient(135deg,#e5eeeb 0%,#bdcfca 52%,#eff4f2 100%)'},
  Mist:{dot:'#d7d2c8',paint:'linear-gradient(135deg,#e8e4dc 0%,#c6c0b5 55%,#f0ede7 100%)'},
  Pine:{dot:'#6d786c',paint:'linear-gradient(135deg,#829081 0%,#566254 52%,#93a092 100%)'}
};
var DECO={
  'Brown Ash':'linear-gradient(100deg,#4a3529 0%,#7a5942 20%,#a67d5c 38%,#6b4b39 58%,#9b7457 78%,#50392c 100%)',
  'Grey Ash':'linear-gradient(100deg,#555553 0%,#85847f 22%,#b2b0aa 42%,#777671 62%,#a09e98 82%,#5f5e5a 100%)',
  'Light Ash':'linear-gradient(100deg,#d4c8b6 0%,#efe7d9 22%,#c9bca9 45%,#e6dccb 70%,#c0b39e 100%)',
  'Natural Driftwood':'linear-gradient(100deg,#88705d 0%,#b49a7e 24%,#745c49 48%,#c3aa8c 72%,#806653 100%)',
  'White Driftwood':'linear-gradient(100deg,#d7d0c4 0%,#eee8df 25%,#c6beb2 48%,#f3eee6 72%,#cec6ba 100%)',
  'Driftwood':'linear-gradient(100deg,#776353 0%,#a58d75 24%,#665344 48%,#b39c83 72%,#745f4e 100%)',
  'Linear Lime':'linear-gradient(100deg,#917d61 0%,#b7a07c 22%,#756448 45%,#c0aa88 70%,#837052 100%)',
  'Denim':'linear-gradient(100deg,#35475b 0%,#60758b 24%,#2f4052 48%,#71869a 72%,#3b4d61 100%)',
  'Particle':'linear-gradient(135deg,#d8d9d5 0%,#b6bab7 50%,#e4e5e2 100%)',
  'Flax':'linear-gradient(100deg,#c9b999 0%,#e0d2b6 23%,#ad9d80 46%,#e8dcc4 72%,#b9a98b 100%)',
  'Birch':'linear-gradient(100deg,#c8b28f 0%,#e4d1ae 23%,#b49d7b 48%,#ecd9b7 72%,#c0a987 100%)'
};
var state={model:'XC90',group:0,item:0};
function esc(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function model(){return DATA[state.model]||DATA.XC90}
function group(){var m=model();return m.groups[state.group]||m.groups[0]}
function item(){var g=group();return g.items[state.item]||g.items[0]}
function color(v){return COLOR[v.en]||{dot:'#aaa',paint:'linear-gradient(135deg,#bbb,#888)'}}
function deco(v){return DECO[v.deco]||'linear-gradient(100deg,#7a695a,#a9917b,#66564a)'}
function selectedHTML(v){
  return '<div class="vci-selected-head"><span class="vci-dot" style="--dot:'+esc(color(v).dot)+'"></span><div><b>'+esc(v.code)+'</b><span>'+esc(v.en)+' · '+esc(v.ko)+'</span></div></div>'+ '<div class="vci-meta"><div><small>시트 소재</small><b>'+esc(v.seat)+'</b></div><div><small>인테리어 데코</small><b>'+esc(v.deco)+'</b></div><div><small>적용 구성</small><b>'+esc(group().sub)+'</b></div></div>'+ '<div class="vci-why"><strong>표시 방식</strong><p>사진 대신 실제 코드와 색상·소재 샘플을 기준으로 보여주므로 이미지 로딩 상태와 관계없이 비교할 수 있습니다.</p></div>';
}
function boardHTML(v){
  return '<div class="vci-material-board" aria-label="'+esc(v.code+' '+v.ko+' 실내 소재 조합')+'">'+ '<div class="vci-seat-sample" style="--seat-paint:'+esc(color(v).paint)+'"><div class="vci-sample-label"><small>SEAT COLOR</small><b>'+esc(v.ko)+'</b><span>'+esc(v.en)+' · '+esc(v.seat)+'</span></div></div>'+ '<div class="vci-deco-sample" style="--deco-paint:'+esc(deco(v))+'"><div class="vci-deco-label"><small>INTERIOR DECO</small><b>'+esc(v.deco)+'</b></div></div></div>';
}
function applyItem(idx){
  var box=document.querySelector('#colors .vci-interior');if(!box)return;
  var g=group();state.item=Math.max(0,Math.min(Number(idx)||0,g.items.length-1));var v=item();
  box.querySelectorAll('.vci-seat-btn').forEach(function(b){var on=Number(b.dataset.item)===state.item;b.classList.toggle('active',on);b.setAttribute('aria-pressed',on?'true':'false')});
  var title=box.querySelector('.vci-preview-title');if(title)title.textContent='3. 실내 조합 확인 · '+v.code+' '+v.ko;
  var board=box.querySelector('.vci-board-slot');if(board)board.innerHTML=boardHTML(v);
  var selected=box.querySelector('.vci-selected');if(selected)selected.innerHTML=selectedHTML(v);
  box.dataset.currentCode=v.code;box.dataset.renderMethod='material-card';
}
function renderGroup(idx){
  var box=document.querySelector('#colors .vci-interior'),m=model();if(!box)return;
  state.group=Math.max(0,Math.min(Number(idx)||0,m.groups.length-1));state.item=0;
  box.querySelectorAll('.vci-group-btn').forEach(function(b){b.classList.toggle('active',Number(b.dataset.group)===state.group)});
  var g=group(),seat=box.querySelector('.vci-seat-buttons');
  seat.innerHTML=g.items.map(function(v,i){return '<button type="button" class="vci-seat-btn" data-item="'+i+'" aria-pressed="false"><span class="vci-dot" style="--dot:'+esc(color(v).dot)+'"></span><span><b>'+esc(v.code)+'</b><small>'+esc(v.ko)+'</small></span></button>'}).join('');
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
  sec.querySelectorAll('.ci-tabs,.ci-interior,.vci-mode-tabs,.vci-interior').forEach(function(n){n.remove()});
  sec.classList.remove('ci-show-interior','vci-interior-mode');
  var h2=head.querySelector('h2'),p=head.querySelector('p');
  if(h2)h2.textContent='컬러 · 인테리어 가이드';
  if(p)p.textContent='외장 컬러와 실내 시트·데코 조합을 분리해, 모델과 트림별 선택 가능 구성을 빠르게 확인할 수 있습니다.';
  document.querySelectorAll('a[href="#colors"]').forEach(function(a){a.textContent='컬러·인테리어'});
  var tabs=document.createElement('div');tabs.className='vci-mode-tabs';tabs.setAttribute('role','tablist');tabs.innerHTML='<button type="button" class="vci-mode-btn active" data-mode="exterior" role="tab" aria-selected="true">외장 컬러</button><button type="button" class="vci-mode-btn" data-mode="interior" role="tab" aria-selected="false">실내 트림 · 시트</button>';head.insertAdjacentElement('afterend',tabs);
  var order=['XC90','XC60','S90','XC40','V60CC','EX30','EX30CC','EX90','ES90'];
  var box=document.createElement('section');box.className='vci-interior';box.hidden=true;
  box.innerHTML='<div class="vci-model-tabs">'+order.map(function(k){return '<button type="button" class="vci-model-btn" data-model="'+k+'">'+esc(DATA[k].label)+'</button>'}).join('')+'</div>'+ '<div class="vci-step"><b>1. 실내 트림 / 좌석 구성</b><span>적용할 트림과 좌석 구성을 먼저 선택하세요.</span></div><div class="vci-group-tabs"></div>'+ '<div class="vci-step"><b>2. 시트 컬러 선택</b><span>색상 코드를 누르면 아래 소재 보드가 즉시 바뀝니다.</span></div><div class="vci-seat-buttons"></div>'+ '<div class="vci-step vci-preview-step"><b class="vci-preview-title">3. 실내 조합 확인</b><span class="vci-method">이미지 없는 안정형 표시</span></div>'+ '<div class="vci-material-layout"><div class="vci-board-slot"></div><div class="vci-selected" aria-live="polite"></div></div>'+ '<p class="vci-note">※ 이 화면은 사진 대신 색상 코드·시트 소재·인테리어 데코 조합을 명확히 비교하기 위한 가이드입니다. 실제 색감과 질감은 전시장 실차 또는 공식 샘플로 최종 확인해주세요.</p>';
  tabs.insertAdjacentElement('afterend',box);
  sec.addEventListener('click',function(e){
    var modeBtn=e.target.closest('.vci-mode-btn');if(modeBtn){setMode(modeBtn.dataset.mode);return}
    var modelBtn=e.target.closest('.vci-model-btn');if(modelBtn){renderModel(modelBtn.dataset.model);return}
    var groupBtn=e.target.closest('.vci-group-btn');if(groupBtn){renderGroup(groupBtn.dataset.group);return}
    var seatBtn=e.target.closest('.vci-seat-btn');if(seatBtn){applyItem(seatBtn.dataset.item);return}
  });
  renderModel('XC90');setMode('exterior');
  document.documentElement.setAttribute('data-interior-ui','material-cards-20260823');
}
window.openVolvoInteriorGuide=function(key){
  if(!document.querySelector('#colors .vci-interior'))init();
  setMode('interior');renderModel(key||'XC90');
  var sec=document.getElementById('colors');if(sec&&typeof sec.scrollIntoView==='function')sec.scrollIntoView({behavior:'smooth',block:'start'});
};
window.getVolvoInteriorState=function(){var v=item();return {model:state.model,group:state.group,item:state.item,code:v.code,groupLabel:group().label,color:v.en,colorKo:v.ko,seat:v.seat,deco:v.deco,method:'material-card'}};
window.__VOLVO_INTERIOR_DATA__=DATA;
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
