/* 2026-08-21 electric driving-range guide */
(function(){
  const ranges={
    EX30:{value:'351 km',card:'1회 충전 351km',basis:'국내 복합 · 환경부 기준',detail:'CORE / ULTRA 동일 파워트레인 기준'},
    EX30CC:{value:'329 km',card:'1회 충전 329km',basis:'국내 복합 · 산자부 기준',detail:'EX30 Cross Country ULTRA 기준'},
    EX90:{value:'최대 625 km',card:'최대 625km',basis:'글로벌 WLTP 기준',detail:'트림·휠·주행 환경에 따라 실제 주행거리는 달라질 수 있습니다.'},
    ES90:{value:'최대 706 km',card:'최대 706km',basis:'글로벌 WLTP 기준',detail:'파워트레인·트림·휠·주행 환경에 따라 실제 주행거리는 달라질 수 있습니다.'}
  };

  function installStyle(){
    if(document.getElementById('electric-range-style'))return;
    const s=document.createElement('style');
    s.id='electric-range-style';
    s.textContent=`
      .electric-range-chip{display:flex;align-items:center;gap:6px;margin:9px 0 11px;padding:8px 10px;border:1px solid #dbe3e7;border-radius:10px;background:#f5f8f9;color:#263944;font-size:9px;font-weight:800;line-height:1.25}
      .electric-range-chip:before{content:'⚡';font-size:11px}.electric-range-chip strong{font-size:11px;color:#07131d}.electric-range-chip em{margin-left:auto;font-style:normal;font-size:8px;color:#687780;font-weight:800;white-space:nowrap}
      .electric-range-panel{margin:0 0 15px;padding:14px 15px;border:1px solid #d9e2e6;border-radius:15px;background:linear-gradient(135deg,#f7f9fa,#eef3f5)}
      .electric-range-kicker{font-size:8px;font-weight:900;letter-spacing:.1em;color:#667983;margin-bottom:5px}
      .electric-range-main{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}.electric-range-main b{font-size:21px;letter-spacing:-.035em;color:#07131d}.electric-range-main span{font-size:9px;font-weight:900;color:#36505f}
      .electric-range-panel p{margin:6px 0 0;font-size:9px;line-height:1.55;color:#5b6a73}
      @media(max-width:700px){.electric-range-chip{font-size:9px}.electric-range-chip strong{font-size:10px}.electric-range-chip em{font-size:7px}.electric-range-panel{padding:13px}.electric-range-main b{font-size:19px}.electric-range-panel p{font-size:9px}}
    `;
    document.head.appendChild(s);
  }

  function cardBasis(key){return key==='EX30'||key==='EX30CC'?'국내 복합':'WLTP 최대'}
  function installCardRanges(){
    Object.keys(ranges).forEach(key=>{
      const card=document.querySelector('.model[data-model="'+key+'"] .mb');
      if(!card||card.querySelector('.electric-range-chip'))return;
      const anchor=card.querySelector('small');
      const chip=document.createElement('div');
      chip.className='electric-range-chip';
      chip.innerHTML='<span>완충 기준</span><strong>'+ranges[key].card+'</strong><em>'+cardBasis(key)+'</em>';
      if(anchor)anchor.insertAdjacentElement('afterend',chip);else card.prepend(chip);
    });
  }

  function panelHTML(key){
    const r=ranges[key];if(!r)return'';
    let extra=r.detail;
    if(key==='EX90'||key==='ES90')extra+=' MY27 Light V3의 국내 인증 주행거리 항목은 TBD로 표기되어 있어 현재 Volvo Cars Korea 공식 발표 WLTP 최대값을 안내합니다.';
    return '<div class="electric-range-panel" data-electric-range="'+key+'"><div class="electric-range-kicker">100% CHARGE · DRIVING RANGE</div><div class="electric-range-main"><b>'+r.value+'</b><span>'+r.basis+'</span></div><p>'+extra+'</p></div>';
  }

  function insertPanel(key,target){
    const r=ranges[key];if(!r)return;
    const root=target||document.getElementById('mbody');if(!root||root.querySelector('[data-electric-range="'+key+'"]'))return;
    const html=panelHTML(key);
    const firstAlert=root.querySelector(':scope > .alert');
    if(firstAlert)firstAlert.insertAdjacentHTML('afterend',html);else root.insertAdjacentHTML('afterbegin',html);
  }

  function wrap(){
    if(window.__electricRangeWrapped)return;
    if(typeof window.openModel==='function'){
      const oldOpen=window.openModel;
      window.openModel=function(key){oldOpen(key);requestAnimationFrame(function(){insertPanel(key,document.getElementById('mbody'))})};
    }
    if(typeof window.renderTrim==='function'){
      const oldRender=window.renderTrim;
      window.renderTrim=function(key,b){oldRender(key,b);requestAnimationFrame(function(){insertPanel(key,document.getElementById('tc'))})};
    }
    window.__electricRangeWrapped=true;
  }

  function start(){installStyle();installCardRanges();wrap();document.documentElement.setAttribute('data-electric-range','20260821-1')}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
