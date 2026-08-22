/* Stable loader: one interior system, existing core functions preserved. */
(function(){
  function addScript(src,attr,done){if(attr&&document.querySelector('script['+attr+']')){if(done)done();return}var s=document.createElement('script');s.src=src;if(attr)s.setAttribute(attr,'1');s.onload=done||null;document.head.appendChild(s)}
  function addCss(href,attr){if(attr&&document.querySelector('link['+attr+']'))return;var l=document.createElement('link');l.rel='stylesheet';l.href=href;if(attr)l.setAttribute(attr,'1');document.head.appendChild(l)}
  function installBase(){
    addScript('scripts/site-internal-test-filter-20260821.js?v=20260821internal1','data-internal-test-filter');
    addCss('scripts/site-audit-fixes-20260821.css?v=20260821audit1','data-site-audit-css');
    addCss('scripts/site-hero-title-fix-20260821.css?v=20260821hero1','data-hero-title-css');
    addCss('scripts/site-interior-stable-20260822.css?v=20260822stable2','data-interior-stable-css');
  }
  function loadAuditFixes(){if(document.querySelector('script[data-site-audit-fixes]'))return;var s=document.createElement('script');s.src='scripts/site-audit-fixes-20260821.js?v=20260821audit3';s.setAttribute('data-site-audit-fixes','1');document.body.appendChild(s)}
  installBase();
  if(document.readyState==='loading'){
    document.write('<script src="scripts/site-pdf-refresh-core.js?v=20260821audit1"><\\/script>');
    document.write('<script src="scripts/site-dark-guide.js?v=20260821dark5"><\\/script>');
    document.write('<script src="scripts/site-dark-guide-refine-20260821.js?v=20260821dark5"><\\/script>');
    document.write('<script src="scripts/site-copy-fix-20260821.js?v=20260821copy1"><\\/script>');
    document.write('<script src="scripts/site-color-interior-stable-20260822.js?v=20260822stable2"><\\/script>');
    document.addEventListener('DOMContentLoaded',loadAuditFixes,{once:true});
    return;
  }
  addScript('scripts/site-pdf-refresh-core.js?v=20260821audit1',null,function(){
    addScript('scripts/site-dark-guide.js?v=20260821dark5',null,function(){
      addScript('scripts/site-dark-guide-refine-20260821.js?v=20260821dark5',null,function(){
        addScript('scripts/site-copy-fix-20260821.js?v=20260821copy1',null,function(){
          addScript('scripts/site-color-interior-stable-20260822.js?v=20260822stable2',null,loadAuditFixes);
        });
      });
    });
  });
})();
