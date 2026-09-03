/* 2026-09-03 · Interior data hard-sync
   Authoritative source: Volvo The ONE MY26 Full Ver + Accessories V3.1
   and Volvo The ONE MY27 Light V3.1 (KR sales guide).
   This runs after the material-card UI and replaces any stale/cached interior
   mapping in-place so desktop/mobile use the same verified combinations.
*/
(function(){
  'use strict';
  if(window.__VOLVO_INTERIOR_V31_SYNC_20260903__) return;
  window.__VOLVO_INTERIOR_V31_SYNC_20260903__=true;

  var VERIFIED={
    XC90:{label:'XC90',groups:[
      {label:'PLUS BRIGHT',sub:'B6 AWD PLUS BRIGHT',items:[
        {code:'RP00',en:'Charcoal',ko:'차콜',seat:'Nordico',deco:'Brown Ash'},
        {code:'RPE0',en:'Cardamom',ko:'카다멈',seat:'Nordico',deco:'Brown Ash'}
      ]},
      {label:'ULTRA BRIGHT / ULTRA DARK',sub:'B6 ULTRA BRIGHT · B6 ULTRA DARK · T8 ULTRA BRIGHT · T8 ULTRA DARK',items:[
        {code:'RCE0',en:'Cardamom',ko:'카다멈',seat:'Nappa Leather',deco:'Brown Ash'},
        {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Grey Ash'},
        {code:'UC00',en:'Blond',ko:'블론드',seat:'Nappa Leather',deco:'Grey Ash'}
      ]}
    ]},
    XC60:{label:'XC60',groups:[
      {label:'PLUS BRIGHT',sub:'B5 AWD PLUS BRIGHT',items:[
        {code:'RP00',en:'Charcoal',ko:'차콜',seat:'Nordico',deco:'Natural Driftwood'},
        {code:'RPE0',en:'Cardamom',ko:'카다멈',seat:'Nordico',deco:'Natural Driftwood'}
      ]},
      {label:'ULTRA BRIGHT / ULTRA DARK',sub:'B5 ULTRA BRIGHT · B5 ULTRA DARK · T8 ULTRA BRIGHT',items:[
        {code:'UC00',en:'Blond',ko:'블론드',seat:'Nappa Leather',deco:'White Driftwood'},
        {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Natural Driftwood'}
      ]}
    ]},
    S90:{label:'S90',groups:[
      {label:'PLUS BRIGHT',sub:'B5 PLUS BRIGHT',items:[
        {code:'RP00',en:'Charcoal',ko:'차콜',seat:'Nordico',deco:'Brown Ash'}
      ]},
      {label:'ULTRA BRIGHT / ULTRA DARK',sub:'B5 ULTRA BRIGHT · B5 ULTRA DARK · T8 ULTRA BRIGHT',items:[
        {code:'RCE0',en:'Cardamom',ko:'카다멈',seat:'Nappa Leather',deco:'Brown Ash'},
        {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Grey Ash'},
        {code:'UC00',en:'Blond',ko:'블론드',seat:'Nappa Leather',deco:'Grey Ash'}
      ]}
    ]},
    XC40:{label:'XC40',groups:[
      {label:'PLUS BRIGHT',sub:'B4 AWD PLUS BRIGHT',items:[
        {code:'RD00',en:'Charcoal',ko:'차콜',seat:'Leather',deco:'Driftwood'},
        {code:'UD70',en:'Blond',ko:'블론드',seat:'Leather',deco:'Driftwood'}
      ]},
      {label:'ULTRA BRIGHT / ULTRA DARK',sub:'B4 AWD ULTRA BRIGHT · B4 AWD ULTRA DARK',items:[
        {code:'UD70',en:'Blond',ko:'블론드',seat:'Leather',deco:'Driftwood'},
        {code:'RD00',en:'Charcoal',ko:'차콜',seat:'Leather',deco:'Driftwood'}
      ]}
    ]},
    V60CC:{label:'V60 Cross Country',groups:[
      {label:'ULTRA',sub:'B5 AWD ULTRA',items:[
        {code:'RC20',en:'Amber',ko:'앰버',seat:'Nappa Leather',deco:'Linear Lime'},
        {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Driftwood'},
        {code:'RC30',en:'Maroon Brown',ko:'마룬 브라운',seat:'Nappa Leather',deco:'Linear Lime'},
        {code:'UC00',en:'Blond',ko:'블론드',seat:'Nappa Leather',deco:'Driftwood'}
      ]}
    ]},
    EX30:{label:'EX30',groups:[
      {label:'CORE',sub:'CORE',items:[
        {code:'R310',en:'Indigo',ko:'인디고',seat:'Textile & Nordico',deco:'Denim'}
      ]},
      {label:'ULTRA',sub:'ULTRA',items:[
        {code:'R540',en:'Breeze',ko:'브리즈',seat:'Pixel Knit & Nordico',deco:'Particle'},
        {code:'R220',en:'Mist',ko:'미스트',seat:'Tailored Wool Blend',deco:'Flax'}
      ]}
    ]},
    EX30CC:{label:'EX30 Cross Country',groups:[
      {label:'ULTRA',sub:'ULTRA',items:[
        {code:'R430',en:'Pine',ko:'파인',seat:'Wool Blend & Nordico',deco:'Flax'}
      ]}
    ]},
    EX90:{label:'EX90',groups:[
      {label:'Twin Motor PLUS · 7인승',sub:'Twin Motor PLUS · 7-Seater',items:[
        {code:'RG10',en:'Cardamom',ko:'카다멈',seat:'Nordico',deco:'Brown Ash'},
        {code:'AG60',en:'Dawn',ko:'던',seat:'Nordico',deco:'Light Ash'},
        {code:'RG00',en:'Charcoal',ko:'차콜',seat:'Nordico',deco:'Brown Ash'}
      ]},
      {label:'Twin Motor ULTRA · 7인승',sub:'Twin Motor ULTRA · 7-Seater',items:[
        {code:'RC10',en:'Cardamom',ko:'카다멈',seat:'Nappa Leather',deco:'Brown Ash'},
        {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Light Ash'},
        {code:'AC60',en:'Dawn',ko:'던',seat:'Nappa Leather',deco:'Light Ash'}
      ]},
      {label:'Twin Motor ULTRA · 6인승',sub:'Twin Motor ULTRA · 6-Seater',items:[
        {code:'AC60',en:'Dawn',ko:'던',seat:'Nappa Leather',deco:'Light Ash'},
        {code:'RC10',en:'Cardamom',ko:'카다멈',seat:'Nappa Leather',deco:'Brown Ash'},
        {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Light Ash'}
      ]},
      {label:'Performance ULTRA · 7인승',sub:'Twin Motor Performance ULTRA · 7-Seater',items:[
        {code:'AC60',en:'Dawn',ko:'던',seat:'Nappa Leather',deco:'Light Ash'},
        {code:'RC10',en:'Cardamom',ko:'카다멈',seat:'Nappa Leather',deco:'Brown Ash'},
        {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Light Ash'}
      ]},
      {label:'Performance ULTRA · 6인승',sub:'Twin Motor Performance ULTRA · 6-Seater',items:[
        {code:'AC60',en:'Dawn',ko:'던',seat:'Nappa Leather',deco:'Light Ash'},
        {code:'RC10',en:'Cardamom',ko:'카다멈',seat:'Nappa Leather',deco:'Brown Ash'},
        {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Light Ash'}
      ]}
    ]},
    ES90:{label:'ES90',groups:[
      {label:'PLUS',sub:'Single Motor Extended Range PLUS · Twin Motor PLUS',items:[
        {code:'RD10',en:'Cardamom',ko:'카다멈',seat:'Nordico',deco:'Birch'},
        {code:'RD00',en:'Charcoal',ko:'차콜',seat:'Nordico',deco:'Birch'},
        {code:'AD60',en:'Dawn',ko:'던',seat:'Nordico',deco:'Light Ash'}
      ]},
      {label:'ULTRA',sub:'Single Motor Extended Range ULTRA · Twin Motor ULTRA · Performance ULTRA',items:[
        {code:'AC60',en:'Dawn',ko:'던',seat:'Nappa Leather',deco:'Light Ash'},
        {code:'RC10',en:'Cardamom',ko:'카다멈',seat:'Nappa Leather',deco:'Birch'},
        {code:'RC00',en:'Charcoal',ko:'차콜',seat:'Nappa Leather',deco:'Birch'}
      ]}
    ]}
  };

  var EXPECTED={
    XC90:['RP00','RPE0','RCE0','RC00','UC00'],
    XC60:['RP00','RPE0','UC00','RC00'],
    S90:['RP00','RCE0','RC00','UC00'],
    XC40:['RD00','UD70'],
    V60CC:['RC20','RC00','RC30','UC00'],
    EX30:['R310','R540','R220'],
    EX30CC:['R430'],
    EX90:['RG10','AG60','RG00','RC10','RC00','AC60'],
    ES90:['RD10','RD00','AD60','AC60','RC10','RC00']
  };

  function uniqueCodes(model){
    var seen={},out=[];
    (model.groups||[]).forEach(function(g){(g.items||[]).forEach(function(v){if(!seen[v.code]){seen[v.code]=1;out.push(v.code);}})});
    return out.sort();
  }
  function sameCodes(a,b){return a.slice().sort().join('|')===b.slice().sort().join('|');}

  function apply(){
    var live=window.__VOLVO_INTERIOR_DATA__;
    if(!live) return false;
    Object.keys(VERIFIED).forEach(function(k){live[k]=VERIFIED[k];});
    window.__VOLVO_INTERIOR_SOURCE__='MY26 V3.1 + MY27 V3.1 · 2026-09-03 verified';

    var ok=Object.keys(EXPECTED).every(function(k){return live[k]&&sameCodes(uniqueCodes(live[k]),EXPECTED[k]);});
    document.documentElement.setAttribute('data-interior-data',ok?'20260903-v31-verified':'20260903-v31-error');

    var note=document.querySelector('#colors .vci-note');
    if(note) note.textContent='※ Volvo The ONE MY26 V3.1 / MY27 V3.1 국내 판매 자료 기준입니다. 실제 색감과 질감은 전시장 실차 또는 공식 샘플로 최종 확인해주세요.';

    /* Refresh the hidden/default render as well, without opening or scrolling the guide. */
    try{
      var current=window.getVolvoInteriorState&&window.getVolvoInteriorState();
      var key=current&&current.model||'XC90';
      var btn=document.querySelector('#colors .vci-model-btn[data-model="'+key+'"]');
      if(btn) btn.click();
    }catch(e){}
    return ok;
  }

  var attempts=0;
  function boot(){
    attempts++;
    if(apply()) return;
    if(attempts<40) setTimeout(boot,50);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{once:true});
  else boot();
})();
