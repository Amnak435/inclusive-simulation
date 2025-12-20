import React from 'react'

export default function Desk({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
    const tableColor = "#8d6e63" // Wood
    const legColor = "#4e342e" // Dark Wood
    const chairColor = "#5c6bc0" // Blue cushion

    return (
        <group position={position} rotation={rotation}>
            {/* --- Table --- */}
            {/* Table Top */}
            <mesh position={[0, 0.75, 0]} castShadow receiveShadow>
                <boxGeometry args={[1.6, 0.05, 0.8]} />
                <meshStandardMaterial color={tableColor} roughness={0.6} />
            </mesh>

            {/* Legs */}
            <mesh position={[-0.7, 0.375, 0.3]} castShadow>
                <boxGeometry args={[0.08, 0.75, 0.08]} />
                <meshStandardMaterial color={legColor} />
            </mesh>
            <mesh position={[0.7, 0.375, 0.3]} castShadow>
                <boxGeometry args={[0.08, 0.75, 0.08]} />
                <meshStandardMaterial color={legColor} />
            </mesh>
            <mesh position={[-0.7, 0.375, -0.3]} castShadow>
                <boxGeometry args={[0.08, 0.75, 0.08]} />
                <meshStandardMaterial color={legColor} />
            </mesh>
            <mesh position={[0.7, 0.375, -0.3]} castShadow>
                <boxGeometry args={[0.08, 0.75, 0.08]} />
                <meshStandardMaterial color={legColor} />
            </mesh>

            {/* --- Chair (Tucked in) --- */}
            <group position={[0, 0, 0.6]}>
                {/* Seat */}
                <mesh position={[0, 0.45, 0]} castShadow>
                    <boxGeometry args={[0.5, 0.05, 0.5]} />
                    <meshStandardMaterial color={chairColor} />
                </mesh>
                {/* Backrest */}
                <mesh position={[0, 0.7, 0.23]} castShadow>
                    <boxGeometry args={[0.5, 0.5, 0.05]} />
                    <meshStandardMaterial color={chairColor} />
                </mesh>
                {/* Chair Legs */}
                <mesh position={[-0.2, 0.225, 0.2]} castShadow>
                    <boxGeometry args={[0.05, 0.45, 0.05]} />
                    <meshStandardMaterial color="#333" />
                </mesh>
                <mesh position={[0.2, 0.225, 0.2]} castShadow>
                    <boxGeometry args={[0.05, 0.45, 0.05]} />
                    <meshStandardMaterial color="#333" />
                </mesh>
                <mesh position={[-0.2, 0.225, -0.2]} castShadow>
                    <boxGeometry args={[0.05, 0.45, 0.05]} />
                    <meshStandardMaterial color="#333" />
                </mesh>
                <mesh position={[0.2, 0.225, -0.2]} castShadow>
                    <boxGeometry args={[0.05, 0.45, 0.05]} />
                    <meshStandardMaterial color="#333" />
                </mesh>
            </group>

            {/* --- Props (Laptop) --- */}
            <group position={[0, 0.78, 0]}>
                {/* Laptop Base */}
                <mesh position={[0, 0, 0.1]}>
                    <boxGeometry args={[0.4, 0.02, 0.3]} />
                    <meshStandardMaterial color="#212121" />
                </mesh>
                {/* Laptop Screen */}
                <mesh position={[0, 0.15, -0.05]} rotation={[-0.2, 0, 0]}>
                    <boxGeometry args={[0.4, 0.3, 0.02]} />
                    <meshStandardMaterial color="#212121" />
                </mesh>
                {/* Screen Display (Glow) */}
                <mesh position={[0, 0.15, -0.04]} rotation={[-0.2, 0, 0]}>
                    <planeGeometry args={[0.36, 0.26]} />
                    <meshBasicMaterial color="#00bcd4" />
                </mesh>
            </group>
        </group>
    )
}
