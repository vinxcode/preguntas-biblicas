'use client'

import { useParams } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import { useState, useEffect } from "react"
import Pregunta from "./Pregunta"
import { useStore } from '@/app/store/useStore'

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
    const isPreguntaModalOpen = useStore((state) => state.isPreguntaModalOpen)
    const updateIsPreguntaModalOpen = useStore((state) => state.updateIsPreguntaModalOpen)

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
        <div className="w-full h-screen border-2  flex flex-col items-center">
            
            <div className="grid grid-cols-8 w-full gap-2 mt-10">
                {
                    preguntas.map(pregunta => (
                        <Pregunta key={pregunta.id_pregunta}
                            id_pregunta={pregunta.id_pregunta}
                        />
                    ))
                }
            </div>

        {
            isPreguntaModalOpen && (
                <div className="absolute bg-white-bg shadow-lg p-4  flex flex-col z-10 rounded-lg w-96 mx-auto">
                    <p className="text-black">MODAL</p>
                    <button onClick={() => updateIsPreguntaModalOpen(false)}
                    className="bg-red-1 py-3 rounded-lg w-full text-white">Close modal</button>
                </div>
            )
        }
        </div>

    )
}
