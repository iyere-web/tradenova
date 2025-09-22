
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "./providers/AuthProvider";

import useAuthStore from "@/stores/authStore";


import { Icon, icons } from "lucide-react";
import AppWrapper from "./components/AppWrapper";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Trade-NOVA",
  description: "trading with explosive growth",
  icons:{
    icon:'/icons.png'
  }
};

export default function RootLayout({ children }) {


 

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
        <AppWrapper>
            {children}
         </AppWrapper>
        
        </AuthProvider>
      </body>
    </html>
  );
}
