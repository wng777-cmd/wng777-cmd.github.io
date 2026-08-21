/* 2026-08-21 post-UI audit fixes
   Runs after site-pdf-ui-v2.js so today's model updates remain visible
   on both desktop and mobile modal layouts.
*/
(function(){
  function apply(){
    if(typeof trimGuides==='undefined' || typeof models==='undefined') return false;

    /* EX30: surface the performance baseline that was previously only in core data. */
    if(trimGuides.EX30){
      trimGuides.EX30.base=[
        '272마력 Single Motor Extended Range · 후륜구동(RWD) · 0→100km/h 약 5.3초',
        '어댑티브 크루즈 컨트롤',
        '전/후방 파크 어시스트 센서 · 후방 카메라',
        '스티어링 휠 히팅 · 앞좌석 열선시트',
        '12.3인치 터치스크린 센터 디스플레이 · TMAP 인포테인먼트 2.0',
        'High Performance 사운드 시스템 · 5개 스피커 · 18인치 휠'
      ];
      trimGuides.EX30.trims.CORE={kind:'base',title:'CORE 주요 기본사양',items:[
        '272마력 싱글모터 · 후륜구동(RWD) · 0→100km/h 약 5.3초',
        '주요 안전·주행 기본사양을 유지한 실속형 구성',
        '수동 차일드 락 · 기본 리어 스포일러 바디 컬러'
      ]};
      trimGuides.EX30.trims.ULTRA={kind:'upgrade',title:'CORE 대비 편의·고급사양 강화',items:[
        'CORE와 동일한 272마력 싱글모터 RWD 성능 · 가격 +488만 원',
        '파일럿 어시스트 · 파크 파일럿 어시스트 · 측방 파크 센서 + 360° 카메라',
        '앞좌석 전동 시트 + 운전석 메모리 · 전동 럼버 서포트',
        '하이 레벨 인테리어 일루미네이션 · 앰비언트 라이트',
        '실내 공기 청정 · 2-구역 독립 온도 조절 · 파노라믹 글라스 루프',
        'Harman/Kardon 프리미엄 사운드 + 서브우퍼 · 9개 스피커',
        '스마트폰 무선충전 · 전동식 트렁크 · 19인치 휠'
      ]};
    }

    /* EX30 Cross Country: the earlier core update was hidden by UI v2. */
    if(trimGuides.EX30CC){
      trimGuides.EX30CC.base=[
        '428마력 Twin Motor Performance AWD · 0→100km/h 3.7초',
        '전장 4,233mm · 휠베이스 2,650mm — 일반 EX30과 동일',
        '전고 1,575mm — 일반 EX30 1,555mm 대비 +20mm',
        '지상고 190mm — 일반 EX30 171mm 대비 +19mm',
        '파일럿 어시스트 · 파크 파일럿 어시스트 · 360° 카메라',
        'Cross Country 전용 컴포트 섀시 · 전용 외관 · 전동식 트렁크'
      ];
      trimGuides.EX30CC.trims.ULTRA={kind:'base',title:'EX30 Ultra와 무엇이 다른가?',items:[
        'EX30 Ultra 대비 +333만 원',
        '싱글모터 RWD → 428마력 듀얼모터 AWD',
        '0→100km/h 약 5.3초 → 3.7초',
        '지상고 +19mm · 전고 +20mm — 실내공간 확대가 아니라 차고를 높인 Cross Country 세팅',
        '전용 컴포트 섀시 · Cross Country 외관 구성'
      ]};
    }

    /* EX90: make the three customer decision axes explicit — trim, seats, performance. */
    if(trimGuides.EX90){
      trimGuides.EX90.base=[
        'MY27 EX90 · 106kWh 배터리 · 800V 전기 아키텍처 · AWD',
        'Twin Motor 456마력 · 0→100km/h 5.5초',
        '파일럿 어시스트 · 파크 파일럿 어시스트 · 360° 카메라',
        '14.5인치 센터 디스플레이 · HUD · 4-구역 독립 온도 조절 · 3열 공조',
        'Plus는 7인승 기본 · Ultra부터 6인승/7인승 선택 가능'
      ];
      trimGuides.EX90.trims['Twin Motor PLUS · 7-Seater']={kind:'base',title:'PLUS 7-Seater — 실속형 플래그십',items:[
        '1억 620만 원 · 456마력 Twin Motor AWD',
        '7인승 구성 · Nordico 시트',
        'Bose 프리미엄 사운드 · LED 헤드램프 · 21인치 휠',
        'EX90의 핵심 안전·전기차 성능을 갖춘 기본 선택'
      ]};
      trimGuides.EX90.trims['Twin Motor ULTRA · 7-Seater']={kind:'upgrade',title:'PLUS 대비 +1,000만 원 — 플래그십 편의사양',items:[
        '1억 1,620만 원 · Twin Motor 성능은 PLUS와 동일',
        '듀얼 챔버 에어 서스펜션 + 어댑티브 샤시',
        'High-Definition Pixel 헤드램프 · 소프트 도어 클로징',
        'Nappa 가죽 · 앞좌석 전동 사이드 서포트 + 마사지',
        '일렉트로크로믹 글라스 루프',
        'Bowers & Wilkins 1,610W 프리미엄 사운드 · 22인치 휠'
      ]};
      trimGuides.EX90.trims['Twin Motor ULTRA · 6-Seater']={kind:'seat',title:'7인승 대비 +200만 원 — 2열 독립시트',items:[
        '1억 1,820만 원 · ULTRA 편의·주행 사양 동일',
        '2열 캡틴 시트 적용 · 6인승 구성',
        '2열 승객 독립성과 3열 접근성을 중시할 때 적합'
      ]};
      trimGuides.EX90.trims['Twin Motor Performance ULTRA · 7-Seater']={kind:'power',title:'Twin Motor ULTRA 대비 +500만 원 — 680마력 Performance',items:[
        '1억 2,120만 원 · 680마력 AWD',
        '0→100km/h 4.2초',
        'ULTRA의 에어 서스펜션·Nappa·B&W 등 플래그십 사양 유지',
        '7인승 구성'
      ]};
      trimGuides.EX90.trims['Twin Motor Performance ULTRA · 6-Seater']={kind:'power',title:'Performance + 6인승 — 최상위 구성',items:[
        '1억 2,320만 원 · 680마력 AWD · 0→100km/h 4.2초',
        'Performance ULTRA 7인승 대비 +200만 원',
        '2열 캡틴 시트 · 6인승 구성',
        '고성능과 2열 편의성을 동시에 원하는 선택'
      ]};
    }

    if(models.EX90){
      models.EX90.note='Plus = 실속형 · Ultra = 플래그십 편의사양 · 6인승 = 2열 독립시트 · Performance = 680마력 고성능';
      models.EX90.trims=[
        ['Twin Motor PLUS · 7-Seater','1억 620만 원','실속형',['456마력 Twin Motor AWD · 0→100km/h 5.5초','7인승 · Nordico 시트 · Bose 프리미엄 사운드','EX90 핵심 안전·전기차 성능을 갖춘 기본 선택']],
        ['Twin Motor ULTRA · 7-Seater','1억 1,620만 원','추천',['Plus 대비 +1,000만 원','듀얼 챔버 에어 서스펜션 · HD Pixel 헤드램프 · 소프트 도어 클로징','Nappa 가죽·마사지 · 일렉트로크로믹 루프 · B&W 1,610W']],
        ['Twin Motor ULTRA · 6-Seater','1억 1,820만 원','6인승',['Ultra 7인승 대비 +200만 원','2열 캡틴 시트 · 6인승 구성','2열 독립성과 3열 접근성 강화']],
        ['Twin Motor Performance ULTRA · 7-Seater','1억 2,120만 원','680마력',['Twin Motor Ultra 대비 +500만 원','680마력 AWD · 0→100km/h 4.2초','Ultra 플래그십 편의사양 유지 · 7인승']],
        ['Twin Motor Performance ULTRA · 6-Seater','1억 2,320만 원','최상위',['Performance 7인승 대비 +200만 원','680마력 AWD · 0→100km/h 4.2초','2열 캡틴 시트 · 6인승 구성']]
      ];
    }

    /* ES90: explain the three decision axes — drivetrain, trim, performance. */
    if(trimGuides.ES90){
      trimGuides.ES90.base=[
        'MY27 ES90 · 800V 전기 아키텍처',
        'Single Motor Extended Range: 333마력 · 후륜구동(RWD) · 92kWh 배터리',
        'Twin Motor: 456마력 · 사륜구동(AWD) · 106kWh 배터리',
        'Plus는 가격·효율 중심, Ultra는 오디오·시트·루프 등 고급 편의사양 강화',
        'Performance는 680마력 AWD 최상위 성능 구성'
      ];
      trimGuides.ES90.trims['Single Motor Extended Range PLUS']={kind:'base',title:'Single PLUS — 가장 합리적인 장거리형',items:[
        '7,294만 원 · 333마력 · 후륜구동(RWD)',
        '92kWh 배터리 · 800V 시스템',
        'Bose 14스피커 프리미엄 사운드',
        '가격과 효율·주행거리 우선 고객에게 적합'
      ]};
      trimGuides.ES90.trims['Single Motor Extended Range ULTRA']={kind:'upgrade',title:'Single PLUS 대비 +761만 원 — 효율 + 럭셔리',items:[
        '8,055만 원 · Single Motor 성능은 PLUS와 동일',
        'Bowers & Wilkins 25스피커 · 1,610W 프리미엄 사운드',
        '앞·뒷좌석 통풍시트 · 일렉트로크로믹 글라스 루프 등 고급 편의사양 강화',
        '듀얼 챔버 에어 서스펜션 선택 가능 · 적용 시 8,341만 원'
      ]};
      trimGuides.ES90.trims['Twin Motor PLUS']={kind:'power',title:'Single과 다른 핵심 — 456마력 AWD',items:[
        '7,960만 원 · 456마력 · 사륜구동(AWD)',
        '106kWh 배터리 · 800V 시스템',
        'Single Ultra보다 95만 원 낮은 가격으로 AWD·출력 강화',
        '고급 옵션보다 구동성능과 가격 균형을 중시할 때 적합'
      ]};
      trimGuides.ES90.trims['Twin Motor ULTRA']={kind:'upgrade',title:'Twin PLUS 대비 +781만 원 — AWD + 럭셔리',items:[
        '8,741만 원 · 456마력 AWD',
        'Bowers & Wilkins 25스피커 · 1,610W',
        '앞·뒷좌석 통풍시트 · 일렉트로크로믹 글라스 루프 등 Ultra 고급사양',
        '듀얼 챔버 에어 서스펜션 선택 가능 · 적용 시 9,041만 원',
        '성능과 편의사양을 함께 원하는 균형형 선택'
      ]};
      trimGuides.ES90.trims['Twin Motor Performance ULTRA']={kind:'power',title:'Twin ULTRA 대비 +800만 원 — 680마력 최상위',items:[
        '9,541만 원 · 680마력 AWD',
        'Ultra 고급 편의사양 유지',
        '듀얼 챔버 에어 서스펜션 기본 적용',
        'ES90에서 성능과 사양을 모두 최우선으로 하는 구성'
      ]};
    }

    if(models.ES90){
      models.ES90.note='Single = 효율·가격 · Twin = 456마력 AWD · Ultra = 고급 편의사양 · Performance = 680마력 최상위';
      models.ES90.trims=[
        ['Single Motor Extended Range PLUS','7,294만 원','효율형',['333마력 RWD · 92kWh · 800V','Bose 14스피커 프리미엄 사운드','가격·효율·주행거리 중심의 기본 선택']],
        ['Single Motor Extended Range ULTRA','8,055만 원','럭셔리',['Single Plus 대비 +761만 원','B&W 25스피커 1,610W · 앞/뒤 통풍 · 일렉트로크로믹 루프','에어 서스펜션 선택 가능 · 적용 시 8,341만 원']],
        ['Twin Motor PLUS','7,960만 원','AWD',['456마력 AWD · 106kWh · 800V','Single Ultra보다 95만 원 낮은 가격','고급 옵션보다 AWD·출력을 우선하는 선택']],
        ['Twin Motor ULTRA','8,741만 원','추천',['Twin Plus 대비 +781만 원','456마력 AWD + B&W·통풍·일렉트로크로믹 루프','에어 서스펜션 선택 가능 · 적용 시 9,041만 원']],
        ['Twin Motor Performance ULTRA','9,541만 원','680마력',['Twin Ultra 대비 +800만 원','680마력 AWD · Ultra 고급 편의사양 유지','듀얼 챔버 에어 서스펜션 기본 · 최상위 구성']]
      ];
    }

    /* Keep today's XC40/XC60/XC90 customer-facing distinctions explicit. */
    if(models.XC40) models.XC40.note='파워트레인은 동일 — Plus는 실속, Ultra는 편의사양 강화, Dark는 외관 테마 차이';
    if(models.XC60) models.XC60.note='Plus는 실속, B5 Ultra는 B&W·마사지/통풍·에어 서스펜션, T8은 충전 가능한 PHEV';
    if(models.XC90) models.XC90.note='Plus는 실속형 7인승, B6 Ultra는 B&W·마사지/통풍·에어 서스펜션, T8은 462마력 PHEV';

    document.documentElement.setAttribute('data-site-audit','20260821-3');
    return true;
  }

  if(!apply()){
    window.addEventListener('load',apply,{once:true});
  }
})();