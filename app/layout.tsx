import '../public/assets/css/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Profession from './pages/Profession'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Footer from './pages/Footer'
import Testpage from './pages/Testpage'
// import DarkModeToggle from './components/DarkModeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jovino Monterde',
  description: 'Frontend Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='main-content main-content-hidden'>
        <Navbar/>
        <Hero/>
        <About/>
        <Profession/>
        <Projects />
        {/* <Testpage/> */}
        <Services/>
        <Contact/>
        <Footer/>
        {children}
        </div>
        </body>
  </html>
  )
}
