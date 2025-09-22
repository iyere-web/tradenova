"use client";
import { useEffect } from "react";
import { auth } from "../firebase/config";
import { onIdTokenChanged } from "firebase/auth";

export default function AuthProvider({ children }) {
  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        document.cookie = `authToken=${token}; max-age=86400; path=/;`;
      } else {
        document.cookie = "authToken=; path=/; max-age=0"; // clear
      }
    });

    return () => unsubscribe();
  }, []);

  return children;
}
