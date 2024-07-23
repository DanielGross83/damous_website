import './App.css'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import HowItWorks from './components/HowItWorks'
import Customers from './components/Customers'
import Projects from './components/Projects'
import SectionHeader from './components/sectionHeader'
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
        <SectionHeader 
          title="WHAT WE DO"
          headline="Data as Commodity"
          description="In today's data-driven economy, obtaining customized datasets can be time-consuming. We help you save time, labor, and money by providing clean, tailored datasets, allowing you to work on what’s important"
        />
        
        <WhatWeDo />
        <HowItWorks />
        <Customers />
        <Projects />
        
        <Footer />
      </div>
    </>
  )
}

export default App
