/* 2026-09-01 · Volvo The ONE MY27 Light V3.1 delta refresh
   Only applies facts that changed from MY27 Light V3.
   Unchanged trims, prices, colors, interiors, wheels, features and option lists are left as-is.
*/
(function(){
  'use strict';
  if(window.__VOLVO_MY27_V31_20260901__) return;
  window.__VOLVO_MY27_V31_20260901__=true;

  function findTrim(modelKey,trimName){
    if(typeof models==='undefined'||!models[modelKey]||!Array.isArray(models[modelKey].trims)) return null;
    return models[modelKey].trims.find(function(t){return t[0]===trimName;})||null;
  }

  function patchModels(){
    if(typeof models==='undefined') return false;

    /* EX90 V3.1: certified figures newly filled for Twin Motor Performance. */
    var ex90p7=findTrim('EX90','Twin Motor Performance ULTRA · 7-Seater');
    var ex90p6=findTrim('EX90','Twin Motor Performance ULTRA · 6-Seater');
    if(ex90p7){
      ex90p7[3]=[
        '680마력 Twin Motor Performance',
        '1회 충전 최대 448km · 복합 전비 3.8km/kWh (도심 4.0 · 고속 3.6)',
        'ULTRA 구성 · 7인승'
      ];
    }
    if(ex90p6){
      ex90p6[3]=[
        '680마력 Twin Motor Performance',
        '1회 충전 최대 448km · 복합 전비 3.8km/kWh (도심 4.0 · 고속 3.6)',
        'ULTRA 구성 · 2열 캡틴 시트 · 6인승'
      ];
    }

    /* ES90 V3.1: Twin Motor dimensions, curb weight, efficiency and range newly confirmed. */
    var es90plus=findTrim('ES90','Twin Motor PLUS');
    var es90ultra=findTrim('ES90','Twin Motor ULTRA');
    if(es90plus){
      es90plus[3]=[
        'Twin Motor · PLUS 구성',
        '1회 충전 최대 520km · 복합 전비 4.4km/kWh (도심 4.7 · 고속 4.1)',
        '전폭 1,940mm · 전고 1,555mm · 공차중량 2,495kg'
      ];
    }
    if(es90ultra){
      es90ultra[3]=[
        'Twin Motor · ULTRA 구성',
        '1회 충전 최대 520km · 복합 전비 4.4km/kWh (도심 4.7 · 고속 4.1)',
        '전폭 1,940mm · 전고 1,555mm · 공차중량 2,495kg (에어 서스펜션 2,545kg)',
        '에어 서스펜션 선택 시 9,041만 원'
      ];
    }
    return true;
  }

  function patchTrimGuides(){
    if(typeof trimGuides==='undefined') return false;

    if(trimGuides.EX90&&trimGuides.EX90.trims){
      trimGuides.EX90.trims['Twin Motor Performance ULTRA · 7-Seater']={
        kind:'power',title:'Twin Motor ULTRA 대비 핵심 변경',items:[
          'Twin Motor Performance · 최대 출력 680마력',
          '1회 충전 최대 448km · 복합 전비 3.8km/kWh (도심 4.0 · 고속 3.6)',
          'ULTRA 편의·샤시·오디오 구성 유지',
          '7인승 구성'
        ]
      };
      trimGuides.EX90.trims['Twin Motor Performance ULTRA · 6-Seater']={
        kind:'power',title:'Performance ULTRA 7-Seater 대비 좌석 변경',items:[
          'Twin Motor Performance · 최대 출력 680마력',
          '1회 충전 최대 448km · 복합 전비 3.8km/kWh (도심 4.0 · 고속 3.6)',
          'ULTRA 편의·샤시·오디오 구성 유지',
          '2열 캡틴 시트 · 6인승 구성'
        ]
      };
    }

    if(trimGuides.ES90&&trimGuides.ES90.trims){
      trimGuides.ES90.trims['Twin Motor PLUS']={
        kind:'power',title:'Single Motor PLUS 대비 핵심 변경',items:[
          'Twin Motor · 최대 출력 456마력',
          '1회 충전 최대 520km · 복합 전비 4.4km/kWh (도심 4.7 · 고속 4.1)',
          '전폭 1,940mm · 전고 1,555mm · 공차중량 2,495kg',
          'PLUS 편의·안전·오디오 구성 유지 · 20인치 휠'
        ]
      };
      trimGuides.ES90.trims['Twin Motor ULTRA']={
        kind:'power',title:'Single Motor ULTRA 대비 핵심 변경',items:[
          'Twin Motor · 최대 출력 456마력',
          '1회 충전 최대 520km · 복합 전비 4.4km/kWh (도심 4.7 · 고속 4.1)',
          '전폭 1,940mm · 전고 1,555mm · 공차중량 2,495kg',
          '에어 서스펜션 적용 시 공차중량 2,545kg · 판매가 9,041만 원',
          'ULTRA 편의·시트·오디오 구성 유지 · 21인치 휠'
        ]
      };
    }
    return true;
  }

  function rangeCopy(key){
    if(key==='EX90') return {
      card:'Performance 448km',basis:'국내 복합',
      value:'Performance 448 km',label:'국내 복합 인증',
      detail:'Twin Motor Performance 7·6인승은 복합 448km(도심 471km · 고속 419km)로 확인되었습니다. Twin Motor 모델은 아직 TBD입니다.'
    };
    if(key==='ES90') return {
      card:'Twin Motor 520km',basis:'국내 복합',
      value:'Twin Motor 520 km',label:'국내 복합 인증',
      detail:'Twin Motor PLUS·ULTRA는 복합 520km(도심 548km · 고속 486km)로 확인되었습니다. Single Motor Extended Range와 Performance는 아직 TBD입니다.'
    };
    return null;
  }

  function refreshRangeCard(key){
    var d=rangeCopy(key); if(!d) return;
    var card=document.querySelector('.model[data-model="'+key+'"] .electric-range-chip');
    if(!card) return;
    var strong=card.querySelector('strong'); var span=card.querySelector('span');
    if(strong) strong.textContent=d.card;
    if(span) span.textContent=d.basis;
  }

  function refreshRangePanel(key,root){
    var d=rangeCopy(key); if(!d||!root) return;
    var panel=root.querySelector('[data-electric-range="'+key+'"]');
    if(!panel) return;
    var value=panel.querySelector('.electric-range-main b');
    var label=panel.querySelector('.electric-range-main span');
    var detail=panel.querySelector('p');
    if(value) value.textContent=d.value;
    if(label) label.textContent=d.label;
    if(detail) detail.textContent=d.detail;
  }

  function patchRangeUI(){
    refreshRangeCard('EX90');
    refreshRangeCard('ES90');

    if(window.__VOLVO_MY27_V31_RANGE_WRAP__) return;
    if(typeof window.openModel==='function'){
      var oldOpen=window.openModel;
      window.openModel=function(key){
        oldOpen.apply(this,arguments);
        requestAnimationFrame(function(){refreshRangePanel(key,document.getElementById('mbody'));});
      };
    }
    if(typeof window.renderTrim==='function'){
      var oldRender=window.renderTrim;
      window.renderTrim=function(key,b){
        oldRender.apply(this,arguments);
        requestAnimationFrame(function(){refreshRangePanel(key,document.getElementById('tc'));});
      };
    }
    window.__VOLVO_MY27_V31_RANGE_WRAP__=true;
  }

  function apply(){
    patchModels();
    patchTrimGuides();
    patchRangeUI();
    document.documentElement.setAttribute('data-my27-v31','20260901');
  }

  apply();
  setTimeout(apply,0);
  setTimeout(apply,300);
  setTimeout(function(){refreshRangeCard('EX90');refreshRangeCard('ES90');},1000);
})();
