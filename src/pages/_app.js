import '@component/styles/globals.css'
import Nav from './components/layout/nav'
import HomeNav from './components/layout/homeNav'
import Footer from './components/layout/footer'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  // different nav for different pages
  // const [newCurrentUrl, setNewCurrentUrl] = useState(false)

  // const router = useRouter()

  // // different nav for different pages
  // if (newCurrentUrl == '/') {
  //   setNewCurrentUrl(true)
  // }

  return (
    <>
      <HomeNav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
