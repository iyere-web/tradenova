"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function AboutPage() {
  return (
      <>
      <div className="fixed w-full"> <Navbar/></div>
    <div className="min-h-screen bg-gray-950 text-gray-200 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            About <span className="text-purple-400">Trading Nova</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Trading Nova is your trusted gateway to the world of digital assets.  
            We combine cutting-edge technology, real-time insights, and a secure platform 
            to empower traders at every level — from beginners to professionals.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-3">🚀 Our Mission</h2>
            <p className="text-gray-400 text-sm">
              Our mission is simple: make crypto trading smarter, safer, and more accessible.  
              We strive to provide the tools and knowledge that help you seize 
              opportunities in the fast-moving blockchain economy.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-3">🌍 Our Vision</h2>
            <p className="text-gray-400 text-sm">
              We envision a world where financial freedom is not limited by geography, 
              middlemen, or outdated systems. Trading Nova is here to lead the charge 
              into a decentralized future where everyone can thrive.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">💡 Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Transparency</h3>
              <p className="text-gray-400 text-sm">
                Clear pricing, open communication, and honest insights. We believe 
                trust is the foundation of every trade.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-400 text-sm">
                From AI-powered analytics to real-time alerts, we constantly push 
                boundaries to give you an edge in the markets.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
              <p className="text-gray-400 text-sm">
                Our strength lies in our traders. We’re building a global community 
                of learners, thinkers, and doers.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <Footer />
    </>
  );
}
