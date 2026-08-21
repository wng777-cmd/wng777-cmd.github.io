/* 2026-08-21 Dark guide front + side refinement
   Shows front and 3/4 side views together so customers can immediately see
   where grille/lower trim vs window moulding/wheels change on Dark theme.
*/
(function(){
  const sideImages={
    XC40:'https://wizz.volvocars.com/images/2026/536/exterior/studio/threeQuartersFrontLeft/transparent_exterior-studio-threeQuartersFrontLeft_6FEFADDABC7B912361B1D19779B4DCDCFD619C73.png?bg=fafafa&client=pdps&w=3840',
    XC60:'https://wizz.volvocars.com/images/2026/246/exterior/studio/threeQuartersFrontLeft/transparent_exterior-studio-threeQuartersFrontLeft_8F00F51978887CF795CDB7A4761A925C1B44BE0B.png?bg=fafafa&client=pdps&w=3840',
    XC90:'https://wizz.volvocars.com/images/2026/256/exterior/studio/threeQuartersFrontLeft/transparent_exterior-studio-threeQuartersFrontLeft_5898521E9125FDA1403996EF39C074D1EF60E037.png?bg=fafafa&client=homepage&w=3840'
  };

  const frontLayouts={
    XC40:{1:{left:35,top:49,width:30,height:9},3:{left:27,top:62,width:31,height:8}},
    XC60:{1:{left:34,top:50,width:29,height:9},3:{left:27,top:63,width:32,height:8}},
    XC90:{1:{left:33,top:50,width:30,height:9},3:{left:26,top:63,width:34,height:8}}
  };

  const sideLayouts={
    XC40:{2:{left:47,top:31,width:36,height:9},4:{left:31,top:56,width:15,height:27}},
    XC60:{2:{left:48,top:31,width:35,height:9},4:{left:31,top:56,width:15,height:27}},
    XC90:{2:{left:47,top:30,width:38,height:9},4:{left:31,top:56,width:15,height:27}}
  };

  const labels=['그릴','윈도우 몰딩','하단 범퍼','휠'];

  function currentModel(){
    const h=document.querySelector('#mbody .dg-copy h3');
    if(!h)return null;
    const t=(h.textContent||'').toUpperCase();
    if(t.includes('XC40'))return 'XC40';
    if(t.includes('XC60'))return 'XC60';
    if(t.includes('XC90'))return 'XC90';
    return null;
  }

  function hotspot(n,p){
    return '<span class="dg-hotspot dg-side-hotspot" style="left:'+p.left+'%;top:'+p.top+'%;width:'+p.width+'%;height:'+p.height+'%"><b>'+n+'</b></span>';
  }

  function installCss(){
    if(document.getElementById('dark-guide-refine-style'))return;
    const s=document.createElement('style');
    s.id='dark-guide-refine-style';
    s.textContent=`
      .dg-mini-legend{display:flex;gap:6px;flex-wrap:wrap;margin:0 0 10px;padding:0 1px}
      .dg-mini-legend span{display:inline-flex;align-items:center;gap:4px;border:1px solid #dbe1e4;background:#fff;border-radius:999px;padding:5px 8px;font-size:9px;font-weight:800;color:#40515b;line-height:1}
      .dg-mini-legend b{display:grid;place-items:center;width:16px;height:16px;border-radius:50%;background:#f1263d;color:#fff;font-size:8px}
      .dg-view-grid{display:grid;grid-template-columns:minmax(220px,.78fr) minmax(330px,1.22fr);gap:10px;align-items:start}
      .dg-view-card{position:relative;border:1px solid #e0e5e7;border-radius:12px;background:#fff;overflow:hidden}
      .dg-view-label{position:absolute;z-index:5;left:9px;top:9px;border-radius:999px;background:rgba(16,24,32,.88);color:#fff;padding:5px 8px;font-size:9px;font-weight:900;letter-spacing:.2px}
      .dg-view-hint{position:absolute;z-index:5;right:9px;top:9px;border-radius:999px;background:rgba(255,255,255,.92);color:#d51e33;border:1px solid rgba(213,30,51,.18);padding:5px 8px;font-size:8px;font-weight:900}
      .dg-photo{aspect-ratio:4/5!important;min-height:0!important;height:auto!important;border-radius:0!important;background:#ecebea!important}
      .dg-photo img{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;min-height:0!important;object-fit:cover!important;object-position:center center!important}
      .dg-side-photo{position:relative;aspect-ratio:16/9;background:#fafafa;overflow:hidden}
      .dg-side-photo img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;object-position:center center;display:block}
      .dg-hotspot{border:2px solid #f1263d!important;background:rgba(241,38,61,.025)!important;box-shadow:0 0 0 1px rgba(255,255,255,.9),0 2px 7px rgba(0,0,0,.16)!important}
      .dg-hotspot b{left:-8px!important;top:-9px!important;width:19px!important;height:19px!important;font-size:9px!important;border-width:2px!important}
      .dg-photo-wrap>small{display:block;margin:9px 2px 1px!important;line-height:1.5}
      @media(max-width:700px){
        .dg-view-grid{grid-template-columns:1fr;gap:8px}
        .dg-photo{aspect-ratio:4/5!important;min-height:0!important}
        .dg-side-photo{aspect-ratio:16/9}
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
    const pos=frontLayouts[model];
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

  function buildViews(wrap,photo,model){
    let legend=wrap.querySelector('.dg-mini-legend');
    if(!legend){
      legend=document.createElement('div');
      legend.className='dg-mini-legend';
      legend.innerHTML=labels.map((x,i)=>'<span><b>'+(i+1)+'</b>'+x+'</span>').join('');
      wrap.insertBefore(legend,photo);
    }

    let grid=wrap.querySelector('.dg-view-grid');
    if(grid)return grid;

    grid=document.createElement('div');
    grid.className='dg-view-grid';

    const front=document.createElement('div');
    front.className='dg-view-card dg-front-card';
    front.innerHTML='<span class="dg-view-label">전면</span><span class="dg-view-hint">1·3 확인</span>';
    front.appendChild(photo);

    const side=document.createElement('div');
    side.className='dg-view-card dg-side-card';
    const sp=sideLayouts[model];
    side.innerHTML='<span class="dg-view-label">측면 · 3/4</span><span class="dg-view-hint">2·4 확인</span><div class="dg-side-photo"><img src="'+sideImages[model]+'" alt="'+model+' 측면 외관 Dark 적용 위치">'+hotspot(2,sp[2])+hotspot(4,sp[4])+'</div>';

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
      if(note)note.textContent='※ 전면은 그릴·하단 범퍼, 측면은 윈도우 몰딩·휠을 나눠 표시했습니다. 사진은 Dark 적용 위치를 이해하기 위한 안내용입니다.';
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