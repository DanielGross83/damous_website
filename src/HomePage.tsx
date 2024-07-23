import { useState } from 'react'
import './App.css'
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/600.css"

function HomePage() {

  return (
    <>
      <div className="header">
        <h1>Damous</h1>
      </div>
      <div className="hero-text">
        <div className="words">
          <span>Work</span>
          <span>Code</span>
          <span>Train</span>
        </div>
        <p className='text1'>Like You Have</p>
        <p className='text2'>The Data</p>
      </div>
    </>
  )
}

export default HomePage
