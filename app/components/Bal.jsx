"use client"
import React, { useEffect, useState } from 'react'
import {ArrowBigLeft, Bell, PlusCircle, MinusCircle, Download, Package, Package2, Link} from 'lucide-react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../firebase/config'
import {doc, onSnapshot} from 'firebase/firestore'
import { UserInfoDialog } from './Modal'
import Image from 'next/image'

function Bal() {


    function getUserBal(uid, callback){
      const userRef = doc(db, "user", uid)

      return onSnapshot(userRef, (docSnap)=>{
        if(docSnap.exists()){
          callback(docSnap.data())
        }
        else {
          callback(null)
        }
      })
    }


  const [name, setName] = useState()
  const [imgpath, setImgpath] = useState('/profile.png')
  const [showModal, setShowModal] = useState(false)
  const [userData, setUserData] = useState(null)

  function toggle(){
    setShowModal(!showModal)
  }

  useEffect(()=>{
    if (auth.currentUser){
      const onsub = getUserBal(auth.currentUser.uid, setUserData)
      return () => onsub()
    }

  },[])

  
  
    

 

  return (
    <div className="lg:w-140 lg:align-middle">
      
      
      <div className='pt-5 flex justify-between  text-white px-5 '>
      <div className='text-white w-10 h-10 rounded-full border-2'>
        <a href='/logout'><Image src={userData?.photoUrl || "/profile.png"} alt="PP" 
      width={36}
      height={36}
      onError={(e)=>{e.currentTarget.src ="/profile.png"}}
      className='rounded-full' onClick={toggle}/> </a> </div>
       <div className='flex flex-row items-center justify-between space-x-4'> <div className='bg-slate-700 flex flex-row h-8 p-2 text-center align-middle  rounded items-center text-sm '>💎 missions</div> <Bell /> </div>
     </div>

     <ul className='text-white flex flex-row w-50 justify-between text-xl font-extrabold  pl-5 mt-7 lg:mt-20'>
      <li>Buy</li>
      <li>Earn</li>
      <li>NFT</li>
     </ul>

     <div className='text-white mt-8 flex flex-col justify-center items-center space-y-2 lg:mt-20'>
        <p className='text-sm text-gray-300 '>Total Balance 👁 </p>
        <h2 className='font-extrabold text-3xl text-gray-200 lg:mt-10'>$ {userData?.amount} USD</h2>
     </div>


      <div className='mt-7 text-white px-7 text-sm flex flex-row justify-between lg:mt-20'> <div className=' h-17 w-10 flex flex-col items-center'> <div className='bg-blue-400 p-2 w-10 rounded-full'><PlusCircle /></div> Buy</div> 
      <div className=' h-17 w-10 flex flex-col items-center'> <div className='bg-blue-400 p-2 w-10 rounded-full'><MinusCircle /></div> Sell</div> 
      <div className=' h-17 w-10 flex flex-col items-center'> <div className='bg-blue-400 p-2 w-10 rounded-full'><Download /></div> Deposit</div> 
      <div className=' h-17 w-10 flex flex-col items-center'> <div className='bg-blue-400 p-2 w-10 rounded-full'>< Package2/></div> Buy</div> 
      </div> 

      
     </div>
  )

 
}

export default Bal