import React from 'react'

const array = [
  { plan: "Mini", amount: "$500", mindeposit: "$500", maxDeposit: "$999" },
  { plan: "Standard", amount: "$1,000", mindeposit: "$1,000", maxDeposit: "$4,999" },
  { plan: "Silver", amount: "$5,000", mindeposit: "$5,000", maxDeposit: "$9,999" },
  { plan: "Gold", amount: "$10,000", mindeposit: "$10,000", maxDeposit: "$24,999" },
  { plan: "Platinum", amount: "$25,000", mindeposit: "$25,000", maxDeposit: "$49,999" },
  { plan: "Diamond", amount: "$50,000", mindeposit: "$50,000", maxDeposit: "$99,999" },
  { plan: "VIP", amount: "$100,000+", mindeposit: "$100,000", maxDeposit: "Unlimited" }
]


function Plans() {
  return (
    <div className='text-white bg-slate-800 h-full pb-15'>
        <h2 className='p-5 text-3xl mx-auto  text-center'>Our Plans</h2>
        <div className='grid md:grid-cols-4 gap-8'>
        {array.map((data, i)=> 
       
        <div key={i} className='w-60 mx-auto h-full rounded-2xl bg-white my-8 '> 
            <div className='py-10 mt-0 bg-slate-600 justify-center text-center text-2xl items-center'>
                <h2>{data.plan}</h2>
                <h2>{data.amount}</h2>
            </div>

            <div>
                <ul className='text-black text-center p-2 space-y-5'>
                    <li>Principal return on maturity</li>
                    <li>Professional Charts</li>
                    <li>24X7 support</li>
                    <li>Trading Alerts</li>
                    <li>{data.mindeposit} minimum Deposit</li>
                    <li>{data.maxDeposit} maximum Deposit</li>
                </ul>
            </div>

        </div>
        )}
        </div>
    </div>
  )
}

export default Plans