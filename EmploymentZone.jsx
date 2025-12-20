import { Text, Float } from '@react-three/drei'
import { EnclosedRoom, CeilingFan } from '../World/Architecture'
import { Partition, RobotArm, KitchenUnit } from '../World/LabAssets'
import { OfficeDesk, BakeryCounter, MeetingTable } from '../World/LifeSkillsAssets'
import Avatar from '../World/Avatar'
import * as THREE from 'three'

export default function EmploymentZone() {
    return (
        <EnclosedRoom width={22} depth={22} height={6} wallColor="#616161" floorColor="#e0e0e0">
            {/* Ceiling Fans for large hall */}
            <CeilingFan position={[5, 5, 5]} />
            <CeilingFan position={[-5, 5, 5]} />
            <CeilingFan position={[5, 5, -5]} />
            <CeilingFan position={[-5, 5, -5]} />

            {/* Visual Explanation Floating Text */}
            <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
                <group position={[0, 4.5, -9]}>
                    <mesh position={[0, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                        <coneGeometry args={[0.2, 1, 32]} />
                        <meshStandardMaterial color="#ff9800" />
                    </mesh>
                    <mesh position={[1, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                        <cylinderGeometry args={[0.1, 0.1, 2]} />
                        <meshStandardMaterial color="#ff9800" />
                    </mesh>

                    <mesh position={[0, 1.2, 0]}>
                        <planeGeometry args={[14, 2]} />
                        <meshStandardMaterial color="#fff3e0" transparent opacity={0.9} />
                        <lineSegments>
                            <edgesGeometry args={[new THREE.PlaneGeometry(14, 2)]} />
                            <lineBasicMaterial color="#ff9800" />
                        </lineSegments>
                    </mesh>
                    <Text position={[0, 1.3, 0.1]} fontSize={0.3} color="#333" maxWidth={13} textAlign="center">
                        EMPLOYMENT INTEGRATION: From Freelancing & Baking to Industry & Corporate Placement.
                    </Text>
                    <Text position={[0, 0.8, 0.1]} fontSize={0.25} color="#e65100" maxWidth={13} textAlign="center">
                        Real-world pathways to income, dignity, and independence.
                    </Text>
                </group>
            </Float>


            {/* --- Central Partitions (Avoiding simple cross for accessibility, leaving a central corridor) --- */}
            <Partition position={[0, 0, -5]} width={22} height={3} type="glass" />
            <Partition position={[0, 0, 5]} width={22} height={3} type="glass" />
            <Partition position={[-4, 0, 0]} width={0.2} height={3} rotation={[0, Math.PI / 2, 0]} type="glass" />
            <Partition position={[4, 0, 0]} width={0.2} height={3} rotation={[0, Math.PI / 2, 0]} type="glass" />


            {/* --- Room 1: Freelance/Remote Office (Top Left) --- */}
            <group position={[-8, 0, -5.5]}>
                <Text position={[0, 3, -4]} fontSize={0.4} color="#1565c0">Freelance Hub</Text>
                {/* Floor Override */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial color="#cfd8dc" />
                </mesh>
                <OfficeDesk position={[-2, 0, -2]} />
                <OfficeDesk position={[2, 0, -2]} />
                <OfficeDesk position={[0, 0, 2]} />
                <Avatar position={[-2, 0, -1.3]} color="#1976d2" isSeated />
                <Avatar position={[0, 0, 0]} color="#0d47a1" /> {/* Mentor */}
            </group>

            {/* --- Room 2: Bakery & Cafe (Top Right) --- */}
            <group position={[8, 0, -5.5]}>
                <Text position={[0, 3, -4]} fontSize={0.4} color="#5d4037">Bakery & Cafe</Text>
                {/* Floor Override */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial color="#d7ccc8" />
                </mesh>
                <BakeryCounter position={[-2, 0, -2]} />
                <BakeryCounter position={[2, 0, -2]} />
                <KitchenUnit position={[0, 0, 3]} />
                <Avatar position={[0, 0, 1]} color="white" /> {/* Baker */}
                <Avatar position={[2, 0, -3.5]} color="orange" /> {/* Customer */}
            </group>

            {/* --- Room 3: Industry & Technical (Bottom Left) --- */}
            <group position={[-8, 0, 5.5]}>
                <Text position={[0, 3, 4]} fontSize={0.4} color="#e65100" rotation={[0, Math.PI, 0]}>Industry Lab</Text>
                {/* Floor Override */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial color="#616161" />
                </mesh>
                <mesh position={[-2, 0.5, 0]}>
                    <boxGeometry args={[2, 1, 1]} />
                    <meshStandardMaterial color="#424242" />
                </mesh>
                <RobotArm position={[-2, 1, 0]} />
                <mesh position={[2, 0.5, 0]}>
                    <boxGeometry args={[2, 1, 1]} />
                    <meshStandardMaterial color="#424242" />
                </mesh>
                <Avatar position={[0, 0, 0]} color="#f57c00" /> {/* Tech Lead */}
            </group>

            {/* --- Room 4: Corporate Placement (Bottom Right) --- */}
            <group position={[8, 0, 5.5]}>
                <Text position={[0, 3, 4]} fontSize={0.4} color="#37474f" rotation={[0, Math.PI, 0]}>Corporate Office</Text>
                {/* Floor Override */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial color="#37474f" />
                </mesh>
                <MeetingTable position={[0, 0, 0]} />
                <Avatar position={[0, 0, -1]} color="#263238" isSeated />
                <Avatar position={[-1, 0, 1]} color="#455a64" isSeated rotation={[0, Math.PI, 0]} />
                {/* Screen */}
                <mesh position={[0, 1.5, 4.8]} rotation={[0, Math.PI, 0]}>
                    <planeGeometry args={[3, 1.8]} />
                    <meshStandardMaterial color="black" />
                </mesh>
                <Text position={[0, 1.5, 4.75]} fontSize={0.2} color="white" rotation={[0, Math.PI, 0]}>
                    Placement Partners
                </Text>
            </group>
        </EnclosedRoom>
    )
}
