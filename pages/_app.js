import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Middle from './Middle'
import Footer from '../components/Footer'
import Home from './Home'

function MyApp({ Component, pageProps }) {
  return (
  <div>
    <Navbar></Navbar>
    <Home></Home>
    <Footer></Footer>
  </div>
    )
}

export default MyApp
