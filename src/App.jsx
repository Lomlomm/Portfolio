import { BrowserRouter } from 'react-router-dom'; 
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Footer, Works, StarsCanvas  } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-[#190423] bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>
        <div className='bg-[#190423]'>
          <About/> 
          <Experience/> 
          <Tech/> 
          <Works/> 
          <Feedbacks/> 
        </div>
        <div className='relative z-0 bg-[#190423]'>
          <Contact/> 
          <StarsCanvas />
        </div>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
