import React from 'react'
import Navbar from './components/Navbar'
import LeftBar from './components/LeftBar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css'


export default function App() {
  return (
    <>
      <Navbar />
      <LeftBar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  )
}


