/* 2026-08-21 final PDF-first data audit */
(function(){
function apply(){
  if(typeof models==='undefined'||typeof trimGuides==='undefined')return false;

  if(trimGuides.XC60){
    trimGuides.XC60.trims['B5 AWD ULTRA BRIGHT']={kind:'upgrade',title:'PLUS BRIGHT 대비 추가·변경',items:[
      '기본 판매가 7,070만 원 · PLUS 대비 +500만 원',
      '에어 서스펜션 + 어댑티브 샤시 선택 시 7,330만 원 (+260만 원)',
      'Nappa 가죽 시트 · 앞좌석 전동 사이드 서포트 + 마사지 · 앞좌석 통풍시트',
      'Bowers & Wilkins 프리미엄 사운드 + 서브우퍼 · 20인치 휠'
    ]};
    trimGuides.XC60.trims['B5 AWD ULTRA DARK']={kind:'style',title:'ULTRA BRIGHT 대비 외관 테마 변경',items:[
      '기본 판매가 7,070만 원 · ULTRA BRIGHT와 동일',
      '에어 서스펜션 + 어댑티브 샤시 선택 시 7,330만 원 (+260만 원)',
      'ULTRA 주요 시트·오디오·편의사양 동일',
      'R-Design 범퍼 · 블랙 사이드미러 · 블랙 그릴 / 사이드 윈도 데코 · 블랙 루프 레일',
      '20인치 휠은 Bright/Dark 공통 Ultra 구성'
    ]};
  }
  if(models.XC60){
    models.XC60.note='PDF 기준 B5 Ultra는 7,070만 원, 에어 서스펜션 적용 시 7,330만 원 · Dark는 외관 테마 차이 · T8은 충전 가능한 PHEV';
    models.XC60.trims=[
      ['B5 AWD PLUS BRIGHT','6,570만 원','실속형',['250마력 B5 AWD · 48V 마일드 하이브리드','Plus 기본 편의·안전사양 · Bright 외관 테마','Ultra 대비 가격 경쟁력 중심']],
      ['B5 AWD ULTRA BRIGHT','7,070만 원','추천',['Plus 대비 +500만 원','에어 서스펜션 선택 시 7,330만 원 (+260만 원)','Nappa · 마사지/통풍 · Bowers & Wilkins · 20인치 휠']],
      ['B5 AWD ULTRA DARK','7,070만 원','스타일',['Ultra Bright와 기본 판매가 및 주요 편의사양 동일','에어 서스펜션 선택 시 7,330만 원 (+260만 원)','Dark 외관 테마 · 20인치 Ultra 휠 구성']],
      ['T8 AWD ULTRA BRIGHT','9,120만 원','PHEV',['외부 충전 가능한 T8 AWD 플러그인 하이브리드','1회 충전 시 순수 전기모드 최대 61km','Ultra급 프리미엄 사양 · Bright 외관 테마']]
    ];
  }

  if(trimGuides.S90){
    trimGuides.S90.trims['B5 ULTRA BRIGHT']={kind:'upgrade',title:'PLUS BRIGHT 대비 추가·변경',items:[
      '기본 판매가 7,130만 원 · 에어 서스펜션 선택 시 7,390만 원 (+260만 원)',
      'Nappa 가죽 · 앞좌석 전동 사이드 서포트 + 마사지 · 앞/뒤 통풍시트',
      '뒷좌석 럭셔리 암레스트 · 측면 파워 선 블라인드 · 전동식 리어 윈도우 선 커튼',
      'Bowers & Wilkins 프리미엄 사운드 + 서브우퍼 · 20인치 휠'
    ]};
    trimGuides.S90.trims['B5 ULTRA DARK']={kind:'style',title:'ULTRA BRIGHT 대비 외관 테마 변경',items:[
      '기본 판매가 7,130만 원 · 에어 서스펜션 선택 시 7,390만 원 (+260만 원)',
      'ULTRA 주요 편의·시트·오디오 사양 동일',
      '블랙 사이드미러 · 블랙 그릴 / 사이드 윈도 데코',
      '20인치 휠은 Bright/Dark 공통 Ultra 구성'
    ]};
  }

  if(trimGuides.ES90){
    trimGuides.ES90.base=[
      'MY27 ES90 · 800V 전기 아키텍처',
      'Single Motor Extended Range: 333마력 · RWD · 92kWh · 0→100km/h 6.6초',
      'Twin Motor: 456마력 · AWD · 106kWh · 0→100km/h 5.4초',
      'Plus는 가격·효율 중심, Ultra는 오디오·시트·루프 등 고급 편의사양 강화',
      'Performance: 680마력 AWD · 106kWh · 0→100km/h 4.0초'
    ];
    trimGuides.ES90.trims['Single Motor Extended Range PLUS']={kind:'base',title:'Single PLUS — 가장 합리적인 장거리형',items:['7,294만 원 · 333마력 RWD · 92kWh · 0→100km/h 6.6초','Bose 14스피커 프리미엄 사운드 · 20인치 휠','가격과 효율·주행거리 우선 고객에게 적합']};
    trimGuides.ES90.trims['Single Motor Extended Range ULTRA']={kind:'upgrade',title:'Single PLUS 대비 +761만 원 — 효율 + 럭셔리',items:['8,055만 원 · 333마력 RWD · 0→100km/h 6.6초','Bowers & Wilkins 25스피커 · 1,610W','앞·뒷좌석 통풍 · 일렉트로크로믹 글라스 루프','에어 서스펜션 선택 가능 · 적용 시 8,341만 원']};
    trimGuides.ES90.trims['Twin Motor PLUS']={kind:'power',title:'Single과 다른 핵심 — 456마력 AWD',items:['7,960만 원 · 456마력 AWD · 106kWh · 0→100km/h 5.4초','Single Ultra보다 95만 원 낮은 가격','고급 옵션보다 AWD·출력을 우선하는 선택']};
    trimGuides.ES90.trims['Twin Motor ULTRA']={kind:'upgrade',title:'Twin PLUS 대비 +781만 원 — AWD + 럭셔리',items:['8,741만 원 · 456마력 AWD · 0→100km/h 5.4초','Bowers & Wilkins 25스피커 · 1,610W','앞·뒷좌석 통풍 · 일렉트로크로믹 글라스 루프','에어 서스펜션 선택 가능 · 적용 시 9,041만 원']};
    trimGuides.ES90.trims['Twin Motor Performance ULTRA']={kind:'power',title:'Twin ULTRA 대비 +800만 원 — 680마력 최상위',items:['9,541만 원 · 680마력 AWD · 106kWh · 0→100km/h 4.0초','Ultra 고급 편의사양 유지','듀얼 챔버 에어 서스펜션 기본 · 22인치 휠']};
  }
  if(models.ES90){
    models.ES90.note='Single = 333마력 RWD·효율 / Twin = 456마력 AWD / Ultra = 고급 편의사양 / Performance = 680마력·4.0초 최상위';
    models.ES90.trims=[
      ['Single Motor Extended Range PLUS','7,294만 원','효율형',['333마력 RWD · 92kWh · 0→100km/h 6.6초','Bose 14스피커 · 20인치 휠','가격·효율·주행거리 중심']],
      ['Single Motor Extended Range ULTRA','8,055만 원','럭셔리',['Single Plus 대비 +761만 원','333마력 RWD · B&W · 앞/뒤 통풍 · 일렉트로크로믹 루프','에어 서스펜션 선택 가능 · 적용 시 8,341만 원']],
      ['Twin Motor PLUS','7,960만 원','AWD',['456마력 AWD · 106kWh · 0→100km/h 5.4초','Single Ultra보다 95만 원 낮은 가격','AWD·출력을 우선하는 선택']],
      ['Twin Motor ULTRA','8,741만 원','추천',['Twin Plus 대비 +781만 원','456마력 AWD · B&W · 통풍 · 일렉트로크로믹 루프','에어 서스펜션 선택 가능 · 적용 시 9,041만 원']],
      ['Twin Motor Performance ULTRA','9,541만 원','680마력',['Twin Ultra 대비 +800만 원','680마력 AWD · 0→100km/h 4.0초','에어 서스펜션 기본 · 22인치 휠 · 최상위 구성']]
    ];
  }

  document.documentElement.setAttribute('data-site-final-data','20260821-1');
  return true;
}
function start(){let n=0;const t=setInterval(function(){n++;const ready=document.documentElement.getAttribute('data-site-audit');if((ready||n>30)&&apply()){clearInterval(t)}if(n>80)clearInterval(t)},50)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
