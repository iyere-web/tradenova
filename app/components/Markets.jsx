"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Search, SearchCheck} from 'lucide-react'

function Markets() {
  const [search, setSearch] = useState("")
  const [coin, setCoin] = useState([])

  useEffect(()=>{
    axios.get('https://openapiv1.coinstats.app/coins',{
      headers: {'X-API-KEY': 'bTQiS7gg4Nj9tY4zo8RVoK2mHO18Chc7X+NZqBUbJk8='}
    }).then(res=> setCoin(res.data.result))
   
      .catch(err=> console.log(err)

      )
  },[])

const [open, setOpen] = useState(false)
   
  return (
    <div className='text-white ml-auto lg:w-120'>
      <div className='flex flex-row justify-between align-middle '>
              <h2 className='text-xl text-green-800 ml-8 h-10 mt-3'>Markets</h2>
             <input type="text"placeholder='Search....' onChange={(e)=>{setSearch(e.target.value)}} className='w-50 h-8 border-none mt-2 focus:outline-none mr-5 pl-2 ' />
      </div>

      <div className='bg-gray-950 h-100 overflow-scroll w-85 mx-auto lg:w-120 lg:h-140 lg:overflow-scroll lg:rounded '>
       {coin.filter((val)=> {return val.name.toLowerCase().includes(search.toLowerCase())}).map((val,i) => {
          return <div className='flex flex-row justify-between bg-slate-900 w-80 mx-auto rounded py-2 my-3 lg:w-110 ' key={i}>

              <div className='flex flex-row my-2 mx-2'> <a href={val.redditUrl}> <img src={val.icon} alt={val.name} width={40} height={40} /> </a>
                <div className='ml-4 '><h2>{val.name}</h2> <h3 className='text-xs'>{val.symbol}</h3></div>
               </div>

               <div className='w-30'><h2>$ {val.price.toFixed(2)}</h2> 
               <h3 className={val.priceChange1d <0 ?" text-red-500": "text-green-500"}>{val.priceChange1d}</h3>
               </div>

          </div>
        })
       }

      </div>

      

    </div>
  )
}

export default Markets