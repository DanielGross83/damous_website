import './App.css'
import Hero from './components/Hero'
import SectionHeader from './components/sectionHeader'
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
      </div>
    </>
  )
}

export default App
