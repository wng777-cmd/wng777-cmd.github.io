/* Interior seat color & trim-code UI v3: visible + robust wrapper */
(function(){
  const data={
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

  function styles(){
    if(document.getElementById('interior-code-v3-style'))return;
    const s=document.createElement('style'); s.id='interior-code-v3-style';
    s.textContent=`.seat-code-panel{margin:0 0 16px;padding:14px 15px 15px;border:1px solid #dce3e6;border-radius:16px;background:#f8f9f9}.seat-code-head{display:flex;justify-content:space-between;align-items:flex-end;gap:10px;margin-bottom:10px}.seat-code-head b{font-size:13px;color:#1c2e38}.seat-code-head small{font-size:8px;color:#708088;font-weight:800}.seat-code-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.seat-code-card{padding:11px;border:1px solid #e1e6e8;border-radius:12px;background:#fff}.seat-code-top{display:flex;align-items:center;gap:9px}.seat-dot{width:30px;height:30px;border-radius:50%;background:var(--seat);box-shadow:inset 0 0 0 1px rgba(0,0,0,.13);flex:0 0 auto}.seat-code{font-size:14px;font-weight:950;color:#142a35}.seat-color{font-size:10px;font-weight:850;color:#394b54}.seat-meta{margin-top:7px;font-size:9px;line-height:1.5;color:#5d6b72}.seat-meta b{color:#30434c}.seat-trims{margin-top:7px;padding-top:7px;border-top:1px solid #eef1f2;font-size:8px;line-height:1.45;color:#6a7880}.seat-code-note{margin-top:9px;font-size:8px;line-height:1.45;color:#7b888e}@media(max-width:700px){.seat-code-panel{padding:13px}.seat-code-grid{grid-template-columns:1fr}.seat-code{font-size:14px}.seat-color,.seat-meta{font-size:10px}.seat-trims{font-size:9px}}`;
    document.head.appendChild(s);
  }
  function panel(key){
    const rows=data[key]||[]; if(!rows.length)return '';
    return '<section class="seat-code-panel" data-seat-code="'+key+'"><div class="seat-code-head"><b>실내 시트 컬러 · 코드</b><small>'+rows.length+'개 조합</small></div><div class="seat-code-grid">'+rows.map(x=>'<div class="seat-code-card"><div class="seat-code-top"><span class="seat-dot" style="--seat:'+(paint[x[1]]||'#bbb')+'"></span><div><div class="seat-code">'+x[0]+'</div><div class="seat-color">'+x[1]+' · '+x[2]+'</div></div></div><div class="seat-meta"><div><b>시트 소재</b> · '+x[3]+'</div><div><b>인테리어 데코</b> · '+x[4]+'</div></div><div class="seat-trims"><b>적용 트림</b> · '+x[5]+'</div></div>').join('')+'</div><div class="seat-code-note">※ 컬러 원형은 빠른 구분용입니다. 실제 색감과 질감은 공식 이미지 또는 실차로 최종 확인해주세요.</div></section>';
  }
  function inject(key,root){
    styles(); const host=root||document.getElementById('mbody'); if(!host||host.querySelector('.seat-code-panel'))return;
    const html=panel(key); if(!html)return;
    const base=host.querySelector('.base-spec-box');
    if(base)base.insertAdjacentHTML('afterend',html); else host.insertAdjacentHTML('afterbegin',html);
  }
  function patch(){
    if(window.__seatCodePatchV3)return; window.__seatCodePatchV3=true; styles();
    const oldOpen=window.openModel;
    if(typeof oldOpen==='function') window.openModel=function(key){oldOpen.apply(this,arguments); inject(key);};
    const oldAll=window.openAllTrims;
    if(typeof oldAll==='function') window.openAllTrims=function(){oldAll.apply(this,arguments); inject('XC40',document.getElementById('tc'));};
    const oldRender=window.renderTrim;
    if(typeof oldRender==='function') window.renderTrim=function(key,b){oldRender.apply(this,arguments); inject(key,document.getElementById('tc'));};
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',patch); else patch();
})();