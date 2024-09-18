import "../styles/globals.css";
import Script from "next/script";
import { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";


const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dmSans',
})
 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${dmSans.variable} font-sans`}>
      <Component {...pageProps} /> 
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      <noscript>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src="https://queue.simpleanalyticscdn.com/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </main>
  );
}

export default MyApp;
