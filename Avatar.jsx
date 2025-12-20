import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Avatar({ position = [0, 0, 0], color = "orange", isSeated = false }) {
    const groupRef = useRef()

    // Simple idle animation
    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.02
        }
    })

    return (
        <group ref={groupRef} position={position}>
            {/* Head */}
            <mesh position={[0, 1.4, 0]} castShadow>
                <sphereGeometry args={[0.25, 32, 32]} />
                <meshStandardMaterial color="#ffccbc" /> {/* Skin tone */}
            </mesh>

            {/* Body */}
            {isSeated ? (
                // Seated Pose
                <group position={[0, 0.8, 0]}>
                    {/* Torso */}
                    <mesh position={[0, 0.2, 0]}>
                        <boxGeometry args={[0.4, 0.6, 0.2]} />
                        <meshStandardMaterial color={color} />
                    </mesh>
                    {/* Legs (Bent) */}
                    <mesh position={[-0.1, -0.3, 0.2]} rotation={[-1.5, 0, 0]}>
                        <capsuleGeometry args={[0.08, 0.5, 4, 8]} />
                        <meshStandardMaterial color="#424242" />
                    </mesh>
                    <mesh position={[0.1, -0.3, 0.2]} rotation={[-1.5, 0, 0]}>
                        <capsuleGeometry args={[0.08, 0.5, 4, 8]} />
                        <meshStandardMaterial color="#424242" />
                    </mesh>
                </group>
            ) : (
                // Standing Pose
                <mesh position={[0, 0.7, 0]} castShadow>
                    <capsuleGeometry args={[0.2, 1.0, 4, 8]} />
                    <meshStandardMaterial color={color} />
                </mesh>
            )}

            {/* Eyes (Simple) */}
            <mesh position={[-0.08, 1.45, 0.2]}>
                <sphereGeometry args={[0.03, 16, 16]} />
                <meshBasicMaterial color="black" />
            </mesh>
            <mesh position={[0.08, 1.45, 0.2]}>
                <sphereGeometry args={[0.03, 16, 16]} />
                <meshBasicMaterial color="black" />
            </mesh>
        </group>
    )
}
