import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function FloatingObject() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { mouse } = useThree()

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.x += 0.004
    meshRef.current.rotation.y += 0.007
    // Floating
    meshRef.current.position.y = Math.sin(t * 0.8) * 0.18
    // Subtle mouse parallax
    meshRef.current.rotation.x += mouse.y * 0.0015
    meshRef.current.rotation.y += mouse.x * 0.0015
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.6, 1]} />
      <meshPhongMaterial
        color="#7c3aed"
        emissive="#3b0764"
        emissiveIntensity={0.4}
        flatShading
        shininess={60}
      />
    </mesh>
  )
}

function ParticleField() {
  const count = 800
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return arr
  }, [])

  const pointsRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03
  })

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#a78bfa"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        opacity={0.5}
      />
    </Points>
  )
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[4, 4, 4]} intensity={2} color="#7c3aed" />
        <pointLight position={[-4, -2, -4]} intensity={0.8} color="#06b6d4" />
        <FloatingObject />
        <ParticleField />
      </Canvas>
    </div>
  )
}
