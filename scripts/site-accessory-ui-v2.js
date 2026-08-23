/* Customer-friendly Volvo accessories UI v2
   Keeps source package names/prices internally,
   while customer-facing package names and guidance stay in Korean.
*/
(function(){
  const categoryLabels={
    load:['짐·레저','루프 적재, 자전거, 스키, 견인 등 공간을 늘려 쓰는 용품'],
    protection:['보호·관리','실내·외 오염, 스크래치, 흙·눈·비로부터 차량을 보호하는 용품'],
    family:['가족·반려동물','어린이 또는 반려동물과 함께 탈 때 필요한 편의·보호 용품'],
    styling:['외관·승하차','외관 분위기와 승하차 편의성을 높이는 용품'],
    comfort:['편의','일상 사용 편의성을 높이는 용품']
  };

  function normalizeName(item){
    const parts=String(item).split(' · ');
    return {name:(parts.shift()||'').trim(),price:parts.join(' · ').trim()};
  }

  function metaFor(name){
    const n=name.toLowerCase();
    const base={category:'comfort',title:'볼보 순정 액세서리',desc:'볼보 순정 액세서리 패키지입니다. 실제 구성과 적용 가능 차종은 상담 시 확인할 수 있습니다.'};

    if(n.includes('roofbox 430')) return {category:'load',title:'프리미엄 루프박스 430',desc:'차량 루프 위에 추가 수납공간을 만드는 프리미엄 루프박스 구성입니다. 여행 가방이나 캠핑 장비처럼 트렁크에 다 넣기 어려운 짐을 싣기 좋습니다.'};
    if(n.includes('roofbox 400')) return {category:'load',title:'루프박스 400',desc:'루프 위에 추가 수납공간을 만드는 루프박스 구성입니다. 가족 여행이나 캠핑처럼 짐이 많을 때 트렁크 공간을 여유롭게 쓸 수 있습니다.'};
    if(n.includes('roofbox 500')) return {category:'load',title:'대용량 루프박스 500',desc:'루프 위 적재공간을 크게 늘리는 대용량 루프박스입니다. 부피가 큰 여행·레저 장비를 자주 싣는 고객에게 적합합니다.'};
    if(n.includes('roof basket')) return {category:'load',title:'루프 바스켓 패키지',desc:'캠핑 장비처럼 모양이 일정하지 않은 짐을 차량 루프 위에 실을 수 있도록 바스켓과 관련 장착 부품을 구성한 패키지입니다.'};
    if(n.includes('bicycle')) return {category:'load',title:'루프 자전거 캐리어',desc:'자전거를 차량 루프 위에 고정해 운반하는 캐리어 구성입니다. 트렁크 공간을 그대로 사용하면서 자전거를 이동할 수 있습니다.'};
    if(n.includes('winter sports')) return {category:'load',title:'스키·스노보드 운반 패키지',desc:'스키나 스노보드 장비를 루프에 안전하게 고정해 운반할 수 있도록 구성한 겨울 레저용 패키지입니다.'};
    if(n.includes('towbar')) return {category:'load',title:'견인장치 패키지',desc:'트레일러나 견인형 캐리어 등을 연결할 수 있도록 차량 뒤쪽에 견인장치를 추가하는 패키지입니다.'};
    if(n.includes('dust free plus')) return {category:'protection',title:'더스트 프리 플러스 패키지',desc:'실내와 적재공간에 흙·먼지·물기가 묻는 것을 줄이기 위한 보호용품을 더 넓게 구성한 패키지입니다.'};
    if(n.includes('dust free')) return {category:'protection',title:'더스트 프리 패키지',desc:'실내와 적재공간을 흙·먼지·물기로부터 보호해 청소와 관리가 편하도록 구성한 보호 패키지입니다.'};

    if(n.includes('pet lover')) return {category:'family',title:'반려동물 패키지',desc:'반려견과 짐 공간을 분리하고 적재공간을 보호하도록 도그 게이트, 디바이더, 라이너류를 묶은 구성입니다.'};
    if(n.includes('child care')) return {category:'family',title:'어린이 탑승 편의 패키지',desc:'앞좌석 등받이 오염을 막는 킥가드와 어린이용 부스터 시트 등 아이와 함께 탈 때 필요한 용품을 묶은 패키지입니다.'};

    if(n.includes('ev all-weather')) return {category:'protection',title:'전천후 보호 패키지',desc:'비·눈·흙에 강한 바닥·적재공간 매트를 중심으로 실내와 트렁크를 쉽게 청소하고 보호하도록 구성한 패키지입니다.'};
    if(n.includes('ev fabric')) return {category:'protection',title:'패브릭 보호 패키지',desc:'직물 매트를 중심으로 실내와 적재공간을 깔끔하게 유지하도록 구성한 보호 패키지입니다.'};
    if(n.includes('ex total light')) return {category:'protection',title:'EX 토탈 라이트 보호 패키지',desc:'파노라믹 루프 선셰이드, 적재공간 보호 매트, 범퍼 보호, 머드플랩 등 일상에서 많이 쓰는 보호용품을 묶은 구성입니다.'};
    if(n.includes('ex total package')) return {category:'protection',title:'EX 토탈 패키지',desc:'루프 캐리어와 선셰이드, 보호 매트, 범퍼·머드플랩류 등 적재와 차량 보호 용품을 한 번에 묶은 종합 패키지입니다.'};
    if(n.includes('key tag') || n.includes('sunshade')) return {category:'comfort',title:'키 태그 + 파노라믹 루프 선셰이드',desc:'휴대가 간편한 키 태그와 파노라믹 글라스 루프로 들어오는 햇빛을 줄이는 선셰이드를 함께 구성한 패키지입니다.'};
    if(n.includes('protection package')) return {category:'protection',title:'차량 보호 패키지',desc:'적재함 매트, 범퍼 보호, 머드플랩 등 일상 사용 중 오염과 손상이 생기기 쉬운 부분을 보호하는 용품을 묶은 구성입니다.'};
    if(n.includes('protective plate')) return {category:'protection',title:'보호 플레이트 패키지',desc:'차체 하단이나 적재 시 손상이 생기기 쉬운 부분을 보호하는 플레이트류 중심의 패키지입니다.'};
    if(n.includes('running-plate')) return {category:'protection',title:'러닝·보호 플레이트 패키지',desc:'승하차 부위와 차체 하단의 보호 기능을 보강하는 플레이트류를 중심으로 구성한 패키지입니다.'};
    if(n.includes('full shield')) return {category:'protection',title:'풀 실드 보호 패키지',desc:'생활 스크래치와 외부 오염에 노출되기 쉬운 여러 부위를 폭넓게 보호하도록 구성한 패키지입니다.'};
    if(n.includes('shield')) return {category:'protection',title:'실드 보호 패키지',desc:'생활 스크래치와 외부 오염이 생기기 쉬운 주요 부위를 보호하도록 구성한 패키지입니다.'};

    if(n.includes('urban road')) return {category:'styling',title:'어반 로드 패키지',desc:'일체형 러닝보드와 트렁크 적재 시 범퍼를 보호하는 커버를 묶어 승하차 편의와 실용성을 높인 구성입니다.'};
    if(n.includes('off-city')) return {category:'styling',title:'오프-시티 패키지',desc:'파노라믹 루프 선셰이드와 범퍼 보호, 앞·뒤 머드플랩 등 야외 활동에서 유용한 보호용품을 묶은 구성입니다.'};
    if(n.includes('integrated running board')) return {category:'styling',title:'일체형 사이드 스텝',desc:'차량 옆에 발판을 추가해 승하차를 편하게 하고 SUV의 외관 존재감을 높여주는 순정 러닝보드입니다.'};
    if(n.includes('illuminated tailgate')) return {category:'styling',title:'조명식 트렁크 스커프 플레이트',desc:'트렁크 입구를 보호하면서 조명 효과까지 더해 적재 시 실용성과 마감 품질을 높이는 액세서리입니다.'};
    if(n.includes('roof spoiler')) return {category:'styling',title:'루프 스포일러',desc:'차량 후면 상단의 디자인을 더 스포티하게 만드는 순정 외관 액세서리입니다.'};
    if(n.includes('exterior styling')) return {category:'styling',title:'외관 스타일링 키트',desc:'차량 외관의 디테일과 분위기를 바꿔 보다 개성 있게 꾸밀 수 있는 순정 스타일링 구성입니다.'};

    if(n.includes('comfort')) return {category:'comfort',title:'컴포트 패키지',desc:'실내에서 자주 쓰는 편의용품을 묶어 일상 승차 편의성을 높이는 패키지입니다.'};

    return base;
  }

  function modelLabel(key){
    const map={
      'EX30 / EX30CC':'EX30 · EX30 Cross Country',
      'EX30 & EX30 Cross Country':'EX30 · EX30 Cross Country',
      'V60CC':'V60 Cross Country'
    };
    return map[key]||key;
  }

  function card(item){
    const parsed=normalizeName(item);
    const meta=metaFor(parsed.name);
    return '<article class="acc2-card" data-acc-cat="'+meta.category+'">'+
      '<div class="acc2-card-top"><span class="acc2-use">'+categoryLabels[meta.category][0]+'</span>'+
      (parsed.price?'<b class="acc2-price">'+parsed.price+'</b>':'')+'</div>'+
      '<h4>'+meta.title+'</h4>'+
      '<p>'+meta.desc+'</p>'+
      '</article>';
  }

  function renderModel(key,button){
    document.querySelectorAll('#acc2-model-tabs button').forEach(x=>x.classList.remove('active'));
    if(button) button.classList.add('active');
    const items=(typeof acc!=='undefined'&&acc[key])?acc[key]:[];
    const buckets={load:[],protection:[],family:[],styling:[],comfort:[]};
    items.forEach(item=>{
      const parsed=normalizeName(item); const meta=metaFor(parsed.name);
      (buckets[meta.category]||buckets.comfort).push(item);
    });
    const sections=Object.keys(buckets).filter(k=>buckets[k].length).map(k=>
      '<section class="acc2-section"><div class="acc2-section-head"><div><span>'+categoryLabels[k][0]+'</span><h3>'+categoryLabels[k][1]+'</h3></div><b>'+buckets[k].length+'개</b></div>'+
      '<div class="acc2-grid">'+buckets[k].map(card).join('')+'</div></section>'
    ).join('');
    const target=document.getElementById('acc2-content');
    if(target) target.innerHTML='<div class="acc2-model-title"><span>선택 차량</span><h2>'+modelLabel(key)+'</h2><p>한글 이름과 용도 설명으로 필요한 액세서리를 빠르게 확인하세요.</p></div>'+sections;
  }

  function openAccessoriesV2(){
    const data=(typeof acc!=='undefined')?acc:{};
    const keys=Object.keys(data);
    const tabs=keys.map((k,i)=>'<button class="'+(i===0?'active':'')+'" onclick="renderAccessoryModel(\''+k.replace(/'/g,"\\'")+'\',this)">'+modelLabel(k)+'</button>').join('');
    const h='<div class="acc2-intro"><b>액세서리, 용도별로 쉽게 확인하세요.</b><p>짐·레저, 차량 보호, 가족·반려동물, 외관·승하차 등 필요한 목적에 맞춰 한글로 정리했습니다.</p></div>'+
      '<div class="acc2-tabs" id="acc2-model-tabs">'+tabs+'</div><div id="acc2-content"></div>'+
      '<div class="alert">액세서리 명칭과 가격은 제공된 Volvo The ONE MY26 Full Ver + Accessories 자료를 기준으로 표시합니다. 차량 연식·트림·장착 조건에 따라 적용 여부와 최종 금액이 달라질 수 있으니 실제 주문 전 확인이 필요합니다.</div>';
    openM('볼보 순정 액세서리','순정 액세서리 쉽게 보기','차량을 고른 뒤, 필요한 용도만 골라보세요.',h);
    if(keys.length) renderModel(keys[0],document.querySelector('#acc2-model-tabs button'));
  }

  function installAccessoryUI(){
    window.renderAccessoryModel=renderModel;
    window.openAccessories=openAccessoriesV2;
  }

  installAccessoryUI();

  /* The core bundle is loaded asynchronously after DOMContentLoaded and defines
     its own fallback openAccessories(). Re-apply this Korean UI after the
     stable loader finishes so the customer-facing version cannot be overwritten. */
  const loaderObserver=new MutationObserver(function(){
    if(document.documentElement.hasAttribute('data-stable-loader')) installAccessoryUI();
  });
  loaderObserver.observe(document.documentElement,{attributes:true,attributeFilter:['data-stable-loader']});
  window.addEventListener('load',installAccessoryUI,{once:true});

  const style=document.createElement('style');
  style.id='accessory-ui-v2-style';
  style.textContent=`
  .acc2-intro{padding:18px 20px;border-radius:16px;background:#eef3f5;margin-bottom:14px}.acc2-intro b{font-size:18px}.acc2-intro p{margin:7px 0 0;font-size:11px;line-height:1.65;color:#56656e}
  .acc2-tabs{display:flex;gap:7px;overflow-x:auto;padding:2px 0 11px;scrollbar-width:thin}.acc2-tabs button{white-space:nowrap;border:1px solid #d6dde1;background:#fff;border-radius:999px;padding:9px 12px;font-size:10px;font-weight:800;color:#53616a}.acc2-tabs button.active{background:#102430;color:#fff;border-color:#102430}
  .acc2-model-title{padding:12px 2px 15px;border-bottom:1px solid #e3e7e9}.acc2-model-title span{font-size:8px;letter-spacing:.15em;color:#7a858c;font-weight:800}.acc2-model-title h2{font-size:24px;margin:4px 0 5px}.acc2-model-title p{margin:0;color:#68757d;font-size:10px}
  .acc2-section{padding-top:19px}.acc2-section-head{display:flex;align-items:end;justify-content:space-between;margin-bottom:9px}.acc2-section-head span{font-size:9px;font-weight:900;color:#274a61}.acc2-section-head h3{font-size:12px;font-weight:500;color:#68757d;margin:3px 0 0}.acc2-section-head>b{font-size:9px;color:#879198}
  .acc2-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.acc2-card{border:1px solid #e0e5e7;background:#fff;border-radius:15px;padding:14px;min-height:155px}.acc2-card-top{display:flex;justify-content:space-between;align-items:center;gap:8px}.acc2-use{font-size:8px;padding:4px 7px;border-radius:999px;background:#eef3f5;color:#304954;font-weight:900}.acc2-price{font-size:10px;white-space:nowrap}.acc2-card h4{font-size:16px;margin:13px 0 4px;line-height:1.25}.acc2-card p{font-size:10px;line-height:1.65;color:#596870;margin:10px 0 0}
  @media(max-width:700px){.acc2-intro{padding:15px}.acc2-intro b{font-size:16px}.acc2-grid{grid-template-columns:1fr}.acc2-card{min-height:0;padding:14px}.acc2-card h4{font-size:15px}.acc2-card p{font-size:10px}.acc2-tabs{margin-right:-12px;padding-right:12px}}
  `;
  if(!document.getElementById(style.id)) document.head.appendChild(style);
})();
