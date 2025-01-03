import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import './App.css'

function App() {


  return (
    <>
      <Navbar/>
      <About/>
      <Gallery/>
      <Contact/>
    </>
  )
}

export default App
