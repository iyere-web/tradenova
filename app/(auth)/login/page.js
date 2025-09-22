"use client";
import { useState } from "react";
import { auth } from "../../firebase/config"; // adjust path
import { 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "firebase/auth";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { saveUsertoDb } from "@/app/firebase/userService";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // ✅ helper: set auth cookie
  const setAuthCookie = async (user) => {
    const token = await user.getIdToken();
    document.cookie = `authToken=${token}; max-age=86400; path=/; secure;`;
  };

  // 🔹 Email + Password Login
  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
    
      await saveUsertoDb(userCred.user); 
      await setAuthCookie(userCred.user); // ✅ save token in cookie
      alert("✅ Logged in successfully!");
      router.push("/dashboard"); // redirect into dashboard
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Google Login
  const handleGoogleLogin = async () => {
    setError("");
    try {
      const provider = new GoogleAuthProvider();
      const userCred = await signInWithPopup(auth, provider);
      await saveUsertoDb(userCred.user);
      
      await setAuthCookie(userCred.user); // ✅ save token in cookie
      alert("🚀 Logged in with Google!");
      router.push("/dashboard");
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
              🔐 Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            {error && (
              <p className="text-red-400 text-center mb-3 text-sm">{error}</p>
            )}

            {/* Email/Password Login */}
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

              <Button
                onClick={handleLogin}
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Logging in..." : "Login"}
              </Button>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 my-6">
              <span className="h-px w-12 bg-gray-700"></span>
              <p className="text-gray-500 text-sm">or</p>
              <span className="h-px w-12 bg-gray-700"></span>
            </div>

            {/* Google Login */}
            <Button
              onClick={handleGoogleLogin}
              className="w-full bg-yellow-600 hover:bg-yellow-400 text-white font-semibold"
            >
              Continue with Google
            </Button>

            <p className="text-gray-400 text-center mt-6 text-sm">
              Don’t have an account?{" "}
              <Link href="/register" className="text-blue-400 hover:underline">
                Sign Up
              </Link>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
