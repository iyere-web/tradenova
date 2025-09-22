"use client"
import React, { useState, useEffect } from 'react'
import { collection, getDocs} from 'firebase/firestore'
import { db } from '../firebase/config';
import Link from 'next/link';




function Listuser({username, profilepic}) {
const [allUsers, setAllUsers] = useState([])
const [loading, setLoading] = useState(true);

function createName(name){
  if(name?.length > 6){
    return name.slice(0,6) + "..."
  }
}

function createEmail(email){
  return email.split('@')[0]
}

useEffect(()=>{
  const fetchUser = async()=>{
    try {
      const onSnapshot = await getDocs(collection(db, 'user'))
      const userList = onSnapshot.docs.map((doc)=> ({
        id: doc.id,
        ...doc.data(),
      }))
      setAllUsers(userList)
    } catch (error) {
      console.log("an error occured", error);
      
    }
    finally{
      setLoading(false)
    }
  }
  fetchUser()
},[])




    if(loading){
      return <p>loading.....</p>
    }

  return (
    <div className='bg-slate-900 w-full h-screen text-white'> 
      <p className='text-yellow-600 text-2xl font-bold pt-2 ml-3'> Hello {username} </p> 
      <h2 className='text-xl justify-middle text-center'>All users</h2>

      <div className='mt-10'>
          {allUsers.map((user, i)=> (
            <Link href={`/dashboard/${user.id}`} key={i}>
            <div className='bg-slate-800 w-90 mx-auto rounded my-2 p-3 my-3'>
              <ul className='flex flex-row justify-between items-center '>
                {user.photoUrl? <img src={user.photoUrl} alt={user.name} width={30} height={30} className='rounded-full' /> : <img src={"/profile.png"} alt="default pic" width={30} height={30} className='rounded-full' />}
            {user.name? <li>{createName(user.name)}</li> : <li>{createEmail(user.email)}</li>}
            
             <li className='text-yellow-700'> ${user.amount}</li>

             <li className='text-yellow-800'>{user.role}</li>
            </ul>
             
             </div>
             </Link>
          ))}

      </div>
     </div>
  )
}

export default Listuser