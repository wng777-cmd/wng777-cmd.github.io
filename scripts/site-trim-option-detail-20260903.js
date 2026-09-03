/* 2026-09-03 · 상담용 트림 옵션 상세 비교
   제공된 Volvo The ONE MY26 / MY27 V3.1 Option List를 기준으로,
   모호한 "편의사양 강화" 대신 트림별 추가·변경 품목과 휠을 바로 표시한다.
*/
(function(){
  'use strict';
  if(window.__VOLVO_TRIM_OPTION_DETAIL_20260903__) return;
  window.__VOLVO_TRIM_OPTION_DETAIL_20260903__=true;

  var details={
    XC40:{
      note:'전 트림 197마력 B4 AWD로 주행성능 동일 · Ultra는 주차·조명·오디오·휠 사양이 추가·변경됩니다.',
      baseTitle:'PLUS BRIGHT부터 기본 적용되는 주요 사양',
      base:[
        '파일럿 어시스트 · 어댑티브 크루즈 컨트롤',
        '전/후방 파크 어시스트 센서 · 후방 카메라',
        '앞좌석 전동 시트 · 운전석 메모리 · 전동 럼버/쿠션 익스텐션',
        '앞/뒤 열선시트 · 실내 공기 청정 · 2-구역 독립 온도 조절',
        '12.3인치 운전자 디스플레이 · 9인치 센터 디스플레이 · 무선충전',
        '전동식 파노라믹 선루프 · 전동식 트렁크'
      ],
      trims:{
        'B4 AWD PLUS BRIGHT':{kind:'base',title:'PLUS BRIGHT 주요 구성',items:[
          '197마력 B4 AWD 마일드 하이브리드',
          'LED 헤드램프 · High Performance 사운드 시스템',
          'Bright 그릴·사이드 윈도 데코·루프 레일',
          '18인치 5-스포크 실버 알로이 휠 · 235/55R18'
        ]},
        'B4 AWD ULTRA BRIGHT':{kind:'upgrade',title:'PLUS BRIGHT 대비 +260만 원 · 추가·변경 품목',items:[
          '측방 파크 어시스트 센서 · 360° 카메라',
          'Pixel LED 헤드램프 · 액티브 하이빔',
          '크리스탈 기어 노브 · 리어 파워 차일드 락',
          'Harman/Kardon 프리미엄 사운드 · 서브우퍼',
          '19인치 5-스포크 매트 그래파이트 다이아몬드 컷 휠 · 235/50R19'
        ]},
        'B4 AWD ULTRA DARK':{kind:'style',title:'PLUS BRIGHT 대비 +290만 원 · Ultra 사양과 Dark 외관',items:[
          '측방 센서·360° 카메라 · Pixel LED · 크리스탈 기어 노브',
          '리어 파워 차일드 락 · Harman/Kardon · 서브우퍼',
          '블랙 그릴·사이드 윈도 데코·인티그레이티드 루프 레일',
          '20인치 5-더블 스포크 블랙 다이아몬드 컷 휠 · 245/45R20'
        ]}
      }
    },
    XC60:{
      note:'B5 Plus 대비 Ultra는 시트·오디오·휠이 업그레이드되며, 에어 서스펜션은 별도 선택 사양입니다.',
      baseTitle:'B5 AWD PLUS BRIGHT부터 기본 적용되는 주요 사양',
      base:[
        '파일럿 어시스트 · 어댑티브 크루즈 컨트롤 · 360° 카메라',
        '다이내믹 샤시 · 전동식 파노라믹 선루프 · 전동식 트렁크',
        '앞좌석 전동/메모리 · 전동 럼버/쿠션 익스텐션 · 앞/뒤 열선',
        '실내 공기 청정 · B5 4-구역 / T8 2-구역 독립 온도 조절',
        '12.3인치 운전자 디스플레이 · 11.2인치 센터 디스플레이 · HUD',
        '스마트폰 무선충전'
      ],
      trims:{
        'B5 AWD PLUS BRIGHT':{kind:'base',title:'PLUS BRIGHT 주요 구성',items:[
          '250마력 B5 AWD 마일드 하이브리드 · Nordico 시트',
          'High Performance 사운드 시스템',
          'Bright 그릴·사이드 윈도 데코·루프 레일',
          '19인치 5-더블 스포크 블랙 다이아몬드 컷 휠 · 235/55R19'
        ]},
        'B5 AWD ULTRA BRIGHT':{kind:'upgrade',title:'PLUS BRIGHT 대비 +500만 원 · 추가·변경 품목',items:[
          '테일러드 인스트루먼트 패널 · Nappa 가죽 시트',
          '앞좌석 전동 사이드 서포트 · 마사지 · 통풍시트',
          '이중 접합 라미네이티드 윈도',
          'Bowers & Wilkins 프리미엄 사운드 · 서브우퍼',
          '20인치 5-Y 스포크 글로시 블랙 다이아몬드 컷 휠 · 255/45R20',
          '에어 서스펜션·어댑티브 샤시 선택 시 +260만 원(7,330만 원)'
        ]},
        'B5 AWD ULTRA DARK':{kind:'style',title:'ULTRA BRIGHT와 동일 가격 · Ultra 사양과 Dark 외관',items:[
          'Nappa · 앞좌석 사이드 서포트·마사지·통풍시트',
          '이중 접합 라미네이티드 윈도',
          'Bowers & Wilkins 프리미엄 사운드 · 서브우퍼',
          'R-Design 범퍼 · 블랙 그릴·미러·윈도 데코·루프 레일',
          '20인치 5-Y 스포크 글로시 블랙 다이아몬드 컷 휠 · 255/45R20',
          '에어 서스펜션·어댑티브 샤시 선택 시 +260만 원(7,330만 원)'
        ]},
        'T8 AWD ULTRA BRIGHT':{kind:'power',title:'B5 ULTRA BRIGHT 대비 파워트레인 변경',items:[
          'T8 AWD 플러그인 하이브리드 · 순수 전기주행 최대 61km',
          '에어 서스펜션 · 어댑티브 샤시',
          'Nappa · 앞좌석 사이드 서포트·마사지·통풍시트',
          '이중 접합 라미네이티드 윈도',
          'Bowers & Wilkins 프리미엄 사운드 · 서브우퍼',
          '20인치 5-Y 스포크 글로시 블랙 다이아몬드 컷 휠 · 255/45R20'
        ]}
      }
    },
    XC90:{
      note:'B6 Plus 대비 Ultra는 에어 서스펜션·Nappa·마사지/통풍·B&W·21인치 휠이 추가됩니다.',
      baseTitle:'B6 AWD PLUS BRIGHT부터 기본 적용되는 주요 사양',
      base:[
        '7인승 · 파일럿 어시스트 · 어댑티브 크루즈 컨트롤 · 360° 카메라',
        '투어링 샤시 · 매트릭스 LED 헤드램프 · 전동식 트렁크',
        '앞좌석 전동/메모리 · 앞/뒤 열선시트',
        '4-구역 독립 온도 조절 · 3열 공조장치 · 파노라믹 선루프',
        '12.3인치 운전자 디스플레이 · 11.2인치 센터 디스플레이 · HUD',
        '실내 공기 청정 · 이중 접합 라미네이티드 윈도 · 무선충전'
      ],
      trims:{
        'B6 AWD PLUS BRIGHT':{kind:'base',title:'PLUS BRIGHT 주요 구성',items:[
          '300마력 B6 AWD 마일드 하이브리드 · Nordico 시트',
          'High Performance 사운드 시스템',
          'Bright 외관 테마',
          '20인치 휠 · 275/45R20'
        ]},
        'B6 AWD ULTRA BRIGHT':{kind:'upgrade',title:'PLUS BRIGHT 대비 +1,170만 원 · 추가·변경 품목',items:[
          '에어 서스펜션 · 어댑티브 샤시',
          'Nappa 가죽 · 앞좌석 전동 사이드 서포트·마사지·통풍시트',
          '뒷좌석 측면 윈도 선 블라인드',
          'Bowers & Wilkins 프리미엄 사운드 · 서브우퍼',
          '21인치 휠 · 275/40R21'
        ]},
        'B6 AWD ULTRA DARK':{kind:'style',title:'ULTRA BRIGHT와 동일 가격 · Ultra 사양과 Dark 외관',items:[
          '에어 서스펜션·어댑티브 샤시 · Nappa',
          '앞좌석 사이드 서포트·마사지·통풍 · 뒷좌석 선 블라인드',
          'Bowers & Wilkins 프리미엄 사운드 · 서브우퍼',
          '블랙 그릴·미러·윈도 데코·루프 레일 · 21인치 휠(275/40R21)'
        ]},
        'T8 AWD ULTRA BRIGHT':{kind:'power',title:'B6 ULTRA BRIGHT 대비 파워트레인 변경',items:[
          '462마력 T8 AWD 플러그인 하이브리드 · 순수 전기주행 최대 56km',
          '에어 서스펜션·어댑티브 샤시 · Nappa',
          '앞좌석 사이드 서포트·마사지·통풍 · 뒷좌석 선 블라인드',
          'Bowers & Wilkins 프리미엄 사운드 · 서브우퍼',
          'Bright 외관 테마 · 21인치 휠(275/40R21)'
        ]},
        'T8 AWD ULTRA DARK':{kind:'style',title:'T8 ULTRA BRIGHT와 동일 가격 · Dark 외관',items:[
          '462마력 T8 AWD PHEV · 순수 전기주행 최대 56km',
          '에어 서스펜션·Nappa·마사지·통풍·뒷좌석 선 블라인드',
          'Bowers & Wilkins 프리미엄 사운드 · 서브우퍼',
          '블랙 그릴·미러·윈도 데코·루프 레일 · 21인치 휠(275/40R21)'
        ]}
      }
    },
    S90:{
      note:'B5 Plus 대비 Ultra는 Nappa·마사지·앞/뒤 통풍·뒷좌석 편의·B&W·20인치 휠이 추가됩니다.',
      baseTitle:'B5 PLUS BRIGHT부터 기본 적용되는 주요 사양',
      base:[
        '파일럿 어시스트 · 어댑티브 크루즈 컨트롤 · 360° 카메라',
        '투어링 샤시 · 매트릭스 LED 헤드램프 · 전동식 트렁크',
        '앞좌석 전동/메모리 · 열선시트 · 전동 럼버/쿠션 익스텐션',
        '4-구역 독립 온도 조절 · 실내 공기 청정 · 파노라믹 선루프',
        '12.3인치 운전자 디스플레이 · 11.2인치 센터 디스플레이 · HUD',
        '이중 접합 라미네이티드 윈도 · 스마트폰 무선충전'
      ],
      trims:{
        'B5 PLUS BRIGHT':{kind:'base',title:'PLUS BRIGHT 주요 구성',items:[
          'B5 마일드 하이브리드 · Nordico 시트',
          'High Performance 사운드 시스템',
          'Bright 외관 테마',
          '19인치 휠 · 255/40R19'
        ]},
        'B5 ULTRA BRIGHT':{kind:'upgrade',title:'PLUS BRIGHT 대비 +600만 원 · 추가·변경 품목',items:[
          'Nappa 가죽 · 앞좌석 전동 사이드 서포트·마사지',
          '앞/뒤 통풍시트 · 뒷좌석 럭셔리 암레스트',
          '뒷좌석 측면 파워 선 블라인드 · 전동식 리어 윈도 선 커튼',
          'Bowers & Wilkins 프리미엄 사운드 · 서브우퍼',
          '20인치 휠 · 에어 서스펜션 선택 시 +260만 원(7,390만 원)'
        ]},
        'B5 ULTRA DARK':{kind:'style',title:'ULTRA BRIGHT와 동일 가격 · Ultra 사양과 Dark 외관',items:[
          'Nappa · 앞좌석 사이드 서포트·마사지 · 앞/뒤 통풍',
          '뒷좌석 럭셔리 암레스트·측면 블라인드·리어 선 커튼',
          'Bowers & Wilkins 프리미엄 사운드 · 서브우퍼',
          '블랙 그릴·미러·윈도 데코 · 20인치 휠',
          '에어 서스펜션 선택 시 +260만 원(7,390만 원)'
        ]},
        'T8 AWD ULTRA BRIGHT':{kind:'power',title:'B5 ULTRA BRIGHT 대비 파워트레인·샤시 변경',items:[
          'T8 AWD 플러그인 하이브리드 · 순수 전기주행 최대 65km',
          '후륜 에어 서스펜션 · 어댑티브 샤시',
          'Nappa · 마사지 · 앞/뒤 통풍 · 뒷좌석 블라인드/선 커튼',
          'Bowers & Wilkins 프리미엄 사운드 · 서브우퍼',
          'Bright 외관 테마 · 20인치 휠'
        ]}
      }
    },
    V60CC:{
      note:'단일 Ultra 트림으로, Cross Country 전용 차체와 상위 시트·공조·오디오 사양이 기본입니다.',
      baseTitle:'B5 AWD ULTRA 단일 트림 주요 기본사양',
      base:[
        '파일럿 어시스트 · 어댑티브 크루즈 컨트롤 · 360° 카메라',
        'B5 AWD · 투어링 샤시 · 힐 스타트/경사로 감속 주행 장치',
        'Nappa 가죽 · 앞좌석 마사지·통풍 · 앞/뒤 열선시트',
        '4-구역 독립 온도 조절 · 전동식 파노라믹 선루프',
        '12.3인치 운전자 디스플레이 · 9인치 센터 디스플레이 · HUD',
        'Bowers & Wilkins 프리미엄 사운드 · 서브우퍼 · 전동식 트렁크'
      ],
      trims:{
        'B5 AWD ULTRA':{kind:'base',title:'단일 ULTRA 트림 주요 구성',items:[
          'Cross Country 전용 외관과 높아진 지상고',
          '이중 접합 라미네이티드 윈도',
          '19인치 휠'
        ]}
      }
    },
    EX30:{
      note:'Core·Ultra 모두 272마력 싱글모터 RWD로 주행성능은 동일 · Ultra의 실제 추가·변경 품목과 휠 차이를 아래에 표시했습니다.',
      baseTitle:'CORE부터 공통 적용되는 주요 사양',
      base:[
        '어댑티브 크루즈 컨트롤 · 차선 유지 · 도로 이탈 방지',
        '전/후방 파크 어시스트 센서 · 후방 카메라',
        '스티어링 휠 히팅 · 앞/뒤 열선시트 · 히트펌프',
        '12.3인치 센터 디스플레이 · TMAP 인포테인먼트 2.0',
        '앞좌석 USB-C · Bluetooth · 스마트폰 인테그레이션',
        '전동식 트렁크 · 타이어 공기압 모니터링'
      ],
      trims:{
        'CORE':{kind:'base',title:'CORE 주요 구성',items:[
          '272마력 Single Motor Extended Range · 후륜구동 · 0→100km/h 5.3초',
          'High Performance 사운드 · 5개 스피커',
          '디지털 키 · 리어 스포일러 바디 컬러',
          '18인치 5-스포크 실버 에어로 휠 · 225/55R18'
        ]},
        'ULTRA':{kind:'upgrade',title:'CORE 대비 +488만 원 · 추가·변경 품목',items:[
          '스티어링 어시스트 · 교차로 경보/긴급제동 서포트',
          '파일럿 어시스트 · 파크 파일럿 어시스트',
          '측방 파크 센서 · 360° 카메라 · 눈부심 방지 룸미러/운전석 외부 미러',
          '앞좌석 전동 시트 · 운전석 메모리 · 전동 럼버 서포트',
          '하이 레벨 인테리어 일루미네이션 · 앰비언트 라이트',
          '실내 공기 청정 · 2-구역 독립 온도 조절 · 파노라믹 글라스 루프',
          'Harman/Kardon · 서브우퍼 · 9개 스피커 · 뒷좌석 USB-C',
          '스마트폰 무선충전 · Key Tag · 디지털 키 플러스',
          '리어 스포일러 유광 블랙',
          '19인치 5-스포크 에어로 휠 · 245/45R19'
        ]}
      }
    },
    EX30CC:{
      note:'EX30 Ultra의 편의사양에 Twin Motor AWD·고성능·Cross Country 전용 섀시와 외관을 더한 단일 트림입니다.',
      baseTitle:'EX30 CROSS COUNTRY ULTRA 주요 기본사양',
      base:[
        '파일럿 어시스트 · 파크 파일럿 어시스트 · 360° 카메라',
        '앞좌석 전동 시트 · 운전석 메모리 · 전동 럼버 서포트',
        '실내 공기 청정 · 2-구역 독립 온도 조절 · 파노라믹 글라스 루프',
        'Harman/Kardon · 서브우퍼 · 9개 스피커 · 무선충전',
        'Key Tag · 디지털 키 플러스 · 전동식 트렁크',
        'Cross Country 전용 앞/뒤 스키드 플레이트 · 매트 블랙 휠 아치'
      ],
      trims:{
        'ULTRA':{kind:'power',title:'EX30 ULTRA 대비 +333만 원 · 핵심 변경 품목',items:[
          '428마력 Twin Motor Performance AWD · 0→100km/h 3.7초',
          '1회 충전 최대 329km · 66kWh 배터리 · 견인능력 1,600kg',
          'Cross Country 전용 컴포트 섀시 · 지상고 190mm',
          '19인치 5-스포크 매트 그래파이트/블랙 에어로 휠 · 235/50R19'
        ]}
      }
    },
    EX90:{
      note:'Plus 대비 Ultra는 에어 서스펜션·HD Pixel·Nappa·B&W·22인치 휠이 추가되며, 6인승은 2열 캡틴 시트가 적용됩니다.',
      baseTitle:'Twin Motor PLUS 7-Seater부터 기본 적용되는 주요 사양',
      base:[
        '456마력 Twin Motor AWD · 106kWh · 800V 아키텍처',
        '파일럿 어시스트 · 파크 파일럿 어시스트 · 360° 카메라',
        '앞좌석 전동/메모리 · 전동 사이드 서포트·마사지·통풍',
        '4-구역 독립 온도 조절 · 3열 공조 · 파노라믹 글라스 루프',
        '14.5인치 센터 디스플레이 · HUD · 스마트폰 무선충전',
        '전동식 트렁크 · 실내 공기 청정 · 디지털 키 플러스'
      ],
      trims:{
        'Twin Motor PLUS · 7-Seater':{kind:'base',title:'PLUS 7-Seater 주요 구성',items:[
          '7인승 · 투어링 샤시 · LED 헤드램프',
          'Nordico 시트 · Bose 프리미엄 사운드',
          '21인치 8-스포크 에어로 휠 · 앞 265/45R21 · 뒤 295/40R21'
        ]},
        'Twin Motor ULTRA · 7-Seater':{kind:'upgrade',title:'PLUS 7-Seater 대비 +1,000만 원 · 추가·변경 품목',items:[
          '에어 서스펜션 · 어댑티브 샤시',
          'High-Definition Pixel 헤드램프 · 소프트 도어 클로징',
          'Nappa 가죽 · 일렉트로크로믹 글라스 루프 · 크롬 패키지',
          'Bowers & Wilkins · 앞좌석 헤드레스트 스피커',
          '22인치 5-스포크 에어로 휠 · 앞 265/40R22 · 뒤 295/35R22'
        ]},
        'Twin Motor ULTRA · 6-Seater':{kind:'seat',title:'ULTRA 7-Seater 대비 +200만 원 · 좌석 변경',items:[
          '2열 독립 캡틴 시트 · 6인승 구성',
          '에어 서스펜션·HD Pixel·Nappa·일렉트로크로믹 루프',
          'Bowers & Wilkins · 헤드레스트 스피커 · 소프트 도어 클로징',
          '22인치 5-스포크 에어로 휠 · 앞 265/40R22 · 뒤 295/35R22'
        ]},
        'Twin Motor Performance ULTRA · 7-Seater':{kind:'power',title:'Twin Motor ULTRA 대비 +500만 원 · 성능·휠 변경',items:[
          '680마력 Twin Motor Performance · 1회 충전 최대 448km',
          '에어 서스펜션·HD Pixel·Nappa·마사지·통풍',
          'Bowers & Wilkins · 헤드레스트 스피커 · 7인승',
          '22인치 5-스포크 글로시 블랙 다이아몬드 컷 휠 · 앞 265/40R22 · 뒤 295/35R22'
        ]},
        'Twin Motor Performance ULTRA · 6-Seater':{kind:'seat',title:'Performance 7-Seater 대비 +200만 원 · 좌석 변경',items:[
          '680마력 Twin Motor Performance · 1회 충전 최대 448km',
          '2열 독립 캡틴 시트 · 6인승 구성',
          '에어 서스펜션·HD Pixel·Nappa·Bowers & Wilkins',
          '22인치 5-스포크 글로시 블랙 다이아몬드 컷 휠 · 앞 265/40R22 · 뒤 295/35R22'
        ]}
      }
    },
    ES90:{
      note:'Plus 대비 Ultra는 HD Pixel·Nappa·앞/뒤 통풍·뒷좌석 전동시트·B&W·21인치 휠이 추가됩니다.',
      baseTitle:'Single Motor Extended Range PLUS부터 기본 적용되는 주요 사양',
      base:[
        '파일럿 어시스트 · 파크 파일럿 어시스트 · 360° 카메라',
        '투어링 샤시 · 파노라믹 글라스 루프 · 전동식 트렁크',
        '앞좌석 전동/메모리 · 앞/뒤 열선시트',
        '4-구역 독립 온도 조절 · 실내 공기 청정 시스템',
        '14.5인치 센터 디스플레이 · HUD · 무선충전',
        '디지털 키 플러스 · 타이어 공기압 모니터링'
      ],
      trims:{
        'Single Motor Extended Range PLUS':{kind:'base',title:'Single Motor PLUS 주요 구성',items:[
          '333마력 Single Motor Extended Range · RWD · 92kWh',
          'LED 헤드램프 · Nordico 시트 · Bose 프리미엄 사운드',
          '20인치 7-스포크 에어로 휠 · 앞 245/50R20 · 뒤 275/45R20'
        ]},
        'Single Motor Extended Range ULTRA':{kind:'upgrade',title:'Single Motor PLUS 대비 +761만 원 · 추가·변경 품목',items:[
          'High-Definition Pixel 헤드램프 · 소프트 도어 클로징',
          'Nappa 가죽 · 앞좌석 전동 사이드 서포트·마사지',
          '앞/뒤 통풍시트 · 뒷좌석 전동시트',
          '일렉트로크로믹 글라스 루프 · 이중 접합 라미네이티드 윈도',
          'Bowers & Wilkins · 앞좌석 헤드레스트 스피커 · 크롬 패키지',
          '21인치 5-스포크 에어로 휠 · 앞 245/45R21 · 뒤 275/40R21',
          '에어 서스펜션·어댑티브 샤시 선택 시 8,341만 원'
        ]},
        'Twin Motor PLUS':{kind:'power',title:'Single Motor PLUS 대비 +666만 원 · 파워트레인 변경',items:[
          '456마력 Twin Motor AWD · 1회 충전 최대 520km',
          'LED · Nordico · Bose 프리미엄 사운드',
          '20인치 7-스포크 에어로 휠 · 앞 245/50R20 · 뒤 275/45R20'
        ]},
        'Twin Motor ULTRA':{kind:'power',title:'Twin Motor PLUS 대비 +781만 원 · Ultra 품목 추가',items:[
          '456마력 Twin Motor AWD · 1회 충전 최대 520km',
          'HD Pixel · 소프트 도어 클로징 · Nappa · 앞좌석 마사지',
          '앞/뒤 통풍 · 뒷좌석 전동시트 · 일렉트로크로믹 루프',
          'Bowers & Wilkins · 헤드레스트 스피커 · 크롬 패키지',
          '21인치 5-스포크 에어로 휠 · 앞 245/45R21 · 뒤 275/40R21',
          '에어 서스펜션·어댑티브 샤시 선택 시 9,041만 원'
        ]},
        'Twin Motor Performance ULTRA':{kind:'power',title:'Twin Motor ULTRA 대비 +800만 원 · 성능·샤시·휠 변경',items:[
          '680마력 Twin Motor Performance AWD · 106kWh · 0→100km/h 4.0초',
          '에어 서스펜션 · 어댑티브 샤시 기본 적용',
          'HD Pixel · Nappa · 마사지 · 앞/뒤 통풍 · 뒷좌석 전동시트',
          'Bowers & Wilkins · 헤드레스트 스피커',
          '22인치 5-스포크 글로시 블랙/그래파이트 다이아몬드 컷 휠 · 앞 255/40R22 · 뒤 285/35R22'
        ]}
      }
    }
  };

  function esc(value){
    return String(value).replace(/[&<>"']/g,function(ch){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch];});
  }
  function kindLabel(kind){return ({base:'기본 트림',upgrade:'추가 옵션',style:'스타일·휠 차이',power:'파워트레인 차이',seat:'좌석 구성 차이'})[kind]||'핵심 차이';}
  function optionPanel(key){
    var d=details[key];
    if(!d) return '';
    return '<section class="trim-base-panel"><div class="trim-base-head"><b>'+esc(d.baseTitle)+'</b><span>공통사양</span></div><div class="trim-base-grid">'+d.base.map(function(x){return '<div>'+esc(x)+'</div>';}).join('')+'</div></section>';
  }
  function cardHTML(d,key){
    var guide=details[key];
    return '<div class="cards trim-option-cards">'+d.trims.map(function(t){
      var spec=guide&&guide.trims?guide.trims[t[0]]:null;
      var items=spec&&spec.items?spec.items:t[3];
      var title=spec?spec.title:'주요 구성';
      var kind=spec?spec.kind:'base';
      return '<article class="card trim-option-card '+(t[2]==='추천'?'rec':'')+'">'+
        '<span class="badge">'+esc(t[2])+'</span><h3>'+esc(t[0])+'</h3><div class="price">'+esc(t[1])+'</div>'+
        '<div class="trim-difference-head"><span class="trim-difference-pill '+esc(kind)+'">'+esc(kindLabel(kind))+'</span><strong>'+esc(title)+'</strong></div>'+
        '<ul class="trim-option-list">'+items.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul></article>';
    }).join('')+'</div>';
  }
  function notice(d){
    return '<div class="alert"><b>'+esc(d.year)+' 국내 판매 기준</b><br>실제 출고 차량은 생산 시점과 세부 사양에 따라 차이가 있을 수 있으므로 최종 계약 전 확인해주세요.</div>';
  }
  function openModel(key){
    var d=models[key];var guide=details[key];
    openM(d.year+' · '+d.power,names[key],guide?guide.note:d.note,optionPanel(key)+cardHTML(d,key)+notice(d));
  }
  function openAllTrims(){
    var first=Object.keys(models)[0];
    var tabs=Object.keys(models).map(function(x,i){return '<button class="'+(i?'':'active')+'" onclick="renderTrim(\''+x+'\',this)">'+esc(names[x])+'</button>';}).join('');
    openM('MY26 · MY27','전체 트림 & 가격','공통 기본사양과 각 트림의 실제 추가·변경 품목을 바로 비교할 수 있습니다.','<div class="tabs" id="tt">'+tabs+'</div><div id="tc">'+trimSection(first)+'</div>');
  }
  function trimSection(key){
    var d=models[key];var guide=details[key];
    return '<div class="alert trim-model-heading"><b>'+esc(names[key])+' · '+esc(d.year)+'</b> · '+esc(d.power)+'<br>'+esc(guide?guide.note:d.note)+'</div>'+optionPanel(key)+cardHTML(d,key);
  }
  function renderTrim(key,button){
    document.querySelectorAll('#tt button').forEach(function(x){x.classList.remove('active');});
    if(button) button.classList.add('active');
    document.getElementById('tc').innerHTML=trimSection(key);
  }
  function installStyles(){
    if(document.getElementById('trim-option-detail-20260903-style')) return;
    var style=document.createElement('style');
    style.id='trim-option-detail-20260903-style';
    style.textContent='\
      .trim-base-panel{margin:0 0 14px;padding:15px 16px;border:1px solid #dbe3e7;border-radius:14px;background:#eef3f5}\
      .trim-base-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:10px}.trim-base-head b{font-size:12px}.trim-base-head span{padding:4px 7px;border-radius:999px;background:#dce7ec;color:#27495c;font-size:8px;font-weight:900}\
      .trim-base-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px 14px}.trim-base-grid div{position:relative;padding-left:15px;color:#30434e;font-size:9.5px;line-height:1.5}.trim-base-grid div:before{content:"✓";position:absolute;left:0;color:#244d63;font-weight:900}\
      .cards.trim-option-cards{grid-template-columns:repeat(auto-fit,minmax(260px,1fr));align-items:stretch}.trim-option-card{display:flex;flex-direction:column}\
      .trim-difference-head{display:flex;align-items:flex-start;gap:7px;margin-top:10px;padding-top:11px;border-top:1px solid #e7ecef}.trim-difference-head strong{font-size:10px;line-height:1.45;color:#1a2d38}\
      .trim-difference-pill{flex:0 0 auto;padding:4px 7px;border-radius:999px;background:#e7eef2;color:#28495b;font-size:7px;font-weight:900}.trim-difference-pill.upgrade{background:#e7f1eb;color:#245438}.trim-difference-pill.style{background:#f0ebf4;color:#5b4268}.trim-difference-pill.power{background:#e9edf6;color:#334d7c}.trim-difference-pill.seat{background:#f4eee4;color:#755c2f}\
      .card ul.trim-option-list{margin-top:8px;padding-top:8px}.card ul.trim-option-list li{font-size:9.5px;line-height:1.55;margin:5px 0;color:#354751}.card ul.trim-option-list li:before{color:#244d63}\
      .trim-model-heading{margin-top:0;margin-bottom:12px}\
      @media(max-width:700px){.trim-base-grid{grid-template-columns:1fr}.cards.trim-option-cards{grid-template-columns:1fr}.trim-base-panel{padding:13px}.trim-base-grid div,.card ul.trim-option-list li{font-size:10px}.trim-difference-head strong{font-size:10.5px}}';
    document.head.appendChild(style);
  }
  function install(){
    installStyles();
    Object.keys(details).forEach(function(key){if(models[key]) models[key].note=details[key].note;});
    window.cardHTML=cardHTML;
    window.openModel=openModel;
    window.openAllTrims=openAllTrims;
    window.renderTrim=renderTrim;
    document.documentElement.setAttribute('data-trim-option-detail','20260903-2');
  }
  install();
})();
