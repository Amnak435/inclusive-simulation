import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import UIOverlay from './components/Layout/UIOverlay'
import Experience from './components/World/Experience'
import './index.css'

export default function App() {
  return (
    <>
      {/* 2D UI Overlay for Navigation & Accessibility */}
      <UIOverlay />

      {/* 3D Scene Canvas */}
      <Canvas
        shadows
        camera={{ position: [0, 5, 10], fov: 50 }}
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}
      >
        <color attach="background" args={['#ececec']} />
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
    </>
  )
}
