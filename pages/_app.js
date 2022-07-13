import '../styles/globals.css'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    
    <ThemeProvider attribute="class">
            <Head>
        <title>Pratik Dev Das</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <Component {...pageProps} />
  </ThemeProvider>
  )
}


export default MyApp
