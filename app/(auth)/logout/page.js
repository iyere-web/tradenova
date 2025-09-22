// app/profile/page.jsx
"use client";

import { useEffect, useState } from "react";
import { auth } from "../../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Button } from "@/components/ui/button"; // shadcn button
import {  redirect } from "next/navigation";
import Link from "next/link";
import { LogIn } from "lucide-react";

export default function ProfilePage() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      redirect('/'); // Redire

    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-slate-800">
        <h1 className="text-xl font-bold text-white">Not logged in</h1>
        <Link href={'/login'} className="text-blue-500 mt-5 flex flex-row justify-between w-33"> click to Login <LogIn /></Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 p-10 min-h-screen bg-slate-800">
      <h1 className="text-3xl font-bold text-white">Profile</h1>

      <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center gap-4 w-80">
        {/* Profile Photo */}
        <img
          src={user.photoURL || "/profile.png"} // fallback if no photo
          alt="Profile"
          className="w-24 h-24 rounded-full border shadow"
        />

        {/* User Info */}
        <p className="text-lg font-semibold">{user.displayName || "Anonymous"}</p>
        <p className="text-gray-600 text-sm">{user.email}</p>
        <p className="text-gray-500 text-xs">
          Account Created:{" "}
          {user.metadata?.creationTime
            ? new Date(user.metadata.creationTime).toLocaleDateString()
            : "Unknown"}
        </p>

        {/* Logout Button */}
        <Button
          variant="destructive"
          className="w-full"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
