import React from 'react'
import MainContent from './MainContent.jsx'
import Buttons from './Buttons.jsx'
import About from './About.jsx'
import Interests from './Interests.jsx'
import Footer from './Footer.jsx'

export default function App(){
  return(
    <div className='mainpage'>
    <MainContent />
    <Buttons />
    <About />
    <Interests />
    <Footer />
    </div>
  )
}