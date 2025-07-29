'use client'; // if you're using this inside a Next.js app (for app router)

import { useEffect } from 'react';

const MetaPixel = () => {
  useEffect(() => {
    // Check if fbq is already initialized
    if (window.fbq) return;

    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script',
      'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq('init', process.env.NEXT_PUBLIC_META_ID || '1387603672324039');
    window.fbq('track', 'PageView');
  }, []);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_ID || '1387603672324039'}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
};

export default MetaPixel;
