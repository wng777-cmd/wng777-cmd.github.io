/* Re-attach the MY26 V3.1 accessory decoration after the legacy UI's load hook. */
(function(){
  'use strict';
  function decorate(){
    const intro=document.querySelector('#mbody .acc2-intro p');
    if(intro) intro.textContent='MY26 Full V3.1 공식 자료의 모델별 순정 액세서리를 짐·레저, 차량 보호, 가족·반려동물, 외관·승하차 용도별로 정리했습니다.';
    const alert=document.querySelector('#mbody .acc2-tabs ~ .alert');
    if(alert&&!alert.dataset.v31){alert.dataset.v31='1';alert.innerHTML='<b>MY26 Full V3.1 기준</b><br>'+alert.innerHTML;}
  }
  function install(){
    if(typeof window.openAccessories!=='function') return false;
    if(window.openAccessories.__my26v31PostLoad) return true;
    const old=window.openAccessories;
    const wrapped=function(){old.apply(this,arguments);requestAnimationFrame(decorate)};
    wrapped.__my26v31PostLoad=true;
    window.openAccessories=wrapped;
    return true;
  }
  install();
  window.addEventListener('load',function(){setTimeout(install,180)},{once:true});
  setTimeout(install,3500);
})();