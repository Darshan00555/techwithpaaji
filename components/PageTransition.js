"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // On SSR and first paint: render children at full opacity immediately.
  // Googlebot (and users without JS) will always see full content.
  if (!mounted) {
    return (
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    );
  }

  // After hydration: apply the smooth fade-in animation
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.36, ease: [0.2, 0.8, 0.2, 1] }}
      style={{ position: "relative", zIndex: 1 }}
    >
      {children}
    </motion.div>
  );
}
