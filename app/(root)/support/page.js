"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";

export default function SupportPage() {
  const faqs = [
    {
      q: "How do I reset my password?",
      a: "Go to your account settings and select 'Reset Password'. Follow the instructions sent to your registered email.",
    },
    {
      q: "Where can I view my transaction history?",
      a: "Navigate to the 'Wallet' section in your dashboard and click on 'Transaction History'.",
    },
    {
      q: "Is Trading Nova secure?",
      a: "Yes, we use bank-grade encryption, two-factor authentication, and industry best practices to keep your funds and data safe.",
    },
    {
      q: "How do I contact support?",
      a: "You can reach our team 24/7 via live chat or email at support@tradingnova.com.",
    },
  ];

  return (
      <>
      <div className="fixed w-full"> <Navbar/></div>
    <div className="min-h-screen bg-gray-950 text-gray-200 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Support Center</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Need help? We're here for you. Explore our FAQs, connect with our team, 
            or join the community for instant assistance.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">📌 Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition"
              >
                <h3 className="text-lg font-semibold text-white">{item.q}</h3>
                <p className="text-gray-400 text-sm mt-2">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center">
            <h3 className="text-lg font-semibold text-white mb-2">📧 Email Us</h3>
            <p className="text-gray-400 text-sm mb-3">
              Reach out for direct support anytime.
            </p>
            <Link
              href="mailto:support@tradingnova.com"
              className="text-purple-400 hover:text-purple-300 font-medium"
            >
              support@tradingnova.com
            </Link>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center">
            <h3 className="text-lg font-semibold text-white mb-2">💬 Live Chat</h3>
            <p className="text-gray-400 text-sm mb-3">
              Get instant help from our support agents.
            </p>
            <Link
              href="/chat"
              className="text-purple-400 hover:text-purple-300 font-medium"
            >
              Start Chat
            </Link>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center">
            <h3 className="text-lg font-semibold text-white mb-2">🌍 Community</h3>
            <p className="text-gray-400 text-sm mb-3">
              Join the conversation with other traders.
            </p>
            <Link
              href="/community"
              className="text-purple-400 hover:text-purple-300 font-medium"
            >
              Join Community
            </Link>
          </div>
        </div>

      </div>
    </div>
      <Footer />
      </>
  );
}
