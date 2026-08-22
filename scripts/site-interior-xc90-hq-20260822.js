/* XC90 high-resolution interior viewer. Replaces the low-resolution atlas only for XC90. */
(function(){
'use strict';
if(window.__xc90HqInterior20260822)return;
window.__xc90HqInterior20260822=true;
var MAP={
 RP00:'assets/interiors/xc90-rp00-hq.webp?v=20260822m',
 RPE0:'assets/interiors/xc90-rpe0-hq.webp?v=20260822m',
 RCE0:'assets/interiors/xc90-rce0-hq.webp?v=20260822m',
 RC00:'assets/interiors/xc90-rc00-hq.webp?v=20260822m',
 UC00:'assets/interiors/xc90-uc00-hq.webp?v=20260822m'
};
function installCss(){
 if(document.getElementById('xc90-hq-interior-css'))return;
 var s=document.createElement('style');s.id='xc90-hq-interior-css';
 s.textContent='#colors .ci-xc90-hq{display:none;width:min(100%,900px);margin:0 auto}#colors .ci-xc90-hq img{display:block;width:100%;height:auto;max-width:100%;border-radius:14px;background:#eef1f2;image-rendering:auto}#colors .ci-xc90-hq-note{display:flex;justify-content:space-between;gap:10px;margin-top:7px;font-size:10px;color:#68777e}#colors .ci-xc90-hq-note b{color:#1b3542}#colors .ci-interior.xc90-hq-on .ci-main-wrap,#colors .ci-interior.xc90-hq-on .ci-visual-side{display:none!important}#colors .ci-interior.xc90-hq-on .ci-xc90-hq{display:block}@media(max-width:700px){#colors .ci-xc90-hq{width:100%;margin:0}#colors .ci-xc90-hq img{width:100%;border-radius:11px}#colors .ci-xc90-hq-note{display:block;font-size:9px;line-height:1.45}#colors .ci-xc90-hq-note span{display:block;margin-top:2px}}';
 document.head.appendChild(s);
}
function ensure(){
 var box=document.querySelector('#colors .ci-interior');if(!box)return null;
 var visual=box.querySelector('.ci-visual');if(!visual)return null;
 var hq=visual.querySelector('.ci-xc90-hq');
 if(!hq){hq=document.createElement('div');hq.className='ci-xc90-hq';hq.innerHTML='<img class="ci-xc90-hq-img" decoding="async" alt="XC90 실내"><div class="ci-xc90-hq-note"><b class="ci-xc90-hq-code"></b><span>Volvo The ONE 원본 · 실내 전체 + 데코 디테일</span></div>';visual.insertBefore(hq,visual.firstChild)}
 return box;
}
function sync(){
 var box=ensure();if(!box)return;
 var model=box.querySelector('.ci-model-btn.active');var key=model&&model.dataset.key;
 if(key!=='XC90'){box.classList.remove('xc90-hq-on');return}
 var seat=box.querySelector('.ci-seat-btn.active b');var code=seat&&seat.textContent.trim();var src=MAP[code];
 if(!src){box.classList.remove('xc90-hq-on');return}
 box.classList.add('xc90-hq-on');
 var img=box.querySelector('.ci-xc90-hq-img');var label=box.querySelector('.ci-xc90-hq-code');
 if(img.getAttribute('src')!==src)img.src=src;
 img.alt='Volvo XC90 '+code+' 실내 시트 및 인테리어';
 img.dataset.code=code;label.textContent='XC90 · '+code;
}
function init(){installCss();sync();var colors=document.getElementById('colors');if(!colors)return;colors.addEventListener('click',function(e){if(e.target.closest('.ci-model-btn,.ci-trim-btn,.ci-seat-btn,.ci-tab'))setTimeout(sync,0)});new MutationObserver(function(){sync()}).observe(colors,{subtree:true,attributes:true,attributeFilter:['class']});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();