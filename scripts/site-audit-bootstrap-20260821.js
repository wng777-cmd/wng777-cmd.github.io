(function(){
  if(!document.querySelector('link[data-site-audit-css]')){
    var l=document.createElement('link');
    l.rel='stylesheet';
    l.href='scripts/site-audit-fixes-20260821.css?v=20260821audit1';
    l.setAttribute('data-site-audit-css','1');
    document.head.appendChild(l);
  }
})();