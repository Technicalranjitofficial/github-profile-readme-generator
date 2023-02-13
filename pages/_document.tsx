import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-0NRNKS9N4D`}
        />

        <Script id="ga-script" strategy="lazyOnload">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-0NRNKS9N4D', {
      page_path: window.location.pathname,
    });
        `}
        </Script>

        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9835038903847401"
          crossOrigin="anonymous"></Script>


      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
