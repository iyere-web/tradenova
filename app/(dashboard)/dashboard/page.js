"use client"
import Bal from '@/app/components/Bal'
import Listuser from '@/app/components/Listuser'
import Markets from '@/app/components/Markets'
import Secnavbar from '@/app/components/Secnavbar'
import { auth, db } from '@/app/firebase/config'
import { doc, onSnapshot } from 'firebase/firestore'
import React, {useEffect, useState} from 'react'


function page() {
  const [userData, setUserData]= useState(null)
  function getName(name, email){
    if(name){
      return name
    }

    return email.split('@')[0]

  }

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

  useEffect(()=>{
      if (auth.currentUser){
        const onsub = getUserBal(auth.currentUser.uid, setUserData)
        return () => onsub()
      }
  
    },[])


  if(userData?.role === "admin"){
  return (<div>
   <Listuser username={getName(userData?.name, userData.email)} profilepic={userData?.photoUrl}></Listuser>
   </div>)
  }

  return (
    <div className='w-full h-full bg-gradient-to-b from-blue-900 via-slate-900 via-slate-950 to-[#0f0f0f]' >

  <div className='fixed bottom-0 w-full'>
     <Secnavbar />  
  </div> 
  
  <div className='lg:flex lg:flex-row lg:justify-between lg:space-x-10 '>
    <Bal />
     <div className='pb-15'>
       <Markets />
       </div>

       </div>


    </div>
  )


  
}

export default page