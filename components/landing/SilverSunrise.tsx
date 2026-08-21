"use client";

import { useRef, Suspense, useState, lazy } from "react";
import { useInView, motion } from "framer-motion";

// ─── Lazily loaded 3D scene ─────────────────────────────────────────────────
const ThreeScene = lazy(() => import("./SilverSunriseThree"));

// ─── Main Export ────────────────────────────────────────────────────────────
export default function SilverSunrise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "200px" });
  const [isReady, setIsReady] = useState(false);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative z-0 bg-transparent pointer-events-none"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isReady ? 1 : 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <ThreeScene
            isInView={isInView}
            onReady={() => setIsReady(true)}
          />
        </Suspense>
      </motion.div>
    </div>
  );
}
