import { Text, Float } from '@react-three/drei'
import * as THREE from 'three'
import Classroom from '../World/Classroom'
import Avatar from '../World/Avatar'
import { KitchenUnit, RobotArm, Partition, Signage } from '../World/LabAssets'
import { EnclosedRoom, CeilingFan } from '../World/Architecture'

export default function SkillsZone() {
    return (
        <EnclosedRoom width={20} depth={14} height={6} wallColor="#616161" floorColor="#e0e0e0" windowColor="#b3e5fc">
            <CeilingFan position={[0, 5.5, 0]} />
            <CeilingFan position={[6, 5.5, 0]} />
            <CeilingFan position={[-6, 5.5, 0]} />

            {/* Visual Explanation Floating Text */}
            <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
                <group position={[0, 4, -4]}>
                    {/* Arrow Body */}
                    <mesh position={[0, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                        <coneGeometry args={[0.2, 1, 32]} />
                        <meshStandardMaterial color="#ff9800" />
                    </mesh>
                    <mesh position={[1, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                        <cylinderGeometry args={[0.1, 0.1, 2]} />
                        <meshStandardMaterial color="#ff9800" />
                    </mesh>

                    {/* Text Box */}
                    <mesh position={[0, 1.2, 0]}>
                        <planeGeometry args={[10, 2]} />
                        <meshStandardMaterial color="#fafafa" transparent opacity={0.9} />
                        <lineSegments>
                            <edgesGeometry args={[new THREE.PlaneGeometry(10, 2)]} />
                            <lineBasicMaterial color="#ff9800" />
                        </lineSegments>
                    </mesh>
                    <Text position={[0, 1.5, 0.1]} fontSize={0.25} color="#333" maxWidth={9} textAlign="center">
                        SKILLS LAB: Integrated vocational training in Tech, Robotics, and Culinary Arts.
                    </Text>
                    <Text position={[0, 1, 0.1]} fontSize={0.25} color="#d84315" maxWidth={9} textAlign="center">
                        OUTCOME: Empowering students with practical skills for future employment and independence.
                    </Text>
                </group>
            </Float>

            {/* 1. Digital & Tech Lab (Left) */}
            <group position={[-6.5, 0, 0]}>
                <Signage text="Tech" position={[-2, 0, 4]} color="#1565c0" />
                <Text position={[0, 3, -2]} fontSize={0.4} color="#1565c0">Digital & Tech Lab</Text>

                {/* Flooring Override (Visual Only - Darker Tiles) */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
                    <planeGeometry args={[6, 12]} />
                    <meshStandardMaterial color="#cfd8dc" />
                </mesh>

                <Classroom rows={2} cols={2} spacing={[2.5, 2.5]} />
                <Avatar position={[2, 0, 2]} color="#1976d2" /> {/* Tech Instructor */}
                <Text position={[2, 2.2, 2]} fontSize={0.2} color="#1976d2">Instructor</Text>
            </group>
            <Partition position={[-3.2, 0, 0]} width={0.2} height={3} type="glass" />


            {/* 2. Robotics & Machinery (Center) */}
            <group position={[0, 0, 2]}>
                <Text position={[0, 3, -2]} fontSize={0.4} color="#e65100">Robotics Zone</Text>

                {/* Flooring Override (Industrial Concrete) */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
                    <planeGeometry args={[6, 10]} />
                    <meshStandardMaterial color="#9e9e9e" />
                </mesh>

                <group position={[-1.5, 0, 1]}>
                    <mesh position={[0, 0.5, 0]}>
                        <boxGeometry args={[2, 1, 1]} />
                        <meshStandardMaterial color="#424242" />
                    </mesh>
                    <RobotArm position={[0, 1, 0]} />
                </group>

                <group position={[1.5, 0, -1]}>
                    <mesh position={[0, 0.5, 0]}>
                        <boxGeometry args={[2, 1, 1]} />
                        <meshStandardMaterial color="#424242" />
                    </mesh>
                    <RobotArm position={[0, 1, 0]} />
                </group>

                <Avatar position={[0, 0, 2]} color="#f57c00" /> {/* Robotics Instructor */}
                <Text position={[0, 2.2, 2]} fontSize={0.2} color="#f57c00">Trainer</Text>
            </group>
            <Partition position={[3.2, 0, 0]} width={0.2} height={3} type="mesh" />


            {/* 3. Culinary Arts (Right) */}
            <group position={[6.5, 0, 0]}>
                <Signage text="Culinary" position={[2, 0, 4]} color="#2e7d32" />
                <Text position={[0, 3, -2]} fontSize={0.4} color="#2e7d32">Culinary Arts</Text>

                {/* Flooring Override (White Tiles) */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
                    <planeGeometry args={[6, 12]} />
                    <meshStandardMaterial color="#ffffff" />
                </mesh>

                <KitchenUnit position={[-1.5, 0, -1]} />
                <KitchenUnit position={[1.5, 0, 1]} />
                <KitchenUnit position={[0, 0, -3]} />

                <Avatar position={[0, 0, 2]} color="#ffffff" /> {/* Chef Instructor */}
                <Text position={[0, 2.2, 2]} fontSize={0.2} color="#333">Chef</Text>
            </group>
        </EnclosedRoom>
    )
}

