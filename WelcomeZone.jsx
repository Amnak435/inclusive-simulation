import { EnclosedRoom, Hologram, HolographicSlide } from '../World/Architecture'
import { Text } from '@react-three/drei'
import founderImg from '../../assets/founder_portrait.png'
import slideLogo from '../../assets/slide_logo.png'
import slideIntro from '../../assets/slide_intro.png'
import slideOverview from '../../assets/slide_overview.png'
import slideFounder from '../../assets/slide_founder.png'

export default function WelcomeZone() {
    return (
        <EnclosedRoom width={12} depth={12} height={5}>
            {/* 1. Founder Hologram (Center) */}
            <group position={[0, 1.5, -2]}>
                <Hologram imageUrl={founderImg} position={[0, 0.5, 0]} scale={[2, 2.5]} />
                <Text position={[0, 2, 0]} fontSize={0.3} color="#00e5ff" anchorY="bottom">
                    Amna Khurram | Founder
                </Text>
            </group>

            {/* 2. Floating Slides (Orbiting) */}
            {/* Slide 1: Who We Are */}
            <HolographicSlide url={slideLogo} position={[-3.5, 2, 0]} rotation={[0, 0.5, 0]} />

            {/* Slide 2: Mission */}
            <HolographicSlide url={slideIntro} position={[3.5, 2, 0]} rotation={[0, -0.5, 0]} />

            {/* Slide 3: Overview */}
            <HolographicSlide url={slideOverview} position={[-2.5, 3.5, -4]} rotation={[0.2, 0, 0]} />

            {/* Slide 4: Founder Detail */}
            <HolographicSlide url={slideFounder} position={[2.5, 3.5, -4]} rotation={[0.2, 0, 0]} />

            {/* Welcome Text */}
            <group position={[0, 0.2, 3]}>
                <Text rotation={[-Math.PI / 2, 0, 0]} fontSize={0.5} color="#455a64">
                    Welcome to Amnaman Project
                </Text>
            </group>

        </EnclosedRoom>
    )
}
