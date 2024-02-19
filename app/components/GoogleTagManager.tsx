import {useEffect, useRef} from 'react';

/**
 * Component to add Google Tag Manager
 */
export function GoogleTagManager(props: {gtmContainerId: string | undefined}) {
  const init = useRef(false);
  const {gtmContainerId} = props;

  useEffect(() => {
    if (init.current || !gtmContainerId) {
      return;
    }

    const gtmScript = document.createElement('script');
    const nonceScript = document.querySelector('[nonce]') as
      | HTMLScriptElement
      | undefined;
    if (nonceScript?.nonce) {
      gtmScript.setAttribute('nonce', nonceScript.nonce);
    }

    gtmScript.innerHTML = `
        (function(w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({
              'gtm.start': new Date().getTime(),
              event: 'gtm.js'
          });
          var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != 'dataLayer' ? '&l=' + l : '';
              j.async=true;
              j.src =
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', '${gtmContainerId}');
    `;

    // Add the GTM script to the body
    document.body.appendChild(gtmScript);

    init.current = true;
    return () => {
      document.body.removeChild(gtmScript);
    };
  }, [gtmContainerId]);

  if (!gtmContainerId) {
    return null;
  }

  return (
    <noscript>
      {/* GOOGLE TAG MANAGER NO-JS FALLBACK */}
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmContainerId}`}
        height="0"
        width="0"
        style={{display: 'none', visibility: 'hidden'}}
      />
    </noscript>
  );
}
