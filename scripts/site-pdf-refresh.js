/* Stable loader: one interior system, existing core functions preserved. */
(function(){
  'use strict';
  if(window.__VOLVO_STABLE_LOADER_20260822__) return;
  window.__VOLVO_STABLE_LOADER_20260822__=true;

  function addScript(src,attr){
    return new Promise(function(resolve,reject){
      if(attr&&document.querySelector('script['+attr+']')){resolve();return;}
      var s=document.createElement('script');
      s.src=src;
      if(attr)s.setAttribute(attr,'1');
      s.onload=resolve;
      s.onerror=function(){reject(new Error('Failed to load '+src));};
      document.head.appendChild(s);
    });
  }
  function addCss(href,attr){
    if(attr&&document.querySelector('link['+attr+']'))return;
    var l=document.createElement('link');l.rel='stylesheet';l.href=href;if(attr)l.setAttribute(attr,'1');document.head.appendChild(l);
  }
  function installBase(){
    addScript('scripts/site-internal-test-filter-20260821.js?v=20260821internal1','data-internal-test-filter').catch(function(){});
    addCss('scripts/site-audit-fixes-20260821.css?v=20260821audit1','data-site-audit-css');
    addCss('scripts/site-hero-title-fix-20260821.css?v=20260821hero1','data-hero-title-css');
    addCss('scripts/site-interior-material-cards-20260823.css?v=20260903interior1','data-interior-material-css');
    addCss('scripts/site-interior-pdf-visual-audit-20260823.css?v=20260903interior1','data-interior-pdf-visual-css');
  }
  function loadAuditFixes(){
    if(document.querySelector('script[data-site-audit-fixes]'))return Promise.resolve();
    return addScript('scripts/site-audit-fixes-20260821.js?v=20260821audit3','data-site-audit-fixes');
  }
  function run(){
    installBase();
    addScript('scripts/site-pdf-refresh-core.js?v=20260903mobile2','data-volvo-core')
      .then(function(){return addScript('scripts/site-dark-guide.js?v=20260821dark5','data-dark-guide');})
      .then(function(){return addScript('scripts/site-dark-guide-refine-20260821.js?v=20260821dark5','data-dark-guide-refine');})
      .then(function(){return addScript('scripts/site-copy-fix-20260821.js?v=20260821copy1','data-copy-fix');})
      .then(function(){return addScript('scripts/site-interior-material-cards-20260823.js?v=20260903interior1','data-interior-material-js');})
      .then(function(){return addScript('scripts/site-interior-pdf-visual-audit-20260823.js?v=20260903interior1','data-interior-pdf-visual-js');})
      .then(function(){return addScript('scripts/site-interior-v31-sync-20260903.js?v=20260903interior1','data-interior-v31-sync');})
      .then(function(){document.documentElement.setAttribute('data-stable-loader','20260903-interior-v31');return loadAuditFixes();})
      .then(function(){return addScript('scripts/site-my26-v31-20260826.js?v=20260826v31','data-my26-v31');})
      .then(function(){return addScript('scripts/site-my26-v31-accessory-postload.js?v=20260826v31a','data-my26-v31-accessory-postload');})
      .then(function(){return addScript('scripts/site-my27-v31-20260901.js?v=20260901v31','data-my27-v31');})
      .then(function(){return addScript('scripts/site-aurora-silver-tone-20260901.js?v=20260901a1','data-aurora-silver-tone');})
      .then(function(){return addScript('scripts/site-source-copy-cleanup-20260826.js?v=20260826source2','data-source-copy-cleanup');})
      .then(function(){return addScript('scripts/site-trim-option-detail-20260903.js?v=20260903mobile2','data-trim-option-detail');})
      .catch(function(err){console.error('Volvo site loader error',err);document.documentElement.setAttribute('data-stable-loader','error');});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
})();
