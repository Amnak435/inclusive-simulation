import { useLocation } from 'wouter'

export default function UIOverlay() {
    const [location, setLocation] = useLocation()

    const zones = [
        { id: '/', label: 'Welcome' },
        { id: '/assessment', label: 'Assessment' },
        { id: '/skills', label: 'Skills Lab' },
        { id: '/social', label: 'Social Zone' },
        { id: '/living', label: 'Daily Living' },
        { id: '/employment', label: 'Employment' },
    ]

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 10,
            pointerEvents: 'none', // Allow clicks to pass through to canvas
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '20px',
            boxSizing: 'border-box'
        }}>
            {/* Header */}
            <header style={{ pointerEvents: 'auto', background: 'rgba(255,255,255,0.8)', padding: '10px', borderRadius: '10px', color: '#000' }}>
                <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Inclusive Ecosystem Simulation</h1>
                <nav style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
                    {zones.map((zone) => (
                        <button
                            key={zone.id}
                            onClick={() => setLocation(zone.id)}
                            style={{
                                backgroundColor: location === zone.id ? '#4a90e2' : '#e0e0e0',
                                color: location === zone.id ? '#fff' : '#000'
                            }}
                        >
                            {zone.label}
                        </button>
                    ))}
                </nav>
            </header>

            {/* Footer / Instructions */}
            <footer style={{ pointerEvents: 'auto', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '10px', borderRadius: '10px', maxWidth: '400px' }}>
                <p>Current Zone: <strong>{zones.find(z => z.id === location)?.label || 'Unknown'}</strong></p>
                <div style={{ marginTop: '10px', display: 'flex', gap: '5px' }}>
                    <button style={{ fontSize: '0.8rem', padding: '5px' }} onClick={() => alert('High Contrast Mode Toggled (Prototype)')}>High Contrast</button>
                    <button style={{ fontSize: '0.8rem', padding: '5px' }} onClick={() => alert('Reduced Motion Toggled (Prototype)')}>Reduced Motion</button>
                </div>
                <p style={{ fontSize: '0.8rem', marginTop: '5px' }}>Use mouse to rotate view. Click on interactive elements.</p>
            </footer>
        </div>
    )
}

