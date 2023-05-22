import Link from 'next/link'

// importing components
import Intro from './components/intro'
import Card from './components/card'
import Hero from './components/hero'
import Stats from './components/stats'
import Contact from './components/contact'
import Pricing from './components/pricing'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <section className='min-h-screen max-h-full flex justify-center items-center'>
        <button className="btn btn-primary"><Link href='/resume'>Take me to Resume Analyzer Page</Link></button>
      </section>
      
      <Intro />
      
      <Stats />

      <Card />
      
      <Pricing />
      
      <Hero title='Ready to Join?' description='Fully automated Resume Analysis helps in significantly imporving overall hiring efficiency and helps hire quality individuals in fraction of the time compared to manual process' button='Get Started' />

      <Contact />

    </main>
  )
}
