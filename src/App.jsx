import React from 'react'
import Navbar from './component/Navbar'
import Landing from './component/Landing'
import Marquee from './component/Marquee'
import About from './component/About'
import Eyes from './component/Eyes'
import Featured from './component/Featured'
import Cards from './component/Cards'
import Start from './component/Start'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen   '>

      <Navbar />
      <Landing />
      <Marquee/>
      <About/>
      <Eyes />
      <Featured />
      <Cards/>
      <Start />

    </div>
  )
}

export default App