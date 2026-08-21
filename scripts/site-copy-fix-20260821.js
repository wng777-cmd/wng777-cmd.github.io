/* 2026-08-21 hero copy refinement */
(function(){
  function apply(){
    var p=document.querySelector('.hero .copy > p:not(.note)');
    if(!p)return;
    p.textContent='모델부터 트림·가격, 핵심 차이까지 실제 비교에 필요한 정보만 빠르게 확인할 수 있도록 정리했습니다.';
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});
  else apply();
})();