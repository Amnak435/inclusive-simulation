import { Text } from '@react-three/drei'
import Classroom from '../World/Classroom'
import Avatar from '../World/Avatar'
import { EnclosedRoom, CeilingFan } from '../World/Architecture'

export default function AssessmentZone() {
    return (
        <EnclosedRoom width={14} depth={16} height={5}>
            <CeilingFan position={[0, 4.5, 0]} />
            <CeilingFan position={[4, 4.5, 0]} />
            <CeilingFan position={[-4, 4.5, 0]} />

            <Text position={[0, 3, -7]} fontSize={0.6} color="#333" anchorX="center">
                Pillar 1: Education & Exam Hall
            </Text>

            {/* Exam Hall Grid - Large group of students taking exams */}
            <group position={[0, 0, 1]}>
                <Classroom rows={4} cols={4} spacing={[2.5, 3]} />
            </group>

            {/* Invigilators / Judges pacing the aisles */}
            <group position={[3.5, 0, 1]}>
                <Avatar position={[0, 0, 0]} color="#d32f2f" /> {/* Judge Red */}
                <Text position={[0, 2.2, 0]} fontSize={0.2} color="#d32f2f">Examiner</Text>
            </group>

            <group position={[-3.5, 0, 3]}>
                <Avatar position={[0, 0, 0]} color="#d32f2f" />
            </group>

            {/* Info Boards */}
            <group position={[-6, 2, 0]} rotation={[0, 0.5, 0]}>
                <mesh castShadow>
                    <boxGeometry args={[0.2, 2, 3]} />
                    <meshStandardMaterial color="#fafafa" />
                </mesh>
                <Text position={[0.11, 0, 0]} rotation={[0, Math.PI / 2, 0]} fontSize={0.2} color="black">
                    Exam Rules: No Talking
                </Text>
            </group>
        </EnclosedRoom>
    )
}
