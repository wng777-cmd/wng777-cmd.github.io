/* 2026-08-21 Dark guide layout fix
   Front and 3/4 side views are shown as two stable stacked cards.
   This prevents the side image from overlapping the description panel and
   keeps the same structure on desktop and mobile.
   S90 is included with model-specific markers so only actual Dark-theme
   exterior points are highlighted.
*/
(function(){
  const sideImages={
    XC40:'https://wizz.volvocars.com/images/2026/536/exterior/studio/threeQuartersFrontLeft/transparent_exterior-studio-threeQuartersFrontLeft_6FEFADDABC7B912361B1D19779B4DCDCFD619C73.png?bg=fafafa&client=pdps&w=3840',
    XC60:'https://wizz.volvocars.com/images/2026/246/exterior/studio/threeQuartersFrontLeft/transparent_exterior-studio-threeQuartersFrontLeft_8F00F51978887CF795CDB7A4761A925C1B44BE0B.png?bg=fafafa&client=pdps&w=3840',
    XC90:'https://wizz.volvocars.com/images/2026/256/exterior/studio/threeQuartersFrontLeft/transparent_exterior-studio-threeQuartersFrontLeft_5898521E9125FDA1403996EF39C074D1EF60E037.png?bg=fafafa&client=homepage&w=3840',
    S90:'https://wizz.volvocars.com/images/2026/238/exterior/studio/threeQuartersFrontLeft/transparent_exterior-studio-threeQuartersFrontLeft_2003EF9A5402A0D5EC7177ED74777B55DDB47737.png?bg=fafafa&client=pdps&w=3840'
  };

  const frontLayouts={
    XC40:{1:{left:35,top:49,width:30,height:9},3:{left:27,top:62,width:31,height:8}},
    XC60:{1:{left:34,top:50,width:29,height:9},3:{left:27,top:63,width:32,height:8}},
    XC90:{1:{left:33,top:50,width:30,height:9},3:{left:26,top:63,width:34,height:8}},
    S90:{1:{left:30,top:51,width:39,height:9}}
  };

  const sideLayouts={
    XC40:{2:{left:47,top:31,width:36,height:9},4:{left:31,top:56,width:15,height:27}},
    XC60:{2:{left:48,top:31,width:35,height:9},4:{left:31,top:56,width:15,height:27}},
    XC90:{2:{left:47,top:30,width:38,height:9},4:{left:31,top:56,width:15,height:27}},
    S90:{2:{left:42,top:37,width:11,height:12},3:{left:49,top:31,width:39,height:8}}
  };

  const modelLabels={
    XC40:{1:'그릴',2:'윈도우 몰딩',3:'하단 범퍼',4:'휠'},
    XC60:{1:'그릴',2:'윈도우 몰딩',3:'하단 범퍼',4:'휠'},
    XC90:{1:'그릴',2:'윈도우 몰딩',3:'하단 범퍼',4:'휠'},
    S90:{1:'그릴',2:'사이드미러',3:'윈도우 데코'}
  };

  function currentModel(){
    const h=document.querySelector('#mbody .dg-copy h3');
    if(!h)return null;
    const t=(h.textContent||'').toUpperCase();
    if(t.includes('XC40'))return 'XC40';
    if(t.includes('XC60'))return 'XC60';
    if(t.includes('XC90'))return 'XC90';
    if(t.includes('S90'))return 'S90';
    return null;
  }

  function hotspot(n,p){
    return '<span class="dg-hotspot dg-side-hotspot" style="left:'+p.left+'%;top:'+p.top+'%;width:'+p.width+'%;height:'+p.height+'%"><b>'+n+'</b></span>';
  }

  function markerKeys(obj){return Object.keys(obj||{}).map(Number).sort((a,b)=>a-b)}

  function installCss(){
    let old=document.getElementById('dark-guide-refine-style');
    if(old)old.remove();
    const s=document.createElement('style');
    s.id='dark-guide-refine-style';
    s.textContent=`
      .dg-panel{grid-template-columns:minmax(0,1.2fr) minmax(280px,.8fr)!important;align-items:start!important}
      .dg-photo-wrap,.dg-copy{min-width:0!important}
      .dg-photo-wrap{overflow:hidden!important}
      .dg-mini-legend{display:flex;gap:6px;flex-wrap:wrap;margin:0 0 10px;padding:0 1px}
      .dg-mini-legend span{display:inline-flex;align-items:center;gap:4px;border:1px solid #dbe1e4;background:#fff;border-radius:999px;padding:5px 8px;font-size:9px;font-weight:800;color:#40515b;line-height:1}
      .dg-mini-legend b{display:grid;place-items:center;width:16px;height:16px;border-radius:50%;background:#f1263d;color:#fff;font-size:8px}

      .dg-view-grid{display:grid!important;grid-template-columns:1fr!important;gap:10px!important;width:100%!important;min-width:0!important}
      .dg-view-card{position:relative;width:100%;min-width:0;border:1px solid #e0e5e7;border-radius:12px;background:#fafafa;overflow:hidden;box-sizing:border-box}
      .dg-view-label{position:absolute;z-index:8;left:9px;top:9px;border-radius:999px;background:rgba(16,24,32,.88);color:#fff;padding:5px 8px;font-size:9px;font-weight:900;letter-spacing:.2px}
      .dg-view-hint{position:absolute;z-index:8;right:9px;top:9px;border-radius:999px;background:rgba(255,255,255,.94);color:#d51e33;border:1px solid rgba(213,30,51,.18);padding:5px 8px;font-size:8px;font-weight:900}

      .dg-front-stage{position:relative;display:grid;place-items:center;width:100%;aspect-ratio:16/9;background:#fafafa;overflow:hidden;padding:10px;box-sizing:border-box}
      .dg-front-stage .dg-photo{position:relative!important;width:min(46%,310px)!important;aspect-ratio:4/5!important;min-height:0!important;height:auto!important;border-radius:8px!important;background:#eeece9!important;overflow:hidden!important;flex:none!important}
      .dg-front-stage .dg-photo img{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;min-height:0!important;object-fit:cover!important;object-position:center center!important}

      .dg-side-photo{position:relative;width:100%;aspect-ratio:16/9;background:#fafafa;overflow:hidden}
      .dg-side-photo img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;object-position:center center;display:block}

      .dg-hotspot{position:absolute!important;border:2px solid #f1263d!important;background:rgba(241,38,61,.025)!important;box-shadow:0 0 0 1px rgba(255,255,255,.9),0 2px 7px rgba(0,0,0,.16)!important;border-radius:999px!important;pointer-events:none!important;box-sizing:border-box!important}
      .dg-hotspot b{position:absolute!important;left:-8px!important;top:-9px!important;width:19px!important;height:19px!important;border-radius:50%!important;background:#f1263d!important;color:#fff!important;display:grid!important;place-items:center!important;font-size:9px!important;border:2px solid #fff!important;box-sizing:border-box!important}
      .dg-photo-wrap>small{display:block;margin:9px 2px 1px!important;line-height:1.5}

      @media(max-width:700px){
        .dg-panel{grid-template-columns:1fr!important}
        .dg-view-grid{grid-template-columns:1fr!important;gap:8px!important}
        .dg-front-stage{aspect-ratio:16/10;padding:8px}
        .dg-front-stage .dg-photo{width:min(55%,270px)!important}
        .dg-side-photo{aspect-ratio:16/10}
        .dg-hotspot b{width:18px!important;height:18px!important;font-size:8px!important;left:-7px!important;top:-8px!important}
        .dg-mini-legend{gap:5px;margin-bottom:8px}
        .dg-mini-legend span{font-size:8px;padding:4px 7px}
        .dg-mini-legend b{width:15px;height:15px;font-size:7px}
        .dg-view-label,.dg-view-hint{font-size:8px;padding:4px 7px}
      }
    `;
    document.head.appendChild(s);
  }

  function setFrontMarkers(photo,model){
    const pos=frontLayouts[model]||{};
    [...photo.querySelectorAll('.dg-hotspot')].forEach(el=>{
      const n=(el.querySelector('b')&&el.querySelector('b').textContent||'').trim();
      if(!pos[n]){el.style.display='none';return;}
      el.style.display='block';
      el.style.left=pos[n].left+'%';
      el.style.top=pos[n].top+'%';
      el.style.width=pos[n].width+'%';
      el.style.height=pos[n].height+'%';
    });
  }

  function ensureLegend(wrap,anchor,model){
    let legend=wrap.querySelector('.dg-mini-legend');
    if(legend)return legend;
    const labels=modelLabels[model]||{};
    legend=document.createElement('div');
    legend.className='dg-mini-legend';
    legend.innerHTML=Object.keys(labels).map(n=>'<span><b>'+n+'</b>'+labels[n]+'</span>').join('');
    wrap.insertBefore(legend,anchor);
    return legend;
  }

  function buildViews(wrap,photo,model){
    let grid=wrap.querySelector('.dg-view-grid');
    if(grid)return grid;

    ensureLegend(wrap,photo,model);

    grid=document.createElement('div');
    grid.className='dg-view-grid';

    const frontKeys=markerKeys(frontLayouts[model]);
    const sideKeys=markerKeys(sideLayouts[model]);

    const front=document.createElement('div');
    front.className='dg-view-card dg-front-card';
    front.innerHTML='<span class="dg-view-label">전면</span><span class="dg-view-hint">'+frontKeys.join(' · ')+' 확인</span><div class="dg-front-stage"></div>';
    front.querySelector('.dg-front-stage').appendChild(photo);

    const side=document.createElement('div');
    side.className='dg-view-card dg-side-card';
    const sp=sideLayouts[model]||{};
    side.innerHTML='<span class="dg-view-label">측면 · 3/4</span><span class="dg-view-hint">'+sideKeys.join(' · ')+' 확인</span><div class="dg-side-photo"><img src="'+sideImages[model]+'" alt="'+model+' 측면 외관 Dark 적용 위치">'+sideKeys.map(n=>hotspot(n,sp[n])).join('')+'</div>';

    grid.appendChild(front);
    grid.appendChild(side);
    wrap.insertBefore(grid,wrap.querySelector(':scope > small')||null);
    return grid;
  }

  let busy=false;
  function refine(){
    if(busy)return;
    busy=true;
    try{
      installCss();
      const model=currentModel();
      if(!model)return;
      const wrap=document.querySelector('#mbody .dg-photo-wrap');
      if(!wrap)return;
      const photo=wrap.querySelector('.dg-photo');
      if(!photo)return;

      setFrontMarkers(photo,model);
      buildViews(wrap,photo,model);

      const note=wrap.querySelector(':scope > small');
      if(note){
        note.textContent=model==='S90'
          ? '※ S90은 전면 그릴, 측면 사이드미러·윈도우 데코를 중심으로 Dark 적용 위치를 표시했습니다.'
          : '※ 전면에서는 그릴·하단 범퍼, 측면에서는 윈도우 몰딩·휠을 각각 확인할 수 있습니다.';
      }
    } finally {busy=false;}
  }

  installCss();
  const obs=new MutationObserver(()=>requestAnimationFrame(refine));
  function start(){
    const target=document.getElementById('mbody')||document.body;
    obs.observe(target,{childList:true,subtree:true});
    refine();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});
  else start();
})();