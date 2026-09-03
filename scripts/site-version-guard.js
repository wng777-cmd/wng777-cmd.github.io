/* Keeps long-lived mobile tabs on the latest published ㅁㅇ release. */
(function(){
  'use strict';
  var releaseMeta=document.querySelector('meta[name="site-release"]');
  var localVersion=releaseMeta&&releaseMeta.content;
  if(!localVersion||typeof fetch!=='function'||typeof URL!=='function') return;

  var checking=false;
  var lastCheckedAt=0;
  window.__VOLVO_SITE_RELEASE__=localVersion;

  function checkLatest(force){
    var now=Date.now();
    if(checking||(!force&&now-lastCheckedAt<60000)) return;
    checking=true;
    lastCheckedAt=now;
    fetch('/site-version.json?ts='+now,{cache:'no-store',credentials:'same-origin'})
      .then(function(response){return response.ok?response.json():null;})
      .then(function(data){
        checking=false;
        var latest=data&&data.version;
        if(!latest||latest===localVersion) return;
        var next=new URL(window.location.href);
        if(next.searchParams.get('sitev')===latest) return;
        next.searchParams.set('sitev',latest);
        window.location.replace(next.toString());
      })
      .catch(function(){checking=false;});
  }

  window.addEventListener('pageshow',function(event){checkLatest(Boolean(event.persisted));});
  document.addEventListener('visibilitychange',function(){if(!document.hidden)checkLatest(false);});
  checkLatest(true);
})();
