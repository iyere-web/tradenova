"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function AppWrapper({ children }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Wait until everything is ready
    const checkReady = async () => {
      // ✅ Wait one frame for React hydration
      await new Promise((r) => requestAnimationFrame(r));

      // If you also want to wait until all resources (images, scripts, etc.) load:
      if (document.readyState === "complete") {
        setIsReady(true);
      } else {
        const handleLoad = () => setIsReady(true);
        window.addEventListener("load", handleLoad);
        return () => window.removeEventListener("load", handleLoad);
      }
    };

    checkReady();
  }, []);

  if (!isReady) {
    return <Loader />;
  }

  return <>{children}</>;
}
