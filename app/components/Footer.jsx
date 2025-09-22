"use client";

import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaTelegramPlane, FaDiscord, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-xl font-bold text-white text-yellow-600"> 
            <Image src="/icons.png" alt="Logo" width={40} height={40} className="inline mr-2" />
            Trading Nova
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Your gateway to smarter crypto trading. Track, analyze, and grow with confidence.  
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/Aboutus" className="hover:text-white">About Us</Link></li>
            <li><Link href="/trends" className="hover:text-white">Careers</Link></li>
            <li><Link href="/support" className="hover:text-white">Blog</Link></li>
            <li><Link href="/support" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/Aboutus" className="hover:text-white">Documentation</Link></li>
            <li><Link href="/support" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/support" className="hover:text-white">Support</Link></li>
            <li><Link href="/Aboutus" className="hover:text-white">Terms & Privacy</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase mb-3">Connect</h3>
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" className="hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="https://t.me" target="_blank" className="hover:text-white">
              <FaTelegramPlane size={20} />
            </a>
            <a href="https://discord.com" target="_blank" className="hover:text-white">
              <FaDiscord size={20} />
            </a>
            <a href="https://github.com" target="_blank" className="hover:text-white">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-6">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Trading Nova. All rights reserved.</p>
          <p>Built for crypto traders worldwide 🌍</p>
        </div>
      </div>
    </footer>
  );
}
