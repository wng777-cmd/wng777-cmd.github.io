/* Customer-friendly interior color & trim-code UI
   Source: Volvo The ONE MY26 Full + Accessories V2 / MY27 Light V3.
   Integrated inside each model's trim modal to keep the main page uncluttered.
*/
(function(){
  const interiorData={
    XC40:[
      {code:'RD00',color:'Charcoal',ko:'차콜',material:'Leather',deco:'Driftwood',trims:'PLUS BRIGHT · ULTRA BRIGHT · ULTRA DARK'},
      {code:'UD70',color:'Blond',ko:'블론드',material:'Leather',deco:'Driftwood',trims:'PLUS BRIGHT · ULTRA BRIGHT · ULTRA DARK'}
    ],
    XC60:[
      {code:'RP00',color:'Charcoal',ko:'차콜',material:'Nordico',deco:'Natural Driftwood',trims:'B5 PLUS BRIGHT'},
      {code:'RPE0',color:'Cardamom',ko:'카다멈',material:'Nordico',deco:'Natural Driftwood',trims:'B5 PLUS BRIGHT'},
      {code:'UC00',color:'Blond',ko:'블론드',material:'Nappa Leather',deco:'White Driftwood',trims:'B5 ULTRA BRIGHT · B5 ULTRA DARK · T8 ULTRA BRIGHT'},
      {code:'RC00',color:'Charcoal',ko:'차콜',material:'Nappa Leather',deco:'Natural Driftwood',trims:'B5 ULTRA BRIGHT · B5 ULTRA DARK · T8 ULTRA BRIGHT'}
    ],
    XC90:[
      {code:'RP00',color:'Charcoal',ko:'차콜',material:'Nordico',deco:'Brown Ash',trims:'B6 PLUS BRIGHT'},
      {code:'RPE0',color:'Cardamom',ko:'카다멈',material:'Nordico',deco:'Brown Ash',trims:'B6 PLUS BRIGHT'},
      {code:'RCE0',color:'Cardamom',ko:'카다멈',material:'Nappa Leather',deco:'Brown Ash',trims:'B6/T8 ULTRA BRIGHT · ULTRA DARK'},
      {code:'RC00',color:'Charcoal',ko:'차콜',material:'Nappa Leather',deco:'Grey Ash',trims:'B6/T8 ULTRA BRIGHT · ULTRA DARK'},
      {code:'UC00',color:'Blond',ko:'블론드',material:'Nappa Leather',deco:'Grey Ash',trims:'B6/T8 ULTRA BRIGHT · ULTRA DARK'}
    ],
    S90:[
      {code:'RP00',color:'Charcoal',ko:'차콜',material:'Nordico',deco:'Brown Ash',trims:'B5 PLUS BRIGHT'},
      {code:'RCE0',color:'Cardamom',ko:'카다멈',material:'Nappa Leather',deco:'Brown Ash',trims:'B5 ULTRA BRIGHT · B5 ULTRA DARK · T8 ULTRA BRIGHT'},
      {code:'RC00',color:'Charcoal',ko:'차콜',material:'Nappa Leather',deco:'Grey Ash',trims:'B5 ULTRA BRIGHT · B5 ULTRA DARK · T8 ULTRA BRIGHT'},
      {code:'UC00',color:'Blond',ko:'블론드',material:'Nappa Leather',deco:'Grey Ash',trims:'B5 ULTRA BRIGHT · B5 ULTRA DARK · T8 ULTRA BRIGHT'}
    ],
    V60CC:[
      {code:'RC20',color:'Amber',ko:'앰버',material:'Nappa Leather',deco:'Linear Lime',trims:'B5 AWD ULTRA'},
      {code:'RC00',color:'Charcoal',ko:'차콜',material:'Nappa Leather',deco:'Driftwood',trims:'B5 AWD ULTRA'},
      {code:'RC30',color:'Maroon Brown',ko:'마룬 브라운',material:'Nappa Leather',deco:'Linear Lime',trims:'B5 AWD ULTRA'},
      {code:'UC00',color:'Blond',ko:'블론드',material:'Nappa Leather',deco:'Driftwood',trims:'B5 AWD ULTRA'}
    ],
    EX30:[
      {code:'R310',color:'Indigo',ko:'인디고',material:'Textile & Nordico',deco:'Denim',trims:'CORE'},
      {code:'R540',color:'Breeze',ko:'브리즈',material:'Pixel Knit & Nordico',deco:'Particle',trims:'ULTRA'},
      {code:'R220',color:'Mist',ko:'미스트',material:'Tailored Wool Blend',deco:'Flax',trims:'ULTRA'}
    ],
    EX30CC:[
      {code:'R430',color:'Pine',ko:'파인',material:'Wool Blend & Nordico',deco:'Flax',trims:'ULTRA'}
    ],
    EX90:[
      {code:'RG10',color:'Cardamom',ko:'카다멈',material:'Nordico',deco:'Brown Ash',trims:'Twin Motor PLUS · 7-Seater'},
      {code:'AG60',color:'Dawn',ko:'던',material:'Nordico',deco:'Light Ash',trims:'Twin Motor PLUS · 7-Seater'},
      {code:'RG00',color:'Charcoal',ko:'차콜',material:'Nordico',deco:'Brown Ash',trims:'Twin Motor PLUS · 7-Seater'},
      {code:'RC10',color:'Cardamom',ko:'카다멈',material:'Nappa Leather',deco:'Brown Ash',trims:'Twin Motor ULTRA / Performance ULTRA · 6/7-Seater'},
      {code:'AC60',color:'Dawn',ko:'던',material:'Nappa Leather',deco:'Light Ash',trims:'Twin Motor ULTRA / Performance ULTRA · 6/7-Seater'},
      {code:'RC00',color:'Charcoal',ko:'차콜',material:'Nappa Leather',deco:'Light Ash',trims:'Twin Motor ULTRA / Performance ULTRA · 6/7-Seater'}
    ],
    ES90:[
      {code:'RD10',color:'Cardamom',ko:'카다멈',material:'Nordico',deco:'Birch',trims:'Single Motor PLUS · Twin Motor PLUS'},
      {code:'RD00',color:'Charcoal',ko:'차콜',material:'Nordico',deco:'Birch',trims:'Single Motor PLUS · Twin Motor PLUS'},
      {code:'AD60',color:'Dawn',ko:'던',material:'Nordico',deco:'Light Ash',trims:'Single Motor PLUS · Twin Motor PLUS'},
      {code:'AC60',color:'Dawn',ko:'던',material:'Nappa Leather',deco:'Light Ash',trims:'Single/Twin/Performance ULTRA'},
      {code:'RC10',color:'Cardamom',ko:'카다멈',material:'Nappa Leather',deco:'Birch',trims:'Single/Twin/Performance ULTRA'},
      {code:'RC00',color:'Charcoal',ko:'차콜',material:'Nappa Leather',deco:'Birch',trims:'Single/Twin/Performance ULTRA'}
    ]
  };

  const seatPaint={
    'Charcoal':'#323331','Blond':'#d6d0c2','Cardamom':'#9a8064','Dawn':'#d7d5cd','Amber':'#9a724c',
    'Maroon Brown':'#6a4540','Indigo':'#4b5868','Breeze':'#cbd7d2','Mist':'#d4d0c7','Pine':'#788177'
  };

  function ensureInteriorStyles(){
    if(document.getElementById('interior-code-v1-style'))return;
    const s=document.createElement('style');
    s.id='interior-code-v1-style';
    s.textContent=`
      .interior-panel{margin:0 0 16px;border:1px solid #dce3e6;border-radius:16px;background:#fff;overflow:hidden}
      .interior-panel summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 16px;font-size:12px;font-weight:900;color:#1d2e38;background:#f8f9f9}
      .interior-panel summary::-webkit-details-marker{display:none}
      .interior-panel summary:after{content:'+';font-size:17px;line-height:1;color:#53656f}
      .interior-panel[open] summary:after{content:'−'}
      .interior-panel summary small{font-size:9px;font-weight:800;color:#6b7b84;margin-left:auto}
      .interior-inner{padding:14px 16px 16px}
      .interior-help{font-size:10px;line-height:1.55;color:#5a6a73;margin:0 0 12px}
      .interior-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}
      .interior-card{border:1px solid #e2e7e9;border-radius:13px;padding:12px;background:#fff;min-width:0}
      .interior-top{display:flex;align-items:center;gap:9px;margin-bottom:8px}
      .interior-swatch{width:30px;height:30px;border-radius:50%;background:var(--seat);box-shadow:inset 0 0 0 1px rgba(0,0,0,.12);flex:0 0 auto}
      .interior-code{font-size:13px;font-weight:950;letter-spacing:.02em;color:#172932}
      .interior-color{font-size:10px;font-weight:850;color:#33464f;margin-top:1px}
      .interior-lines{display:grid;gap:4px;font-size:9px;line-height:1.4;color:#5a6870}
      .interior-lines b{color:#2d3e47;font-weight:850}
      .interior-trim{margin-top:8px;padding-top:8px;border-top:1px solid #eef1f2;font-size:8px;line-height:1.45;color:#65747c}
      .interior-note{margin-top:11px;font-size:8px;line-height:1.5;color:#78868d}
      @media(max-width:700px){
        .interior-panel summary{padding:13px 14px;font-size:12px}.interior-panel summary small{font-size:8px}
        .interior-inner{padding:12px 13px 14px}.interior-grid{grid-template-columns:1fr}.interior-card{padding:11px}
        .interior-code{font-size:13px}.interior-color,.interior-help{font-size:10px}.interior-lines{font-size:10px}.interior-trim{font-size:9px}
      }
    `;
    document.head.appendChild(s);
  }

  function interiorPanel(key){
    const rows=interiorData[key]||[];
    if(!rows.length)return '';
    const cards=rows.map(x=>{
      const paint=seatPaint[x.color]||'#b9bdba';
      return '<div class="interior-card">'+
        '<div class="interior-top"><span class="interior-swatch" style="--seat:'+paint+'"></span><div><div class="interior-code">'+x.code+'</div><div class="interior-color">'+x.color+' <span style="font-weight:700;color:#6e7b82">· '+x.ko+'</span></div></div></div>'+
        '<div class="interior-lines"><div><b>시트 소재</b> · '+x.material+'</div><div><b>인테리어 데코</b> · '+x.deco+'</div></div>'+
        '<div class="interior-trim"><b>적용 트림</b> · '+x.trims+'</div>'+
      '</div>';
    }).join('');
    return '<details class="interior-panel"><summary><span>실내 컬러 · 트림 코드</span><small>'+rows.length+'개 조합</small></summary><div class="interior-inner">'+
      '<p class="interior-help">코드를 크게 표시하고, 시트 색상·소재·인테리어 데코와 적용 트림을 한 번에 찾을 수 있게 정리했습니다.</p>'+
      '<div class="interior-grid">'+cards+'</div>'+
      '<div class="interior-note">※ 원형 색상은 빠른 구분을 위한 화면용 가이드입니다. 실제 색감과 소재 질감은 공식 실내 이미지 또는 실차에서 최종 확인하는 것을 권장합니다.</div>'+
      '</div></details>';
  }

  openModel=function(key){
    const d=models[key]; ensureTrimStyles(); ensureInteriorStyles();
    openM(d.year+' · '+d.power,names[key],d.note,basePanel(key)+interiorPanel(key)+cardHTML(d,key)+modelNotice(d));
  };

  openAllTrims=function(){
    ensureTrimStyles(); ensureInteriorStyles();
    let tabs=Object.keys(models).map((x,i)=>'<button class="'+(i?'':'active')+'" onclick="renderTrim(\''+x+'\',this)">'+names[x]+'</button>').join('');
    openM('MY26 FULL · MY27 LIGHT','전체 트림 & 가격','기본사양·실내 컬러/코드·상위 트림 추가 옵션을 모델별로 빠르게 찾을 수 있습니다.',
      '<div class="tabs" id="tt">'+tabs+'</div><div id="tc"><div class="alert" style="margin-top:0;margin-bottom:10px"><b>XC40 · MY26</b> · '+sourceName(models.XC40)+'</div>'+basePanel('XC40')+interiorPanel('XC40')+cardHTML(models.XC40,'XC40')+'</div>');
  };

  renderTrim=function(x,b){
    ensureTrimStyles(); ensureInteriorStyles();
    document.querySelectorAll('#tt button').forEach(z=>z.classList.remove('active')); b.classList.add('active');
    const d=models[x];
    document.getElementById('tc').innerHTML='<div class="alert" style="margin-top:0;margin-bottom:10px"><b>'+names[x]+' · '+d.year+'</b> · '+sourceName(d)+'<br>'+d.power+'</div>'+basePanel(x)+interiorPanel(x)+cardHTML(d,x);
  };

  document.addEventListener('DOMContentLoaded',ensureInteriorStyles);
})();
