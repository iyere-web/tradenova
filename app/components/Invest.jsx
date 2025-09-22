"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'


const charts = [
  { title:"Day Trading",
    returnRate : "1000.89 %",
    url: '/arrchart1.jpg',
    investors: "3000+"

},
{ title:"Swing Trading",
    returnRate : "3000.71 %",
    url: '/arrchart2.jpg',
    investors: "1700+"

},
{ title:"Positional Trading",
    returnRate : "1790.51 %",
    url: '/arrchart3.jpg',
    investors: "700+"

}
]

function Invest() {
  return (
    <div>
        <div className='bg-gradient-to-br from-slate-900 via-[#170133] to-[#130b01] text-white w-full rounded-t-3xl pt-5  mx-auto mb-5  lg:w-180 lg:p-15 lg:flex lg:flex-row'>
        
        
         <div className='lg:w-1/2 text-center coin-container '>
         <p className='text-3xl mb-5 p-3 text-yellow-100 lg:text-xl lg:w-60'>Mine Crypto, Earn Crypto, Win Crypto </p> 
         <div className='flex flex-col items-center '> <Image src="/btc.png" alt="btc logo" width={150} height={150} loading='eager' className='coin-flip rounded-full te'/> 
        </div>
         


         </div>
         <h2 className=' font-extralight w-full px-5  text-xl space-y-10 lg:leading-loose'>Build your digital fortune with ease—mine, earn, or win crypto and tap into limitless growth opportunities. Whether you’re just starting or already a pro, the future of wealth creation is in your hands. </h2> 
        </div>

    <div className='grid md:grid-cols-3'>
        {charts.map((data, i) => (
          <div key={i} className= 'text-white flex flex-row bg-gradient-to-br from-slate-300 via-[#000000] to-[#130b01] w-80 mx-auto rounded my-8 p-4'>
             <img src={data.url}  className='rounded-full h-20 w-20 cover '/> 

             <div className='ml-3 text-xs'> <h2 >{data.title}</h2> 
             <div className=' w-50 shadow-xl shadow-gray-500/60 rounded-lg p-6'> <h2 className='text-2xl'>{data.returnRate}</h2>
             <h3 className='mt-3'>Return rate</h3>
             </div>

             <div className='mt-8 flex flex-row justify-between'><h2>{data.investors} investors</h2> <Button className={"bg-yellow-600 text-white"}>Invest</Button></div>
             </div>
          </div> 
        ))}

    </div>


{<style jsx global>{`
  .coin-container{
    perspective:1000px;
  }
  @keyframes flip {
    0% { transform: rotateY(0deg); }
    50% { transform: rotateY(180deg); }
    100% { transform: rotateY(360deg); }
  }
  .coin-flip {
    animation: flip 25s linear infinite;
    transform-style: preserve-3d;
  }
`}</style>}
    </div>
  )
}



export default Invest