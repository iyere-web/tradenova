import React from 'react'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome' 
import Markets from '../components/Markets'
import About from '../components/About'
import Invest from '../components/Invest'
import Plans from '../components/Plans'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='bg-slate-950 flex flex-col'>
      <div className='w-full fixed '>
      <Navbar/>
      </div>


     <div className='lg:flex lg:flex-row lg:justify-between lg:space-x-10 lg:pb-10 '>
      <div className='mt-13 lg:ml-5'>
        <Welcome />
      </div>

      <div className='lg:mt-18 lg:mr-5'>
        <Markets />
      </div>

     </div> 


     
      
      <div>
          <About />
      </div>

      <div>
        <Invest />
      </div>

      <div>
        <Plans />
      </div>
       
      <div>

        <Footer />
      </div>

      </div>
  )
}   

export default Home