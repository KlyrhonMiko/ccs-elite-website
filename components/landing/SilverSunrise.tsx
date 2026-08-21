"use client";

import { useRef, Suspense, useState, lazy, useEffect } from "react";
import { useInView, motion } from "framer-motion";

// ─── GPU Capability Detection ───────────────────────────────────────────────
function detectGPUTier(): "low" | "high" {
  if (typeof window === "undefined") return "low";

  try {
    const canvas = document.createElement("canvas");
    const glOptions = { powerPreference: "high-performance" };
    const gl =
      canvas.getContext("webgl2", glOptions) ||
      canvas.getContext("webgl", glOptions) ||
      canvas.getContext("experimental-webgl", glOptions);

    if (!gl) {
      console.log("[GPU Detect] No WebGL context found.");
      return "low";
    }

    let renderer = "unknown";
    const debugInfo = (gl as WebGLRenderingContext).getExtension(
      "WEBGL_debug_renderer_info"
    );
    if (debugInfo) {
      renderer = (gl as WebGLRenderingContext)
        .getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
        ?.toLowerCase() || "unknown";

      // Known integrated / low-power GPU keywords
      const lowTierKeywords = [
        "intel",
        "intel(r)",
        "uhd",
        "iris",
        "hd graphics",
        "mali",
        "adreno",
        "powervr",
        "apple gpu",
        "swiftshader",
        "llvmpipe",
        "mesa",
        "microsoft basic render",
      ];

      if (renderer && lowTierKeywords.some((kw) => renderer.includes(kw))) {
        console.log(`[GPU Detect] Detected low-tier GPU by keyword: ${renderer}`);
        return "low";
      }
    }

    const maxTextureSize = (gl as WebGLRenderingContext).getParameter(
      (gl as WebGLRenderingContext).MAX_TEXTURE_SIZE
    );
    
    if (maxTextureSize < 8192) return "low";

    return "high";
  } catch (err) {
    console.error("[GPU Detect] Error detecting GPU:", err);
    return "low";
  }
}

// ─── CSS-Only Fallback for Low-Tier GPUs ────────────────────────────────────
function CSSFallbackShape() {
  return (
    <div className="css-fallback-sunrise">
      <div className="sun" />
      <div className="horizon" />
      <style jsx>{`
        .css-fallback-sunrise {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          pointer-events: none;
          background: #000000;
        .sun {
          position: absolute;
          bottom: -3px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 10px;
          border-radius: 50%;
          background: radial-gradient(ellipse at center, #ffffff 0%, #aaaaaa 30%, transparent 70%);
          mix-blend-mode: screen;
          z-index: 5;
          filter: blur(2px);
          box-shadow: 0 0 40px 10px rgba(170, 170, 170, 0.4);
        }

        .horizon {
          position: absolute;
          bottom: -50vw;
          left: 50%;
          transform: translateX(-50%);
          width: 150vw;
          height: 100vw;
          border-radius: 50%;
          background: #000000;
          box-shadow: 0 -20px 100px rgba(170, 170, 170, 0.3);
          border-top: 1px solid rgba(255, 255, 255, 0.4);
          z-index: 10;
        }
      `}</style>
    </div>
  );
}

// ─── Lazily loaded 3D scene (only imported when GPU is capable) ─────────────
const ThreeScene = lazy(() => import("./SilverSunriseThree"));

// ─── Main Export ────────────────────────────────────────────────────────────
export default function SilverSunrise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "200px" });
  const [isReady, setIsReady] = useState(false);
  const [gpuTier, setGpuTier] = useState<"low" | "high" | null>(null);

  useEffect(() => {
    setGpuTier(detectGPUTier());
  }, []);

  // Don't render anything until we know the GPU tier
  if (gpuTier === null) {
    return (
      <div
        ref={containerRef}
        className="w-full h-full relative z-0 bg-transparent pointer-events-none"
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative z-0 bg-transparent pointer-events-none"
    >
      {gpuTier === "low" ? (
        /* ── CSS fallback: zero GPU cost ── */
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <CSSFallbackShape />
        </motion.div>
      ) : (
        /* ── Full 3D scene for capable GPUs ── */
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
      )}
    </div>
  );
}
