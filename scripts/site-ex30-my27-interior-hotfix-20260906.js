/* 2026-09-06 · EX30 MY27 Korea interior hotfix
   Current Volvo Cars KR EX30 page lists Indigo, Mist and Pine interiors.
   Apply after the V3.1 interior sync so desktop/mobile share the same corrected data.
*/
(function(){
  'use strict';
  if(window.__VOLVO_EX30_MY27_INTERIOR_20260906__) return;
  window.__VOLVO_EX30_MY27_INTERIOR_20260906__=true;

  var EX30={label:'EX30',groups:[
    {label:'CORE',sub:'CORE',items:[
      {code:'R310',en:'Indigo',ko:'인디고',seat:'Textile & Nordico',deco:'Denim'}
    ]},
    {label:'ULTRA',sub:'ULTRA',items:[
      {code:'R310',en:'Indigo',ko:'인디고',seat:'Textile & Nordico',deco:'Denim'},
      {code:'R220',en:'Mist',ko:'미스트',seat:'Tailored Wool Blend',deco:'Flax'},
      {code:'R430',en:'Pine',ko:'파인',seat:'Textile & Nordico',deco:'Flax'}
    ]}
  ]};

  var tries=0;
  function apply(){
    tries++;
    var live=window.__VOLVO_INTERIOR_DATA__;
    if(!live){
      if(tries<80) setTimeout(apply,50);
      return;
    }

    live.EX30=EX30;
    window.__VOLVO_INTERIOR_SOURCE__='MY26 V3.1 + MY27 V3.1 + KR EX30 MY27 current · 2026-09-06';
    document.documentElement.setAttribute('data-ex30-interior','20260906-my27-kr');

    var note=document.querySelector('#colors .vci-note');
    if(note){
      note.textContent='※ 국내 판매 기준으로 정리했습니다. EX30 MY27 인테리어는 Indigo · Mist · Pine을 반영했으며, 실제 적용 가능 조합은 외장색·생산시점에 따라 달라질 수 있으므로 계약 전 최종 확인해주세요.';
    }

    try{
      var current=window.getVolvoInteriorState&&window.getVolvoInteriorState();
      if(current&&current.model==='EX30'){
        var btn=document.querySelector('#colors .vci-model-btn[data-model="EX30"]');
        if(btn) btn.click();
      }
    }catch(e){}
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true});
  else apply();
})();
