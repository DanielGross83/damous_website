import './App.css'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import HowItWorks from './components/HowItWorks'
import Customers from './components/Customers'
import Projects from './components/Projects'
import Footer from './components/Footer'
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/500.css"


function App() {
  
  return (
    <>
      <div className="header">
        <h1>Damous</h1>
      </div>
      <div className="sections">
        <Hero />
        <WhatWeDo />
        <HowItWorks />
        <Customers />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default App;
