import '@component/styles/globals.css'
import Nav from './components/layout/nav'
import Footer from './components/layout/footer'

export default function App({ Component, pageProps }) {
  return(
  <>
    <Nav />
    <Component {...pageProps} /> 
    <Footer />
  </>
  
    )
}
