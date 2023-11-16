'use client'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Main from './components/Main.jsx'
import MobileNav from './components/MobileNav.jsx'
import Footer from './components/Footer.jsx'
import { useState } from 'react'
export default function Home() {

  const [isNavVisible, setIsNavVisible] = useState(false);

  function toggleNav(){
    setIsNavVisible(prev => !prev);
  }
  return (
      <main> 
        {isNavVisible && <MobileNav handleClick={toggleNav}/>}
        <Navbar handleClick={toggleNav}/>
        <Hero />
        <Main />
        <Footer />
      </main>
  )
}
