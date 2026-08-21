"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, BakeShadows } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette, Noise } from "@react-three/postprocessing";
import { useRef, useEffect, Suspense, useMemo } from "react";
import * as THREE from "three";

interface SilverSunriseThreeProps {
  isInView: boolean;
  onReady?: () => void;
}

function generateStarData(count: number, radius: number) {
  const positions = new Float32Array(count * 3);
  const phases = new Float32Array(count);
  const sizes = new Float32Array(count);
  let seed = 1234567;
  const pseudoRandom = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  for (let i = 0; i < count; i++) {
    // Spherical distribution
    const r = radius * Math.cbrt(pseudoRandom());
    const theta = 2 * Math.PI * pseudoRandom();
    const phi = Math.acos(2 * pseudoRandom() - 1);

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);

    // Random phase 0 to 2PI
    phases[i] = pseudoRandom() * Math.PI * 2;

    // Random size factor
    sizes[i] = pseudoRandom() * 2.0 + 0.5;
  }
  return [positions, phases, sizes] as const;
}

function CustomTwinklingStars({ count = 5000, radius = 50 }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, phases, sizes] = useMemo(() => {
    return generateStarData(count, radius);
  }, [count, radius]);

  useFrame((state) => {
    if (pointsRef.current) {
      (pointsRef.current.material as THREE.ShaderMaterial).uniforms.time.value = state.clock.elapsedTime;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-phase" args={[phases, 1]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <shaderMaterial
        transparent
        depthWrite={false}
        uniforms={{
          time: { value: 0 },
          color: { value: new THREE.Color("#ffffff") }
        }}
        vertexShader={`
          attribute float phase;
          attribute float size;
          varying float vAlpha;
          uniform float time;
          void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            
            // Random twinkle based on phase and time
            // Main slow fade
            float twinkle1 = (sin(time * 1.5 + phase) + 1.0) * 0.5;
            
            // Faster secondary twinkle mixed in (speed relies on size for randomness)
            float twinkle2 = (sin(time * (2.0 + size) + phase * 2.0) + 1.0) * 0.5;
            
            // Combine and intensify
            vAlpha = twinkle1 * twinkle2;
            
            // Minimum baseline opacity so they don't disappear completely too often
            vAlpha = max(0.1, vAlpha * 1.5);
            
            // Size attenuation based on distance (increased multiplier for larger stars)
            gl_PointSize = size * (180.0 / -mvPosition.z);
          }
        `}
        fragmentShader={`
          uniform vec3 color;
          varying float vAlpha;
          void main() {
            vec2 center = gl_PointCoord - vec2(0.5);
            
            // Circular core
            float dist = length(center);
            float core = pow(max(0.0, 1.0 - dist * 3.0), 2.0);
            
            // Horizontal and vertical diffraction spikes
            float spikeX = max(0.0, 1.0 - (abs(center.y) * 30.0 + abs(center.x) * 2.0));
            float spikeY = max(0.0, 1.0 - (abs(center.x) * 30.0 + abs(center.y) * 2.0));
            
            // Combine core and spikes
            float starShape = max(core, max(spikeX, spikeY));
            
            if (starShape <= 0.0) discard;
            
            // Fade out at edges of point coord to prevent hard cutoffs
            float edgeFade = 1.0 - smoothstep(0.4, 0.5, max(abs(center.x), abs(center.y)));
            
            float alpha = starShape * edgeFade * vAlpha;
            
            // Boost brightness slightly
            gl_FragColor = vec4(color, alpha * 1.5);
          }
        `}
      />
    </points>
  );
}

function SunriseScene({ onReady }: SilverSunriseThreeProps) {
  // Notify parent when mounted
  useEffect(() => {
    if (onReady) {
      onReady();
    }
  }, [onReady]);

  return (
    <>
      <color attach="background" args={["#000000"]} />
      
      <ambientLight intensity={0.05} />
      
      {/* Deep space twinkling stars */}
      <CustomTwinklingStars count={5000} radius={80} />

      {/* The Glowing Silver Atmosphere (Layered Toruses for a soft atmospheric gradient) */}
      <group position={[0, -61.5, 0]}>
        {/* Deep silver outer glow */}
        <mesh>
          <torusGeometry args={[60, 0.15, 16, 128]} />
          <meshBasicMaterial color="#555555" transparent opacity={0.3} />
        </mesh>
        {/* Light silver inner glow */}
        <mesh>
          <torusGeometry args={[60, 0.08, 16, 128]} />
          <meshBasicMaterial color="#aaaaaa" transparent opacity={0.6} />
        </mesh>
        {/* Core bright white line */}
        <mesh>
          <torusGeometry args={[60, 0.03, 16, 128]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* The Peeking Sunrise - Small, intense, with horizontal flare */}
      <mesh position={[0, -1.52, -1]}>
        {/* Smaller plane for a realistic distant sun size */}
        <planeGeometry args={[8, 4]} />
        <shaderMaterial
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          uniforms={{
            colorCore: { value: new THREE.Color("#ffffff") },
            colorGlow: { value: new THREE.Color("#cccccc") },
            colorFlare: { value: new THREE.Color("#aaaaaa") }
          }}
          vertexShader={`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            uniform vec3 colorCore;
            uniform vec3 colorGlow;
            uniform vec3 colorFlare;
            
            varying vec2 vUv;
            
            void main() {
              // Adjust UV for aspect ratio (8x4 means x is 2x wider than y)
              vec2 centeredUv = vUv - 0.5;
              vec2 aspectUv = vec2(centeredUv.x * 2.0, centeredUv.y);
              
              // 1. Core Sun (Tiny, intense)
              float d = length(aspectUv) * 4.0; // scale up distance to make core smaller
              float coreIntensity = pow(max(0.0, 1.0 - d), 12.0);
              
              // 2. Soft Glow (Small radial)
              float glowIntensity = pow(max(0.0, 1.0 - d * 0.5), 3.0);
              
              // 3. Horizontal Flare (Anamorphic)
              // Very thin in Y, long in X
              float flareY = abs(centeredUv.y) * 40.0;
              float flareX = abs(centeredUv.x) * 2.0;
              float flareIntensity = max(0.0, 1.0 - flareY) * pow(max(0.0, 1.0 - flareX), 2.0);
              
              // Combine
              vec3 finalColor = colorFlare * (flareIntensity * 0.8);
              finalColor += colorGlow * (glowIntensity * 0.5);
              finalColor += colorCore * coreIntensity;
              
              // Overall alpha fade based on max intensity component
              float alpha = max(max(coreIntensity, glowIntensity * 0.5), flareIntensity * 0.8);
              
              gl_FragColor = vec4(finalColor, alpha);
            }
          `}
        />
      </mesh>

      {/* The Absolute Pitch Black Planet Silhouette */}
      <Sphere args={[60, 64, 64]} position={[0, -61.5, 0]}>
        <meshBasicMaterial color="#000000" />
      </Sphere>
      
      <EffectComposer enableNormalPass={false}>
        <Bloom 
          luminanceThreshold={0.4} 
          mipmapBlur 
          intensity={1.0} 
        />
        <Noise opacity={0.05} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </>
  );
}

export default function SilverSunriseThree({ isInView, onReady }: SilverSunriseThreeProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
      frameloop={isInView ? "always" : "demand"}
    >
      <BakeShadows />
      <Suspense fallback={null}>
        <SunriseScene isInView={isInView} onReady={onReady} />
      </Suspense>
    </Canvas>
  );
}
