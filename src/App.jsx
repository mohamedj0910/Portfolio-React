import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {

  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
