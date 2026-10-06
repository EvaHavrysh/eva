import { SiteHeader } from '@/components/portfolio/site-header'
import { Hero } from '@/components/portfolio/hero'
import { Projects } from '@/components/portfolio/projects'
import { About } from '@/components/portfolio/about'
import { Contacts } from '@/components/portfolio/contacts'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
      <Contacts />
    </>
  )
}
