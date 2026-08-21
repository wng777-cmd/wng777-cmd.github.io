/* Loader: preserve the existing site core, then add the Dark theme visual guide. */
(function(){
  if(document.readyState==='loading'){
    document.write('<script src="scripts/site-pdf-refresh-core.js?v=20260821dark1"><\/script>');
    document.write('<script src="scripts/site-dark-guide.js?v=20260821dark1"><\/script>');
    return;
  }
  function load(src,done){var s=document.createElement('script');s.src=src;s.onload=done||null;document.head.appendChild(s)}
  load('scripts/site-pdf-refresh-core.js?v=20260821dark1',function(){load('scripts/site-dark-guide.js?v=20260821dark1')});
})();