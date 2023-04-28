import Image from 'next/image'
import { Inter } from 'next/font/google'

// importing components
import Intro from './components/intro'
import Card from './components/card'
import Carousel from './components/carousel'
import Hero from './components/hero'
import Stats from './components/stats'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5 sm:px-7 lg:px-10 over">
      
      <Intro />
      
      <Card />
      
      <Carousel />
      
      <Stats />

      <Hero title='Ready to Join?' description='Fully autamated Resume Analysis helps in significantly imporving overall hiring efficiency and helps hire quality individuals in fraction of the time compared to manual process' button='Get Started' />

    </main>
  )
}
