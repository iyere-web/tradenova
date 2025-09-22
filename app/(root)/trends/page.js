"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function TrendsPage() {
  const trends = [
    {
      title: "Bitcoin ETFs Hit Record Inflows",
      description:
        "Institutional investors are pouring into Bitcoin ETFs, signaling stronger mainstream adoption in the coming months.",
      tag: "Market",
    },
    {
      title: "Ethereum Layer-2 Adoption Surges",
      description:
        "L2 networks like Arbitrum and Optimism continue to see growth as users seek cheaper and faster transactions.",
      tag: "Technology",
    },
    {
      title: "Regulatory Clarity in Europe",
      description:
        "The EU’s MiCA framework is setting global standards for digital asset regulation, boosting investor confidence.",
      tag: "Regulation",
    },
    {
      title: "AI + Crypto Partnerships Rising",
      description:
        "Projects combining AI and blockchain are gaining attention, with tokens in the sector seeing rising volumes.",
      tag: "Innovation",
    },
    {
      title: "DeFi TVL Back Above $70B",
      description:
        "Decentralized finance is bouncing back as liquidity returns to protocols and staking rewards remain strong.",
      tag: "DeFi",
    },
  ];

  const insights = [
    "US SEC approves new Bitcoin spot ETF.",
    "Solana network sees record-breaking daily transactions.",
    "Binance expands operations in Latin America.",
    "Polygon announces zkEVM mainnet upgrade.",
    "Circle partners with major banks for USDC adoption.",
  ];

  return (
      <>
     <div className="fixed w-full"><Navbar /></div> 
    <div className="min-h-screen bg-gray-950 text-gray-200 px-6 py-15">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-white mb-6">
            🔥 Crypto Market Trends
          </h1>
          <p className="text-gray-400 mb-10">
            Stay updated with the latest developments shaping the digital asset
            ecosystem. From regulations to DeFi, Trading Nova keeps you ahead.
          </p>

          {/* Trend Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {trends.map((trend, idx) => (
              <div
                key={idx}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition"
              >
                <span className="text-xs uppercase tracking-wide text-purple-400 font-semibold">
                  {trend.tag}
                </span>
                <h2 className="text-xl font-semibold text-white mt-2">
                  {trend.title}
                </h2>
                <p className="text-gray-400 mt-3 text-sm">{trend.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="bg-gray-900 border border-gray-800 rounded-2xl p-6 h-fit">
          <h2 className="text-lg font-semibold text-white mb-4">
            📢 Latest Insights
          </h2>
          <ul className="space-y-4 text-sm text-gray-300">
            {insights.map((item, idx) => (
              <li
                key={idx}
                className="border-b border-gray-800 pb-3 last:border-0 last:pb-0 hover:text-purple-400 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>

      </div>
    </div>
    <Footer />
    </>
  );
}
