"use client";

import { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { EffectComposer, Bloom, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

// ─── High Quality 3D Scene ─────────────────────────────────────────────────────
// Utilizing dGPU capabilities: high-res geometry, antialiasing enabled, and higher DPR.

function FluidRings() {
  const { viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  const isMobile = viewport.width < 5;
  const position: [number, number, number] = isMobile
    ? [1, 2, 0]
    : [viewport.width * 0.3, 0, 0];
  const scale = isMobile ? 0.8 : Math.min(1.4, viewport.width * 0.15);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <torusGeometry args={[2.5, 0.8, 64, 128]} />
          <meshStandardMaterial
            color="#555555"
            metalness={1}
            roughness={0.1}
            envMapIntensity={1.5}
          />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh
          position={[-1, -1.5, 1]}
          rotation={[Math.PI / 2, Math.PI / 4, 0]}
        >
          <torusGeometry args={[2, 0.7, 64, 128]} />
          <meshStandardMaterial
            color="#444444"
            metalness={1}
            roughness={0.15}
            envMapIntensity={1.5}
          />
        </mesh>
      </Float>
    </group>
  );
}

function ReadyReporter({ onReady }: { onReady: () => void }) {
  useEffect(() => {
    onReady();
  }, [onReady]);
  return null;
}

export default function LiquidShapeThree({
  isInView,
  onReady,
}: {
  isInView: boolean;
  onReady: () => void;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 45 }}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        alpha: true,
      }}
      dpr={[1, 2]}
      frameloop={isInView ? "always" : "demand"}
    >
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#ffffff" />

      <Suspense fallback={null}>
        <Environment preset="studio" />
        <FluidRings />
        <EffectComposer>
          <Bloom luminanceThreshold={0.8} mipmapBlur intensity={0.3} />
          <Noise opacity={0.03} blendFunction={BlendFunction.OVERLAY} />
        </EffectComposer>
        <ReadyReporter onReady={onReady} />
      </Suspense>
    </Canvas>
  );
}
