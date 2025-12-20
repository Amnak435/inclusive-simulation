import { OrbitControls, Environment } from '@react-three/drei'
import { useRoute } from 'wouter'

// Placeholder Zones
import WelcomeZone from '../Zones/WelcomeZone'
import AssessmentZone from '../Zones/AssessmentZone'
import SkillsZone from '../Zones/SkillsZone'
import SocialZone from '../Zones/SocialZone'
import LivingZone from '../Zones/LivingZone'
import EmploymentZone from '../Zones/EmploymentZone'

export default function Experience() {
    // Wouter hook doesn't work directly inside Canvas if Router is outside? 
    // Wait, wouter's useLocation/useRoute relies on Context. 
    // If App renders UIOverlay (outside) and Canvas (inside), they share the same window location, so it should work.

    const [matchWelcome] = useRoute('/')
    const [matchAssessment] = useRoute('/assessment')
    const [matchSkills] = useRoute('/skills')
    const [matchSocial] = useRoute('/social')
    const [matchLiving] = useRoute('/living')
    const [matchEmployment] = useRoute('/employment')

    return (
        <>
            <OrbitControls makeDefault position={[10, 12, 12]} target={[0, 0, 0]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
            <Environment preset="city" />

            {/* DEBUG CUBE - IF YOU SEE THIS, CANVAS IS WORKING */}
            <mesh position={[0, 5, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="red" />
            </mesh>

            {matchWelcome && <WelcomeZone />}
            {matchAssessment && <AssessmentZone />}
            {matchSkills && <SkillsZone />}
            {matchSocial && <SocialZone />}
            {matchLiving && <LivingZone />}
            {matchEmployment && <EmploymentZone />}
        </>
    )
}
