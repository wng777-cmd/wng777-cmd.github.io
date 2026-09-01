/* 2026-09-01 · Aurora Silver swatch visual refinement
   Keeps the official color name/code unchanged; only adjusts the on-site swatch
   to better reflect the warm pink/lilac undertone visible in the MY27 material.
*/
(function(){
  'use strict';
  if(window.__VOLVO_AURORA_SILVER_TONE_20260901__) return;
  window.__VOLVO_AURORA_SILVER_TONE_20260901__=true;

  function apply(){
    document.querySelectorAll('.color-card').forEach(function(card){
      var code=card.querySelector('.color-code');
      var name=card.querySelector('h3');
      if((code&&code.textContent.trim()==='745')||(name&&name.textContent.trim()==='Aurora Silver')){
        var swatch=card.querySelector('.swatch');
        if(swatch){
          swatch.style.setProperty('--paint','linear-gradient(135deg,#e2dddf 0%,#d2c9ce 28%,#bbb4ba 55%,#aeb3b6 76%,#e8e4e5 100%)');
          swatch.setAttribute('aria-label','Aurora Silver · 은은한 로즈/라일락 기가 도는 실버 표현');
        }
      }
    });
    document.documentElement.setAttribute('data-aurora-silver-tone','20260901');
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true});
  else apply();
  setTimeout(apply,300);
  setTimeout(apply,1200);
})();
