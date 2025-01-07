import "../styles/globals.css";
import Script from "next/script";
import { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";
import Head from "next/head";


const dmSans = DM_Sans({
  subsets: ['latin'],
})
 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${dmSans.className} font-sans`}>
      <Head>
        <title>Pratik Dev Das - Web Developer</title>
        <meta name="description" content="Welcome to Pratik Dev Das's portfolio website. Explore projects and learn more about my work." />
        <meta name="keywords" content="Pratik Dev Das, web developer, portfolio, projects" />
        <meta name="author" content="Pratik Dev Das" />
      </Head>
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
