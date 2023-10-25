import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, ...pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-Y506LY6FE2`}
      />
      <Script id="googleanalytics" strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-Y506LY6FE2', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
