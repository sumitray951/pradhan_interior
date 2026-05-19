import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, OrbitControls } from '@react-three/drei';

// ==========================================
// 1. BESPOKE PROCEDURAL FURNITURE & ARCHITECTURAL MODELS
// ==========================================

// A Modernist Sofa/Couch Component
export function SofaModel({ position = [0, 0, 0], wireframe = false, scale = 1 }) {
  const colorBase = wireframe ? '#b88d30' : '#806753';
  const colorCushion = wireframe ? '#b88d30' : '#a38a75';
  const colorGold = '#b88d30';

  return (
    <group position={position} scale={scale}>
      {/* Base Support Frame */}
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[3.2, 0.25, 1.3]} />
        <meshStandardMaterial color={colorBase} roughness={0.7} metalness={0.1} wireframe={wireframe} />
      </mesh>

      {/* Seat Cushions */}
      <mesh position={[-0.78, -0.05, 0.05]}>
        <boxGeometry args={[1.4, 0.25, 1.1]} />
        <meshStandardMaterial color={colorCushion} roughness={0.6} metalness={0.1} wireframe={wireframe} />
      </mesh>
      <mesh position={[0.78, -0.05, 0.05]}>
        <boxGeometry args={[1.4, 0.25, 1.1]} />
        <meshStandardMaterial color={colorCushion} roughness={0.6} metalness={0.1} wireframe={wireframe} />
      </mesh>

      {/* Backrest Panel */}
      <mesh position={[0, 0.5, -0.52]}>
        <boxGeometry args={[3.2, 0.85, 0.2]} />
        <meshStandardMaterial color={colorBase} roughness={0.7} metalness={0.1} wireframe={wireframe} />
      </mesh>

      {/* Armrests */}
      <mesh position={[-1.58, 0.15, 0]}>
        <boxGeometry args={[0.2, 0.7, 1.3]} />
        <meshStandardMaterial color={colorBase} roughness={0.7} metalness={0.1} wireframe={wireframe} />
      </mesh>
      <mesh position={[1.58, 0.15, 0]}>
        <boxGeometry args={[0.2, 0.7, 1.3]} />
        <meshStandardMaterial color={colorBase} roughness={0.7} metalness={0.1} wireframe={wireframe} />
      </mesh>

      {/* Gold Cylindrical Legs */}
      {[
        [-1.4, -0.5, 0.5],
        [1.4, -0.5, 0.5],
        [-1.4, -0.5, -0.5],
        [1.4, -0.5, -0.5]
      ].map((legPos, idx) => (
        <mesh key={idx} position={legPos}>
          <cylinderGeometry args={[0.04, 0.03, 0.3, 8]} />
          <meshStandardMaterial color={colorGold} metalness={0.9} roughness={0.1} wireframe={wireframe} />
        </mesh>
      ))}
    </group>
  );
}

// A Carrara Marble Coffee Table Component
export function CoffeeTableModel({ position = [0, 0, 0], wireframe = false, scale = 1 }) {
  const colorGold = '#b88d30';
  const colorTop = wireframe ? '#b88d30' : '#ffffff';

  return (
    <group position={position} scale={scale}>
      {/* Marble Table Slab */}
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[1.8, 0.08, 1.0]} />
        <meshStandardMaterial color={colorTop} roughness={0.05} metalness={wireframe ? 0.9 : 0.1} wireframe={wireframe} />
      </mesh>

      {/* Table Legs (Brushed Gold Columns) */}
      {[
        [-0.75, -0.5, 0.4],
        [0.75, -0.5, 0.4],
        [-0.75, -0.5, -0.4],
        [0.75, -0.5, -0.4]
      ].map((legPos, idx) => (
        <mesh key={idx} position={legPos}>
          <cylinderGeometry args={[0.03, 0.03, 0.35, 8]} />
          <meshStandardMaterial color={colorGold} metalness={0.9} roughness={0.1} wireframe={wireframe} />
        </mesh>
      ))}

      {/* Decorative Vase on Table */}
      <group position={[0, -0.15, 0]}>
        <mesh>
          <cylinderGeometry args={[0.06, 0.06, 0.2, 10]} />
          <meshStandardMaterial color={colorGold} metalness={0.85} roughness={0.1} wireframe={wireframe} />
        </mesh>
        <mesh position={[0, 0.15, 0]} rotation={[0.4, 0, 0.3]}>
          <cylinderGeometry args={[0.01, 0.01, 0.18, 4]} />
          <meshStandardMaterial color={wireframe ? colorGold : '#5c4033'} wireframe={wireframe} />
        </mesh>
      </group>
    </group>
  );
}

// An Architectural Floor Arc Lamp Component
export function FloorLampModel({ position = [0, 0, 0], wireframe = false, scale = 1 }) {
  const colorGold = '#b88d30';

  return (
    <group position={position} scale={scale}>
      {/* Weighted Pedestal Base */}
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 0.04, 16]} />
        <meshStandardMaterial color={colorGold} metalness={0.9} roughness={0.1} wireframe={wireframe} />
      </mesh>

      {/* Slender Main Shaft */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 2.2, 8]} />
        <meshStandardMaterial color={colorGold} metalness={0.9} roughness={0.1} wireframe={wireframe} />
      </mesh>

      {/* Curved Extension Arm */}
      <mesh position={[-0.32, 1.45, 0]} rotation={[0, 0, Math.PI / 2.5]}>
        <cylinderGeometry args={[0.015, 0.015, 0.75, 8]} />
        <meshStandardMaterial color={colorGold} metalness={0.9} roughness={0.1} wireframe={wireframe} />
      </mesh>

      {/* Conical Lampshade */}
      <mesh position={[-0.68, 1.2, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.2, 0.3, 16]} />
        <meshStandardMaterial color={colorGold} metalness={0.9} roughness={0.1} wireframe={wireframe} />
      </mesh>

      {/* Glowing Warm Light Bulb */}
      <mesh position={[-0.68, 1.05, 0]}>
        <sphereGeometry args={[0.05, 12, 12]} />
        <meshBasicMaterial color="#ffffff" wireframe={wireframe} />
      </mesh>

      {/* Local Spotlight */}
      {!wireframe && (
        <pointLight position={[-0.68, 0.8, 0]} intensity={1.8} distance={3.5} color="#fff2e0" decay={2} />
      )}
    </group>
  );
}

// A Rotating Signature Modernist Lounge Chair Component
export function SignatureLoungeChair({ position = [0, 0, 0], wireframe = false, scale = 1 }) {
  const colorGold = '#b88d30';
  const colorCushion = wireframe ? '#b88d30' : '#a38a75';

  return (
    <group position={position} scale={scale}>
      {/* Tilted Seat Cushion */}
      <mesh position={[0, -0.05, 0]} rotation={[0.05, 0, 0]}>
        <boxGeometry args={[1.3, 0.22, 1.15]} />
        <meshStandardMaterial color={colorCushion} roughness={0.6} metalness={0.1} wireframe={wireframe} />
      </mesh>

      {/* High Tilted Backrest */}
      <mesh position={[0, 0.45, -0.42]} rotation={[0.25, 0, 0]}>
        <boxGeometry args={[1.3, 0.85, 0.18]} />
        <meshStandardMaterial color={colorCushion} roughness={0.65} metalness={0.1} wireframe={wireframe} />
      </mesh>

      {/* Brushed Brass Frame Backing */}
      <mesh position={[0, 0.25, -0.52]} rotation={[0.25, 0, 0]}>
        <boxGeometry args={[1.36, 1.15, 0.03]} />
        <meshStandardMaterial color={colorGold} metalness={0.9} roughness={0.1} wireframe={wireframe} />
      </mesh>

      {/* Outward Flared Brass Legs */}
      {[
        [-0.45, -0.5, 0.38, 0.2],
        [0.45, -0.5, 0.38, -0.2],
        [-0.45, -0.5, -0.38, 0.1],
        [0.45, -0.5, -0.38, -0.1]
      ].map((legData, idx) => (
        <mesh key={idx} position={[legData[0], legData[1], legData[2]]} rotation={[0, 0, legData[3]]}>
          <cylinderGeometry args={[0.025, 0.015, 0.65, 8]} />
          <meshStandardMaterial color={colorGold} metalness={0.9} roughness={0.1} wireframe={wireframe} />
        </mesh>
      ))}

      {/* Side Pedestal Table with floating sculpture */}
      <group position={[1.4, -0.3, 0.3]}>
        <mesh>
          <cylinderGeometry args={[0.28, 0.28, 0.03, 16]} />
          <meshStandardMaterial color={colorGold} metalness={0.9} roughness={0.1} wireframe={wireframe} />
        </mesh>
        <mesh position={[0, -0.25, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.5, 8]} />
          <meshStandardMaterial color={colorGold} metalness={0.9} roughness={0.1} wireframe={wireframe} />
        </mesh>
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.22, 0.22, 0.03, 16]} />
          <meshStandardMaterial color={colorGold} metalness={0.9} roughness={0.1} wireframe={wireframe} />
        </mesh>
        
        {/* Floating Ring Art Piece */}
        {!wireframe && (
          <Float speed={1.8} floatIntensity={0.3} rotationIntensity={0.6}>
            <mesh position={[0, 0.22, 0]} rotation={[0.5, 0.5, 0]}>
              <torusGeometry args={[0.12, 0.02, 10, 40]} />
              <meshStandardMaterial color={colorGold} metalness={0.95} roughness={0.05} />
            </mesh>
          </Float>
        )}
      </group>
    </group>
  );
}

// A Carrara Marble Fluted Column Pedestal & Modern Art Sculpture
export function ArchitecturalColumnPedestal({ position = [0, 0, 0], scale = 1, rotatingSculpture = true }) {
  const colorGold = '#b88d30';
  const innerRingRef = useRef();
  const middleRingRef = useRef();
  const outerRingRef = useRef();
  const crystalRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (innerRingRef.current) {
      innerRingRef.current.rotation.x = time * 0.8;
      innerRingRef.current.rotation.y = time * 0.4;
    }
    if (middleRingRef.current) {
      middleRingRef.current.rotation.y = -time * 0.6;
      middleRingRef.current.rotation.z = time * 0.3;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = -time * 0.4;
      outerRingRef.current.rotation.x = time * 0.5;
    }
    if (crystalRef.current) {
      crystalRef.current.rotation.y = time * 1.2;
      crystalRef.current.position.y = Math.sin(time * 2.5) * 0.06;
    }
  });

  return (
    <group position={position} scale={scale}>
      {/* Pedestal Base Slab (White Marble) */}
      <mesh position={[0, -1.7, 0]}>
        <boxGeometry args={[1.3, 0.2, 1.3]} />
        <meshStandardMaterial color="#ffffff" roughness={0.08} metalness={0.1} />
      </mesh>

      {/* Gold Collar Trim */}
      <mesh position={[0, -1.55, 0]}>
        <boxGeometry args={[1.15, 0.08, 1.15]} />
        <meshStandardMaterial color={colorGold} metalness={0.95} roughness={0.05} />
      </mesh>

      {/* Fluted Cylinder Shaft (Carrara Marble Pedestal) */}
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[0.42, 0.42, 2.2, 24]} />
        <meshStandardMaterial color="#FAF6F0" roughness={0.1} metalness={0.15} />
      </mesh>

      {/* Fluted Cylinder Details (simulated with wireframe overlay) */}
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[0.425, 0.425, 2.18, 24]} />
        <meshStandardMaterial color={colorGold} wireframe opacity={0.12} transparent />
      </mesh>

      {/* Gold Cap Plate */}
      <mesh position={[0, 0.75, 0]}>
        <boxGeometry args={[1.15, 0.1, 1.15]} />
        <meshStandardMaterial color={colorGold} metalness={0.95} roughness={0.05} />
      </mesh>

      {/* Floating Modern Art Sculpture */}
      {rotatingSculpture && (
        <group position={[0, 1.5, 0]}>
          {/* Outer Golden Ring */}
          <mesh ref={outerRingRef}>
            <torusGeometry args={[0.72, 0.02, 12, 64]} />
            <meshStandardMaterial color="#c9a84c" metalness={0.95} roughness={0.05} />
          </mesh>
          
          {/* Middle Golden Ring */}
          <mesh ref={middleRingRef}>
            <torusGeometry args={[0.58, 0.03, 12, 64]} />
            <meshStandardMaterial color={colorGold} metalness={0.95} roughness={0.05} />
          </mesh>

          {/* Inner Golden Ring */}
          <mesh ref={innerRingRef}>
            <torusGeometry args={[0.45, 0.04, 12, 64]} />
            <meshStandardMaterial color="#8a6d30" metalness={0.95} roughness={0.05} />
          </mesh>

          {/* Floating Kinetic Crystal Gemstone */}
          <group ref={crystalRef}>
            {/* Wireframe Gem Outline */}
            <mesh>
              <octahedronGeometry args={[0.22, 0]} />
              <meshStandardMaterial color={colorGold} wireframe metalness={0.98} roughness={0.02} />
            </mesh>
            {/* Solid Inner Glow Sphere */}
            <mesh>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial color="#ffffff" roughness={0.01} metalness={0.9} emissive="#faf6f0" emissiveIntensity={0.6} />
            </mesh>
          </group>
          <pointLight position={[0, 0, 0]} intensity={2.0} distance={3.5} color="#FAF6F0" />
        </group>
      )}
    </group>
  );
}

// ==========================================
// 2. THE COMPOSITE BUSINESS-THEMED SCENES
// ==========================================

// The Full Architectural Room Layout Draft Scene (For Hero Section)
function ArchitecturalRoomDraftScene({ wireframe = false }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      // Slow elegant circular drift
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      // Cursor micro-sway parallax
      groupRef.current.rotation.x = state.pointer.y * 0.08;
      groupRef.current.rotation.y += state.pointer.x * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.4, 0]}>
      {/* Ground Technical Layout Grid */}
      <gridHelper args={[10, 10, '#b88d30', wireframe ? 'rgba(184, 141, 48, 0.12)' : 'rgba(184, 141, 48, 0.05)']} position={[0, -1.8, 0]} />

      {/* Wireframe Architectural Boundary Box */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[7, 3.6, 6]} />
        <meshStandardMaterial color="#b88d30" wireframe opacity={wireframe ? 0.08 : 0.03} transparent />
      </mesh>

      {/* Modular Sofa couch */}
      <SofaModel position={[-0.8, -1.2, -0.6]} scale={1.05} wireframe={wireframe} />

      {/* Marble Table */}
      <CoffeeTableModel position={[0, -1.2, 0.9]} scale={1.0} wireframe={wireframe} />

      {/* Arc Floor Lamp */}
      <FloorLampModel position={[1.4, -0.9, -1.4]} scale={1.05} wireframe={wireframe} />

      {/* Additional side chair in room */}
      <group position={[1.9, -1.2, 0.4]} rotation={[0, -Math.PI / 3, 0]}>
        <mesh position={[0, -0.05, 0]}>
          <boxGeometry args={[0.8, 0.18, 0.8]} />
          <meshStandardMaterial color={wireframe ? '#b88d30' : '#a38a75'} roughness={0.6} metalness={0.1} wireframe={wireframe} />
        </mesh>
        <mesh position={[0, 0.35, -0.32]}>
          <boxGeometry args={[0.8, 0.6, 0.12]} />
          <meshStandardMaterial color={wireframe ? '#b88d30' : '#806753'} roughness={0.65} metalness={0.1} wireframe={wireframe} />
        </mesh>
        {[
          [-0.32, -0.4, 0.32],
          [0.32, -0.4, 0.32],
          [-0.32, -0.4, -0.32],
          [0.32, -0.4, -0.32]
        ].map((lp, i) => (
          <mesh key={i} position={lp}>
            <cylinderGeometry args={[0.02, 0.02, 0.5, 8]} />
            <meshStandardMaterial color="#b88d30" metalness={0.9} roughness={0.1} wireframe={wireframe} />
          </mesh>
        ))}
      </group>

      {/* Decorative Floor Plan Dimension Lines */}
      {wireframe && (
        <group position={[0, -1.75, 0]}>
          {/* Dimension indicator lines */}
          <mesh position={[0, 0, 3.2]}>
            <boxGeometry args={[6.8, 0.015, 0.015]} />
            <meshBasicMaterial color="#b88d30" opacity={0.4} transparent />
          </mesh>
          <mesh position={[-3.4, 0, 3.2]} rotation={[0, 0, 0]}>
            <boxGeometry args={[0.015, 0.15, 0.15]} />
            <meshBasicMaterial color="#b88d30" opacity={0.6} transparent />
          </mesh>
          <mesh position={[3.4, 0, 3.2]} rotation={[0, 0, 0]}>
            <boxGeometry args={[0.015, 0.15, 0.15]} />
            <meshBasicMaterial color="#b88d30" opacity={0.6} transparent />
          </mesh>
        </group>
      )}
    </group>
  );
}

// The Dining Counter Table / Kitchen layout (For Services Section)
function DiningRoomLayoutScene() {
  const groupRef = useRef();

  useFrame((s) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = s.clock.elapsedTime * 0.06;
      groupRef.current.rotation.x = s.pointer.y * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.3, 0]}>
      {/* High Marble Kitchen Counter Table */}
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[2.5, 0.12, 1.2]} />
        <meshStandardMaterial color="#ffffff" roughness={0.06} metalness={0.1} />
      </mesh>
      {/* Gold Table Pedestal Shaft */}
      <mesh position={[-0.8, -0.85, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1.2, 16]} />
        <meshStandardMaterial color="#b88d30" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.8, -0.85, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1.2, 16]} />
        <meshStandardMaterial color="#b88d30" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Base Pedestals */}
      <mesh position={[-0.8, -1.45, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.04, 16]} />
        <meshStandardMaterial color="#b88d30" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.8, -1.45, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.04, 16]} />
        <meshStandardMaterial color="#b88d30" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Gold Bar Stools */}
      {[
        [-0.7, -0.7, 0.85, Math.PI / 6],
        [0.7, -0.7, 0.85, -Math.PI / 6],
        [0, -0.7, -0.85, Math.PI]
      ].map((stool, idx) => (
        <group key={idx} position={[stool[0], stool[1], stool[2]]} rotation={[0, stool[3], 0]}>
          {/* Seat Cushion */}
          <mesh>
            <cylinderGeometry args={[0.22, 0.22, 0.06, 16]} />
            <meshStandardMaterial color="#a38a75" roughness={0.6} metalness={0.1} />
          </mesh>
          {/* Stool Stand */}
          <mesh position={[0, -0.35, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 0.65, 8]} />
            <meshStandardMaterial color="#b88d30" metalness={0.9} roughness={0.1} />
          </mesh>
          {/* Stool Ring Base */}
          <mesh position={[0, -0.68, 0]}>
            <cylinderGeometry args={[0.2, 0.2, 0.02, 16]} />
            <meshStandardMaterial color="#b88d30" metalness={0.9} roughness={0.1} />
          </mesh>
        </group>
      ))}

      {/* Modern Geometric Chandelier suspended above table */}
      <group position={[0, 1.2, 0]}>
        {/* Support chain */}
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.008, 0.008, 0.4, 8]} />
          <meshBasicMaterial color="#b88d30" />
        </mesh>
        {/* Horizontal gold ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.8, 0.025, 8, 50]} />
          <meshStandardMaterial color="#b88d30" metalness={0.95} roughness={0.05} />
        </mesh>
        {/* Suspended glowing bulbs */}
        {[0, Math.PI * 0.5, Math.PI, Math.PI * 1.5].map((angle, idx) => {
          const r = 0.8;
          const lx = Math.cos(angle) * r;
          const lz = Math.sin(angle) * r;
          return (
            <group key={idx} position={[lx, -0.2, lz]}>
              <mesh position={[0, 0.1, 0]}>
                <cylinderGeometry args={[0.005, 0.005, 0.2, 8]} />
                <meshBasicMaterial color="#b88d30" />
              </mesh>
              <mesh>
                <sphereGeometry args={[0.06, 12, 12]} />
                <meshBasicMaterial color="#ffffff" />
              </mesh>
              <pointLight position={[0, -0.1, 0]} intensity={1.0} distance={2.2} color="#fff2e0" />
            </group>
          );
        })}
      </group>
    </group>
  );
}

// ==========================================
// 3. MAIN COMPONENT CONTAINER
// ==========================================

export default function ThreeScene({ variant = 'hero', wireframe = false }) {
  const groupRef = useRef();

  return (
    <Canvas
      camera={{ position: [0, 0, variant === 'hero' ? 6.5 : 5], fov: 50 }}
      style={{ background: 'transparent', height: '100%', width: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={variant === 'hero' ? 0.45 : 0.6} />
      
      {/* Sophisticated Lighting Design */}
      <pointLight position={[10, 8, 10]} intensity={2.0} color="#FAF6F0" />
      <pointLight position={[-10, -8, -10]} intensity={0.8} color="#dcc58a" />
      
      {/* Subtle Star fields */}
      <Stars radius={90} depth={30} count={350} factor={1.2} saturation={0} fade speed={0.2} />

      {/* Render composite business-themed scene based on variant */}
      {variant === 'hero' && (
        <ArchitecturalRoomDraftScene wireframe={wireframe} />
      )}

      {variant === 'about' && (
        <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
          <group ref={groupRef} position={[0, -1.3, 0]} scale={0.75}>
            <SignatureLoungeChair position={[0, -0.4, 0]} scale={1.0} wireframe={wireframe} />
          </group>
        </Float>
      )}

      {variant === 'services' && (
        <group position={[0, -1.3, 0]} scale={0.75}>
          <DiningRoomLayoutScene />
        </group>
      )}

      {variant === 'gallery' && (
        <group position={[0, -1.4, 0]} scale={0.75}>
          <ArchitecturalColumnPedestal position={[0, -0.2, 0]} scale={0.9} rotatingSculpture={true} />
        </group>
      )}

      {variant === 'about-sculpture' && (
        <group position={[0, -0.9, 0]} scale={1.05}>
          <ArchitecturalColumnPedestal position={[0, -0.2, 0]} scale={0.9} rotatingSculpture={true} />
        </group>
      )}
      
      <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.8} minPolarAngle={Math.PI / 3} />
    </Canvas>
  );
}
