/* Owner internal-test traffic exclusion.
   Activate once per browser with ?internal=1.
   Disable with ?internal=0.
   The setting is persisted locally and PostHog capture is opted out for that browser.
*/
(function(){
  'use strict';

  var STORAGE_KEY = 'volvo_internal_test';
  var queryMode = null;

  try {
    var params = new URLSearchParams(window.location.search);
    queryMode = params.get('internal');

    if (queryMode === '1') {
      localStorage.setItem(STORAGE_KEY, '1');
    } else if (queryMode === '0') {
      localStorage.removeItem(STORAGE_KEY);
    }

    if (params.has('internal') && window.history && typeof window.history.replaceState === 'function') {
      params.delete('internal');
      var cleanQuery = params.toString();
      window.history.replaceState(null, '', window.location.pathname + (cleanQuery ? '?' + cleanQuery : '') + window.location.hash);
    }
  } catch (e) {
    /* Private browsing/storage restrictions should never break the website. */
  }

  function isInternalTest() {
    try {
      return localStorage.getItem(STORAGE_KEY) === '1';
    } catch (e) {
      return false;
    }
  }

  function reflectMode() {
    window.__VOLVO_INTERNAL_TEST__ = isInternalTest();
    if (window.__VOLVO_INTERNAL_TEST__) {
      document.documentElement.setAttribute('data-internal-test', '1');
    } else {
      document.documentElement.removeAttribute('data-internal-test');
    }
  }

  function applyPostHogPreference() {
    var ph = window.posthog;
    if (!ph) return false;

    try {
      if (window.__VOLVO_INTERNAL_TEST__) {
        if (typeof ph.opt_out_capturing === 'function') {
          ph.opt_out_capturing();
          return true;
        }
      } else if (queryMode === '0') {
        if (typeof ph.opt_in_capturing === 'function') {
          ph.opt_in_capturing();
          return true;
        }
      }
    } catch (e) {
      return false;
    }

    return false;
  }

  reflectMode();
  applyPostHogPreference();

  /* Analytics can initialize before or after this script. Retry briefly so either order works. */
  var attempts = 0;
  var timer = window.setInterval(function(){
    attempts += 1;
    if (applyPostHogPreference() || attempts >= 150) {
      window.clearInterval(timer);
    }
  }, 100);

  window.enableVolvoInternalTest = function(){
    try { localStorage.setItem(STORAGE_KEY, '1'); } catch (e) {}
    queryMode = '1';
    reflectMode();
    applyPostHogPreference();
    return window.__VOLVO_INTERNAL_TEST__;
  };

  window.disableVolvoInternalTest = function(){
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    queryMode = '0';
    reflectMode();
    applyPostHogPreference();
    return !window.__VOLVO_INTERNAL_TEST__;
  };
})();
