/* PDF-grounded trim comparison UI v3
   Goal: show shared/base equipment first, then explain what is added or changed as trims rise.
*/
function sourceName(d){return d.year==='MY27'?'Volvo The ONE MY27 Light V3':'Volvo The ONE MY26 Full Ver + Accessories V2'}

const trimGuides={
  XC40:{
    baseName:'B4 AWD PLUS BRIGHT',
    base:[
      '파일럿 어시스트 · 어댑티브 크루즈 컨트롤',
      '전/후방 파크 어시스트 센서 · 후방 카메라',
      '앞좌석 전동 시트 · 운전석 메모리 · 럼버/쿠션 익스텐션',
      '앞/뒤 열선시트 · 실내 공기 청정 · 2-구역 독립 온도 조절',
      '12.3인치 운전자 디스플레이 · 9인치 센터 디스플레이 · 무선충전',
      '전동식 파노라믹 선루프 · 전동식 트렁크'
    ],
    trims:{
      'B4 AWD PLUS BRIGHT':{kind:'base',title:'PLUS BRIGHT 주요 기본사양',items:['18인치 휠','High Performance 사운드 시스템','Bright 외관 기본 테마']},
      'B4 AWD ULTRA BRIGHT':{kind:'upgrade',title:'PLUS BRIGHT 대비 추가·변경',items:['측방 파크 어시스트 센서 + 360° 카메라','Pixel LED 헤드램프 + 액티브 하이빔','크리스탈 기어 노브','리어 파워 차일드 락','Harman/Kardon 프리미엄 사운드 + 서브우퍼','19인치 휠']},
      'B4 AWD ULTRA DARK':{kind:'style',title:'ULTRA BRIGHT 대비 스타일 변경',items:['ULTRA 주요 편의·안전·오디오 사양 동일','블랙 사이드미러 커버','블랙 그릴 / 사이드 윈도 데코','블랙 인티그레이티드 루프 레일','20인치 블랙 다이아몬드 컷 휠']}
    }
  },
  XC60:{
    baseName:'B5 AWD PLUS BRIGHT',
    base:[
      '파일럿 어시스트 · 어댑티브 크루즈 컨트롤 · 360° 카메라',
      'B5 AWD · 다이내믹 샤시',
      'Nordico 시트 · 앞좌석 전동/메모리 · 열선시트',
      '4-구역 독립 온도 조절 · 전동식 파노라믹 선루프',
      '12.3인치 운전자 디스플레이 · 11.2인치 센터 디스플레이 · HUD',
      '전동식 트렁크 · 스마트폰 무선충전'
    ],
    trims:{
      'B5 AWD PLUS BRIGHT':{kind:'base',title:'PLUS BRIGHT 주요 기본사양',items:['19인치 휠','High Performance 사운드 시스템','Nordico 시트']},
      'B5 AWD ULTRA BRIGHT':{kind:'upgrade',title:'PLUS BRIGHT 대비 추가·변경',items:['에어 서스펜션 + 어댑티브 샤시','Nappa 가죽 시트','앞좌석 전동 사이드 서포트 + 마사지','앞좌석 통풍시트','Bowers & Wilkins 프리미엄 사운드 + 서브우퍼','20인치 휠']},
      'B5 AWD ULTRA DARK':{kind:'style',title:'ULTRA BRIGHT 대비 스타일 변경',items:['ULTRA 주요 편의·샤시·시트·오디오 사양 동일','R-Design 범퍼','블랙 사이드미러 커버','블랙 그릴 / 사이드 윈도 데코','블랙 인티그레이티드 루프 레일']},
      'T8 AWD ULTRA BRIGHT':{kind:'power',title:'B5 ULTRA BRIGHT 대비 핵심 변경',items:['T8 AWD 플러그인 하이브리드 파워트레인','ULTRA급 Nappa / 마사지 / 통풍 시트 구성','에어 서스펜션 + 어댑티브 샤시','Bowers & Wilkins 프리미엄 사운드 + 서브우퍼','20인치 휠']}
    }
  },
  XC90:{
    baseName:'B6 AWD PLUS BRIGHT',
    base:[
      '파일럿 어시스트 · 어댑티브 크루즈 컨트롤 · 360° 카메라',
      'B6 AWD · 투어링 샤시 · 7인승',
      'Nordico 시트 · 앞좌석 전동/메모리 · 앞/뒤 열선시트',
      '4-구역 독립 온도 조절 · 3열 공조장치 · 파노라믹 선루프',
      '12.3인치 운전자 디스플레이 · 11.2인치 센터 디스플레이 · HUD',
      '매트릭스 LED 헤드램프 · 이중 접합 라미네이티드 윈도 · 전동 트렁크'
    ],
    trims:{
      'B6 AWD PLUS BRIGHT':{kind:'base',title:'PLUS BRIGHT 주요 기본사양',items:['20인치 휠','High Performance 사운드 시스템','Nordico 시트']},
      'B6 AWD ULTRA BRIGHT':{kind:'upgrade',title:'PLUS BRIGHT 대비 추가·변경',items:['에어 서스펜션 + 어댑티브 샤시','Nappa 가죽 시트','앞좌석 전동 사이드 서포트 + 마사지','앞좌석 통풍시트','뒷좌석 측면 윈도 선 블라인드','Bowers & Wilkins 프리미엄 사운드 + 서브우퍼','21인치 휠']},
      'B6 AWD ULTRA DARK':{kind:'style',title:'ULTRA BRIGHT 대비 스타일 변경',items:['ULTRA 주요 편의·샤시·시트·오디오 사양 동일','블랙 사이드미러 커버','블랙 그릴 / 사이드 윈도 데코','블랙 인티그레이티드 루프 레일']},
      'T8 AWD ULTRA BRIGHT':{kind:'power',title:'B6 ULTRA BRIGHT 대비 핵심 변경',items:['T8 AWD 플러그인 하이브리드 파워트레인','ULTRA급 에어 서스펜션 / Nappa / 마사지 / 통풍 구성','Bowers & Wilkins 프리미엄 사운드 + 서브우퍼','21인치 휠']},
      'T8 AWD ULTRA DARK':{kind:'power',title:'T8 ULTRA BRIGHT 대비 스타일 변경',items:['T8 AWD + ULTRA 주요 사양 동일','블랙 사이드미러 커버','블랙 그릴 / 사이드 윈도 데코','블랙 인티그레이티드 루프 레일']}
    }
  },
  S90:{
    baseName:'B5 PLUS BRIGHT',
    base:[
      '파일럿 어시스트 · 어댑티브 크루즈 컨트롤 · 360° 카메라',
      'B5 · 투어링 샤시',
      'Nordico 시트 · 앞좌석 전동/메모리 · 열선시트',
      '4-구역 독립 온도 조절 · 전동식 파노라믹 선루프',
      '12.3인치 운전자 디스플레이 · 11.2인치 센터 디스플레이 · HUD',
      '매트릭스 LED 헤드램프 · 이중 접합 라미네이티드 윈도 · 전동 트렁크'
    ],
    trims:{
      'B5 PLUS BRIGHT':{kind:'base',title:'PLUS BRIGHT 주요 기본사양',items:['19인치 휠','High Performance 사운드 시스템','Nordico 시트']},
      'B5 ULTRA BRIGHT':{kind:'upgrade',title:'PLUS BRIGHT 대비 추가·변경',items:['Nappa 가죽 시트','앞좌석 전동 사이드 서포트 + 마사지','앞/뒤 통풍시트','뒷좌석 럭셔리 암레스트','뒷좌석 측면 파워 선 블라인드 + 전동식 리어 윈도우 선 커튼','Bowers & Wilkins 프리미엄 사운드 + 서브우퍼','20인치 휠']},
      'B5 ULTRA DARK':{kind:'style',title:'ULTRA BRIGHT 대비 스타일 변경',items:['ULTRA 주요 편의·시트·오디오 사양 동일','블랙 사이드미러 커버','블랙 그릴 / 사이드 윈도 데코']},
      'T8 AWD ULTRA BRIGHT':{kind:'power',title:'B5 ULTRA BRIGHT 대비 핵심 변경',items:['T8 AWD 플러그인 하이브리드 파워트레인','후륜 에어 서스펜션 + 어댑티브 샤시','ULTRA급 Nappa / 마사지 / 통풍 구성','Bowers & Wilkins 프리미엄 사운드 + 서브우퍼','20인치 휠']}
    }
  },
  V60CC:{
    baseName:'B5 AWD ULTRA',
    base:[
      '파일럿 어시스트 · 어댑티브 크루즈 컨트롤 · 360° 카메라',
      'B5 AWD · 투어링 샤시 · 힐 스타트 / 경사로 감속 주행 장치',
      'Nappa 가죽 시트 · 앞좌석 마사지 · 앞좌석 통풍 · 앞/뒤 열선',
      '4-구역 독립 온도 조절 · 전동식 파노라믹 선루프',
      '12.3인치 운전자 디스플레이 · 9인치 센터 디스플레이 · HUD',
      'Bowers & Wilkins 프리미엄 사운드 + 서브우퍼 · 전동식 트렁크'
    ],
    trims:{'B5 AWD ULTRA':{kind:'base',title:'단일 ULTRA 트림 주요 구성',items:['19인치 휠','이중 접합 라미네이티드 윈도','Cross Country 전용 외관 디테일']}}
  },
  EX30:{
    baseName:'CORE',
    base:[
      '어댑티브 크루즈 컨트롤',
      '전/후방 파크 어시스트 센서 · 후방 카메라',
      '스티어링 휠 히팅 · 앞좌석 열선시트',
      '12.3인치 터치스크린 센터 디스플레이 · TMAP 인포테인먼트 2.0',
      'High Performance 사운드 시스템 · 5개 스피커',
      '18인치 휠 · 타이어 공기압 모니터링'
    ],
    trims:{
      'CORE':{kind:'base',title:'CORE 주요 기본사양',items:['후륜 구동 Single Motor Extended Range','수동 차일드 락','기본 리어 스포일러 바디 컬러']},
      'ULTRA':{kind:'upgrade',title:'CORE 대비 추가·변경',items:['스티어링 어시스트 · 교차로 경보/긴급제동 서포트','파일럿 어시스트 · 파크 파일럿 어시스트','측방 파크 센서 + 360° 카메라','앞좌석 전동 시트 + 운전석 메모리 · 전동 럼버 서포트','하이 레벨 인테리어 일루미네이션 · 앰비언트 라이트','실내 공기 청정 · 2-구역 독립 온도 조절 · 파노라믹 글라스 루프','Harman/Kardon 프리미엄 사운드 + 서브우퍼 · 9개 스피커','스마트폰 무선충전 · 전동식 트렁크 · 19인치 휠']}
    }
  },
  EX30CC:{
    baseName:'ULTRA',
    base:[
      'Twin Motor Performance AWD',
      '파일럿 어시스트 · 파크 파일럿 어시스트 · 360° 카메라',
      '앞좌석 전동 시트 · 운전석 메모리 · 전동 럼버 서포트',
      '실내 공기 청정 · 2-구역 독립 온도 조절',
      'Harman/Kardon 프리미엄 사운드 · 스마트폰 무선충전',
      'Cross Country 전용 외관 / 높아진 차체 · 전동식 트렁크'
    ],
    trims:{'ULTRA':{kind:'base',title:'단일 ULTRA 트림 주요 구성',items:['순수 전기 AWD 고성능 구성','Cross Country 전용 스타일','상위 편의·주행 보조 사양 기본 적용']}}
  },
  EX90:{
    baseName:'Twin Motor PLUS · 7-Seater',
    base:[
      'Twin Motor AWD · 7인승',
      '파일럿 어시스트 · 파크 파일럿 어시스트 · 360° 카메라',
      '투어링 샤시 · 힐 스타트 어시스트',
      'Nordico 시트 · 앞좌석 전동/메모리 · 앞좌석 통풍',
      '파노라믹 글라스 루프 · 4-구역 독립 온도 조절 · 3열 공조',
      '14.5인치 센터 디스플레이 · HUD · Bose 프리미엄 사운드 · 21인치 휠'
    ],
    trims:{
      'Twin Motor PLUS · 7-Seater':{kind:'base',title:'PLUS 7-Seater 주요 기본사양',items:['LED 헤드램프','Nordico 시트','Bose 프리미엄 사운드','21인치 휠']},
      'Twin Motor ULTRA · 7-Seater':{kind:'upgrade',title:'PLUS 7-Seater 대비 추가·변경',items:['에어 서스펜션 + 어댑티브 샤시','High-Definition Pixel 헤드램프','소프트 도어 클로징 · 크롬 패키지','Nappa 가죽 시트 · 앞좌석 전동 사이드 서포트 + 마사지','일렉트로크로믹 글라스 루프','Bowers & Wilkins 프리미엄 사운드 + 앞좌석 헤드레스트 스피커','22인치 휠']},
      'Twin Motor ULTRA · 6-Seater':{kind:'seat',title:'ULTRA 7-Seater 대비 좌석 구성 변경',items:['ULTRA 주요 편의·샤시·오디오 사양 동일','2열 캡틴 시트 적용','6인승 구성']},
      'Twin Motor Performance ULTRA · 7-Seater':{kind:'power',title:'Twin Motor ULTRA 대비 핵심 변경',items:['Twin Motor Performance 파워트레인','ULTRA 편의·샤시·오디오 구성 유지','7인승 구성']},
      'Twin Motor Performance ULTRA · 6-Seater':{kind:'power',title:'Performance ULTRA 7-Seater 대비 좌석 변경',items:['Twin Motor Performance 파워트레인','ULTRA 편의·샤시·오디오 구성 유지','2열 캡틴 시트 · 6인승 구성']}
    }
  },
  ES90:{
    baseName:'Single Motor Extended Range PLUS',
    base:[
      'Single Motor Extended Range · 후륜 구동',
      '파일럿 어시스트 · 파크 파일럿 어시스트 · 360° 카메라',
      '투어링 샤시 · 힐 스타트 어시스트',
      'Nordico 시트 · 앞좌석 전동/메모리 · 앞/뒤 열선',
      '파노라믹 글라스 루프 · 4-구역 독립 온도 조절',
      '14.5인치 센터 디스플레이 · HUD · Bose 프리미엄 사운드 · 20인치 휠'
    ],
    trims:{
      'Single Motor Extended Range PLUS':{kind:'base',title:'Single Motor PLUS 주요 기본사양',items:['LED 헤드램프','Nordico 시트','Bose 프리미엄 사운드','20인치 휠']},
      'Single Motor Extended Range ULTRA':{kind:'upgrade',title:'Single Motor PLUS 대비 추가·변경',items:['High-Definition Pixel 헤드램프','이중 접합 라미네이티드 윈도','소프트 도어 클로징 · 크롬 패키지','Nappa 가죽 시트 · 앞좌석 마사지','앞/뒤 통풍시트 · 뒷좌석 전동시트','일렉트로크로믹 글라스 루프','Bowers & Wilkins 프리미엄 사운드 + 앞좌석 헤드레스트 스피커','21인치 휠','에어 서스펜션 + 어댑티브 샤시 선택 가능(옵션 사양)']},
      'Twin Motor PLUS':{kind:'power',title:'Single Motor PLUS 대비 핵심 변경',items:['Twin Motor AWD · 4륜 구동','PLUS 편의·안전·오디오 구성 유지','20인치 휠']},
      'Twin Motor ULTRA':{kind:'power',title:'Single Motor ULTRA 대비 핵심 변경',items:['Twin Motor AWD · 4륜 구동','ULTRA 편의·시트·오디오 구성 유지','21인치 휠','에어 서스펜션 + 어댑티브 샤시 선택 가능(옵션 사양)']},
      'Twin Motor Performance ULTRA':{kind:'power',title:'Twin Motor ULTRA 대비 핵심 변경',items:['Twin Motor Performance AWD','에어 서스펜션 + 어댑티브 샤시 기본 적용','ULTRA 편의·시트·오디오 구성 유지','22인치 휠']}
    }
  }
};

function ensureTrimStyles(){
  if(document.getElementById('trim-diff-v3-style'))return;
  const s=document.createElement('style');
  s.id='trim-diff-v3-style';
  s.textContent=`
  .base-spec-box{margin:0 0 16px;padding:16px 17px;border:1px solid #dce3e6;border-radius:16px;background:#f6f8f8}
  .base-spec-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:11px}
  .base-spec-head b{font-size:13px}.base-spec-head span{font-size:9px;color:#667780;font-weight:800}
  .base-spec-list{display:grid;grid-template-columns:1fr 1fr;gap:7px 12px}
  .base-spec-item{font-size:10px;line-height:1.45;color:#263640;position:relative;padding-left:14px}
  .base-spec-item:before{content:'✓';position:absolute;left:0;top:0;font-weight:900;color:#274a61}
  .trim-card .trim-diff{margin-top:11px;padding-top:11px;border-top:1px solid #e8ecee}
  .trim-diff-head{display:flex;align-items:center;gap:7px;margin-bottom:8px}
  .trim-diff-head strong{font-size:10px;line-height:1.35}
  .diff-pill{display:inline-flex;align-items:center;min-height:20px;padding:0 7px;border-radius:999px;background:#e8eef1;color:#213a49;font-size:7px;font-weight:900;white-space:nowrap}
  .diff-pill.upgrade{background:#e9f2ed;color:#27573a}.diff-pill.style{background:#f1edf6;color:#584166}.diff-pill.power{background:#eef0f6;color:#374b75}.diff-pill.seat{background:#f5f0e8;color:#725c33}
  .trim-diff ul{margin:0;padding-left:17px}.trim-diff li{font-size:9px;line-height:1.55;color:#42525c;margin:3px 0}
  .trim-card[aria-expanded='false'] .trim-diff{display:none}
  .trim-card[aria-expanded='true'] .trim-diff{display:block}
  .trim-toggle{user-select:none}
  @media(max-width:700px){.base-spec-list{grid-template-columns:1fr}.base-spec-box{padding:14px}.base-spec-item{font-size:10px}.trim-diff li{font-size:10px}.trim-diff-head strong{font-size:11px}}
  `;
  document.head.appendChild(s);
}

function guideFor(key){return trimGuides[key]||null}
function kindLabel(k){return ({base:'기본 트림',upgrade:'상위 트림 추가',style:'스타일 변경',power:'파워트레인 변경',seat:'좌석 구성 변경'})[k]||'핵심 차이'}
function basePanel(key){
  const g=guideFor(key); if(!g||!g.base||!g.base.length)return '';
  return '<div class="base-spec-box"><div class="base-spec-head"><b>공통으로 먼저 볼 주요 기본사양</b><span>'+g.baseName+' 기준</span></div><div class="base-spec-list">'+g.base.map(x=>'<div class="base-spec-item">'+x+'</div>').join('')+'</div></div>';
}
function trimDetail(key,t){
  const g=guideFor(key); const spec=g&&g.trims?g.trims[t[0]]:null;
  if(!spec)return {kind:'base',title:'주요 구성',items:t[3]||[]};
  return spec;
}
function cardHTML(d,key){
  return '<div class="cards">'+d.trims.map(t=>{
    const spec=trimDetail(key,t);
    const isBase=spec.kind==='base';
    const label=isBase?'기본사양 보기 +':'추가·변경 옵션 보기 +';
    return '<div class="card trim-card '+(t[2]==='추천'?'rec':'')+'" role="button" tabindex="0" aria-expanded="false" onclick="toggleTrimCard(this)" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();toggleTrimCard(this)}">'+
      '<span class="badge">'+t[2]+'</span><h3>'+t[0]+'</h3><div class="price">'+t[1]+'</div>'+
      '<div class="trim-toggle">'+label+'</div>'+
      '<div class="trim-diff"><div class="trim-diff-head"><span class="diff-pill '+spec.kind+'">'+kindLabel(spec.kind)+'</span><strong>'+spec.title+'</strong></div><ul>'+spec.items.map(v=>'<li>'+v+'</li>').join('')+'</ul></div>'+
      '</div>';
  }).join('')+'</div>';
}
function toggleTrimCard(el){
  const isOpen=el.getAttribute('aria-expanded')==='true';
  document.querySelectorAll('.trim-card[aria-expanded="true"]').forEach(x=>{if(x!==el){x.setAttribute('aria-expanded','false');const tx=x.querySelector('.trim-toggle');if(tx){const k=tx.dataset.kind;tx.textContent=k==='base'?'기본사양 보기 +':'추가·변경 옵션 보기 +'}}});
  el.setAttribute('aria-expanded',isOpen?'false':'true');
  const hint=el.querySelector('.trim-toggle');
  if(hint){
    const isBase=el.querySelector('.diff-pill.base')!==null;
    hint.dataset.kind=isBase?'base':'diff';
    hint.textContent=isOpen?(isBase?'기본사양 보기 +':'추가·변경 옵션 보기 +'):'접기 −';
  }
}
function modelNotice(d){return '<div class="alert"><b>'+d.year+' 기준</b> · '+sourceName(d)+'<br>기본사양과 트림별 추가·변경 항목은 제공된 Option List를 기준으로 고객이 비교하기 쉬운 핵심 항목만 추렸습니다. 실제 출고 가능 사양과 세부 적용 여부는 상담 시 최종 확인해주세요.</div>'}
const vehicleDimensions={
  XC40:['4,440','1,873','1,652','2,702','205','Volvo Support KR'],
  XC60:['4,708','1,902','1,655','2,865','209','Volvo Support KR'],
  XC90:['4,953','1,923','1,767–1,771','2,984','205–216','Volvo Support KR'],
  S90:['5,090','1,890','1,438','3,061','144','Volvo Support KR'],
  V60CC:['4,787','1,893','1,499','2,875','197','Volvo Support KR'],
  EX30:['4,233','1,838','1,550','2,650','171','Volvo Support KR'],
  EX30CC:['4,235','1,840','1,575','2,650','190','Volvo The ONE MY26 V3.1'],
  EX90:['5,037','1,964','1,741','2,985','213','Volvo Support KR'],
  ES90:['5,000','1,940','1,555','3,102','177','Volvo The ONE MY27 V3.1 / Volvo Support KR']
};
function ensureVehicleSpecStyles(){
  if(document.getElementById('vehicle-spec-direct-style'))return;
  const s=document.createElement('style');s.id='vehicle-spec-direct-style';
  s.textContent='.vehicle-spec-panel{margin:0 0 14px;padding:14px;border:1px solid #e3e8eb;border-radius:14px;background:#f8fafb}.vehicle-spec-head{display:flex;justify-content:space-between;gap:10px;align-items:flex-end;margin-bottom:10px}.vehicle-spec-head h3{margin:0;font-size:14px;color:#142b38}.vehicle-spec-head small{font-size:8px;color:#74828a}.vehicle-spec-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:7px}.vehicle-spec-item{padding:10px 8px;border:1px solid #e7ecef;border-radius:10px;background:#fff;text-align:center}.vehicle-spec-item span{display:block;font-size:8px;color:#718089;font-weight:800;margin-bottom:4px}.vehicle-spec-item strong{display:block;font-size:12px;color:#152f3d;white-space:nowrap}.vehicle-spec-item em{font-style:normal;font-size:7px;color:#819099}@media(max-width:700px){.vehicle-spec-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.vehicle-spec-item:last-child{grid-column:1/-1}.vehicle-spec-head{align-items:flex-start;flex-direction:column;gap:3px}}';
  document.head.appendChild(s);
}
function vehicleSpecHTML(key){
  const x=vehicleDimensions[key];if(!x)return '';
  const item=(l,v)=>'<div class="vehicle-spec-item"><span>'+l+'</span><strong>'+v+'</strong><em>mm</em></div>';
  return '<section class="vehicle-spec-panel"><div class="vehicle-spec-head"><h3>차량 제원</h3><small>'+x[5]+'</small></div><div class="vehicle-spec-grid">'+item('전장',x[0])+item('전폭',x[1])+item('전고',x[2])+item('휠베이스',x[3])+item('지상고',x[4])+'</div></section>';
}
function openModel(key){const d=models[key];ensureTrimStyles();ensureVehicleSpecStyles();openM(d.year+' · '+d.power,names[key],d.note,vehicleSpecHTML(key)+basePanel(key)+cardHTML(d,key)+modelNotice(d))}
function openAllTrims(){
  ensureTrimStyles();
  let tabs=Object.keys(models).map((x,i)=>'<button class="'+(i?'':'active')+'" onclick="renderTrim(\''+x+'\',this)">'+names[x]+'</button>').join('');
  openM('MY26 FULL · MY27 LIGHT','전체 트림 & 가격','기본사양을 먼저 보고, 상위 트림에서 무엇이 추가되는지 바로 비교할 수 있습니다.','<div class="tabs" id="tt">'+tabs+'</div><div id="tc"><div class="alert" style="margin-top:0;margin-bottom:10px"><b>XC40 · MY26</b> · '+sourceName(models.XC40)+'</div>'+basePanel('XC40')+cardHTML(models.XC40,'XC40')+'</div>')
}
function renderTrim(x,b){
  ensureTrimStyles();
  document.querySelectorAll('#tt button').forEach(z=>z.classList.remove('active'));b.classList.add('active');
  const d=models[x];
  document.getElementById('tc').innerHTML='<div class="alert" style="margin-top:0;margin-bottom:10px"><b>'+names[x]+' · '+d.year+'</b> · '+sourceName(d)+'<br>'+d.power+'</div>'+basePanel(x)+cardHTML(d,x)
}

document.addEventListener('DOMContentLoaded',ensureTrimStyles);
