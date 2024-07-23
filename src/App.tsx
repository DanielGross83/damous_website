import './App.css'
import sectionHeader from './components/sectionHeader'
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/500.css"

function App() {
  
  return (
    <>
      <div className="header">
        <h1>Damous</h1>
      </div>
      <div className="hero">
        <div className="hero-text">
          <div className="line1">
            <div className="words">
              <span>Work</span>
              <span>Code</span>
              <span>Train</span>
            </div>
            <p className='text1'>Like You Have</p>
          </div>
          <p className='text2'>The Data</p>
          <p className="subheading">Don’t Have The Data You Need?<br></br>We’ll Get It For You</p>
          <button>Get Data</button>
        </div>
        <img src='./public/hero_image.png'></img>
      </div>
    </>
  )
}

export default App
