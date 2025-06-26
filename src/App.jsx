import {React,useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';

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
        <Skills />
      </main>

    </>
  )
}

export default App
