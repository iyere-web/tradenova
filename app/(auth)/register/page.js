"use client";

import { useState } from "react";
import { auth } from "../../firebase/config"; // adjust if needed
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { saveUsertoDb } from "@/app/firebase/userService";

export default function SignUpPage() {
  const [email, setEmail] = useState("");                                                         
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // 🔹 Email + Password Sign Up
  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert("❌ Password mismatch, retype password");
      return;
    }

    setLoading(true);
    setError("");
    try {
      // ✅ persist user in cookies/local storage
      await setPersistence(auth, browserLocalPersistence);

      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await saveUsertoDb(userCred.user)
      alert("🎉 Account created successfully!");
      router.push("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Google Sign Up
  const handleGoogleSignUp = async () => {
    setError("");
    try {
      // ✅ persist Google sign-in too
      await setPersistence(auth, browserLocalPersistence);

      const provider = new GoogleAuthProvider();
      const userCred = await signInWithPopup(auth, provider);
      await saveUsertoDb(userCred.user)
      alert("🚀 Signed up with Google!");
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-950 to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md"
      >
        <Card className="bg-gray-900/90 border border-gray-800 shadow-2xl rounded-2xl backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-white">
              🚀 Sign Up
            </CardTitle>
          </CardHeader>
          <CardContent>
            {error && (
              <p className="text-red-400 text-center mb-3 text-sm">{error}</p>
            )}

            {/* Email/Password Signup */}
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white border-gray-700 focus-visible:ring-blue-500"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Enter your password"
                className="bg-gray-800 text-white border-gray-700 focus-visible:ring-blue-500"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Confirm password"
                className="bg-gray-800 text-white border-gray-700 focus-visible:ring-blue-500"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <Button
                onClick={handleSignUp}
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Creating Account..." : "Sign Up"}
              </Button>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 my-6">
              <span className="h-px w-12 bg-gray-700"></span>
              <p className="text-gray-500 text-sm">or</p>
              <span className="h-px w-12 bg-gray-700"></span>
            </div>

            {/* Google Signup */}
            <Button
              onClick={handleGoogleSignUp}
              className="w-full bg-yellow-600 hover:bg-yellow-400 text-white font-semibold"
            >
              Continue with Google
            </Button>

            <p className="text-gray-400 text-center mt-6 text-sm">
              Already have an account?{" "}
              <a href="/login" className="text-blue-400 hover:underline">
                Login
              </a>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
