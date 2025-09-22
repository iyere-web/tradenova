"use client"

import { auth } from "../firebase/config"  // adjust to your firebase config path
import { signOut } from "firebase/auth"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserInfoDialog({userData}) {
  const [user, setUser] = useState(null)

    setUser(userData)


  const handleLogout = async () => {
    await signOut(auth)
    window.location.reload() 
  }

  if (!user) return null

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>User Info</DialogTitle>
          <DialogDescription>Manage your account</DialogDescription>
        </DialogHeader>

        
        <div className="flex items-center gap-4 my-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={user.photoURL ?? "/profile.png"} alt="User" />
            <AvatarFallback>{user.displayName?.[0] ?? "U"}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">{user.displayName ?? "Anonymous"}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Close</Button>
          </DialogClose>
          <Button onClick={handleLogout} variant="destructive">Logout</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
