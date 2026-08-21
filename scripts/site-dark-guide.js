(function(){
const darkGuideData={
  XC40:{
    title:'XC40',trim:'B4 AWD ULTRA DARK',price:'5,520만 원',
    image:'https://www.volvocars.com/images/cs/v3/assets/blt0feaa88e629251fc/blt1187c111a71ae018/6849135314f6c3412c4cf5ee/Exterior-bento-front-4x5-XC40-mhev.jpg?branch=prod_alias&format=auto&iar=0&quality=85&w=1920',
    parts:['전면 그릴·크롬 계열 외장 디테일','윈도우 주변 외장 몰딩','전·후면 하단 외장 디테일','Dark 전용 20인치 5-더블 스포크 블랙 다이아몬드 컷 휠'],
    note:'XC40 Dark는 기존 크롬 디테일을 블랙 하이글로시로 바꾸고, Dark 전용 20인치 휠을 적용하는 것이 핵심입니다.',
    markers:[['1',25,43,31,15],['2',48,27,27,22],['3',24,61,35,14],['4',61,58,20,29]]
  },
  XC60:{
    title:'XC60',trim:'B5 AWD ULTRA DARK',price:'7,330만 원',
    image:'https://www.volvocars.com/images/cs/v3/assets/blt0feaa88e629251fc/blt3be30db3bfc830c5/67924bd1e0c4532ac4dce3ac/Bento_1-4x5.jpg?branch=prod_alias&format=auto&iar=0&quality=85&w=1920',
    parts:['전면 그릴 주변 및 전면부 외장 액센트','윈도우 주변 외장 몰딩·액센트','전·후면 하단 범퍼 및 사이드 외장 디테일','Ultra 20인치 휠 구성'],
    note:'XC60은 Bright의 바디 컬러 계열 액센트와 달리 Dark에서 고광택 블랙 마감이 적용됩니다. 20인치 휠은 Ultra 트림 구성입니다.',
    markers:[['1',24,44,32,15],['2',49,27,26,22],['3',23,62,37,14],['4',62,58,20,29]]
  },
  XC90:{
    title:'XC90',trim:'B6 / T8 AWD ULTRA DARK',price:'Bright와 동일',
    image:'https://www.volvocars.com/images/cs/v3/assets/blt0feaa88e629251fc/bltddba35a6985cb109/6878ec17715092ea4b75863c/Exterior-bento-front-4x5-XC90-PHEV.jpg?branch=prod_alias&format=auto&iar=0&quality=85&w=1920',
    parts:['전면 그릴 주변 및 전면부 고광택 블랙 액센트','윈도우 주변·측면 외장 액센트','전·후면 하단 범퍼 및 사이드 외장 디테일','휠은 Bright·Dark 테마 모두와 조합되는 Ultra 휠 구성'],
    note:'XC90 Dark는 주요 외장 액센트를 고광택 블랙으로 바꿔 스포티한 인상을 주는 테마입니다. 휠은 Dark 전용으로 구분되는 방식이 아닙니다.',
    markers:[['1',23,43,32,16],['2',49,27,27,22],['3',23,62,38,14],['4',62,58,20,29]]
  }
};

function markerHTML(m){return '<span class="dg-hotspot" style="left:'+m[1]+'%;top:'+m[2]+'%;width:'+m[3]+'%;height:'+m[4]+'%"><b>'+m[0]+'</b></span>'}
function darkGuidePanel(key){
  const d=darkGuideData[key];
  return '<div class="dg-tabs">'+Object.keys(darkGuideData).map(k=>'<button class="'+(k===key?'active':'')+'" onclick="renderDarkGuide(\''+k+'\')">'+darkGuideData[k].title+'</button>').join('')+'</div>'+
    '<div class="dg-panel">'+
      '<div class="dg-photo-wrap"><div class="dg-photo"><img src="'+d.image+'" alt="'+d.title+' Dark 적용 부위 안내">'+d.markers.map(markerHTML).join('')+'</div><small>※ 빨간 원은 Dark 적용 위치를 이해하기 위한 대표 부위 표시입니다.</small></div>'+
      '<div class="dg-copy"><span class="dg-pill">DARK THEME</span><h3>'+d.title+' <small>'+d.trim+'</small></h3><div class="dg-price">'+d.price+'</div><ol>'+d.parts.map((x,i)=>'<li><b>'+(i+1)+'</b><span>'+x+'</span></li>').join('')+'</ol><p>'+d.note+'</p></div>'+
    '</div>'+
    '<div class="dg-note"><b>Bright ↔ Dark의 핵심</b><span>주행 성능이나 안전사양 차이가 아니라 외장 액센트의 분위기 차이입니다. 실제 적용 범위와 휠 디자인은 차종별로 다르므로 위 모델별 안내를 확인하세요.</span></div>';
}
window.renderDarkGuide=function(key){const body=document.getElementById('mbody');if(body)body.innerHTML=darkGuidePanel(key)};
window.openDarkGuide=function(key){key=key||'XC40';openM('VOLVO DARK THEME','Dark 테마, 어디가 달라질까요?','사진의 빨간 표시로 대표 적용 부위를 확인하세요.',darkGuidePanel(key))};

function installDarkGuide(){
  if(document.getElementById('dark-guide'))return;
  const style=document.createElement('style');
  style.id='dark-guide-style';
  style.textContent=`
  .dark-guide{max-width:1180px;margin:26px auto 34px;padding:0 22px}.dg-banner{position:relative;overflow:hidden;border-radius:22px;background:linear-gradient(120deg,#070a0c,#182129);color:#fff;padding:28px 30px;display:grid;grid-template-columns:1fr auto;gap:22px;align-items:center;box-shadow:0 16px 40px rgba(0,0,0,.16)}.dg-banner:after{content:'DARK';position:absolute;right:-8px;top:-34px;font-size:118px;font-weight:900;color:rgba(255,255,255,.035);letter-spacing:-7px}.dg-banner .ey{color:#aebbc3}.dg-banner h2{margin:5px 0 8px;font-size:28px;letter-spacing:-1.2px}.dg-banner p{margin:0;max-width:690px;color:#c8d0d5;font-size:14px;line-height:1.65}.dg-banner button{position:relative;z-index:2;border:1px solid rgba(255,255,255,.35);background:#fff;color:#07131b;border-radius:999px;padding:13px 20px;font-weight:800;cursor:pointer}.dg-model-chips{display:flex;gap:7px;margin-top:14px;flex-wrap:wrap}.dg-model-chips span{border:1px solid rgba(255,255,255,.18);border-radius:999px;padding:5px 9px;font-size:11px;color:#e7ecef}.dg-tabs{display:flex;gap:7px;margin-bottom:13px}.dg-tabs button{flex:1;border:1px solid #d8dee2;background:#fff;border-radius:10px;padding:10px;font-weight:800;color:#53636d;cursor:pointer}.dg-tabs button.active{background:#101820;color:#fff;border-color:#101820}.dg-panel{display:grid;grid-template-columns:minmax(0,1.18fr) minmax(270px,.82fr);gap:18px;align-items:stretch}.dg-photo-wrap{background:#f3f4f4;border:1px solid #e1e5e7;border-radius:15px;padding:10px}.dg-photo{position:relative;overflow:hidden;border-radius:11px;background:#e9e7e2;min-height:330px}.dg-photo img{display:block;width:100%;height:100%;min-height:330px;object-fit:cover;object-position:center 58%}.dg-photo-wrap>small{display:block;margin:8px 2px 1px;color:#667780;font-size:10px}.dg-hotspot{position:absolute;border:3px solid #ed2437;border-radius:999px;box-shadow:0 0 0 2px rgba(255,255,255,.8),0 2px 7px rgba(0,0,0,.25);pointer-events:none}.dg-hotspot b{position:absolute;left:-9px;top:-11px;width:22px;height:22px;border-radius:50%;background:#ed2437;color:#fff;display:grid;place-items:center;font-size:11px;border:2px solid #fff}.dg-copy{border-radius:15px;background:#101820;color:#fff;padding:20px}.dg-pill{display:inline-block;font-size:10px;font-weight:900;letter-spacing:.8px;background:#272f35;border-radius:999px;padding:5px 8px;color:#fff}.dg-copy h3{font-size:24px;margin:9px 0 3px}.dg-copy h3 small{display:block;font-size:11px;color:#b9c3c8;margin-top:5px;font-weight:700}.dg-price{font-size:17px;font-weight:900;margin:9px 0 14px}.dg-copy ol{list-style:none;margin:0;padding:0;display:grid;gap:8px}.dg-copy li{display:flex;gap:9px;align-items:flex-start;font-size:12px;line-height:1.45;color:#e2e8eb}.dg-copy li b{flex:0 0 21px;width:21px;height:21px;border-radius:50%;display:grid;place-items:center;background:#ed2437;color:#fff;font-size:10px}.dg-copy p{margin:15px 0 0;padding-top:13px;border-top:1px solid rgba(255,255,255,.14);font-size:11px;line-height:1.6;color:#bfc9ce}.dg-note{margin-top:13px;border:1px solid #e2e6e8;border-radius:12px;padding:12px 14px;background:#fafbfb;display:flex;gap:10px;font-size:11px;line-height:1.55;color:#50616b}.dg-note b{white-space:nowrap;color:#182630}.nav .dark-nav{font-weight:900;color:#1f3a4a}
  @media(max-width:700px){.dark-guide{padding:0 14px;margin:18px auto 26px}.dg-banner{grid-template-columns:1fr;padding:22px 19px;border-radius:18px}.dg-banner:after{font-size:76px;top:-16px}.dg-banner h2{font-size:22px}.dg-banner p{font-size:12px}.dg-banner button{width:100%;padding:12px}.dg-panel{grid-template-columns:1fr}.dg-photo{min-height:245px}.dg-photo img{min-height:245px}.dg-copy{padding:16px}.dg-copy h3{font-size:21px}.dg-note{display:block}.dg-note b{display:block;margin-bottom:4px}.dg-hotspot{border-width:2px}.dg-tabs button{padding:9px 5px;font-size:12px}}
  `;
  document.head.appendChild(style);
  const sec=document.createElement('section');
  sec.className='dark-guide';sec.id='dark-guide';
  sec.innerHTML='<div class="dg-banner"><div><div class="ey">BRIGHT vs DARK</div><h2>Dark 테마, 사진으로 바로 확인</h2><p>XC40 · XC60 · XC90에서 크롬/바디 컬러 계열 외장 포인트가 어디에서 고광택 블랙으로 바뀌는지 빨간 표시로 확인할 수 있습니다.</p><div class="dg-model-chips"><span>XC40 ULTRA DARK</span><span>XC60 B5 ULTRA DARK</span><span>XC90 ULTRA DARK</span></div></div><button onclick="openDarkGuide(\'XC40\')">Dark 적용 부위 보기 →</button></div>';
  const tools=document.getElementById('tools');
  if(tools&&tools.parentNode)tools.parentNode.insertBefore(sec,tools);else document.body.appendChild(sec);
  const nav=document.querySelector('.nav');
  if(nav&&!nav.querySelector('.dark-nav')){const a=document.createElement('a');a.href='#dark-guide';a.className='dark-nav';a.textContent='Dark 테마';nav.insertBefore(a,nav.querySelector('a[href="#colors"]')||null)}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',installDarkGuide);else installDarkGuide();
})();