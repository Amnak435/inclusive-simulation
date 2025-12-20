import { Text, Float } from '@react-three/drei'
import Avatar from '../World/Avatar'
import { Sink, Wardrobe, DiningSet, EmotionBoard } from '../World/LifeSkillsAssets'
import { EnclosedRoom, CeilingFan } from '../World/Architecture'
import * as THREE from 'three'

export default function SocialZone() {
    return (
        <EnclosedRoom width={18} depth={12} height={5} wallColor="#f5f5f5" floorColor="#e0e0e0">
            <CeilingFan position={[0, 4.5, 0]} />
            <CeilingFan position={[5, 4.5, 0]} />
            <CeilingFan position={[-5, 4.5, 0]} />

            {/* Visual Explanation Floating Text */}
            <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
                <group position={[0, 3.8, -4]}>
                    <mesh position={[0, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                        <coneGeometry args={[0.2, 1, 32]} />
                        <meshStandardMaterial color="#8bc34a" />
                    </mesh>
                    <mesh position={[1, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                        <cylinderGeometry args={[0.1, 0.1, 2]} />
                        <meshStandardMaterial color="#8bc34a" />
                    </mesh>

                    <mesh position={[0, 1.2, 0]}>
                        <planeGeometry args={[10, 2]} />
                        <meshStandardMaterial color="#fafafa" transparent opacity={0.9} />
                        <lineSegments>
                            <edgesGeometry args={[new THREE.PlaneGeometry(10, 2)]} />
                            <lineBasicMaterial color="#8bc34a" />
                        </lineSegments>
                    </mesh>
                    <Text position={[0, 1.3, 0.1]} fontSize={0.25} color="#333" maxWidth={9} textAlign="center">
                        FINISHING SCHOOL: Developing personal hygiene, social manners, and emotional understanding.
                    </Text>
                    <Text position={[0, 0.8, 0.1]} fontSize={0.25} color="#558b2f" maxWidth={9} textAlign="center">
                        Supporting independence and social inclusion.
                    </Text>
                </group>
            </Float>


            <Text position={[0, 3, -5]} fontSize={0.5} color="#333" anchorX="center">
                Pillar 3: Finishing School & Independent Living
            </Text>

            {/* 1. Hygiene Station (Left) */}
            <group position={[-6, 0, -2]}>
                <Text position={[0, 2.5, 0]} fontSize={0.3} color="#00796b">Hygiene Station</Text>
                <Sink position={[-1, 0, 0]} />
                <Sink position={[1, 0, 0]} />
                <Avatar position={[0, 0, 1.5]} color="#4dba6c" />
            </group>

            {/* 2. Dressing & Grooming (Left Front) */}
            <group position={[-6, 0, 3]}>
                <Text position={[0, 3, 0]} fontSize={0.3} color="#5d4037">Grooming & Style</Text>
                <Wardrobe position={[-1.5, 1, 0]} />
                <Wardrobe position={[1.5, 1, 0]} />
                <Avatar position={[0, 0, 2]} color="#d7ccc8" />
            </group>

            {/* 3. Table Manners (Right) */}
            <group position={[5, 0, 0]}>
                <Text position={[0, 3, -1]} fontSize={0.3} color="#ad1457">Table Manners</Text>
                <DiningSet position={[0, 0.6, 1]} />
                <Avatar position={[0, 0, 2.2]} color="#e91e63" isSeated />
                <Avatar position={[-1.2, 0, 1]} color="#e91e63" isSeated rotation={[0, -Math.PI / 2, 0]} />
                <Avatar position={[1.5, 0, 1]} color="#1a237e" /> {/* Teacher */}
            </group>

            {/* 4. Social Cues (Center Back) */}
            <group position={[0, 0, 1]}>
                <Text position={[0, 3, 0]} fontSize={0.3} color="#f57f17">Social Cues</Text>
                <EmotionBoard position={[0, 0.5, -2]} />
                {/* Roleplay Avatars */}
                <Avatar position={[-1, 0, 1]} color="#ffecb3" rotation={[0, Math.PI / 2, 0]} />
                <Avatar position={[1, 0, 1]} color="#b2dfdb" rotation={[0, -Math.PI / 2, 0]} />
            </group>
        </EnclosedRoom>
    )
}
