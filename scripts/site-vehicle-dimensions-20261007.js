/* Vehicle dimensions panel · 2026-10-07
   Adds model-level dimensions without changing trim/price/option data.
   PC/mobile share this module through site-pdf-refresh.js.
*/
(function(){
  'use strict';
  if(window.__VOLVO_DIMENSIONS_20261007__) return;
  window.__VOLVO_DIMENSIONS_20261007__=true;

  const specs={
    XC40:{length:'4,440',width:'1,873',height:'1,652',wheelbase:'2,702',ground:'205',note:'전폭 차체 너비 1,863mm',source:'Volvo Support KR'},
    XC60:{length:'4,708',width:'1,902',height:'1,655',wheelbase:'2,865',ground:'209',note:'B5 기준 · T8 전고 1,651mm / 지상고 200mm',source:'Volvo Support KR'},
    XC90:{length:'4,953',width:'1,923',height:'1,767–1,771',wheelbase:'2,984',ground:'205–216',note:'전고·지상고는 차량 구성에 따라 달라질 수 있음',source:'Volvo Support KR'},
    S90:{length:'5,090',width:'1,890',height:'1,438',wheelbase:'3,061',ground:'144',note:'전폭 차체 너비 1,879mm',source:'Volvo Support KR'},
    V60CC:{length:'4,787',width:'1,893',height:'1,499',wheelbase:'2,875',ground:'197',note:'V60 Cross Country · 전폭 차체 너비 1,850mm',source:'Volvo Support KR'},
    EX30:{length:'4,233',width:'1,838',height:'1,550',wheelbase:'2,650',ground:'171',note:'순수 전기 EX30',source:'Volvo Support KR'},
    EX30CC:{length:'4,235',width:'1,840',height:'1,575',wheelbase:'2,650',ground:'190',note:'MY26 V3.1 국내 판매자료 기준',source:'Volvo The ONE MY26 V3.1'},
    EX90:{length:'5,037',width:'1,964',height:'1,741',wheelbase:'2,985',ground:'213',note:'6·7인승 공통 기본 차체 치수',source:'Volvo Support KR'},
    ES90:{length:'5,000',width:'1,940',height:'1,555',wheelbase:'3,102',ground:'177',note:'MY27 V3.1 국내 판매자료 기준 · 지상고는 Volvo Support KR 기준',source:'Volvo The ONE MY27 V3.1 / Volvo Support KR'}
  };

  function installStyle(){
    if(document.getElementById('vehicle-dimensions-20261007-style')) return;
    const s=document.createElement('style');
    s.id='vehicle-dimensions-20261007-style';
    s.textContent=`
      .vehicle-spec-panel{margin:0 0 14px;padding:14px;border:1px solid #e3e8eb;border-radius:14px;background:linear-gradient(180deg,#f8fafb,#fff)}
      .vehicle-spec-head{display:flex;align-items:flex-end;justify-content:space-between;gap:10px;margin-bottom:10px}
      .vehicle-spec-head h3{margin:0;font-size:14px;color:#142b38}
      .vehicle-spec-head small{font-size:8px;color:#74828a;text-align:right}
      .vehicle-spec-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:7px}
      .vehicle-spec-item{padding:10px 8px;border-radius:10px;background:#fff;border:1px solid #e7ecef;text-align:center}
      .vehicle-spec-item span{display:block;font-size:8px;color:#718089;font-weight:800;margin-bottom:4px}
      .vehicle-spec-item strong{display:block;font-size:12px;line-height:1.2;color:#152f3d;white-space:nowrap}
      .vehicle-spec-item em{font-style:normal;font-size:7px;color:#819099}
      .vehicle-spec-note{margin:9px 1px 0;font-size:8px;line-height:1.5;color:#68777f}
      @media(max-width:700px){
        .vehicle-spec-panel{padding:12px;margin-bottom:12px}
        .vehicle-spec-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
        .vehicle-spec-item:last-child{grid-column:1 / -1}
        .vehicle-spec-item strong{font-size:12px}
        .vehicle-spec-head{align-items:flex-start;flex-direction:column;gap:3px}
        .vehicle-spec-head small{text-align:left}
      }`;
    document.head.appendChild(s);
  }

  function specHTML(key){
    const x=specs[key];
    if(!x) return '';
    const item=(label,value)=>'<div class="vehicle-spec-item"><span>'+label+'</span><strong>'+value+'</strong><em>mm</em></div>';
    return '<section class="vehicle-spec-panel">'+
      '<div class="vehicle-spec-head"><h3>차량 제원</h3><small>'+x.source+'</small></div>'+
      '<div class="vehicle-spec-grid">'+
        item('전장',x.length)+item('전폭',x.width)+item('전고',x.height)+item('휠베이스',x.wheelbase)+item('지상고',x.ground)+
      '</div>'+
      '<p class="vehicle-spec-note">※ '+x.note+' · 휠/타이어 및 차량 구성에 따라 일부 수치는 달라질 수 있습니다.</p>'+
    '</section>';
  }

  function install(){
    installStyle();
    if(typeof openModel!=='function' || typeof openM!=='function' || typeof cardHTML!=='function' || typeof models==='undefined' || typeof names==='undefined') {
      setTimeout(install,80); return;
    }
    if(window.openModel.__dimensions20261007) return;
    const enhanced=function(key){
      const d=models[key];
      openM(d.year+' · '+d.power,names[key],d.note,specHTML(key)+cardHTML(d)+'<div class="alert">가격은 제공된 Volvo The ONE 자료의 소비자 판매가격 기준입니다. 세부 옵션 적용 여부와 실제 출고 가능 사양은 상담 시 최종 확인해주세요.</div>');
    };
    enhanced.__dimensions20261007=true;
    window.openModel=enhanced;
    window.VOLVO_VEHICLE_DIMENSIONS=specs;
  }

  install();
})();
