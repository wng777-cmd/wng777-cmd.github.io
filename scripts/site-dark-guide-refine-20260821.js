/* 2026-08-21 Dark guide visual refinement
   Keeps the existing guide/content, but makes the highlighted areas smaller,
   more precise and stable across desktop/mobile by locking the photo to 4:5.
*/
(function(){
  const layouts={
    XC40:[
      {left:35,top:49,width:30,height:9},   // grille
      {left:63,top:34,width:15,height:9},   // window / upper exterior trim
      {left:27,top:62,width:31,height:8},   // lower bumper trim
      {left:73,top:64,width:12,height:21}   // wheel
    ],
    XC60:[
      {left:34,top:50,width:29,height:9},
      {left:63,top:34,width:15,height:9},
      {left:27,top:63,width:32,height:8},
      {left:73,top:64,width:12,height:21}
    ],
    XC90:[
      {left:33,top:50,width:30,height:9},
      {left:63,top:33,width:15,height:9},
      {left:26,top:63,width:34,height:8},
      {left:73,top:64,width:12,height:21}
    ]
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

  function installCss(){
    if(document.getElementById('dark-guide-refine-style'))return;
    const s=document.createElement('style');
    s.id='dark-guide-refine-style';
    s.textContent=`
      .dg-photo{aspect-ratio:4/5!important;min-height:0!important;height:auto!important;background:#ecebea!important}
      .dg-photo img{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;min-height:0!important;object-fit:cover!important;object-position:center center!important}
      .dg-hotspot{border:2px solid #f1263d!important;background:rgba(241,38,61,.035)!important;box-shadow:0 0 0 1px rgba(255,255,255,.88),0 2px 7px rgba(0,0,0,.18)!important}
      .dg-hotspot b{left:-8px!important;top:-9px!important;width:19px!important;height:19px!important;font-size:9px!important;border-width:2px!important}
      .dg-mini-legend{display:flex;gap:6px;flex-wrap:wrap;margin:0 0 9px;padding:0 1px}
      .dg-mini-legend span{display:inline-flex;align-items:center;gap:4px;border:1px solid #dbe1e4;background:#fff;border-radius:999px;padding:5px 8px;font-size:9px;font-weight:800;color:#40515b;line-height:1}
      .dg-mini-legend b{display:grid;place-items:center;width:16px;height:16px;border-radius:50%;background:#f1263d;color:#fff;font-size:8px}
      .dg-photo-wrap>small{margin-top:9px!important}
      @media(max-width:700px){
        .dg-photo{aspect-ratio:4/5!important;min-height:0!important}
        .dg-hotspot{border-width:2px!important}
        .dg-hotspot b{width:18px!important;height:18px!important;font-size:8px!important;left:-7px!important;top:-8px!important}
        .dg-mini-legend{gap:5px;margin-bottom:8px}
        .dg-mini-legend span{font-size:8px;padding:4px 7px}
        .dg-mini-legend b{width:15px;height:15px;font-size:7px}
      }
    `;
    document.head.appendChild(s);
  }

  function refine(){
    installCss();
    const model=currentModel();
    if(!model)return;
    const photo=document.querySelector('#mbody .dg-photo');
    const wrap=document.querySelector('#mbody .dg-photo-wrap');
    if(!photo||!wrap)return;

    const spots=[...photo.querySelectorAll('.dg-hotspot')];
    const pos=layouts[model];
    spots.forEach((el,i)=>{
      if(!pos[i])return;
      el.style.left=pos[i].left+'%';
      el.style.top=pos[i].top+'%';
      el.style.width=pos[i].width+'%';
      el.style.height=pos[i].height+'%';
    });

    let legend=wrap.querySelector('.dg-mini-legend');
    if(!legend){
      legend=document.createElement('div');
      legend.className='dg-mini-legend';
      legend.innerHTML=labels.map((x,i)=>'<span><b>'+(i+1)+'</b>'+x+'</span>').join('');
      wrap.insertBefore(legend,photo);
    }

    const note=wrap.querySelector(':scope > small');
    if(note)note.textContent='※ 빨간 표시를 실제 Dark 적용 부위에 가깝게 좁혀 표시했습니다.';
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