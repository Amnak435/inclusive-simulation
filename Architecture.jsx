import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Image, Text, Float } from '@react-three/drei'
import * as THREE from 'three'

export function CeilingFan({ position = [0, 3.8, 0] }) {
    const mesh = useRef()
    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.y += 0.1 // Spin
        }
    })
    return (
        <group position={position}>
            <mesh position={[0, 0.2, 0]}>
                <cylinderGeometry args={[0.1, 0.1, 0.4]} />
                <meshStandardMaterial color="#424242" />
            </mesh>
            <group ref={mesh}>
                <mesh position={[0.8, 0, 0]}>
                    <boxGeometry args={[1.6, 0.05, 0.2]} />
                    <meshStandardMaterial color="#616161" />
                </mesh>
                <mesh position={[-0.8, 0, 0]}>
                    <boxGeometry args={[1.6, 0.05, 0.2]} />
                    <meshStandardMaterial color="#616161" />
                </mesh>
                <mesh position={[0, 0, 0.8]} rotation={[0, Math.PI / 2, 0]}>
                    <boxGeometry args={[1.6, 0.05, 0.2]} />
                    <meshStandardMaterial color="#616161" />
                </mesh>
                <mesh position={[0, 0, -0.8]} rotation={[0, Math.PI / 2, 0]}>
                    <boxGeometry args={[1.6, 0.05, 0.2]} />
                    <meshStandardMaterial color="#616161" />
                </mesh>
            </group>
        </group>
    )
}

export function EnclosedRoom({ width = 10, depth = 10, height = 4, wallColor = "#8d6e63", floorColor = "#eeeeee", windowColor = "#b3e5fc", children }) {

    return (
        <group>
            {/* Floor */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
                <planeGeometry args={[width, depth]} />
                <meshStandardMaterial color={floorColor} roughness={0.1} metalness={0.1} />
            </mesh>

            {/* Ceiling - FrontSide only so it's invisible from above (ISO view) */}
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, height, 0]}>
                <planeGeometry args={[width, depth]} />
                <meshStandardMaterial color="#fafafa" side={THREE.FrontSide} />
            </mesh>

            {/* Back Wall (Brown + Decorations) */}
            <group position={[0, height / 2, -depth / 2]}>
                <mesh>
                    <planeGeometry args={[width, height]} />
                    <meshStandardMaterial color={wallColor} />
                </mesh>
                {/* Decoration: Abstract Art Frames */}
                <mesh position={[-2, 0.5, 0.05]}>
                    <boxGeometry args={[1.5, 2, 0.1]} />
                    <meshStandardMaterial color="#ffcc80" />
                </mesh>
                <mesh position={[2, 0.5, 0.05]}>
                    <boxGeometry args={[1.5, 2, 0.1]} />
                    <meshStandardMaterial color="#ffab91" />
                </mesh>
            </group>

            {/* Left Wall (Brown + Windows) */}
            <group position={[-width / 2, height / 2, 0]} rotation={[0, Math.PI / 2, 0]}>
                <mesh>
                    <planeGeometry args={[depth, height]} />
                    <meshStandardMaterial color={wallColor} />
                </mesh>
                {/* Window 1 */}
                <group position={[-2.5, 0.5, 0.02]}>
                    <mesh>
                        <planeGeometry args={[2, 2.5]} />
                        <meshStandardMaterial color={windowColor} />
                    </mesh>
                    {/* Frame */}
                    <mesh position={[0, 0, 0]}>
                        <ringGeometry args={[1, 1.2, 4]} rotation={[0, 0, Math.PI / 4]} />
                        <meshStandardMaterial color="#5d4037" />
                    </mesh>
                </group>
                {/* Window 2 */}
                <group position={[2.5, 0.5, 0.02]}>
                    <mesh>
                        <planeGeometry args={[2, 2.5]} />
                        <meshStandardMaterial color={windowColor} />
                    </mesh>
                </group>
            </group>

            {/* Right Wall (Brown - usually invisible in ISO view due to backface culling) */}
            <mesh position={[width / 2, height / 2, 0]} rotation={[0, -Math.PI / 2, 0]}>
                <planeGeometry args={[depth, height]} />
                <meshStandardMaterial color={wallColor} />
            </mesh>

            {/* Lighting - Soft Yellow Ambient */}
            <pointLight position={[0, height - 0.5, 0]} intensity={0.8} color="#fffde7" distance={15} />

            {/* Content */}
            {children}
        </group>
    )
}

export function Hologram({ imageUrl, position = [0, 0, 0], scale = [1, 1] }) {
    const mesh = useRef()

    useFrame((state) => {
        if (mesh.current) {
            // Subtle floating pulse
            mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.05
        }
    })

    return (
        <group position={position}>
            {/* Glow Effect */}
            <mesh position={[0, 0, -0.1]}>
                <planeGeometry args={[scale[0] * 1.5, scale[1] * 1.5]} />
                <meshBasicMaterial color="#00e5ff" transparent opacity={0.2} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
            </mesh>

            {/* Volumetric Image Planes (Cross Pattern) */}
            <group ref={mesh}>
                <Image
                    url={imageUrl}
                    scale={scale}
                    transparent
                    opacity={0.8}
                    color="#e0f7fa"
                    side={THREE.DoubleSide}
                />
                <Image
                    url={imageUrl}
                    scale={scale}
                    transparent
                    opacity={0.4}
                    color="#e0f7fa"
                    side={THREE.DoubleSide}
                    rotation={[0, Math.PI / 4, 0]}
                />
                <Image
                    url={imageUrl}
                    scale={scale}
                    transparent
                    opacity={0.4}
                    color="#e0f7fa"
                    side={THREE.DoubleSide}
                    rotation={[0, -Math.PI / 4, 0]}
                />
            </group>

            {/* Ground Particles Ring (Simple Torus) */}
            <mesh position={[0, -scale[1] / 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.6, 0.02, 16, 32]} />
                <meshBasicMaterial color="#00e5ff" transparent opacity={0.8} />
            </mesh>
        </group>
    )
}

export function HolographicSlide({ url, position, rotation = [0, 0, 0] }) {
    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
            <group position={position} rotation={rotation}>
                <mesh position={[0, 0, -0.05]}>
                    <planeGeometry args={[2.1, 1.3]} />
                    <meshStandardMaterial color="#00bcd4" transparent opacity={0.2} blending={THREE.AdditiveBlending} />
                </mesh>
                <Image url={url} scale={[2, 1.2]} transparent opacity={0.9} />
            </group>
        </Float>
    )
}
