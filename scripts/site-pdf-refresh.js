/* Loader: preserve the existing site core, then add the Dark theme visual guide.
   2026-08-21 audit: post-UI fixes load after parser scripts so today's trim updates
   are not hidden by the comparison UI layer.
   Dark hotspot refinement keeps marker alignment stable on PC and mobile.
*/
(function(){
  function installAuditCss(){
    if(document.querySelector('link[data-site-audit-css]')) return;
    var l=document.createElement('link');
    l.rel='stylesheet';
    l.href='scripts/site-audit-fixes-20260821.css?v=20260821audit1';
    l.setAttribute('data-site-audit-css','1');
    document.head.appendChild(l);
  }
  function loadAuditFixes(){
    installAuditCss();
    if(document.querySelector('script[data-site-audit-fixes]')) return;
    var s=document.createElement('script');
    s.src='scripts/site-audit-fixes-20260821.js?v=20260821audit1';
    s.setAttribute('data-site-audit-fixes','1');
    document.body.appendChild(s);
  }

  installAuditCss();
  if(document.readyState==='loading'){
    document.write('<script src="scripts/site-pdf-refresh-core.js?v=20260821audit1"><\/script>');
    document.write('<script src="scripts/site-dark-guide.js?v=20260821dark2"><\/script>');
    document.write('<script src="scripts/site-dark-guide-refine-20260821.js?v=20260821dark2"><\/script>');
    document.write('<script src="scripts/site-copy-fix-20260821.js?v=20260821copy1"><\/script>');
    document.addEventListener('DOMContentLoaded',loadAuditFixes,{once:true});
    return;
  }
  function load(src,done){var s=document.createElement('script');s.src=src;s.onload=done||null;document.head.appendChild(s)}
  load('scripts/site-pdf-refresh-core.js?v=20260821audit1',function(){
    load('scripts/site-dark-guide.js?v=20260821dark2',function(){
      load('scripts/site-dark-guide-refine-20260821.js?v=20260821dark2',function(){
        load('scripts/site-copy-fix-20260821.js?v=20260821copy1',loadAuditFixes);
      });
    });
  });
})();