import React from 'react'

export function KitchenUnit({ position = [0, 0, 0] }) {
    return (
        <group position={position}>
            {/* Counter */}
            <mesh position={[0, 0.5, 0]} castShadow>
                <boxGeometry args={[1.5, 1, 1]} />
                <meshStandardMaterial color="#d7ccc8" />
            </mesh>
            {/* Sink Basin */}
            <mesh position={[-0.4, 1.01, 0.2]} rotation={[-Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.2, 0.15, 0.1, 16]} />
                <meshStandardMaterial color="#efefef" />
            </mesh>
            {/* Faucet */}
            <mesh position={[-0.4, 1.2, -0.2]} rotation={[0.5, 0, 0]}>
                <cylinderGeometry args={[0.03, 0.03, 0.3]} />
                <meshStandardMaterial color="silver" />
            </mesh>
            {/* Stove Top */}
            <mesh position={[0.4, 1.01, 0]}>
                <boxGeometry args={[0.5, 0.05, 0.5]} />
                <meshStandardMaterial color="#212121" />
            </mesh>
        </group>
    )
}

export function RobotArm({ position = [0, 0, 0] }) {
    return (
        <group position={position}>
            {/* Base */}
            <mesh position={[0, 0.1, 0]}>
                <cylinderGeometry args={[0.2, 0.3, 0.2]} />
                <meshStandardMaterial color="orange" />
            </mesh>
            {/* Arm 1 */}
            <mesh position={[0, 0.5, 0]} rotation={[0, 0, 0.3]}>
                <boxGeometry args={[0.1, 0.8, 0.1]} />
                <meshStandardMaterial color="#ffa726" />
            </mesh>
            {/* Arm 2 */}
            <mesh position={[0.2, 0.9, 0]} rotation={[0, 0, -0.6]}>
                <boxGeometry args={[0.1, 0.6, 0.1]} />
                <meshStandardMaterial color="#ffa726" />
            </mesh>
            {/* Claw */}
            <mesh position={[0.4, 1.1, 0]}>
                <sphereGeometry args={[0.1]} />
                <meshStandardMaterial color="black" />
            </mesh>
        </group>
    )
}

export function Partition({ width = 4, height = 2.5, type = 'glass', position = [0, 0, 0], rotation = [0, 0, 0] }) {
    let material = <meshStandardMaterial color="#b3e5fc" transparent opacity={0.3} />
    if (type === 'wood') material = <meshStandardMaterial color="#8d6e63" />
    if (type === 'mesh') material = <meshStandardMaterial color="#424242" wireframe />

    return (
        <group position={position} rotation={rotation}>
            <mesh position={[0, height / 2, 0]}>
                <boxGeometry args={[width, height, 0.1]} />
                {material}
            </mesh>
            <mesh position={[0, height / 2, 0]}>
                <boxGeometry args={[width + 0.1, height + 0.1, 0.05]} />
                <meshStandardMaterial color="#424242" wireframe />
            </mesh>
        </group>
    )
}

export function Signage({ text, position = [0, 0, 0], color = "#1565c0" }) {
    return (
        <group position={position}>
            {/* Pole */}
            <mesh position={[0, -0.5, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 1]} />
                <meshStandardMaterial color="#bdbdbd" />
            </mesh>
            {/* Board */}
            <mesh position={[0, 0.2, 0]}>
                <boxGeometry args={[1.5, 0.6, 0.1]} />
                <meshStandardMaterial color="white" />
            </mesh>
            {/* Icon/Text */}
            <mesh position={[0, 0.2, 0.06]}>
                <planeGeometry args={[1.3, 0.4]} />
                <meshStandardMaterial color={color} />
            </mesh>
            {/* Simple geometric icon representation */}
            <mesh position={[0, 0.2, 0.07]}>
                <sphereGeometry args={[0.15]} />
                <meshBasicMaterial color="white" />
            </mesh>
        </group>
    )
}
