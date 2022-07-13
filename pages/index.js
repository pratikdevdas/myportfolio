import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Middle from './Middle'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pratik</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-col min-h-screen'>
      <div className='flex-shrink'>
        <Navbar></Navbar>
      </div>
        <div className='flex-grow'>

        <Middle/>
        </div>
        <Footer></Footer>
      </div>
    </div>
  )
}
