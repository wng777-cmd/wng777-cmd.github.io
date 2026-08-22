/* XC90 high-resolution interior viewer. Replaces the low-resolution atlas only for XC90. */
(function(){
'use strict';
if(window.__xc90HqInterior20260822)return;
window.__xc90HqInterior20260822=true;
var MAP={
 RP00:'assets/interiors/xc90-rp00-hq.webp?v=20260822n',
 RPE0:'assets/interiors/xc90-rpe0-hq.webp?v=20260822n',
 RCE0:'assets/interiors/xc90-rce0-hq.webp?v=20260822n',
 RC00:'assets/interiors/xc90-rc00-hq.webp?v=20260822n',
 UC00:'assets/interiors/xc90-uc00-hq.webp?v=20260822n'
};
function installCss(){
 if(document.getElementById('xc90-hq-interior-css'))return;
 var s=document.createElement('style');s.id='xc90-hq-interior-css';
 s.textContent=`
#colors .ci-xc90-hq{display:none;width:min(100%,900px);margin:0 auto}
#colors .ci-interior.xc90-hq-on .ci-main-wrap,#colors .ci-interior.xc90-hq-on .ci-detail-wrap{display:none!important}
#colors .ci-interior.xc90-hq-on .ci-visual{display:block!important}
#colors .ci-interior.xc90-hq-on .ci-xc90-hq{display:block}
#colors .ci-interior.xc90-hq-on .ci-visual-side{width:min(100%,900px);margin:8px auto 0;display:block!important}
#colors .ci-xc90-hq-grid{display:grid;grid-template-columns:minmax(0,2.25fr) minmax(190px,.9fr);gap:8px;align-items:stretch}
#colors .ci-xc90-main-frame,#colors .ci-xc90-detail-frame{position:relative;overflow:hidden;border-radius:14px;background:#eef1f2;box-shadow:inset 0 0 0 1px rgba(25,48,60,.08)}
#colors .ci-xc90-main-frame{aspect-ratio:700/374}
#colors .ci-xc90-detail-frame{aspect-ratio:314/374}
#colors .ci-xc90-main-frame img,#colors .ci-xc90-detail-frame img{position:absolute;display:block;max-width:none;height:auto;top:0;image-rendering:auto}
#colors .ci-xc90-main-frame img{left:0;width:146.3%}
#colors .ci-xc90-detail-frame img{left:-226.1%;width:326.1%}
#colors .ci-xc90-tag{position:absolute;left:10px;bottom:9px;padding:5px 8px;border-radius:999px;background:rgba(18,40,52,.86);color:#fff;font-size:9px;font-weight:900;z-index:2}
#colors .ci-xc90-detail-title{font-size:9px;color:#6a7880;margin-top:5px}
#colors .ci-xc90-hq-note{display:flex;justify-content:space-between;gap:10px;margin-top:8px;font-size:10px;color:#68777e}
#colors .ci-xc90-hq-note b{color:#1b3542}
@media(max-width:700px){
 #colors .ci-xc90-hq{width:100%;margin:0}
 #colors .ci-xc90-hq-grid{display:block}
 #colors .ci-xc90-main-frame{width:100%;aspect-ratio:700/374;border-radius:11px}
 #colors .ci-xc90-detail-card{display:grid;grid-template-columns:108px minmax(0,1fr);gap:10px;align-items:center;margin-top:8px;padding:8px;border:1px solid #e1e6e8;border-radius:11px;background:#f8fafb}
 #colors .ci-xc90-detail-frame{width:108px;aspect-ratio:314/374;border-radius:9px}
 #colors .ci-xc90-detail-title{margin:0;font-size:9px;line-height:1.45}
 #colors .ci-xc90-detail-title b{display:block;color:#263e49;font-size:10px;margin-bottom:2px}
 #colors .ci-xc90-hq-note{display:block;font-size:9px;line-height:1.45;margin-top:7px}
 #colors .ci-xc90-hq-note span{display:block;margin-top:2px}
 #colors .ci-interior.xc90-hq-on .ci-visual-side{width:100%;margin-top:8px}
}
`;
 document.head.appendChild(s);
}
function ensure(){
 var box=document.querySelector('#colors .ci-interior');if(!box)return null;
 var visual=box.querySelector('.ci-visual');if(!visual)return null;
 var hq=visual.querySelector('.ci-xc90-hq');
 if(!hq){
  hq=document.createElement('div');hq.className='ci-xc90-hq';
  hq.innerHTML='<div class="ci-xc90-hq-grid"><div class="ci-xc90-main-frame"><img class="ci-xc90-hq-main" decoding="async" alt="XC90 실내"><span class="ci-xc90-tag"></span></div><div class="ci-xc90-detail-card"><div class="ci-xc90-detail-frame"><img class="ci-xc90-hq-detail" decoding="async" alt="XC90 인테리어 데코"></div><div class="ci-xc90-detail-title"><b>인테리어 데코</b>시트와 함께 적용되는 데코·소재를 확인하세요.</div></div></div><div class="ci-xc90-hq-note"><b class="ci-xc90-hq-code"></b><span>Volvo The ONE 원본 기준 · 화면 색감은 실제와 차이가 있을 수 있습니다.</span></div>';
  visual.insertBefore(hq,visual.firstChild);
 }
 return box;
}
function sync(){
 var box=ensure();if(!box)return;
 var model=box.querySelector('.ci-model-btn.active');var key=model&&model.dataset.key;
 if(key!=='XC90'){box.classList.remove('xc90-hq-on');return}
 var seat=box.querySelector('.ci-seat-btn.active b');var code=seat&&seat.textContent.trim();var src=MAP[code];
 if(!src){box.classList.remove('xc90-hq-on');return}
 box.classList.add('xc90-hq-on');
 var main=box.querySelector('.ci-xc90-hq-main'),detail=box.querySelector('.ci-xc90-hq-detail');
 [main,detail].forEach(function(img){if(img.getAttribute('src')!==src)img.src=src;img.dataset.code=code});
 main.alt='Volvo XC90 '+code+' 실내 시트 및 인테리어';detail.alt='Volvo XC90 '+code+' 인테리어 데코 디테일';
 box.querySelector('.ci-xc90-tag').textContent='XC90 · '+code;
 box.querySelector('.ci-xc90-hq-code').textContent='선택 코드 '+code;
}
function init(){
 installCss();sync();var colors=document.getElementById('colors');if(!colors)return;
 colors.addEventListener('click',function(e){if(e.target.closest('.ci-model-btn,.ci-trim-btn,.ci-seat-btn,.ci-tab'))setTimeout(sync,0)});
 new MutationObserver(function(){sync()}).observe(colors,{subtree:true,attributes:true,attributeFilter:['class']});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();