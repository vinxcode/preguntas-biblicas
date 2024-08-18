'use client'

import { useParams } from "next/navigation"

export default function Juego() {

    const { juego } = useParams()
    
    return (
        <div>{juego}</div>
    )
}
