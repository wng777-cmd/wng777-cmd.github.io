/* PDF-verified interior visual tones — 2026-08-23.
   Keeps the stable no-photo material-card UI, but maps every displayed model+seat code
   to the seat/deco tone seen in Volvo The ONE MY26/MY27 reference pages.
*/
(function(){
'use strict';
if(window.__VOLVO_INTERIOR_PDF_VISUAL_AUDIT_20260823__)return;
window.__VOLVO_INTERIOR_PDF_VISUAL_AUDIT_20260823__=true;

var YEAR={XC90:'MY26',XC60:'MY26',S90:'MY26',XC40:'MY26',V60CC:'MY26',EX30:'MY26',EX30CC:'MY26',EX90:'MY27',ES90:'MY27'};

var SEAT={
  charcoalNordico:{dot:'#252829',paint:'linear-gradient(135deg,#141617 0%,#303334 38%,#1c1f20 70%,#3b3d3e 100%)',texture:'smooth'},
  cardamomNordico:{dot:'#aa9a8c',paint:'linear-gradient(135deg,#c9bdb1 0%,#ad9e90 42%,#938477 72%,#d0c4b8 100%)',texture:'smooth'},
  cardamomNappa:{dot:'#a99889',paint:'linear-gradient(135deg,#c7b9ac 0%,#aa998a 40%,#89786b 70%,#d0c3b6 100%)',texture:'leather'},
  charcoalNappa:{dot:'#202324',paint:'linear-gradient(135deg,#111314 0%,#2b2d2e 42%,#181a1b 72%,#383a3a 100%)',texture:'leather'},
  blondNappa:{dot:'#d7d7d1',paint:'linear-gradient(135deg,#efeee9 0%,#d9d8d2 42%,#c2c3be 72%,#f3f1ed 100%)',texture:'leather'},
  charcoalLeather:{dot:'#252728',paint:'linear-gradient(135deg,#151718 0%,#343637 45%,#1d1f20 74%,#404243 100%)',texture:'leather'},
  blondLeather:{dot:'#d4d5d0',paint:'linear-gradient(135deg,#e8e9e5 0%,#d2d3ce 44%,#b9bbb6 74%,#eeeeea 100%)',texture:'leather'},
  amberNappa:{dot:'#a47a50',paint:'linear-gradient(135deg,#c39a6d 0%,#a17750 42%,#7d5839 72%,#caa57d 100%)',texture:'leather'},
  maroonNappa:{dot:'#5c3b37',paint:'linear-gradient(135deg,#724a44 0%,#573632 44%,#3f2926 72%,#805650 100%)',texture:'leather'},
  indigoTextile:{dot:'#35495c',paint:'linear-gradient(135deg,#1d2226 0%,#34485c 38%,#263544 58%,#171c20 78%,#435a70 100%)',texture:'textile'},
  breezePixel:{dot:'#b7cbd2',paint:'linear-gradient(135deg,#d9e4e7 0%,#bfd2d8 40%,#9eb8c2 70%,#e5ecee 100%)',texture:'knit'},
  mistWool:{dot:'#b9b9b5',paint:'linear-gradient(135deg,#d5d4d0 0%,#bbbcb8 42%,#9fa09d 72%,#dfddd8 100%)',texture:'wool'},
  pineWool:{dot:'#7c8175',paint:'linear-gradient(135deg,#9b9e91 0%,#808578 42%,#656b60 72%,#a8aa9e 100%)',texture:'wool'},
  cardamomEVNordico:{dot:'#aa9d91',paint:'linear-gradient(135deg,#cec4bb 0%,#b2a599 42%,#94877d 72%,#d5ccc3 100%)',texture:'smooth'},
  cardamomEVNappa:{dot:'#a99b8f',paint:'linear-gradient(135deg,#cbbfb5 0%,#ad9f93 42%,#8e8177 72%,#d4c9c0 100%)',texture:'leather'},
  charcoalEVNordico:{dot:'#282a2a',paint:'linear-gradient(135deg,#151718 0%,#313334 42%,#1c1e1f 72%,#3a3c3d 100%)',texture:'smooth'},
  charcoalEVNappa:{dot:'#232526',paint:'linear-gradient(135deg,#111314 0%,#2d3031 42%,#191b1c 72%,#393b3c 100%)',texture:'leather'},
  dawnNordico:{dot:'#dedfdb',paint:'linear-gradient(135deg,#f3f2ee 0%,#e1e0dc 42%,#cacbc8 72%,#f7f6f2 100%)',texture:'smooth'},
  dawnNappa:{dot:'#dedfdb',paint:'linear-gradient(135deg,#f1f0ec 0%,#deded9 42%,#c8c9c5 72%,#f6f5f1 100%)',texture:'leather'}
};

var DECO={
  brownAsh:{paint:'linear-gradient(100deg,#55473e 0%,#7f6c5e 18%,#a18c79 36%,#6f5d52 57%,#978271 78%,#5b4c42 100%)',tone:'wood'},
  brownAshEV:{paint:'linear-gradient(100deg,#62564e 0%,#88786b 20%,#a99889 40%,#75675d 60%,#9a897b 80%,#62564e 100%)',tone:'wood'},
  greyAsh:{paint:'linear-gradient(100deg,#424442 0%,#696b68 20%,#969690 40%,#595b58 60%,#858681 80%,#454744 100%)',tone:'wood'},
  naturalDriftwood:{paint:'linear-gradient(100deg,#756f68 0%,#9b948b 20%,#bbb2a7 40%,#888078 60%,#aaa198 80%,#746e67 100%)',tone:'wood'},
  whiteDriftwood:{paint:'linear-gradient(100deg,#c9cac6 0%,#e4e3de 22%,#f1f0eb 42%,#d3d4cf 62%,#ecebe6 82%,#c8c9c5 100%)',tone:'wood'},
  driftwood:{paint:'linear-gradient(100deg,#5c5e5b 0%,#858680 20%,#aaa9a2 40%,#70726e 60%,#999a94 80%,#60625e 100%)',tone:'wood'},
  linearLime:{paint:'linear-gradient(100deg,#4c3930 0%,#6f5141 20%,#8b6650 40%,#5b4338 60%,#7d5a47 80%,#4f3b31 100%)',tone:'wood'},
  denim:{paint:'linear-gradient(100deg,#223348 0%,#3d566f 22%,#263b51 44%,#526b82 66%,#2b4056 82%,#1f3043 100%)',tone:'fabric'},
  particle:{paint:'linear-gradient(135deg,#d2d5d3 0%,#b9bfbd 30%,#e3e5e2 52%,#afb6b4 72%,#d8dbd8 100%)',tone:'particle'},
  flax:{paint:'linear-gradient(100deg,#a99b83 0%,#c4b69e 20%,#d9ceb8 40%,#b0a28a 60%,#d2c4aa 80%,#a69880 100%)',tone:'fabric'},
  lightAsh:{paint:'linear-gradient(100deg,#c8c7c2 0%,#e3e1da 22%,#f0eee7 42%,#d0d0cb 62%,#e8e6df 82%,#c7c7c2 100%)',tone:'wood'},
  birch:{paint:'linear-gradient(100deg,#826d64 0%,#a58c80 20%,#c3aa9b 40%,#92786e 60%,#b59b8d 80%,#816c63 100%)',tone:'wood'}
};

/* Explicit model+code mapping prevents the same generic color swatch from being reused blindly. */
var MAP={
  'XC90|RP00':['charcoalNordico','brownAsh'],'XC90|RPE0':['cardamomNordico','brownAsh'],'XC90|RCE0':['cardamomNappa','brownAsh'],'XC90|RC00':['charcoalNappa','greyAsh'],'XC90|UC00':['blondNappa','greyAsh'],
  'XC60|RP00':['charcoalNordico','naturalDriftwood'],'XC60|RPE0':['cardamomNordico','naturalDriftwood'],'XC60|UC00':['blondNappa','whiteDriftwood'],'XC60|RC00':['charcoalNappa','naturalDriftwood'],
  'S90|RP00':['charcoalNordico','brownAsh'],'S90|RCE0':['cardamomNappa','brownAsh'],'S90|RC00':['charcoalNappa','greyAsh'],'S90|UC00':['blondNappa','greyAsh'],
  'XC40|RD00':['charcoalLeather','driftwood'],'XC40|UD70':['blondLeather','driftwood'],
  'V60CC|RC20':['amberNappa','linearLime'],'V60CC|RC00':['charcoalNappa','driftwood'],'V60CC|RC30':['maroonNappa','linearLime'],'V60CC|UC00':['blondNappa','driftwood'],
  'EX30|R310':['indigoTextile','denim'],'EX30|R540':['breezePixel','particle'],'EX30|R220':['mistWool','flax'],
  'EX30CC|R430':['pineWool','flax'],
  'EX90|RG10':['cardamomEVNordico','brownAshEV'],'EX90|AG60':['dawnNordico','lightAsh'],'EX90|RG00':['charcoalEVNordico','brownAshEV'],'EX90|RC10':['cardamomEVNappa','brownAshEV'],'EX90|RC00':['charcoalEVNappa','lightAsh'],'EX90|AC60':['dawnNappa','lightAsh'],
  'ES90|RD10':['cardamomEVNordico','birch'],'ES90|RD00':['charcoalEVNordico','birch'],'ES90|AD60':['dawnNordico','lightAsh'],'ES90|AC60':['dawnNappa','lightAsh'],'ES90|RC10':['cardamomEVNappa','birch'],'ES90|RC00':['charcoalEVNappa','birch']
};

function profile(model,code){
  var m=MAP[model+'|'+code];if(!m)return null;
  var s=SEAT[m[0]],d=DECO[m[1]];return s&&d?{seat:s,deco:d,key:model+'|'+code}:null;
}
function codeOfButton(btn){var b=btn&&btn.querySelector('b');return b?(b.textContent||'').trim():'';}
function setText(el,value){if(el&&el.textContent!==value)el.textContent=value;}
function apply(){
  if(typeof window.getVolvoInteriorState!=='function')return false;
  var st;try{st=window.getVolvoInteriorState();}catch(e){return false;}
  if(!st||!st.model||!st.code)return false;
  var box=document.querySelector('#colors .vci-interior');if(!box)return false;
  var p=profile(st.model,st.code);if(!p)return false;
  box.dataset.currentModel=st.model;box.dataset.pdfVerified='1';box.dataset.visualKey=p.key;box.dataset.sourceYear=YEAR[st.model]||'';
  var seat=box.querySelector('.vci-seat-sample');if(seat){seat.style.setProperty('--seat-paint',p.seat.paint);seat.dataset.seatTexture=p.seat.texture;seat.dataset.pdfCode=st.code;}
  var deco=box.querySelector('.vci-deco-sample');if(deco){deco.style.setProperty('--deco-paint',p.deco.paint);deco.dataset.decoTone=p.deco.tone;deco.dataset.pdfCode=st.code;}
  box.querySelectorAll('.vci-seat-btn').forEach(function(btn){var q=profile(st.model,codeOfButton(btn));if(q){var dot=btn.querySelector('.vci-dot');if(dot)dot.style.setProperty('--dot',q.seat.dot);}});
  var selectedDot=box.querySelector('.vci-selected-head .vci-dot');if(selectedDot)selectedDot.style.setProperty('--dot',p.seat.dot);
  setText(box.querySelector('.vci-method'),'PDF 대조 완료 · 코드별 색상');
  setText(box.querySelector('.vci-why p'),'색상 코드별 시트와 데코를 Volvo The ONE '+(YEAR[st.model]||'')+' 자료의 시각 톤에 맞춰 각각 따로 표시합니다.');
  setText(box.querySelector('.vci-note'),'※ 색상 코드·시트 소재·데코 명칭은 Volvo The ONE MY26/MY27 PDF와 대조했습니다. 화면의 색상 샘플은 PDF 이미지에서 보이는 톤을 단순화한 근사색이며, 실제 색감·질감은 조명과 디스플레이에 따라 달라질 수 있습니다.');
  return true;
}
function install(){
  var sec=document.getElementById('colors');if(!sec){setTimeout(install,80);return;}
  sec.addEventListener('click',function(){setTimeout(apply,0);},false);
  var obs=new MutationObserver(function(list){for(var i=0;i<list.length;i++){if(list[i].type==='childList'){apply();break;}}});
  obs.observe(sec,{subtree:true,childList:true});
  var tries=0;(function wait(){if(apply())return;if(++tries<80)setTimeout(wait,75);})();
  document.documentElement.setAttribute('data-interior-pdf-audit','20260823-2');
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});else install();
})();
