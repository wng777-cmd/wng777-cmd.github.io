/* 2026-08-26 · Volvo The ONE MY26 Full Ver + Accessories V3.1 source refresh
   Keeps MY27 EX90 / ES90 vehicle data already used by the site, while refreshing
   MY26 customer-facing facts, accessories and ownership information from V3.1.
*/
(function(){
  'use strict';
  if(window.__VOLVO_MY26_V31_20260826__) return;
  window.__VOLVO_MY26_V31_20260826__=true;

  const SOURCE_MY26='Volvo The ONE MY26 Full Ver + Accessories V3.1';

  const latestAccessories={
    'EX30 / EX30CC':[
      'Roofbox 400 · 267만 원','Roofbox 430 Premier · 426만 원','Roofbox 500 · 270만 원',
      'Dust Free Package · 55만 원','Dust Free Plus Package · 107만 원','Roof Basket Package · 208만 원',
      'Rooftop Bicycle Carrier Package · 116만 원','EX Total Light Package · 100만 원','EX Total Package · 170만 원',
      'Key Tag + Sunshade Package · 63만 원','Protection Package · 74만 원'
    ],
    'EX90':[
      'Towbar Package · 245만 원','Roofbox 400 · 282만 원','Roofbox 430 Premier · 431만 원','Roofbox 500 · 306만 원',
      'Pet Lover Package · 191만 원','EV All-Weather Protection Package · 58만 원','EV Fabric Protection Package · 69만 원',
      'Urban Road Package · 349만 원','Off-City Package · 81만 원','Integrated Running Board · 385만 5,060원'
    ],
    'ES90':[
      'Towbar Package · 245만 원','Roofbox 400 · 270만 원','Roofbox 430 Premier · 419만 원','Roofbox 500 · 294만 원',
      'EV All-Weather Protection Package · 80만 원','EV Fabric Protection Package · 69만 원','Off-City Light Package · 63만 원'
    ],
    'XC90':[
      'Towbar Package · 230만 원','Roofbox 400 · 279만 원','Roofbox 430 Premier · 438만 원','Roofbox 500 · 282만 원',
      'Rooftop Bicycle Carrier Package · 117만 원','Winter Sports Package · 150만 원','Pet Lover Package · 236만 원',
      'Protective Plate Package · 88만 원','Shield Package · 120만 원','Full Shield Package · 188만 원',
      'Protection Package · 77만 원','Illuminated Tailgate Scuff Plate · 94만 원','Integrated Running Board · 305만 원'
    ],
    'XC60':[
      'Towbar Package · 208만 원','Roofbox 400 · 267만 원','Roofbox 430 Premier · 426만 원','Roofbox 500 · 286만 원',
      'Rooftop Bicycle Carrier Package · 119만 원','Winter Sports Package · 150만 원','Pet Lover Package · 195만 원',
      'Running-Plate Package · 297만 원','Protective Plate Package · 88만 원','Shield Package · 120만 원',
      'Full Shield Package · 201만 원','Protection Package · 91만 원','Illuminated Tailgate Scuff Plate · 87만 원',
      'Integrated Running Board · 251만 원'
    ],
    'XC40':[
      'Towbar Package · 196만 원','Roofbox 400 · 211만 원','Roofbox 430 Premier · 426만 원','Roofbox 500 · 270만 원',
      'Rooftop Bicycle Carrier Package · 119만 원','Winter Sports Package · 150만 원','Running-Plate Package · 271만 원',
      'Shield Package · 100만 원','Full Shield Package · 160만 원','Roof Spoiler · 71만 원',
      'Illuminated Tailgate Scuff Plate · 99만 원','Integrated Running Board · 195만 원'
    ],
    'S90':['Winter Sports Package · 150만 원','Protective Plate Package · 88만 원','Comfort Package · 87만 원'],
    'V60CC':[
      'Towbar Package · 213만 원','Roofbox 400 · 279만 원','Roofbox 430 Premier · 438만 원','Roofbox 500 · 282만 원',
      'Rooftop Bicycle Carrier Package · 131만 원','Winter Sports Package · 150만 원','Protective Plate Package · 88만 원',
      'Shield Package · 120만 원','Full Shield Package · 201만 원','Protection Package · 91만 원','Exterior Styling Kit · 215만 원'
    ]
  };

  function patchSourceLabels(){
    try{
      sourceName=function(d){return d&&d.year==='MY27'?'Volvo The ONE MY27 Light V3':SOURCE_MY26};
    }catch(e){}
  }

  function findTrim(modelKey,trimName){
    if(typeof models==='undefined'||!models[modelKey]||!Array.isArray(models[modelKey].trims)) return null;
    return models[modelKey].trims.find(function(t){return t[0]===trimName})||null;
  }

  function patchModels(){
    if(typeof models==='undefined') return false;

    /* V3.1 confirms XC60 B5 Ultra basic price is 70.7m; 73.3m is with air suspension. */
    if(models.XC60){
      models.XC60.note='MY26 V3.1 기준 B5 Ultra 기본 7,070만 원 · 에어 서스펜션 적용 시 7,330만 원 · T8은 충전 가능한 PHEV';
      const bright=findTrim('XC60','B5 AWD ULTRA BRIGHT');
      const dark=findTrim('XC60','B5 AWD ULTRA DARK');
      if(bright){bright[1]='7,070만 원';bright[3]=['Plus 대비 +500만 원','에어 서스펜션 + 어댑티브 샤시 선택 시 7,330만 원 (+260만 원)','Nappa · 마사지/통풍 · Bowers & Wilkins · 20인치 휠'];}
      if(dark){dark[1]='7,070만 원';dark[3]=['Ultra Bright와 기본 판매가 및 주요 편의사양 동일','에어 서스펜션 + 어댑티브 샤시 선택 시 7,330만 원 (+260만 원)','Dark 외관 테마 · 20인치 Ultra 휠 구성'];}
    }

    /* V3.1 lists S90 T8 91.4m / 90.4m after eco-car tax benefit. */
    if(models.S90){
      models.S90.note='안락함과 뒷좌석 편안함을 중시하는 플래그십 세단 · T8은 친환경차 세제 혜택 후 판매금액을 함께 표기';
      const s90t8=findTrim('S90','T8 AWD ULTRA BRIGHT');
      if(s90t8){
        s90t8[1]='9,040만 원*';
        s90t8[3]=['기본가 9,140만 원 · 친환경차 세제 혜택 후 판매금액 9,040만 원','T8 AWD 플러그인 하이브리드 · 1회 충전 최대 65km','0→100km/h 4.8초 · Ultra Bright'];
      }
    }

    /* V3.1 line-up spec page corrects EX30CC length to 4,235mm. */
    if(models.EX30CC){
      models.EX30CC.note='MY26 V3.1 기준 Twin Motor Performance AWD · 높아진 차체와 Cross Country 전용 세팅을 더한 고성능 전기 SUV';
      const cc=findTrim('EX30CC','ULTRA');
      if(cc){
        cc[3]=['428마력 Twin Motor Performance AWD · 0→100km/h 3.7초','전장 4,235 · 전폭 1,840 · 전고 1,575 · 휠베이스 2,650mm','1회 충전 최대 329km · 66kWh 배터리 · 견인능력 1,600kg'];
      }
    }
    return true;
  }

  function patchTrimGuides(){
    if(typeof trimGuides==='undefined') return false;

    if(trimGuides.XC60&&trimGuides.XC60.trims){
      trimGuides.XC60.trims['B5 AWD ULTRA BRIGHT']={kind:'upgrade',title:'PLUS BRIGHT 대비 추가·변경',items:[
        '기본 판매가 7,070만 원 · PLUS 대비 +500만 원',
        '에어 서스펜션 + 어댑티브 샤시 선택 시 7,330만 원 (+260만 원)',
        'Nappa 가죽 · 앞좌석 전동 사이드 서포트 + 마사지 · 앞좌석 통풍시트',
        'Bowers & Wilkins 프리미엄 사운드 + 서브우퍼 · 20인치 휠'
      ]};
      trimGuides.XC60.trims['B5 AWD ULTRA DARK']={kind:'style',title:'ULTRA BRIGHT 대비 외관 테마 변경',items:[
        '기본 판매가 7,070만 원 · ULTRA BRIGHT와 동일',
        '에어 서스펜션 + 어댑티브 샤시 선택 시 7,330만 원 (+260만 원)',
        'ULTRA 주요 시트·오디오·편의사양 동일',
        'Dark 외관 테마 · 20인치 Ultra 휠 구성'
      ]};
    }

    if(trimGuides.S90&&trimGuides.S90.trims){
      trimGuides.S90.trims['T8 AWD ULTRA BRIGHT']={kind:'power',title:'B5 ULTRA BRIGHT 대비 핵심 변경',items:[
        '기본가 9,140만 원 · 친환경차 세제 혜택 후 판매금액 9,040만 원',
        'T8 AWD 플러그인 하이브리드 · 1회 충전 최대 65km · 0→100km/h 4.8초',
        '후륜 에어 서스펜션 + 어댑티브 샤시',
        'ULTRA급 Nappa / 마사지 / 통풍 구성 · Bowers & Wilkins 프리미엄 사운드'
      ]};
    }

    if(trimGuides.EX30CC){
      trimGuides.EX30CC.base=[
        'Twin Motor Performance AWD · 428마력 · 0→100km/h 3.7초',
        '1회 충전 최대 329km · 66kWh 배터리',
        '전장 4,235 · 전폭 1,840 · 전고 1,575 · 휠베이스 2,650mm',
        '파일럿 어시스트 · 파크 파일럿 어시스트 · 360° 카메라',
        '앞좌석 전동 시트 · 운전석 메모리 · 전동 럼버 서포트',
        'Harman/Kardon 프리미엄 사운드 · Cross Country 전용 외관 / 높아진 차체'
      ];
      if(trimGuides.EX30CC.trims&&trimGuides.EX30CC.trims.ULTRA){
        trimGuides.EX30CC.trims.ULTRA={kind:'base',title:'단일 ULTRA 트림 주요 구성',items:['순수 전기 AWD 고성능 구성','견인능력 1,600kg','Cross Country 전용 스타일 · 상위 편의·주행 보조 사양 기본 적용']};
      }
    }
    return true;
  }

  function patchAccessories(){
    if(typeof acc==='undefined') return false;
    Object.keys(acc).forEach(function(k){delete acc[k]});
    Object.keys(latestAccessories).forEach(function(k){acc[k]=latestAccessories[k].slice()});
    return true;
  }

  function installOwnershipStyle(){
    if(document.getElementById('my26-v31-ownership-style')) return;
    const s=document.createElement('style');
    s.id='my26-v31-ownership-style';
    s.textContent=`
      .my26-v31-care{margin:14px 0 0;padding:15px;border:1px solid #dce3e6;border-radius:14px;background:#f7f9f9}
      .my26-v31-care>small{display:block;margin-bottom:5px;font-size:8px;font-weight:900;letter-spacing:.08em;color:#667983}
      .my26-v31-care>h3{margin:0 0 11px;font-size:16px;color:#07131d}
      .my26-v31-maint{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px}
      .my26-v31-maint div{padding:11px;border-radius:11px;background:#fff;border:1px solid #e1e6e8}
      .my26-v31-maint b{display:block;font-size:11px;color:#20333f}.my26-v31-maint span{display:block;margin-top:4px;font-size:9px;line-height:1.45;color:#596870}
      .my26-v31-ext{width:100%;border-collapse:collapse;background:#fff;border-radius:10px;overflow:hidden}
      .my26-v31-ext th,.my26-v31-ext td{padding:7px 6px;border-bottom:1px solid #e7ebed;text-align:left;font-size:8px;line-height:1.35}
      .my26-v31-ext th{background:#102430;color:#fff;font-weight:900}.my26-v31-ext td:nth-child(n+3){white-space:nowrap;text-align:right}
      .my26-v31-foot{margin:9px 0 0;font-size:8px;line-height:1.55;color:#68757d}
      @media(max-width:700px){.my26-v31-maint{grid-template-columns:1fr}.my26-v31-ext th,.my26-v31-ext td{font-size:8px;padding:6px 4px}.my26-v31-care{padding:12px}}
    `;
    document.head.appendChild(s);
  }

  function ownershipHTML(){
    return `<div class="my26-v31-care" data-my26-v31-care="1">
      <small>${SOURCE_MY26} 기준</small><h3>정기점검 · 보증 연장 프로그램</h3>
      <div class="my26-v31-maint">
        <div><b>PHEV · MHEV 정기점검</b><span>12개월 또는 15,000km 주기</span></div>
        <div><b>순수 전기차 정기점검</b><span>24개월 또는 30,000km 주기</span></div>
      </div>
      <table class="my26-v31-ext"><thead><tr><th>모델</th><th>파워트레인</th><th>1년 연장</th><th>2년 연장</th></tr></thead><tbody>
        <tr><td>XC90</td><td>PHEV</td><td>170만</td><td>270만</td></tr><tr><td>XC60</td><td>PHEV</td><td>130만</td><td>210만</td></tr><tr><td>S90</td><td>PHEV</td><td>130만</td><td>210만</td></tr>
        <tr><td>XC90</td><td>B</td><td>110만</td><td>180만</td></tr><tr><td>XC60</td><td>B</td><td>90만</td><td>140만</td></tr><tr><td>XC40</td><td>B</td><td>80만</td><td>130만</td></tr>
        <tr><td>S90</td><td>B</td><td>90만</td><td>140만</td></tr><tr><td>V60CC</td><td>B</td><td>80만</td><td>130만</td></tr><tr><td>EX30</td><td>EV</td><td>80만</td><td>130만</td></tr>
      </tbody></table>
      <p class="my26-v31-foot">기본 5년/10만km에서 1년 연장 시 총 6년/12만km, 2년 연장 시 총 7년/14만km 중 먼저 도래하는 시점까지. 실제 가입 가능 여부와 금액은 계약/출고 시 최종 확인이 필요합니다.</p>
    </div>`;
  }

  function wrapWarranty(){
    if(window.__MY26_V31_WARRANTY_WRAPPED__||typeof window.openWarrantyGuide!=='function') return false;
    installOwnershipStyle();
    const old=window.openWarrantyGuide;
    window.openWarrantyGuide=function(){
      old.apply(this,arguments);
      requestAnimationFrame(function(){
        const root=document.getElementById('mbody');
        if(!root||root.querySelector('[data-my26-v31-care]')) return;
        const source=root.querySelector('.wg-source');
        if(source) source.insertAdjacentHTML('beforebegin',ownershipHTML());
        else root.insertAdjacentHTML('beforeend',ownershipHTML());
      });
    };
    window.__MY26_V31_WARRANTY_WRAPPED__=true;
    return true;
  }

  function wrapAccessories(){
    if(window.__MY26_V31_ACCESSORY_WRAPPED__||typeof window.openAccessories!=='function') return false;
    const old=window.openAccessories;
    window.openAccessories=function(){
      old.apply(this,arguments);
      requestAnimationFrame(function(){
        const intro=document.querySelector('#mbody .acc2-intro p');
        if(intro) intro.textContent='MY26 Full V3.1 공식 자료의 모델별 순정 액세서리를 짐·레저, 차량 보호, 가족·반려동물, 외관·승하차 용도별로 정리했습니다.';
        const alert=document.querySelector('#mbody .acc2-content + .alert, #mbody .acc2-tabs ~ .alert');
        if(alert&&!alert.dataset.v31){alert.dataset.v31='1';alert.innerHTML='<b>MY26 Full V3.1 기준</b><br>'+alert.innerHTML;}
      });
    };
    window.__MY26_V31_ACCESSORY_WRAPPED__=true;
    return true;
  }

  function patchStaticCopy(){
    const service=document.querySelector('#service .sh p');
    if(service) service.textContent='MY26 Full V3.1 자료 기준 전국 38개 서비스 네트워크 · 실제 운영정보는 공식 페이지에서 최종 확인';
    const color=document.querySelector('.color-head p');
    if(color) color.textContent='MY26 Full V3.1과 MY27 자료에 포함된 주요 컬러를 함께 정리했습니다. 실제 적용 가능 컬러는 모델과 트림에 따라 달라집니다.';
    document.querySelectorAll('#tools .tile').forEach(function(tile){
      const btn=tile.querySelector('button');
      if(btn&&String(btn.getAttribute('onclick')).indexOf('openAccessories')>-1){
        const p=tile.querySelector('p'); if(p)p.textContent='최신 MY26 Full V3.1 기준 모델별 순정 액세서리를 목적별로 정리했습니다.';
      }
    });
  }

  function apply(){
    patchSourceLabels();
    patchModels();
    patchTrimGuides();
    patchAccessories();
    patchStaticCopy();
    wrapWarranty();
    wrapAccessories();
    document.documentElement.setAttribute('data-my26-source','v3.1-20260826');
  }

  apply();
  [250,900,1800,3200].forEach(function(ms){setTimeout(apply,ms)});
  window.addEventListener('load',function(){setTimeout(apply,120)},{once:true});
})();