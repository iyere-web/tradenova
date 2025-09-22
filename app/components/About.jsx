import React from 'react'
import {Bitcoin} from 'lucide-react'

function About() {
 
    
  const cards = [
    {
      title: "Explore Crypto",
      text: "Discover the world of blockchain and digital assets with insights, news, and market updates.",
      button: "Explore Now",
    },
    {
      title: "Buy Instantly",
      text: "Purchase Bitcoin, Ethereum, and altcoins securely with just a few clicks.",
      button: "Buy Now",
    },
    {
      title: "Earn Rewards",
      text: "Grow your holdings through staking, yield farming, and reward programs.",
      button: "Start Earning",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 p-6 mb-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-gradient-to-br from-[#0f0f0f] via-[#4a148c] to-[#291800]  rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition text-white"
        >
          <div>
            <h2 className="text-xl font-semibold mb-2 flex flex-row"> <Bitcoin color='yellow' fill='yellow' className='mr-2 ' /> {card.title}</h2>
            <p className="text-white mb-4">{card.text}</p>
          </div>
          <button className="bg-yellow-600 text-white rounded px-4 py-2 hover:bg-indigo-700 transition">
            {card.button}
          </button>
        </div>
      ))}
    </div>
  );
}



export default About