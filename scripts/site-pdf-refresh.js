const models={
XC40:{year:'MY26',power:'B4 AWD · 48V Mild Hybrid',note:'파워트레인은 동일 — Plus는 실속, Ultra는 360° 카메라·하만카돈·픽셀 LED 등 편의사양 강화',trims:[
['B4 AWD PLUS BRIGHT','5,230만 원','실속형',['197마력 B4 AWD 마일드 하이브리드 · 전 트림 동일','파노라마 글라스 루프 · 파일럿 어시스트 · 에어 클리너 등 주요 사양 기본','18인치 휠 · Bright 외관 테마']],
['B4 AWD ULTRA BRIGHT','5,490만 원','편의형',['Plus 대비 +260만 원','360° 카메라 · Harman Kardon 프리미엄 사운드 · 픽셀 LED 헤드라이트','Ultra 고급 편의사양 · Bright 외관 테마']],
['B4 AWD ULTRA DARK','5,520만 원','스타일',['Ultra Bright와 주요 편의사양 동일 · +30만 원','크롬 디테일 대신 블랙 하이글로시 외관 테마','20인치 5-더블 스포크 블랙 다이아몬드 컷 휠']]
]},
XC60:{year:'MY26',power:'B5 AWD Mild Hybrid / T8 AWD Plug-in Hybrid',note:'Plus는 실속, B5 Ultra는 승차감·오디오·시트 강화, T8 Ultra는 전기주행 가능한 PHEV',trims:[
['B5 AWD PLUS BRIGHT','6,570만 원','실속형',['250마력 B5 AWD · 가솔린 기반 48V 마일드 하이브리드','Plus 기본 편의·안전사양 · Bright 외관 테마','Ultra 대비 가격 경쟁력 중심']],
['B5 AWD ULTRA BRIGHT','7,330만 원','추천',['Plus 대비 +760만 원 · Bowers & Wilkins 하이파이 오디오','앞좌석 전동 사이드 서포트 · 마사지 · 통풍 시트','액티브 에어 서스펜션 기본 · Bright 외관 테마']],
['B5 AWD ULTRA DARK','7,330만 원','스타일',['Ultra Bright와 주요 편의·주행 사양 동일','Bowers & Wilkins · 마사지/통풍 · 액티브 에어 서스펜션 기본','Dark 외관 테마 · Bright와 동일 가격']],
['T8 AWD ULTRA BRIGHT','9,120만 원','PHEV',['외부 충전 가능한 T8 AWD 플러그인 하이브리드','1회 충전 시 순수 전기모드 최대 61km','Ultra급 프리미엄 사양 · Bright 단일 외관 테마']]
]},
XC90:{year:'MY26',power:'B6 AWD Mild Hybrid / T8 AWD Plug-in Hybrid',note:'3열과 넉넉한 공간이 필요한 7인승 SUV',trims:[
['B6 AWD PLUS BRIGHT','8,820만 원','7인승',['B6 AWD 마일드 하이브리드','PLUS 구성','Bright 외관 테마']],
['B6 AWD ULTRA BRIGHT','9,990만 원','추천',['B6 AWD','ULTRA 구성','Bright 외관 테마']],
['B6 AWD ULTRA DARK','9,990만 원','스타일',['B6 AWD','ULTRA 구성','Dark 외관 테마']],
['T8 AWD ULTRA BRIGHT','1억 1,620만 원','PHEV',['T8 AWD 플러그인 하이브리드','ULTRA 구성','Bright 외관 테마']],
['T8 AWD ULTRA DARK','1억 1,620만 원','PHEV',['T8 AWD 플러그인 하이브리드','ULTRA 구성','Dark 외관 테마']]
]},
S90:{year:'MY26',power:'B5 Mild Hybrid / T8 AWD Plug-in Hybrid',note:'안락함과 뒷좌석 편안함을 중시하는 플래그십 세단',trims:[
['B5 PLUS BRIGHT','6,530만 원','실속형',['B5 마일드 하이브리드','PLUS 구성','Bright 외관 테마']],
['B5 ULTRA BRIGHT','7,130만 원','추천',['ULTRA 구성','Bright 외관 테마','에어 서스펜션 선택 시 7,390만 원']],
['B5 ULTRA DARK','7,130만 원','스타일',['ULTRA 구성','Dark 외관 테마','에어 서스펜션 선택 시 7,390만 원']],
['T8 AWD ULTRA BRIGHT','9,140만 원','PHEV',['T8 AWD 플러그인 하이브리드','ULTRA 구성','Bright 외관 테마']]
]},
V60CC:{year:'MY26',power:'B5 AWD Mild Hybrid',note:'세단의 승차감과 SUV 활용성을 섞은 크로스컨트리',trims:[
['B5 AWD ULTRA','6,450만 원','단일 트림',['B5 AWD 마일드 하이브리드','ULTRA 구성','Cross Country 전용 스타일']]
]},
EX30:{year:'MY26',power:'Single Motor Extended Range · RWD',note:'Core는 실속, Ultra는 편의·고급사양 강화 — 주행성능은 동일',trims:[
['CORE','3,991만 원','실속형',['272마력 싱글모터 · 후륜구동(RWD)','0→100km/h 약 5.3초','주요 안전기술은 기본 · 가격 경쟁력 중심']],
['ULTRA','4,479만 원','편의형',['272마력 싱글모터 · 후륜구동(RWD)','Core 대비 +488만 원','360° 카메라 · 파크 파일럿 · 하만카돈 · 파노라마 루프 등 편의사양 강화']]
]},
EX30CC:{year:'MY26',power:'Twin Motor Performance AWD',note:'기본 골격은 EX30과 같지만, 차고를 높이고 AWD·고성능·Cross Country 전용 세팅을 더한 모델',trims:[
['ULTRA','4,812만 원','고성능 AWD',['428마력 듀얼모터 · 사륜구동(AWD) · 0→100km/h 3.7초','전장·휠베이스 동일(4,233 / 2,650mm) · 지상고 190mm(EX30 171mm 대비 +19mm)','전용 컴포트 섀시 · 19인치 CC 휠 · 견고한 외관 · EX30 Ultra 대비 +333만 원']]
]},
EX90:{year:'MY27',power:'Twin Motor / Twin Motor Performance',note:'6·7인승을 선택할 수 있는 대형 순수 전기 SUV',trims:[
['Twin Motor PLUS · 7-Seater','1억 620만 원','7인승',['Twin Motor','PLUS 구성','7인승']],
['Twin Motor ULTRA · 7-Seater','1억 1,620만 원','7인승',['Twin Motor','ULTRA 구성','7인승']],
['Twin Motor ULTRA · 6-Seater','1억 1,820만 원','6인승',['Twin Motor','ULTRA 구성','6인승']],
['Twin Motor Performance ULTRA · 7-Seater','1억 2,120만 원','Performance',['Twin Motor Performance','ULTRA 구성','7인승']],
['Twin Motor Performance ULTRA · 6-Seater','1억 2,320만 원','Performance',['Twin Motor Performance','ULTRA 구성','6인승']]
]},
ES90:{year:'MY27',power:'Single Motor Extended Range / Twin Motor / Performance',note:'주행거리·AWD·성능 중 우선순위를 고를 수 있는 전기 세단',trims:[
['Single Motor Extended Range PLUS','7,294만 원','효율형',['Single Motor Extended Range','PLUS 구성','후륜 기반']],
['Single Motor Extended Range ULTRA','8,055만 원','상위형',['Single Motor Extended Range','ULTRA 구성','에어 서스펜션 선택 시 8,341만 원']],
['Twin Motor PLUS','7,960만 원','AWD',['Twin Motor','PLUS 구성','AWD']],
['Twin Motor ULTRA','8,741만 원','추천',['Twin Motor','ULTRA 구성','에어 서스펜션 선택 시 9,041만 원']],
['Twin Motor Performance ULTRA','9,541만 원','Performance',['Twin Motor Performance','ULTRA 구성','AWD 고성능']]
]}
};
const names={XC40:'XC40',XC60:'XC60',XC90:'XC90',S90:'S90',V60CC:'V60 Cross Country',EX30:'EX30',EX30CC:'EX30 Cross Country',EX90:'EX90',ES90:'ES90'};
function moneyMinMax(arr){let nums=[];arr.forEach(x=>{let s=x[1].replace(/[^0-9]/g,'');if(x[1].includes('억')){let m=x[1].match(/(\d+)억\s*([\d,]*)/);if(m)nums.push(parseInt(m[1])*10000+parseInt((m[2]||'0').replace(/,/g,'')))}else nums.push(parseInt(s||0))});return nums}
function cardHTML(d){return '<div class="cards">'+d.trims.map((t,i)=>'<div class="card '+(t[2]==='추천'?'rec':'')+'"><span class="badge">'+t[2]+'</span><h3>'+t[0]+'</h3><div class="price">'+t[1]+'</div><ul>'+t[3].map(v=>'<li>'+v+'</li>').join('')+'</ul></div>').join('')+'</div>'}
function openM(k,t,s,h){mk.textContent=k;mt.textContent=t;ms.textContent=s;mbody.innerHTML=h;m.classList.add('open');document.body.style.overflow='hidden'}
function closeM(){m.classList.remove('open');document.body.style.overflow=''}
function openModel(key){const d=models[key];openM(d.year+' · '+d.power,names[key],d.note,cardHTML(d)+'<div class="alert">가격은 제공된 Volvo The ONE 자료의 소비자 판매가격 기준입니다. 세부 옵션 적용 여부와 실제 출고 가능 사양은 상담 시 최종 확인해주세요.</div>')}
function filterCategory(cat,b){document.querySelectorAll('.category-card').forEach(x=>x.classList.remove('active'));if(b)b.classList.add('active');const titles={suv:'SUV 라인업',electric:'전기차 라인업',sedan:'세단 · 크로스컨트리',all:'전체 모델'};selectedCategoryTitle.textContent=titles[cat]||'전체 모델';document.querySelectorAll('#modelGrid .model').forEach(x=>x.style.display=(cat==='all'||x.dataset.cat===cat)?'block':'none')}
function openAllTrims(){let tabs=Object.keys(models).map((x,i)=>'<button class="'+(i?'':'active')+'" onclick="renderTrim(\''+x+'\',this)">'+names[x]+'</button>').join('');openM('MY26 · MY27','전체 트림 & 가격','모델연도를 구분해 확인하세요.','<div class="tabs" id="tt">'+tabs+'</div><div id="tc">'+cardHTML(models.XC40)+'</div>')}
function renderTrim(x,b){document.querySelectorAll('#tt button').forEach(z=>z.classList.remove('active'));b.classList.add('active');document.getElementById('tc').innerHTML='<div class="alert" style="margin-top:0;margin-bottom:10px">'+models[x].year+' · '+models[x].power+'</div>'+cardHTML(models[x])}
function openCompare(){const h=`<div class="compare-grid"><div class="compare"><b>도심·컴팩트</b><div class="big">XC40 / EX30</div><small>크기가 부담스럽지 않고 일상 주행이 많은 고객에게. 내연기관 기반 AWD가 필요하면 XC40, 순수 전기라면 EX30.</small></div><div class="compare"><b>패밀리·균형</b><div class="big">XC60</div><small>B5 마일드 하이브리드와 T8 플러그인 하이브리드를 한 차종에서 비교할 수 있는 중형 SUV.</small></div><div class="compare"><b>대형·3열</b><div class="big">XC90 / EX90</div><small>7인승이 필요하면 XC90, 순수 전기와 6·7인승 선택을 원하면 MY27 EX90.</small></div><div class="compare"><b>세단</b><div class="big">S90 / ES90</div><small>전통적인 플래그십 세단은 S90, 순수 전기 세단은 MY27 ES90.</small></div><div class="compare"><b>아웃도어·왜건</b><div class="big">V60 Cross Country</div><small>세단과 SUV 사이의 낮은 차체, 넓은 적재 활용성을 원하는 고객에게.</small></div><div class="compare"><b>고성능 EV</b><div class="big">EX30CC / ES90 Performance</div><small>작은 AWD 고성능 SUV 또는 대형 전기 세단 Performance 중 성격이 확실히 갈립니다.</small></div></div><div class="alert">공식 MY26 자료에는 차체 크기·적재공간·연료탱크·견인력·가격 비교표가 포함되어 있습니다. 홈페이지에서는 첫 선택에 필요한 항목만 간단히 보여줍니다.</div>`;openM('VOLVO LINEUP','어떤 모델부터 보면 될까요?','용도와 차체 형태를 먼저 정하면 선택이 빨라집니다.',h)}
function openTech(){const h=`<div class="info-grid"><div class="info-box"><h3>TMAP 인포테인먼트 2.0</h3><p>TMAP, FLO, NUGU, TMAP STORE 등 국내 사용 환경에 맞춘 인포테인먼트 서비스를 차량에서 이용할 수 있습니다.</p></div><div class="info-box"><h3>주행 보조 & 안전</h3><p>파일럿 어시스트 계열, BLIS, Cross Traffic Alert 등 운전자 지원 기능을 모델별 구성에 맞춰 제공합니다.</p></div><div class="info-box"><h3>전기차 주행 기능</h3><p>주행거리 어시스턴트, One Pedal Drive, 충전 관련 기능 등 전기차 사용에 필요한 기능을 쉽게 확인할 수 있습니다.</p></div><div class="info-box"><h3>주행 모드</h3><p>플러그인 하이브리드 계열은 Hybrid, Pure, Power, Constant AWD 등 상황에 맞는 주행 모드를 제공합니다.</p></div><div class="info-box"><h3>Volvo Assistance</h3><p>SOS Call과 Assistance 기능을 통해 긴급상황과 차량 지원 연결을 돕습니다.</p></div><div class="info-box"><h3>360° 카메라 · HUD · 오디오</h3><p>상위 트림에서는 360° 카메라, 헤드업 디스플레이, Bowers & Wilkins 등 편의·오디오 사양이 확대될 수 있습니다.</p></div></div><div class="alert">기능 적용 여부는 모델과 트림에 따라 다릅니다. 특정 기능이 꼭 필요하면 트림 선택 전에 적용 여부를 확인해드릴게요.</div>`;openM('VOLVO SMART TECHNOLOGY','볼보 기술을 쉽게 보기','기능 이름보다 실제 사용 장면을 기준으로 정리했습니다.',h)}
const acc={'EX30 / EX30CC':['Roofbox 400 · 267만 원','Roofbox 430 Premier · 426만 원','Roofbox 500 · 270만 원','Dust Free Package · 55만 원','Dust Free Plus · 107만 원','Roof Basket Package · 208만 원'],'EX90':['Urban Road Package · 349만 원','Off-City Package · 81만 원','Integrated Running Board · 385만 5,060원','EV All-Weather Protection Package · 80만 원','EV Fabric Protection Package · 69만 원'],'XC90':['Towbar Package · 230만 원','Roofbox 400 · 279만 원','Roofbox 430 Premier · 438만 원','Roofbox 500 · 282만 원','Rooftop Bicycle Carrier Package · 117만 원','Winter Sports Package · 150만 원'],'XC60':['Towbar Package · 208만 원','Roofbox 400 · 267만 원','Roofbox 430 Premier · 426만 원','Roofbox 500 · 286만 원','Rooftop Bicycle Carrier Package · 119만 원','Pet Lover Package · 195만 원'],'XC40':['Towbar Package · 196만 원','Roofbox 400 · 211만 원','Roofbox 430 Premier · 426만 원','Roofbox 500 · 270만 원','Rooftop Bicycle Carrier Package · 119만 원','Winter Sports Package · 150만 원'],'S90':['Winter Sports Package · 150만 원','Protective Plate Package · 88만 원','Comfort Package · 87만 원'],'V60CC':['Towbar Package · 213만 원','Roofbox 400 · 279만 원','Roofbox 430 Premier · 438만 원','Roofbox 500 · 282만 원','Rooftop Bicycle Carrier Package · 131만 원','Winter Sports Package · 150만 원']};
function openAccessories(){let h='<div class="access-grid">'+Object.keys(acc).map(k=>'<div class="access"><h3>'+k+'</h3><p>대표 구성 예시</p><div class="examples">'+acc[k].join('<br>')+'</div></div>').join('')+'</div><div class="alert">액세서리는 종류와 차량 적용 조건이 많아 홈페이지에는 대표 항목만 표시했습니다. 정확한 구성·호환·가격은 해당 모델 선택 후 상담 시 확인하는 방식이 가장 빠릅니다.</div>';openM('MY26 ACCESSORIES','모델별 대표 액세서리','필요한 용도만 먼저 보고, 세부 품목은 상담으로 좁혀보세요.',h)}
const rs=[['서울',18],['경기','서울/수도권'],['인천','서울/수도권'],['강원',2],['충청',4],['전라',4],['경상',9],['제주',1]];
regions.innerHTML=rs.map(r=>'<button onclick="findS(\''+r[0]+'\',this)">'+r[0]+'</button>').join('');
function findS(r,b){document.querySelectorAll('#regions button').forEach(x=>x.classList.remove('active'));b.classList.add('active');let q=encodeURIComponent('볼보 서비스센터 '+r);let count={'서울':'서울·수도권 자료 기준 18개','경기':'서울·수도권 자료 기준 18개','인천':'서울·수도권 자료 기준 18개','강원':'자료 기준 2개','충청':'충청·대전 자료 기준 4개','전라':'전라·광주 자료 기준 4개','경상':'경상·대구·울산·부산 자료 기준 9개','제주':'자료 기준 1개'}[r];sr.innerHTML='<div><strong>'+r+' 지역 서비스센터</strong><br><span>'+count+' · 실제 운영 센터와 연락처는 공식 페이지에서 최종 확인하세요.</span></div><div class="links"><a target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query='+q+'">지도에서 찾기</a><a class="p" target="_blank" rel="noopener" href="https://www.volvocar.co.kr/buy/purchase/find-a-showroom/?type=service">공식 센터 확인 →</a></div>'}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeM()});
document.addEventListener('DOMContentLoaded',()=>filterCategory('suv',document.querySelector('.category-card[data-filter="suv"]')));