/* Interior seat color, MY27 detail enhancement, and anonymous traffic analytics */
(function(){
  const seatData={
    XC40:[['RD00','Charcoal','차콜','Leather','Driftwood','PLUS BRIGHT · ULTRA BRIGHT · ULTRA DARK'],['UD70','Blond','블론드','Leather','Driftwood','PLUS BRIGHT · ULTRA BRIGHT · ULTRA DARK']],
    XC60:[['RP00','Charcoal','차콜','Nordico','Natural Driftwood','B5 PLUS BRIGHT'],['RPE0','Cardamom','카다멈','Nordico','Natural Driftwood','B5 PLUS BRIGHT'],['UC00','Blond','블론드','Nappa Leather','White Driftwood','B5 ULTRA BRIGHT · B5 ULTRA DARK · T8 ULTRA BRIGHT'],['RC00','Charcoal','차콜','Nappa Leather','Natural Driftwood','B5 ULTRA BRIGHT · B5 ULTRA DARK · T8 ULTRA BRIGHT']],
    XC90:[['RP00','Charcoal','차콜','Nordico','Brown Ash','B6 PLUS BRIGHT'],['RPE0','Cardamom','카다멈','Nordico','Brown Ash','B6 PLUS BRIGHT'],['RCE0','Cardamom','카다멈','Nappa Leather','Brown Ash','B6/T8 ULTRA BRIGHT · ULTRA DARK'],['RC00','Charcoal','차콜','Nappa Leather','Grey Ash','B6/T8 ULTRA BRIGHT · ULTRA DARK'],['UC00','Blond','블론드','Nappa Leather','Grey Ash','B6/T8 ULTRA BRIGHT · ULTRA DARK']],
    S90:[['RP00','Charcoal','차콜','Nordico','Brown Ash','B5 PLUS BRIGHT'],['RCE0','Cardamom','카다멈','Nappa Leather','Brown Ash','B5 ULTRA BRIGHT · B5 ULTRA DARK · T8 ULTRA BRIGHT'],['RC00','Charcoal','차콜','Nappa Leather','Grey Ash','B5 ULTRA BRIGHT · B5 ULTRA DARK · T8 ULTRA BRIGHT'],['UC00','Blond','블론드','Nappa Leather','Grey Ash','B5 ULTRA BRIGHT · B5 ULTRA DARK · T8 ULTRA BRIGHT']],
    V60CC:[['RC20','Amber','앰버','Nappa Leather','Linear Lime','B5 AWD ULTRA'],['RC00','Charcoal','차콜','Nappa Leather','Driftwood','B5 AWD ULTRA'],['RC30','Maroon Brown','마룬 브라운','Nappa Leather','Linear Lime','B5 AWD ULTRA'],['UC00','Blond','블론드','Nappa Leather','Driftwood','B5 AWD ULTRA']],
    EX30:[['R310','Indigo','인디고','Textile & Nordico','Denim','CORE'],['R540','Breeze','브리즈','Pixel Knit & Nordico','Particle','ULTRA'],['R220','Mist','미스트','Tailored Wool Blend','Flax','ULTRA']],
    EX30CC:[['R430','Pine','파인','Wool Blend & Nordico','Flax','ULTRA']],
    EX90:[['RG10','Cardamom','카다멈','Nordico','Brown Ash','Twin Motor PLUS · 7-Seater'],['AG60','Dawn','던','Nordico','Light Ash','Twin Motor PLUS · 7-Seater'],['RG00','Charcoal','차콜','Nordico','Brown Ash','Twin Motor PLUS · 7-Seater'],['RC10','Cardamom','카다멈','Nappa Leather','Brown Ash','Twin Motor ULTRA / Performance ULTRA · 6/7-Seater'],['AC60','Dawn','던','Nappa Leather','Light Ash','Twin Motor ULTRA / Performance ULTRA · 6/7-Seater'],['RC00','Charcoal','차콜','Nappa Leather','Light Ash','Twin Motor ULTRA / Performance ULTRA · 6/7-Seater']],
    ES90:[['RD10','Cardamom','카다멈','Nordico','Birch','Single Motor PLUS · Twin Motor PLUS'],['RD00','Charcoal','차콜','Nordico','Birch','Single Motor PLUS · Twin Motor PLUS'],['AD60','Dawn','던','Nordico','Light Ash','Single Motor PLUS · Twin Motor PLUS'],['AC60','Dawn','던','Nappa Leather','Light Ash','Single/Twin/Performance ULTRA'],['RC10','Cardamom','카다멈','Nappa Leather','Birch','Single/Twin/Performance ULTRA'],['RC00','Charcoal','차콜','Nappa Leather','Birch','Single/Twin/Performance ULTRA']]
  };
  const paint={Charcoal:'#323331',Blond:'#d6d0c2',Cardamom:'#9a8064',Dawn:'#d7d5cd',Amber:'#9a724c','Maroon Brown':'#6a4540',Indigo:'#4b5868',Breeze:'#cbd7d2',Mist:'#d4d0c7',Pine:'#788177'};
  const my27={
    EX90:{
      facts:[['전장','5,040 mm'],['전폭','1,965 mm'],['전고','1,740 mm'],['휠베이스','2,985 mm']],
      trims:{
        'Twin Motor PLUS · 7-Seater':['456 ps','0→100 km/h 5.5초','21인치 Aero 휠','가족 7인승 중심의 기본 구성'],
        'Twin Motor ULTRA · 7-Seater':['456 ps','0→100 km/h 5.5초','22인치 Aero 휠','7인승 + 상위 편의사양'],
        'Twin Motor ULTRA · 6-Seater':['456 ps','0→100 km/h 5.5초','22인치 Aero 휠','2열 독립시트가 필요한 고객'],
        'Twin Motor Performance ULTRA · 7-Seater':['680 ps','0→100 km/h 4.2초','22인치 Glossy Black 휠','7인승 + 고성능'],
        'Twin Motor Performance ULTRA · 6-Seater':['680 ps','0→100 km/h 4.2초','22인치 Glossy Black 휠','6인승 독립시트 + 고성능']
      },
      guide:'PLUS는 7인승 실용성 중심, ULTRA는 편의·인테리어를 높이고, Performance는 680ps 성능까지 원하는 경우에 적합합니다.'
    },
    ES90:{
      facts:[['전장','5,000 mm'],['전폭','1,942 mm'],['전고','1,547 mm'],['휠베이스','3,102 mm']],
      trims:{
        'Single Motor Extended Range PLUS':['333 ps','0→100 km/h 6.6초','20인치 휠','효율·주행거리 우선'],
        'Single Motor Extended Range ULTRA':['333 ps','0→100 km/h 6.6초','21인치 휠','효율 + 상위 편의사양'],
        'Twin Motor PLUS':['456 ps','0→100 km/h 5.4초','20인치 휠','AWD 균형형'],
        'Twin Motor ULTRA':['456 ps','0→100 km/h 5.4초','21인치 휠','AWD + 상위 편의사양'],
        'Twin Motor Performance ULTRA':['680 ps','0→100 km/h 4.0초','22인치 휠','최고 성능 중심']
      },
      guide:'Single Motor는 효율, Twin Motor는 AWD와 성능의 균형, Performance는 680ps의 가속 성능이 핵심 차이입니다.'
    }
  };

  function addStyles(){
    if(document.getElementById('volvo-detail-enhance-v4'))return;
    const s=document.createElement('style');
    s.id='volvo-detail-enhance-v4';
    s.textContent=`
      .seat-code-panel,.my27-fact-panel{margin:0 0 16px;padding:14px 15px 15px;border:1px solid #dce3e6;border-radius:16px;background:#f8f9f9}
      .seat-code-head,.my27-head{display:flex;justify-content:space-between;align-items:flex-end;gap:10px;margin-bottom:10px}
      .seat-code-head b,.my27-head b{font-size:13px;color:#1c2e38}.seat-code-head small,.my27-head small{font-size:8px;color:#708088;font-weight:800}
      .seat-code-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.seat-code-card{padding:11px;border:1px solid #e1e6e8;border-radius:12px;background:#fff}
      .seat-code-top{display:flex;align-items:center;gap:9px}.seat-dot{width:30px;height:30px;border-radius:50%;background:var(--seat);box-shadow:inset 0 0 0 1px rgba(0,0,0,.13);flex:0 0 auto}.seat-code{font-size:14px;font-weight:950;color:#142a35}.seat-color{font-size:10px;font-weight:850;color:#394b54}.seat-meta{margin-top:7px;font-size:9px;line-height:1.5;color:#5d6b72}.seat-meta b{color:#30434c}.seat-trims{margin-top:7px;padding-top:7px;border-top:1px solid #eef1f2;font-size:8px;line-height:1.45;color:#6a7880}.seat-code-note{margin-top:9px;font-size:8px;line-height:1.45;color:#7b888e}
      .my27-facts{display:grid;grid-template-columns:repeat(4,1fr);gap:7px}.my27-fact{background:#fff;border:1px solid #e4e9eb;border-radius:11px;padding:10px;text-align:center}.my27-fact b{display:block;font-size:12px;color:#162b36}.my27-fact small{display:block;margin-top:3px;font-size:8px;color:#738087}.my27-guide{margin-top:10px;padding:10px 11px;border-radius:11px;background:#eef3f5;font-size:9px;line-height:1.55;color:#40525b}.my27-trim-extra{margin-top:9px;padding-top:9px;border-top:1px solid #edf0f1}.my27-trim-extra b{display:block;margin-bottom:5px;font-size:9px;color:#263c47}.my27-trim-extra span{display:inline-block;margin:2px 4px 2px 0;padding:4px 6px;border-radius:999px;background:#f1f4f5;font-size:8px;font-weight:800;color:#53646d}
      @media(max-width:700px){.seat-code-panel,.my27-fact-panel{padding:13px}.seat-code-grid{grid-template-columns:1fr}.seat-code{font-size:14px}.seat-color,.seat-meta{font-size:10px}.seat-trims{font-size:9px}.my27-facts{grid-template-columns:repeat(2,1fr)}.my27-fact b{font-size:12px}.my27-guide{font-size:10px}.my27-trim-extra b{font-size:10px}.my27-trim-extra span{font-size:9px}}
    `;
    document.head.appendChild(s);
  }
  function seatPanel(key){
    const rows=seatData[key]||[]; if(!rows.length)return '';
    return '<section class="seat-code-panel"><div class="seat-code-head"><b>실내 시트 컬러 · 코드</b><small>'+rows.length+'개 조합</small></div><div class="seat-code-grid">'+rows.map(x=>'<div class="seat-code-card"><div class="seat-code-top"><span class="seat-dot" style="--seat:'+(paint[x[1]]||'#bbb')+'"></span><div><div class="seat-code">'+x[0]+'</div><div class="seat-color">'+x[1]+' · '+x[2]+'</div></div></div><div class="seat-meta"><div><b>시트 소재</b> · '+x[3]+'</div><div><b>인테리어 데코</b> · '+x[4]+'</div></div><div class="seat-trims"><b>적용 트림</b> · '+x[5]+'</div></div>').join('')+'</div><div class="seat-code-note">※ 컬러 원형은 빠른 구분용입니다. 실제 색감과 질감은 공식 이미지 또는 실차로 최종 확인해주세요.</div></section>';
  }
  function my27Panel(key){
    const d=my27[key]; if(!d)return '';
    return '<section class="my27-fact-panel"><div class="my27-head"><b>MY27 핵심 제원</b><small>Volvo The ONE MY27</small></div><div class="my27-facts">'+d.facts.map(x=>'<div class="my27-fact"><b>'+x[1]+'</b><small>'+x[0]+'</small></div>').join('')+'</div><div class="my27-guide"><b>선택 포인트</b><br>'+d.guide+'</div></section>';
  }
  function inject(key,host){
    addStyles(); host=host||document.getElementById('mbody'); if(!host)return;
    if(!host.querySelector('.my27-fact-panel')){
      const html=my27Panel(key); if(html){const first=host.firstElementChild; first?first.insertAdjacentHTML('beforebegin',html):host.insertAdjacentHTML('afterbegin',html);}
    }
    if(!host.querySelector('.seat-code-panel')){
      const html=seatPanel(key); if(html){const target=host.querySelector('.my27-fact-panel'); target?target.insertAdjacentHTML('afterend',html):host.insertAdjacentHTML('afterbegin',html);}
    }
    const d=my27[key]; if(d){
      host.querySelectorAll('.card').forEach(card=>{
        if(card.querySelector('.my27-trim-extra'))return;
        const name=(card.querySelector('h3')?.textContent||'').trim(); const info=d.trims[name]; if(!info)return;
        card.insertAdjacentHTML('beforeend','<div class="my27-trim-extra"><b>이 트림의 핵심</b>'+info.map(v=>'<span>'+v+'</span>').join('')+'</div>');
      });
    }
  }
  function patch(){
    if(window.__volvoDetailEnhanceV4)return; window.__volvoDetailEnhanceV4=true; addStyles();
    const oldOpen=window.openModel;
    if(typeof oldOpen==='function')window.openModel=function(key){oldOpen.apply(this,arguments);inject(key);};
    const oldAll=window.openAllTrims;
    if(typeof oldAll==='function')window.openAllTrims=function(){oldAll.apply(this,arguments);inject('XC40',document.getElementById('tc'));};
    const oldRender=window.renderTrim;
    if(typeof oldRender==='function')window.renderTrim=function(key,b){oldRender.apply(this,arguments);inject(key,document.getElementById('tc'));};
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',patch);else patch();
})();

/* Lightweight anonymous traffic analytics for daily sales-site reporting. */
(function(){
  if(window.__volvoTrafficAnalyticsV1)return; window.__volvoTrafficAnalyticsV1=true;
  const PROJECT_KEY='phc_kP2xKHroz8MSF5Y5Yhg7xG26vQE5vZtyHvbHBYDyicDp'; const API_HOST='https://us.i.posthog.com';
  function normalizeExplicit(v){v=(v||'').toLowerCase().trim();if(!v)return null;if(v.includes('kakao'))return '카카오';if(v.includes('youtube')||v==='yt')return '유튜브';if(v.includes('naver')&&v.includes('blog'))return '네이버 블로그';if(v.includes('naver'))return '네이버';if(v.includes('google'))return '구글 검색';if(v.includes('daangn')||v.includes('karrot'))return '당근';if(v.includes('instagram'))return '인스타그램';if(v.includes('facebook')||v==='fb')return '페이스북';if(v.includes('qr'))return 'QR';return v;}
  function classifySource(){const q=new URLSearchParams(location.search);const explicit=normalizeExplicit(q.get('from')||q.get('utm_source'));if(explicit)return {source:explicit,detail:'parameter'};if(!document.referrer)return {source:'직접/출처없음',detail:'direct'};try{const h=new URL(document.referrer).hostname.toLowerCase();if(h.includes('kakao'))return {source:'카카오',detail:h};if(h.includes('youtube.com')||h.includes('youtu.be'))return {source:'유튜브',detail:h};if(h.includes('blog.naver.com')||h.includes('m.blog.naver.com'))return {source:'네이버 블로그',detail:h};if(h.includes('search.naver.com'))return {source:'네이버 검색',detail:h};if(h.includes('naver.com'))return {source:'네이버',detail:h};if(h.includes('google.'))return {source:'구글 검색',detail:h};if(h.includes('daangn.com')||h.includes('karrotmarket.com'))return {source:'당근',detail:h};if(h.includes('instagram.com'))return {source:'인스타그램',detail:h};if(h.includes('facebook.com')||h.includes('fb.com'))return {source:'페이스북',detail:h};return {source:'기타 추천',detail:h};}catch(e){return {source:'기타 추천',detail:'unknown'};}}
  function start(){if(!window.posthog||typeof window.posthog.init!=='function')return;const src=classifySource();posthog.init(PROJECT_KEY,{api_host:API_HOST,person_profiles:'identified_only',capture_pageview:false,capture_pageleave:true,autocapture:false,disable_session_recording:true,persistence:'localStorage+cookie'});posthog.capture('$pageview',{traffic_source:src.source,traffic_source_detail:src.detail,entry_referrer:document.referrer||'',page_path:location.pathname,report_timezone:'Asia/Seoul'});document.addEventListener('click',function(e){const a=e.target&&e.target.closest?e.target.closest('a'):null;if(!a)return;const href=a.getAttribute('href')||'';if(href.startsWith('tel:'))posthog.capture('consultation_click',{channel:'전화',traffic_source:src.source});else if(href.includes('kakao.com')||href.includes('qr.kakao.com'))posthog.capture('consultation_click',{channel:'카카오톡',traffic_source:src.source});},true);}
  function load(){if(window.posthog&&typeof window.posthog.init==='function'){start();return;}const s=document.createElement('script');s.async=true;s.src='https://us-assets.i.posthog.com/static/array.js';s.onload=start;s.onerror=function(){console.warn('Analytics unavailable');};document.head.appendChild(s);}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',load,{once:true});else load();
})();
