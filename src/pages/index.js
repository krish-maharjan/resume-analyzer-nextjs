import Image from 'next/image'
import { Inter } from 'next/font/google'

// importing components
import Intro from './components/intro'
import Card from './components/card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5 sm:px-7 lg:px-10 ">
      <Intro />
      <Card />
    </main>
  )
}
