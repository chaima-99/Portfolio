import {React,useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import About from './components/About';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  },[])

  return (
    <>
      <main className='bg-gray-950 '>
        <Hero />
        <About />
      </main>

    </>
  )
}

export default App
