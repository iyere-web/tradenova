"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import  {Button} from "@/components/ui/button"

import {Menu,X,ChevronRight, Globe, LogIn} from 'lucide-react'
import {Orbitron} from "next/font/google"

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/config'








const poppins = Orbitron({
  subsets:["latin"],
  weight:["500", "700"]
})


function Navbar() {
  const [pressed, setPressed] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [imgUrl, setImgUrl] = useState('/profile.png')
  const [name, setName] = useState("")

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, (currentUser)=>{
      if(currentUser){
        setName(currentUser.displayName  || "anonymous")
        setImgUrl(currentUser.photoURL || '/profile.png')
        setLoggedIn(true)
        
        setUser(currentUser)
        
      }
      else{
        setImgUrl('/profile.png')
        setName("")
      }
    })

    return ()=> unsub()
  },
  [])
  
  
  


  
 
  
function shortName(name){
  
  let newName = ""

  if(name?.length >= 6){
    newName = name.slice(0,6)
    return newName + "..."
  }
  return name
}





  return (
    
    <div className={`${poppins.className} nflex bg w-full`}>

      <nav className={pressed?`flex flex-row backdrop-blur-md bg-white/50  border-white/30 w-full  
      pb-4 mx-auto px-3 `:`flex flex-row backdrop-blur-md bg-white/50  border-white/30 w-full 
      pb-4 mx-auto px-3  h-13`}>
        <ul className='flex flex-row justify-between w-full px-1 pt-2'>
          <li> <h2 className='text-yellow-700 text-2xl tracking-[-7]'>T<span className='text-yellow-400 tracking-tight'>NOVA</span></h2></li>

        
          <li className='flex flex-col justify-between gap-2  px-2'>
          <div className='flex flex-row gap-5 justify-between  my-auto'>
            {loggedIn?<Link href={'/logout'}><img src={imgUrl} width={24} height={24} alt='PP' className='rounded-full'/></Link>:<div className='text-black flex flex-row  h-6.5 justify-center w-25 border-2 mb-auto rounded-l'><Link href={'/login'} className='flex flex-row gap-2'>Login <LogIn width={20} height={20}/> </Link></div>}
            <div
            onClick={()=>{setPressed(!pressed)}}
            > 
            
            {!pressed?<Menu color='black'/>: <X color='black'/>}</div>
          </div>

            <div className={pressed?' ml-auto':'hidden'}>
              <ul className='flex flex-col mt-4 '>
                <div className='mr-auto flex flex-col text-black space-y-5 my-5 text-xl'>
                <li className='flex flex-row align-middle text-center '><h2><Link href={'/'}>Home</Link> </h2> <ChevronRight size={20} className='mt-1'/> </li>
                <li className='flex flex-row align-middle text-center'><h2><Link href={'/trends'}>Trends</Link> </h2><ChevronRight size={20} className='mt-1'/></li>
                <li className='flex flex-row align-middle text-center'><h2><Link href={'/support'}>Support</Link> </h2> <ChevronRight size={20} className='mt-1'/></li>
                <li className='flex flex-row align-middle text-center'><h2><Link href={'/Aboutus'}>About-us</Link> </h2> <ChevronRight size={20} className='mt-1'/></li>
                {user?<li className='flex flex-row align-middle text-center '><Link href={'/dashboard'}><h2>Dashboard </h2></Link> <ChevronRight size={20} className='mt-1'/> </li>: " "}
                </div>

                <li className='flex flex-col '>
                  <ul className='flex flex-row mt-4 gap-4'>
                    {loggedIn? <li><h2 className='text-yellow-800'>welcome {shortName(name)}</h2></li>:
                    (<>
                    <li><Button><Link href={'/login'}>Sign-In</Link> </Button></li>
                      <li><Button><Link href={'/register'}>Sign-Up</Link> </Button></li>
                      </>)
                    }
                  
                    
                  </ul>
                  
                  <div className='flex flex-row gap-2 mt-22'><Globe/> <h1>EN</h1>  </div>
                  
                   <div className='pb-32  w-full'></div>
                   
                  
                  </li>
              </ul>
              </div>
              
          </li>
          
          
        </ul>
        

       
      </nav>
      
    </div>
)}


export default Navbar