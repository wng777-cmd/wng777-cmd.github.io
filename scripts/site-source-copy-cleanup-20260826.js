/* 2026-08-26 customer-facing source-copy cleanup
   Keeps verified data and functionality intact while removing document/source labels from the UI.
*/
(function(){
  'use strict';
  if(window.__VOLVO_SOURCE_COPY_CLEANUP_20260826__) return;
  window.__VOLVO_SOURCE_COPY_CLEANUP_20260826__=true;

  function cleanText(value){
    if(!value) return value;
    return String(value)
      .replace(/\s*·\s*Volvo The ONE MY27 Light V3/g,'')
      .replace(/\s*·\s*Volvo The ONE MY26 Full Ver \+ Accessories V3\.1/g,'')
      .replace(/\s*·\s*Volvo The ONE MY26 Full Ver \+ Accessories V2/g,'')
      .replace(/Volvo The ONE MY27 Light V3/g,'')
      .replace(/Volvo The ONE MY26 Full Ver \+ Accessories V3\.1/g,'')
      .replace(/Volvo The ONE MY26 Full Ver \+ Accessories V2/g,'')
      .replace(/MY26 Full V3\.1 공식 자료의\s*/g,'')
      .replace(/최신 MY26 Full V3\.1 기준\s*/g,'')
      .replace(/MY26 Full V3\.1 자료 기준\s*/g,'')
      .replace(/MY26 Full V3\.1 기준\s*/g,'')
      .replace(/MY26 V3\.1 기준\s*/g,'')
      .replace(/제공된 Option List를 기준으로\s*/g,'')
      .replace(/제공된 Volvo The ONE 자료의\s*/g,'')
      .replace(/\s+·\s*<br>/g,'<br>')
      .replace(/\s+·\s*$/g,'')
      .replace(/\s{2,}/g,' ');
  }

  function cleanKnownCopy(root){
    root=root||document;

    const service=root.querySelector&&root.querySelector('#service .sh p');
    if(service) service.textContent='전국 38개 서비스 네트워크 · 실제 운영정보는 공식 페이지에서 최종 확인';

    const color=root.querySelector&&root.querySelector('.color-head p');
    if(color) color.textContent='주요 컬러를 한눈에 비교할 수 있도록 정리했습니다. 실제 적용 가능 컬러는 모델과 트림에 따라 달라집니다.';

    if(root.querySelectorAll){
      root.querySelectorAll('#tools .tile').forEach(function(tile){
        const btn=tile.querySelector('button');
        if(btn&&String(btn.getAttribute('onclick')).indexOf('openAccessories')>-1){
          const p=tile.querySelector('p');
          if(p) p.textContent='모델별 순정 액세서리를 목적별로 정리했습니다.';
        }
      });

      root.querySelectorAll('[data-my26-v31-care] > small').forEach(function(el){el.style.display='none';});

      root.querySelectorAll('.acc2-intro p').forEach(function(el){
        el.textContent='짐·레저, 차량 보호, 가족·반려동물, 외관·승하차 용도별로 정리했습니다.';
      });

      root.querySelectorAll('.alert').forEach(function(el){
        const txt=el.textContent||'';
        if(/액세서리 명칭과 가격/.test(txt) && /(Volvo The ONE|MY26 Full V3\.1|제공된)/.test(txt)){
          el.innerHTML='액세서리 명칭과 가격은 차량 연식·트림·장착 조건에 따라 적용 여부와 최종 금액이 달라질 수 있으니 실제 주문 전 확인이 필요합니다.';
          return;
        }
        if(/Option List/.test(txt)){
          el.innerHTML='주요 기본사양과 트림별 차이는 비교하기 쉬운 핵심 항목만 정리했습니다. 실제 출고 가능 사양과 세부 적용 여부는 상담 시 최종 확인해주세요.';
          return;
        }
        if(/가격은 제공된 Volvo The ONE 자료/.test(txt)){
          el.innerHTML=el.innerHTML.replace('가격은 제공된 Volvo The ONE 자료의 소비자 판매가격 기준입니다.','가격은 소비자 판매가격 기준입니다.');
        }
        if(/Volvo The ONE|MY26 Full V3\.1|MY26 V3\.1 기준/.test(el.textContent||'')){
          const before=el.innerHTML;
          const after=cleanText(before);
          if(before!==after) el.innerHTML=after;
        }
      });

      root.querySelectorAll('.electric-range-panel p').forEach(function(el){
        el.textContent=el.textContent.replace(/MY27 Light V3의 국내 인증 주행거리 항목은 TBD로 표기되어 있어 현재 Volvo Cars Korea 공식 발표 WLTP 최대값을 안내합니다\./g,'국내 인증 주행거리는 확정 전이며 현재 WLTP 최대값을 안내합니다.');
      });
    }
  }

  function cleanTextNodes(root){
    if(!root||!document.createTreeWalker) return;
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const nodes=[];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function(node){
      const parent=node.parentElement;
      if(!parent||/^(SCRIPT|STYLE|NOSCRIPT)$/.test(parent.tagName)) return;
      const before=node.nodeValue;
      const after=cleanText(before);
      if(after!==before) node.nodeValue=after;
    });
  }

  function apply(root){
    const target=root&&root.nodeType===1?root:document;
    cleanKnownCopy(target);
    cleanTextNodes(target===document?document.body:target);
  }

  function start(){
    apply(document);
    const observer=new MutationObserver(function(mutations){
      mutations.forEach(function(m){
        if(m.type==='characterData'){
          const n=m.target;
          const p=n.parentElement;
          if(p&&!/^(SCRIPT|STYLE|NOSCRIPT)$/.test(p.tagName)){
            const after=cleanText(n.nodeValue);
            if(after!==n.nodeValue)n.nodeValue=after;
          }
        }
        m.addedNodes&&m.addedNodes.forEach(function(n){if(n.nodeType===1)apply(n)});
      });
      cleanKnownCopy(document);
    });
    observer.observe(document.body,{subtree:true,childList:true,characterData:true});
    [300,1000,2000,3600].forEach(function(ms){setTimeout(function(){apply(document)},ms)});
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start,{once:true});
  else start();
})();