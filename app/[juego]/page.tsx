'use client'

import { useParams } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import { useState, useEffect } from "react"

type Deck = {
    id_deck: number,
    nombre_deck: string
}

type Dificultad = {
    id_dificultad: number,
    nombre_dificultad: string
}

type Pregunta = {
    id_pregunta: number,
    pregunta: string,
    respuesta: string,
    deck: Deck,
    dificultad: Dificultad
}
export default function Juego() {

    const supabase = createClient()
    const { juego } = useParams()
    const [preguntas, setPreguntas] = useState<Pregunta[]>([])

    useEffect(() => {
        const getPreguntas = async () => {
            const { data, error } = await supabase
                .from('preguntas')
                .select(`
                id_pregunta,
                pregunta,
                respuesta,
                deck (
                    id_deck,
                    nombre_deck
                ),
                dificultad (
                    id_dificultad,
                    nombre_dificultad
                )
            `)
            .eq('deck', juego)
            
            if (error) {
                console.error('Error fetching preguntas:', error);
            } else if (data) {
                setPreguntas(data as any);
            } else {
                console.error('No data found');
            }
        }

        getPreguntas()
    }, [supabase])



    return (
        <div>
            <p>{juego}</p>
            <p>{JSON.stringify(preguntas)}</p>
        </div>

    )
}
