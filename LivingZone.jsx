import { Text, Float } from '@react-three/drei'
import { ATM, BankCounter, BudgetDesk, DocumentBoard } from '../World/LifeSkillsAssets'
import Avatar from '../World/Avatar'
import { EnclosedRoom, CeilingFan } from '../World/Architecture'
import * as THREE from 'three'

export default function LivingZone() {
    return (
        <EnclosedRoom width={16} depth={12} height={5} wallColor="#eeeeee" floorColor="#ffffff">
            <CeilingFan position={[0, 4.5, 0]} />
            <CeilingFan position={[5, 4.5, 0]} />
            <CeilingFan position={[-5, 4.5, 0]} />

            {/* Visual Explanation Floating Text */}
            <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
                <group position={[0, 4, -4]}>
                    <mesh position={[0, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                        <coneGeometry args={[0.2, 1, 32]} />
                        <meshStandardMaterial color="#0288d1" />
                    </mesh>
                    <mesh position={[1, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                        <cylinderGeometry args={[0.1, 0.1, 2]} />
                        <meshStandardMaterial color="#0288d1" />
                    </mesh>

                    <mesh position={[0, 1.2, 0]}>
                        <planeGeometry args={[10, 2]} />
                        <meshStandardMaterial color="#e1f5fe" transparent opacity={0.9} />
                        <lineSegments>
                            <edgesGeometry args={[new THREE.PlaneGeometry(10, 2)]} />
                            <lineBasicMaterial color="#0288d1" />
                        </lineSegments>
                    </mesh>
                    <Text position={[0, 1.5, 0.1]} fontSize={0.25} color="#333" maxWidth={9} textAlign="center">
                        FINANCIAL INDEPENDENCE ZONE: Teaching banking, budgeting, and documentation.
                    </Text>
                    <Text position={[0, 1, 0.1]} fontSize={0.25} color="#01579b" maxWidth={9} textAlign="center">
                        Empowering students to live independently and manage their own lives.
                    </Text>
                </group>
            </Float>


            <Text position={[0, 3, -5]} fontSize={0.6} color="#333" anchorX="center">
                Pillar 4: Financial Independence Hub
            </Text>

            {/* 1. Bank Services (Center Back) */}
            <group position={[0, 0, -3]}>
                <BankCounter position={[0, 0, 0]} />
                <Text position={[0, 2, 0]} fontSize={0.3} color="#2e7d32">Bank Services</Text>
                <Avatar position={[0, 0, -1]} color="#263238" /> {/* Teller */}
                <Avatar position={[0, 0, 2]} color="orange" /> {/* Customer */}
            </group>

            {/* 2. ATM Station (Left) */}
            <group position={[-5, 0, 0]}>
                <ATM position={[0, 0, 0]} />
                <Text position={[0, 2.5, 0]} fontSize={0.3} color="#00c853">ATM & Cash</Text>
                <Avatar position={[1, 0, 1]} color="#ffcc80" />
            </group>

            {/* 3. Documentation (Right) */}
            <group position={[5, 0, -1]}>
                <DocumentBoard position={[0, 1, -1]} />
                <Text position={[0, 3.5, -1]} fontSize={0.3} color="#0277bd">Official Docs</Text>
                <BudgetDesk position={[0, 0, 1.5]} />
                <Avatar position={[0, 0, 2.2]} color="purple" isSeated />
            </group>

            {/* 4. Budget Planning (Right Front) */}
            <group position={[5, 0, 3]}>
                <Text position={[0, 2.5, 0]} fontSize={0.3} color="#4527a0">Budgeting</Text>
                <BudgetDesk position={[0, 0, 0]} />
                <Avatar position={[0, 0, 0.6]} color="#5e35b1" isSeated />
            </group>
        </EnclosedRoom>
    )
}
