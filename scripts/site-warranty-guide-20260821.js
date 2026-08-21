/* 2026-08-21 Volvo Korea warranty & maintenance guide
   Source basis: Volvo Cars Korea Warranty Program / Free Maintenance / Service by Volvo.
*/
(function(){
  const OFFICIAL_WARRANTY='https://www.volvocars.com/kr/l/warranty-program/';
  const OFFICIAL_MAINT='https://www.volvocars.com/kr/l/free-service-warranty/';

  function installStyle(){
    if(document.getElementById('warranty-guide-style'))return;
    const s=document.createElement('style');
    s.id='warranty-guide-style';
    s.textContent=`
      .warranty-section{padding:58px max(22px,5vw);background:#f4f6f6}
      .warranty-wrap{max-width:1280px;margin:0 auto}
      .warranty-head{display:flex;align-items:end;justify-content:space-between;gap:28px;margin-bottom:22px}
      .warranty-head .ey{margin-bottom:7px}.warranty-head h2{margin:0;font-size:clamp(28px,3vw,42px);letter-spacing:-.045em;color:#07131d}
      .warranty-head p{max-width:520px;margin:0;color:#667780;font-size:11px;line-height:1.65}
      .warranty-summary{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
      .warranty-summary-card{padding:19px 18px;border:1px solid #dbe2e5;border-radius:16px;background:#fff;box-shadow:0 8px 22px rgba(7,19,29,.045)}
      .warranty-summary-card small{display:block;margin-bottom:8px;font-size:8px;font-weight:900;letter-spacing:.1em;color:#71818a}
      .warranty-summary-card strong{display:block;font-size:22px;letter-spacing:-.04em;color:#07131d}
      .warranty-summary-card p{margin:7px 0 0;font-size:10px;line-height:1.55;color:#53636d}
      .warranty-summary-card .warranty-caution{color:#7b5b2d;font-weight:800}
      .warranty-actions{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-top:14px;padding:14px 16px;border-radius:14px;background:#07131d;color:#fff}
      .warranty-actions span{font-size:10px;line-height:1.5;color:#c8d1d5}.warranty-actions b{color:#fff}
      .warranty-actions button{flex:0 0 auto;min-height:41px;padding:0 17px;border:1px solid #ffffff44;border-radius:10px;background:#fff;color:#07131d;font-size:9px;font-weight:900}
      .wg-key-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:9px;margin-bottom:14px}
      .wg-key{padding:14px;border:1px solid #dce3e6;border-radius:13px;background:#f7f9f9}
      .wg-key small{display:block;font-size:8px;font-weight:900;color:#72818a;margin-bottom:5px}.wg-key b{display:block;font-size:16px;color:#07131d;letter-spacing:-.025em}.wg-key p{margin:6px 0 0;font-size:9px;line-height:1.55;color:#52616a}
      .wg-key.accent{background:#eef4f1;border-color:#d5e3db}.wg-key.accent small{color:#4f705d}
      .wg-note{margin:0 0 14px;padding:12px 14px;border-radius:12px;background:#fff7e9;border:1px solid #eadbbf;font-size:9px;line-height:1.6;color:#655438}
      .wg-details{display:grid;gap:8px}.wg-details details{border:1px solid #dde4e7;border-radius:12px;background:#fff;overflow:hidden}.wg-details summary{cursor:pointer;list-style:none;padding:13px 14px;font-size:10px;font-weight:900;color:#172934}.wg-details summary::-webkit-details-marker{display:none}.wg-details summary:after{content:'+';float:right;font-size:15px;line-height:1}.wg-details details[open] summary:after{content:'−'}
      .wg-detail-body{padding:0 14px 14px;color:#53616a;font-size:9px;line-height:1.65}.wg-detail-body ul{margin:0;padding-left:17px}.wg-detail-body li{margin:3px 0}.wg-detail-body b{color:#20333f}
      .wg-source{display:flex;gap:8px;flex-wrap:wrap;margin-top:13px}.wg-source a{display:inline-flex;align-items:center;min-height:36px;padding:0 11px;border-radius:9px;background:#eef2f3;color:#233843;font-size:8px;font-weight:900}
      @media(max-width:700px){
        .warranty-section{padding:42px 14px}.warranty-head{display:block}.warranty-head p{margin-top:9px;font-size:10px}.warranty-summary{grid-template-columns:1fr;gap:8px}.warranty-summary-card{padding:15px}.warranty-summary-card strong{font-size:19px}.warranty-actions{display:block}.warranty-actions button{width:100%;margin-top:11px}.wg-key-grid{grid-template-columns:1fr}.wg-key b{font-size:15px}.wg-detail-body{font-size:9px}
      }
    `;
    document.head.appendChild(s);
  }

  function modalHTML(){
    return `
      <div class="wg-note"><b>먼저 구분하세요.</b> 일반보증 5년/10만km와 소모품 무상교환 5년/10만km는 같은 제도가 아닙니다. 일반보증은 소모품을 제외한 제조·재질상 결함에 대한 보증이고, 소모품은 Free Maintenance Coupon에 따라 일부 지정 항목을 정해진 주기에 무상 제공하는 서비스입니다.</div>
      <div class="wg-key-grid">
        <div class="wg-key"><small>GENERAL WARRANTY</small><b>5년 또는 100,000km</b><p>소모품을 제외한 모든 부품. 정상 관리·사용 상태에서 재질 또는 제조상의 결함이 확인된 경우 무상 수리 또는 교환.</p></div>
        <div class="wg-key accent"><small>FREE MAINTENANCE COUPON</small><b>5년 또는 100,000km</b><p>일부 지정 소모품 무상 제공. 모든 소모품을 필요할 때마다 무제한 교환하는 제도가 아니며 모델·연식·정비주기에 따라 항목이 달라질 수 있음.</p></div>
        <div class="wg-key"><small>HIGH-VOLTAGE BATTERY</small><b>8년 또는 160,000km</b><p>하이브리드 및 순수 전기차의 고전압 배터리 보증. 기간과 주행거리 중 먼저 도래하는 시점까지 적용.</p></div>
        <div class="wg-key"><small>12V BATTERY / TIRE</small><b>2년·40,000km / 제조사 기준</b><p>일반 배터리는 2년 또는 40,000km. 타이어는 해당 타이어 제조사의 보증기간을 적용.</p></div>
      </div>
      <div class="wg-details">
        <details open><summary>배출가스 관련 부품 보증</summary><div class="wg-detail-body"><ul><li>배출가스 관련 부품: <b>5년 또는 80,000km</b></li><li>정화용 촉매, 매연 포집 필터, 엔진 컨트롤 유닛: <b>7년 또는 120,000km</b></li></ul></div></details>
        <details><summary>보증에서 제외되는 대표 항목</summary><div class="wg-detail-body"><ul><li>정기점검 자체, 휠 얼라인먼트·밸런스·일반 브레이크 점검·조정 등</li><li>정기 교환이 필요한 소모성 부품과 유류 — 단, 별도 Free Maintenance Coupon 대상 항목은 정해진 서비스 주기에 따라 무상 제공 가능</li><li>정비주기 미준수로 발생한 고장, 비규격 부품·케미컬 사용으로 발생한 고장</li><li>제조사 미승인 개조·외부장착물로 인한 고장, 사고·취급부주의·천재지변</li><li>불량·비지정 연료 사용으로 인한 고장, 교통·숙박·운휴손실 등 간접비용</li></ul></div></details>
        <details><summary>보증수리·승계 시 알아둘 점</summary><div class="wg-detail-body"><ul><li>보증기간은 <b>신차 출고일</b>부터 적용되며 기간·주행거리 중 먼저 도래한 시점에 만료</li><li>보증수리는 볼보자동차 지정 서비스센터에서 실시하며 순정부품(재제조 부품 포함)을 사용</li><li>보증기간 내 소유자가 변경되면 잔여 보증기간 승계 가능</li><li>보증 내용과 소모성 부품 무상교환 프로그램은 대한민국 내에서 유효</li></ul></div></details>
        <details><summary>추가 무상·부품 서비스</summary><div class="wg-detail-body"><ul><li>긴급출동 서비스: 출고 후 <b>5년 또는 100,000km</b>까지 안내</li><li>공식 서비스센터에서 유상 수리한 순정 부품에는 볼보의 <b>평생 부품 보증</b> 프로그램 운영</li><li>세부 적용 조건은 해당 서비스 정책과 차량별 서비스 가이드에 따라 최종 확인</li></ul></div></details>
      </div>
      <div class="wg-source"><a href="${OFFICIAL_WARRANTY}" target="_blank" rel="noopener">볼보코리아 보증 프로그램</a><a href="${OFFICIAL_MAINT}" target="_blank" rel="noopener">Free Maintenance 안내</a></div>
    `;
  }

  window.openWarrantyGuide=function(){
    if(typeof window.openM==='function'){
      window.openM('VOLVO WARRANTY & CARE','보증·무상서비스','보증과 소모품 교환 서비스를 정확히 구분해 확인하세요.',modalHTML());
    }
  };

  function installSection(){
    if(document.getElementById('warranty'))return;
    const service=document.getElementById('service');
    if(!service)return;
    const sec=document.createElement('section');
    sec.className='warranty-section';sec.id='warranty';
    sec.innerHTML=`<div class="warranty-wrap"><div class="warranty-head"><div><div class="ey">WARRANTY & CARE</div><h2>보증 · 무상서비스</h2></div><p>보증수리와 소모품 무상교환은 적용 방식이 다릅니다. 고객이 가장 많이 묻는 핵심 기준만 먼저 보여드리고, 세부 범위는 상세 안내에서 확인할 수 있습니다.</p></div><div class="warranty-summary"><article class="warranty-summary-card"><small>일반 부품 보증</small><strong>5년 / 10만km</strong><p>소모품 제외 · 제조 또는 재질상 결함</p></article><article class="warranty-summary-card"><small>소모품 무상 서비스</small><strong>5년 / 10만km</strong><p>Free Maintenance Coupon에 따른 <span class="warranty-caution">일부 지정 소모품</span></p></article><article class="warranty-summary-card"><small>고전압 배터리</small><strong>8년 / 16만km</strong><p>PHEV · 순수 전기차 고전압 배터리</p></article></div><div class="warranty-actions"><span><b>모든 소모품이 5년간 무제한 보증되는 것은 아닙니다.</b><br>보증과 무상교환 항목을 구분해서 확인하세요.</span><button type="button" onclick="openWarrantyGuide()">보증 범위 자세히 보기 →</button></div></div>`;
    service.parentNode.insertBefore(sec,service);
  }

  function installNav(){
    const nav=document.querySelector('.top .nav');
    if(nav&&!nav.querySelector('a[href="#warranty"]')){
      const serviceLink=nav.querySelector('a[href="#service"]');
      const a=document.createElement('a');a.href='#warranty';a.textContent='보증·서비스';
      if(serviceLink)nav.insertBefore(a,serviceLink);else nav.appendChild(a);
    }
    const mobile=document.querySelector('.mobile-quick-nav');
    if(mobile&&!mobile.querySelector('a[href="#warranty"]')){
      const serviceLink=mobile.querySelector('a[href="#service"]');
      const a=document.createElement('a');a.href='#warranty';a.textContent='보증·서비스';
      a.addEventListener('click',function(){mobile.classList.remove('open');mobile.setAttribute('aria-hidden','true');const h=document.querySelector('.hamb');if(h){h.setAttribute('aria-expanded','false');h.textContent='☰'}});
      if(serviceLink)mobile.insertBefore(a,serviceLink);else mobile.appendChild(a);
    }
  }

  function start(){installStyle();installSection();installNav();setTimeout(installNav,150);document.documentElement.setAttribute('data-warranty-guide','20260821-1')}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
