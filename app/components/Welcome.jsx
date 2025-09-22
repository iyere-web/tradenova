"use client"
import React, { useEffect, useState } from 'react'
import {Button} from '@/components/ui/button'
import {Nunito} from  "next/font/google"
import Link from 'next/link'

const orbitron = Nunito({subsets:["latin"],
  weight:["500", "200"]
})




function Welcome() {
const images = ["/cor1.jpg", "/cor2.jpg", "/cor3.jpg"]
const [currentindex, setCurrentindex] = useState(0)

  
  
  

  
  useEffect(()=> {
    const interval = setInterval(() => {
    setCurrentindex((previndex)=> 
      previndex === images.length-1 ? 0 : previndex+1
    )
      
    },3000);
    return () => clearInterval(interval)
  }, [images.length])

 
  
    

  return (
    <div className={`${orbitron.className} h-full lg:w-170 lg:p-10`}
    style={{
      backgroundImage: `url(${images[currentindex]})`,
      backgroundSize: "cover",
      backgroundPosition:'center'
    }}>
        <div className='flex flex-col justify-between h-full p-4  inset-0 bg-black/[80%] text-xl text-white lg:w-120 lg:mx-auto  lg:p-10 lg:rounded'>
            <div className='text-2xl'><h1>welcome to <span className='text-3xl text-yellow-800'>Trading-NOVA</span>  your gateway to the future of crypto trading</h1></div>
            <div className='text-white text-sm mt-5 '><p className='font-extralight tracking-widest'>At trade Nova, we've built a platform designed for clarity, speed and smart decision
                making. With real insights, powerful tools and a seamless interface. we make trading not just easier
                but smarter, faster and more rewarding
                </p>
                <ul className='mt-10 list-disc ml-10 space-y-2 mb-2'>
                  <li>No risk crypto investment</li>
                  <li>Auto minig </li>
                  <li>Secured service</li>
                  <li>Trusted community</li>
                </ul>
                </div>

            <div className='mt-5 flex flex-col space-y-4 mb-4 lg:flex-row lg:justify-between lg:w-full '><Button className='lg:w-45'> <Link href={'/register'}>Sign-Up</Link> </Button> <Button className='lg:w-45'><Link href={'/login'}>Sign-In</Link></Button></div>
        </div>
    </div>
  )
}

export default Welcome