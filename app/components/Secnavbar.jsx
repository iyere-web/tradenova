"use client"
import { Home, Wallet, ArrowUpRight,ArrowDownLeft,  IdCard, TrendingUp} from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


function Secnavbar() {
    const [onmobile, setOnmobile] = useState(false)
     useEffect(()=>{
        const ismobile = ()=>{
            setOnmobile(window.innerWidth <= 768)
        }
        ismobile()
       
        window.addEventListener("resize", ismobile)
    return ()=> window.removeEventListener("resize", ismobile)
    }
     ,[])

    return (
   
    <div>
        {onmobile? (<div className='w-full border-t-1 h-13 bg-slate-950'>
            <ul className='text-xs font-bold flex flex-row justify-between px-3 text-white'>

           <Link href={'/'}> <li> <Home  color='white' focusable className='w-full'/> Home</li></Link>
            <Link href={'/dashboard'}><li className='ml-[-10px]'> <IdCard className='w-full ' /> Accounts</li></Link>
            <li className='flex flex-col justify-between'> <div className='m-[-15px] w-full  mx-auto px-2 rounded-full bg-blue-400 space-y-[-10px] '> <ArrowUpRight width={20} /> <ArrowDownLeft  width={20}/></div> Trade </li>
            <li><TrendingUp className='w-full' />   Track</li>
            <li> <Wallet className='w-full' /> card</li>

            </ul>
        </div>): ""}
    </div>
  )
}

export default Secnavbar