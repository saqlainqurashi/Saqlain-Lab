import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Deliberately lightweight, geometry-only 3D artwork: no textures or large 3D assets.
function Starfield() {
  const positions = useMemo(() => {
    const values = new Float32Array(270 * 3);
    let seed = 181;
    const random = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    for (let i = 0; i < 270; i++) {
      const radius = 2.4 + random() * 4;
      const theta = random() * Math.PI * 2;
      const elevation = (random() - .5) * Math.PI;
      values[i * 3] = Math.cos(theta) * Math.cos(elevation) * radius;
      values[i * 3 + 1] = Math.sin(elevation) * radius;
      values[i * 3 + 2] = Math.sin(theta) * Math.cos(elevation) * radius;
    }
    return values;
  }, []);
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#96d9f4" size={.025} sizeAttenuation transparent opacity={.58} depthWrite={false} />
    </points>
  );
}

function NeuralArtifact({running}) {
  const assembly = useRef(null);
  const gimbals = useRef(null);
  const inner = useRef(null);
  useFrame(({clock, pointer}, delta) => {
    if (!running || !assembly.current || !gimbals.current) return;
    const t = clock.getElapsedTime();
    const speed = Math.min(delta * 1.8, 0.05);
    const targetY = pointer.x * .32 + Math.sin(t * .19) * .22;
    const targetX = -.12 - pointer.y * .23 + Math.cos(t * .23) * .11;
    assembly.current.rotation.y = THREE.MathUtils.lerp(assembly.current.rotation.y, targetY, speed);
    assembly.current.rotation.x = THREE.MathUtils.lerp(assembly.current.rotation.x, targetX, speed);
    assembly.current.position.y = Math.sin(t * .82) * .09;
    gimbals.current.rotation.z = t * .08;
    gimbals.current.rotation.x = .33 + Math.sin(t * .3) * .14;
    if (inner.current) {
      inner.current.rotation.x = t * -.16;
      inner.current.rotation.y = t * .24;
    }
  });

  return <group ref={assembly} rotation={[-.12, .08, 0]} position={[0,0,0]}>
    <group ref={gimbals}>
      <mesh rotation={[Math.PI / 2.9, 0, 0]}>
        <torusGeometry args={[1.91, .011, 9, 120]} />
        <meshBasicMaterial color="#7ae6ec" transparent opacity={.67} />
      </mesh>
      <mesh rotation={[.29, Math.PI / 2.5, .54]}>
        <torusGeometry args={[2.09, .006, 8, 140]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={.48} />
      </mesh>
      <mesh rotation={[1.12, .72, .25]}>
        <torusGeometry args={[2.36, .008, 8, 140]} />
        <meshBasicMaterial color="#87b7ed" transparent opacity={.26} />
      </mesh>
      {Array.from({length: 9}, (_,index) => {
        const angle = index * Math.PI * 2 / 9;
        return <mesh key={index} position={[Math.cos(angle) * 1.92, Math.sin(angle) * 1.92 * .39, Math.sin(angle) * 1.12]}>
          <octahedronGeometry args={[index % 3 === 0 ? .095 : .046, 0]}/>
          <meshStandardMaterial color={index % 2 ? "#a99bff" : "#80f2f5"} emissive={index % 2 ? "#7656dc" : "#1f91a8"} emissiveIntensity={.65} roughness={.22}/>
        </mesh>;
      })}
    </group>
    <mesh>
      <icosahedronGeometry args={[1.24, 1]}/>
      <meshPhysicalMaterial color="#182e49" metalness={.55} roughness={.19} clearcoat={1} clearcoatRoughness={.1} transparent opacity={.84} flatShading side={THREE.DoubleSide}/>
    </mesh>
    <mesh scale={[1.01, 1.01, 1.01]}>
      <icosahedronGeometry args={[1.26, 1]}/>
      <meshBasicMaterial color="#a6faff" wireframe transparent opacity={.48}/>
    </mesh>
    <mesh ref={inner}>
      <octahedronGeometry args={[.83, 0]}/>
      <meshPhysicalMaterial color="#27b8d5" emissive="#0f8aad" emissiveIntensity={.47} metalness={.25} roughness={.14} transparent opacity={.77} flatShading/>
    </mesh>
    <mesh rotation={[.2,.4,.12]}>
      <octahedronGeometry args={[.5,0]}/>
      <meshStandardMaterial color="#b7e9ff" emissive="#64d9e7" emissiveIntensity={.72} metalness={.34} roughness={.25} flatShading/>
    </mesh>
    <mesh>
      <sphereGeometry args={[.27,24,16]}/>
      <meshBasicMaterial color="#d9f8ff"/>
    </mesh>
    <pointLight position={[0,0,0]} color="#7de6fd" intensity={8} distance={4}/>
  </group>;
}

export default function HeroScene({running = true}) {
  return <Canvas
    camera={{position:[0,0,6.8], fov:40}}
    gl={{antialias:true, alpha:true, powerPreference:"low-power"}}
    dpr={[1,1.5]}
    frameloop={running ? "always" : "demand"}
    fallback={<div className="scene-webgl-fallback" aria-hidden="true"/>}
  >
    <ambientLight intensity={.95}/>
    <hemisphereLight args={["#a8eaff","#19132f",1.3]}/>
    <directionalLight position={[-2,4,5]} color="#b0efff" intensity={3}/>
    <pointLight position={[3,-1.5,3]} color="#936cfb" intensity={22} distance={10}/>
    <Starfield/>
    <NeuralArtifact running={running}/>
  </Canvas>;
}
