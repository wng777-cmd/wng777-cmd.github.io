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

    /* Keep today's XC40/XC60/XC90 customer-facing distinctions explicit. */
    if(models.XC40) models.XC40.note='파워트레인은 동일 — Plus는 실속, Ultra는 편의사양 강화, Dark는 외관 테마 차이';
    if(models.XC60) models.XC60.note='Plus는 실속, B5 Ultra는 B&W·마사지/통풍·에어 서스펜션, T8은 충전 가능한 PHEV';
    if(models.XC90) models.XC90.note='Plus는 실속형 7인승, B6 Ultra는 B&W·마사지/통풍·에어 서스펜션, T8은 462마력 PHEV';

    document.documentElement.setAttribute('data-site-audit','20260821-1');
    return true;
  }

  if(!apply()){
    window.addEventListener('load',apply,{once:true});
  }
})();