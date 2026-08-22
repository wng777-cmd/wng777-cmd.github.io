/* Loader: preserve the existing site core, then add the Dark theme visual guide.
   2026-08-21 audit: post-UI fixes load after parser scripts so today's trim updates
   are not hidden by the comparison UI layer.
   Dark guide now shows front + side views on PC and mobile, including S90.
   Hero title layout is stabilized across desktop and mobile widths.
   Owner internal-test browsers are opted out of analytics after one-time activation.
   2026-08-22: customer-facing exterior/interior color guide adds official real interior visuals.
*/
(function(){
  function installInternalTestFilter(){
    if(document.querySelector('script[data-internal-test-filter]')) return;
    var s=document.createElement('script');
    s.src='scripts/site-internal-test-filter-20260821.js?v=20260821internal1';
    s.setAttribute('data-internal-test-filter','1');
    document.head.appendChild(s);
  }
  function installAuditCss(){
    if(document.querySelector('link[data-site-audit-css]')) return;
    var l=document.createElement('link');
    l.rel='stylesheet';
    l.href='scripts/site-audit-fixes-20260821.css?v=20260821audit1';
    l.setAttribute('data-site-audit-css','1');
    document.head.appendChild(l);
  }
  function installHeroTitleCss(){
    if(document.querySelector('link[data-hero-title-css]')) return;
    var l=document.createElement('link');
    l.rel='stylesheet';
    l.href='scripts/site-hero-title-fix-20260821.css?v=20260821hero1';
    l.setAttribute('data-hero-title-css','1');
    document.head.appendChild(l);
  }
  function installInteriorGuideCss(){
    if(document.querySelector('link[data-interior-guide-css]')) return;
    var l=document.createElement('link');
    l.rel='stylesheet';
    l.href='scripts/site-interior-guide-layout-20260822.css?v=20260822n';
    l.setAttribute('data-interior-guide-css','1');
    document.head.appendChild(l);
  }
  function loadAuditFixes(){
    installAuditCss();
    installHeroTitleCss();
    if(document.querySelector('script[data-site-audit-fixes]')) return;
    var s=document.createElement('script');
    s.src='scripts/site-audit-fixes-20260821.js?v=20260821audit3';
    s.setAttribute('data-site-audit-fixes','1');
    document.body.appendChild(s);
  }
  function loadXc90Hq(done){
    if(document.querySelector('script[data-xc90-hq-interior]')){if(done)done();return;}
    var s=document.createElement('script');
    s.src='scripts/site-interior-xc90-hq-20260822.js?v=20260822n';
    s.setAttribute('data-xc90-hq-interior','1');
    s.onload=done||null;
    document.head.appendChild(s);
  }

  installInternalTestFilter();
  installAuditCss();
  installHeroTitleCss();
  installInteriorGuideCss();
  if(document.readyState==='loading'){
    document.write('<script src="scripts/site-pdf-refresh-core.js?v=20260821audit1"><\/script>');
    document.write('<script src="scripts/site-dark-guide.js?v=20260821dark5"><\/script>');
    document.write('<script src="scripts/site-dark-guide-refine-20260821.js?v=20260821dark5"><\/script>');
    document.write('<script src="scripts/site-copy-fix-20260821.js?v=20260821copy1"><\/script>');
    document.write('<script src="scripts/site-color-interior-guide-20260822.js?v=20260822n"><\/script>');
    document.write('<script src="scripts/site-interior-xc90-hq-20260822.js?v=20260822n"><\/script>');
    document.addEventListener('DOMContentLoaded',loadAuditFixes,{once:true});
    return;
  }
  function load(src,done){var s=document.createElement('script');s.src=src;s.onload=done||null;document.head.appendChild(s)}
  load('scripts/site-pdf-refresh-core.js?v=20260821audit1',function(){
    load('scripts/site-dark-guide.js?v=20260821dark5',function(){
      load('scripts/site-dark-guide-refine-20260821.js?v=20260821dark5',function(){
        load('scripts/site-copy-fix-20260821.js?v=20260821copy1',function(){
          load('scripts/site-color-interior-guide-20260822.js?v=20260822n',function(){loadXc90Hq(loadAuditFixes)});
        });
      });
    });
  });
})();