// App.js
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

function App() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error", e);
    }
  }, []);

  return (
    <div className="App" style={{ padding: '20px' }}>
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1439908057186049"
          crossOrigin="anonymous"
        ></script>
      </Helmet>

      {/* 승인 심사용 광고 영역 */}
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-1439908057186049"
           data-ad-slot="0000000000"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
}

export default App;