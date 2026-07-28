"use client";

import { useRef, Suspense, useState, useEffect, useMemo, lazy } from "react";
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

    // If we couldn't identify the GPU, check max texture size as a proxy
    const maxTextureSize = (gl as WebGLRenderingContext).getParameter(
      (gl as WebGLRenderingContext).MAX_TEXTURE_SIZE
    );
    
    console.log(`[GPU Detect] Renderer: ${renderer}, Max Texture Size: ${maxTextureSize}`);
    
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
    <div className="css-fallback-rings">
      <div className="ring ring-1" />
      <div className="ring ring-2" />
      <div className="ring ring-3" />

      {/* Inline styles for the CSS fallback */}
      <style jsx>{`
        .css-fallback-rings {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          pointer-events: none;
        }

        .ring {
          position: absolute;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.08);
        }

        .ring-1 {
          width: 50vw;
          height: 50vw;
          max-width: 600px;
          max-height: 600px;
          right: -10vw;
          top: 10%;
          border-width: 2px;
          border-color: rgba(255, 255, 255, 0.06);
          animation: drift-1 20s ease-in-out infinite;
        }

        .ring-2 {
          width: 40vw;
          height: 40vw;
          max-width: 480px;
          max-height: 480px;
          right: -5vw;
          top: 20%;
          border-width: 1.5px;
          border-color: rgba(255, 255, 255, 0.04);
          animation: drift-2 25s ease-in-out infinite;
        }

        .ring-3 {
          width: 30vw;
          height: 30vw;
          max-width: 360px;
          max-height: 360px;
          right: 0vw;
          top: 15%;
          border-width: 1px;
          border-color: rgba(255, 255, 255, 0.03);
          animation: drift-3 18s ease-in-out infinite;
        }

        @keyframes drift-1 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          25% {
            transform: translate(-20px, 15px) rotate(5deg) scale(1.02);
          }
          50% {
            transform: translate(10px, -10px) rotate(-3deg) scale(0.98);
          }
          75% {
            transform: translate(-10px, -20px) rotate(4deg) scale(1.01);
          }
        }

        @keyframes drift-2 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(15px, -20px) rotate(-4deg);
          }
          66% {
            transform: translate(-15px, 10px) rotate(3deg);
          }
        }

        @keyframes drift-3 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          50% {
            transform: translate(-10px, -15px) rotate(6deg) scale(1.03);
          }
        }
      `}</style>
    </div>
  );
}

// ─── Lazily loaded 3D scene (only imported when GPU is capable) ─────────────
const ThreeScene = lazy(() => import("./LiquidShapeThree"));

// ─── Main Export ────────────────────────────────────────────────────────────
export default function LiquidShape() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "200px" });
  const [isReady, setIsReady] = useState(false);
  const [gpuTier, setGpuTier] = useState<"low" | "high" | null>(null);

  useEffect(() => {
    // Detect on mount, in the browser
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
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: isReady ? 1 : 0, scale: isReady ? 1 : 1.05 }}
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
