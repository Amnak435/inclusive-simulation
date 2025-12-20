import React from 'react'
import Desk from './Desk'
import Avatar from './Avatar'

export default function Classroom({ rows = 3, cols = 3, spacing = [2.5, 3] }) {
    const desks = []

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const x = (c - (cols - 1) / 2) * spacing[0]
            const z = (r - (rows - 1) / 2) * spacing[1]

            // Randomize student presence and color
            const hasStudent = Math.random() > 0.3
            const studentColor = `hsl(${Math.random() * 360}, 50%, 50%)`

            desks.push(
                <group key={`${r}-${c}`} position={[x, 0, z]}>
                    <Desk />
                    {hasStudent && <Avatar position={[0, 0, 0.6]} color={studentColor} isSeated />}
                </group>
            )
        }
    }

    return (
        <group>
            {desks}
        </group>
    )
}
