import React from 'react'

// --- Finishing School Assets ---
export function Sink({ position = [0, 0, 0] }) {
    return (
        <group position={position}>
            <mesh position={[0, 0.8, 0]}>
                <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
                <meshStandardMaterial color="white" />
            </mesh>
            <mesh position={[0, 0.4, 0]}>
                <cylinderGeometry args={[0.05, 0.8, 0.05]} />
                <meshStandardMaterial color="silver" />
            </mesh>
            {/* Mirror */}
            <mesh position={[0, 1.4, -0.2]}>
                <boxGeometry args={[0.6, 0.8, 0.05]} />
                <meshStandardMaterial color="#e3f2fd" roughness={0.1} />
            </mesh>
        </group>
    )
}

export function Wardrobe({ position = [0, 0, 0] }) {
    return (
        <mesh position={position} castShadow>
            <boxGeometry args={[1, 2, 0.6]} />
            <meshStandardMaterial color="#8d6e63" />
            {/* Door detail */}
            <mesh position={[0, 0, 0.31]}>
                <planeGeometry args={[0.05, 0.4]} />
                <meshBasicMaterial color="#3e2723" />
            </mesh>
        </mesh>
    )
}

// --- Finance Assets ---
export function ATM({ position = [0, 0, 0] }) {
    return (
        <group position={position}>
            <mesh position={[0, 1, 0]}>
                <boxGeometry args={[0.8, 2, 0.8]} />
                <meshStandardMaterial color="#555" />
            </mesh>
            <mesh position={[0, 1.4, 0.41]}>
                <planeGeometry args={[0.5, 0.4]} />
                <meshBasicMaterial color="#00e676" />
            </mesh>
            <mesh position={[0, 1, 0.41]}>
                <boxGeometry args={[0.6, 0.1, 0.1]} />
                <meshStandardMaterial color="#111" />
            </mesh>
        </group>
    )
}

export function BankCounter({ position = [0, 0, 0] }) {
    return (
        <group position={position}>
            {/* Desk */}
            <mesh position={[0, 0.5, 0]}>
                <boxGeometry args={[3, 1, 1]} />
                <meshStandardMaterial color="#fff" />
            </mesh>
            {/* Glass Divider */}
            <mesh position={[0, 1.3, 0]}>
                <boxGeometry args={[2.8, 0.6, 0.05]} />
                <meshStandardMaterial color="#e0f7fa" transparent opacity={0.6} />
            </mesh>
        </group>
    )
}

// --- Social / Finishing School Assets ---
export function DiningSet({ position = [0, 0, 0] }) {
    return (
        <group position={position}>
            {/* Table */}
            <mesh position={[0, 0.4, 0]}>
                <boxGeometry args={[1.5, 0.05, 1.5]} />
                <meshStandardMaterial color="#8d6e63" />
            </mesh>
            <mesh position={[0, 0.2, 0]}>
                <cylinderGeometry args={[0.1, 0.1, 0.4]} />
                <meshStandardMaterial color="#5d4037" />
            </mesh>
            {/* Plates */}
            <mesh position={[0.4, 0.43, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <circleGeometry args={[0.2, 32]} />
                <meshStandardMaterial color="white" />
            </mesh>
            <mesh position={[-0.4, 0.43, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <circleGeometry args={[0.2, 32]} />
                <meshStandardMaterial color="white" />
            </mesh>
        </group>
    )
}

export function EmotionBoard({ position = [0, 0, 0] }) {
    return (
        <group position={position}>
            <mesh position={[0, 1.5, 0]}>
                <boxGeometry args={[2, 1.2, 0.1]} />
                <meshStandardMaterial color="#fff9c4" />
            </mesh>
            {/* Icons simulated by colored circles */}
            <mesh position={[-0.5, 1.5, 0.06]}>
                <circleGeometry args={[0.2, 32]} />
                <meshBasicMaterial color="#ffeb3b" /> {/* Happy */}
            </mesh>
            <mesh position={[0.5, 1.5, 0.06]}>
                <circleGeometry args={[0.2, 32]} />
                <meshBasicMaterial color="#f44336" /> {/* Angry */}
            </mesh>
        </group>
    )
}

// --- Financial / Living Assets ---
export function BudgetDesk({ position = [0, 0, 0] }) {
    return (
        <group position={position}>
            <mesh position={[0, 0.5, 0]}>
                <boxGeometry args={[1.2, 0.8, 0.8]} />
                <meshStandardMaterial color="#bdbdbd" />
            </mesh>
            {/* Calculator */}
            <mesh position={[0.3, 0.91, 0.1]}>
                <boxGeometry args={[0.2, 0.05, 0.3]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            {/* Papers */}
            <mesh position={[-0.2, 0.91, 0]} rotation={[0, 0.2, 0]}>
                <planeGeometry args={[0.3, 0.4]} />
                <meshStandardMaterial color="white" side={2} />
            </mesh>
        </group>
    )
}

export function DocumentBoard({ position = [0, 0, 0] }) {
    return (
        <group position={position}>
            <mesh position={[0, 1.5, 0]}>
                <boxGeometry args={[2.5, 1.5, 0.1]} />
                <meshStandardMaterial color="#cfd8dc" />
            </mesh>
            {/* ID Card */}
            <mesh position={[-0.8, 1.5, 0.06]}>
                <planeGeometry args={[0.4, 0.25]} />
                <meshBasicMaterial color="#90caf9" />
            </mesh>
            {/* Passport */}
            <mesh position={[-0.2, 1.5, 0.06]}>
                <planeGeometry args={[0.3, 0.4]} />
                <meshBasicMaterial color="#1b5e20" />
            </mesh>
            {/* Bill */}
            <mesh position={[0.6, 1.5, 0.06]}>
                <planeGeometry args={[0.4, 0.6]} />
                <meshBasicMaterial color="white" />
            </mesh>
        </group>
    )
}

// --- Employment / Industry Assets ---
export function OfficeDesk({ position = [0, 0, 0] }) {
    return (
        <group position={position}>
            <mesh position={[0, 0.5, 0]}>
                <boxGeometry args={[1.4, 0.05, 0.7]} />
                <meshStandardMaterial color="white" />
            </mesh>
            {/* Legs */}
            <mesh position={[-0.65, 0.25, 0.3]}>
                <boxGeometry args={[0.05, 0.5, 0.05]} />
                <meshStandardMaterial color="#999" />
            </mesh>
            <mesh position={[0.65, 0.25, -0.3]}>
                <boxGeometry args={[0.05, 0.5, 0.05]} />
                <meshStandardMaterial color="#999" />
            </mesh>
            <mesh position={[-0.65, 0.25, -0.3]}>
                <boxGeometry args={[0.05, 0.5, 0.05]} />
                <meshStandardMaterial color="#999" />
            </mesh>
            <mesh position={[0.65, 0.25, 0.3]}>
                <boxGeometry args={[0.05, 0.5, 0.05]} />
                <meshStandardMaterial color="#999" />
            </mesh>
            {/* Laptop */}
            <mesh position={[0, 0.55, 0]}>
                <boxGeometry args={[0.4, 0.02, 0.3]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            <mesh position={[0, 0.7, -0.15]} rotation={[0.2, 0, 0]}>
                <boxGeometry args={[0.4, 0.3, 0.02]} />
                <meshStandardMaterial color="#111" />
            </mesh>
        </group>
    )
}

export function BakeryCounter({ position = [0, 0, 0] }) {
    return (
        <group position={position}>
            <mesh position={[0, 0.6, 0]}>
                <boxGeometry args={[2, 1.2, 0.8]} />
                <meshStandardMaterial color="#8d6e63" />
            </mesh>
            {/* Glass Display */}
            <mesh position={[0, 1.2, 0.2]}>
                <boxGeometry args={[1.8, 0.6, 0.4]} />
                <meshStandardMaterial color="#e0f7fa" transparent opacity={0.4} />
            </mesh>
            {/* Pastries (Cylinders) */}
            <mesh position={[-0.5, 0.9, 0.2]}>
                <cylinderGeometry args={[0.1, 0.1, 0.05]} />
                <meshStandardMaterial color="#795548" />
            </mesh>
            <mesh position={[0.5, 0.9, 0.2]}>
                <cylinderGeometry args={[0.1, 0.1, 0.05]} />
                <meshStandardMaterial color="#d7ccc8" />
            </mesh>
        </group>
    )
}

export function MeetingTable({ position = [0, 0, 0] }) {
    return (
        <group position={position}>
            <mesh position={[0, 0.5, 0]}>
                <cylinderGeometry args={[1.5, 1.5, 0.05, 32]} />
                <meshStandardMaterial color="#212121" />
            </mesh>
            <mesh position={[0, 0.25, 0]}>
                <cylinderGeometry args={[0.4, 0.4, 0.5]} />
                <meshStandardMaterial color="#424242" />
            </mesh>
        </group>
    )
}
