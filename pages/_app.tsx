import "../styles/globals.css";
import Script from "next/script";
import { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";
import { DefaultSeo } from 'next-seo';

const dmSans = DM_Sans({
  subsets: ['latin'],
})

// Default SEO configuration
const DEFAULT_SEO = {
  title: "Pratik Dev Das - Web Developer",
  description: "Welcome to Pratik Dev Das's portfolio website. Explore projects and learn more about my work.",
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.pratikdevdas.com/',
    siteName: 'Pratik Dev Das Portfolio',
  },
  twitter: {
    handle: '@pratikdevdas',
    site: '@pratikdevdas',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'Pratik Dev Das, web developer, portfolio, projects'
    },
    {
      name: 'author',
      content: 'Pratik Dev Das'
    }
  ]
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${dmSans.className} font-sans`}>
      <DefaultSeo {...DEFAULT_SEO} />
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
