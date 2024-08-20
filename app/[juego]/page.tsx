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
    const [isRespuesta, setIsRespuesta] = useState(false)

    const isPreguntaModalOpen = useStore((state) => state.isPreguntaModalOpen)
    const preguntaModal = useStore((state) => state.preguntaModal)
    const updateIsPreguntaModalOpen = useStore((state) => state.updateIsPreguntaModalOpen)
    const currentDeck = useStore((state) => state.currentDeck)

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

    const handleCloseModal = () => {
        updateIsPreguntaModalOpen(false)
        setIsRespuesta(false)
    }

    return (
        <div className="w-full flex flex-col items-center bg-white-bg rounded-xl shadow-xl p-5 mt-10">
            <h1 className="text-5xl mt-5 font-tilt font-bold text-blue">{currentDeck}</h1>
            <div className='bg-red-3 rounded-full w-3/5 h-5 my-2'></div>

            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 w-full gap-2 mt-10 p-4">
                {
                    preguntas.map((pregunta, index) => (
                        <Pregunta key={pregunta.id_pregunta}
                            id_pregunta={index + 1}
                        />
                    ))
                }
            </div>

            {
                isPreguntaModalOpen && (
                    <div className="w-full h-screen flex justify-center items-center bg-red-mixed absolute top-0 z-9">
                        <div className="absolute bg-white-bg shadow-lg p-7 w-full flex flex-col gap-2 z-10 rounded-lg  md:w-[766px]  font-tilt items-center">
                            <p className="text-black underline underline-offset-4">Pregunta numero {preguntaModal}</p>
                            <p className="text-black text-3xl">{preguntas[preguntaModal - 1].pregunta}</p>
                            {
                                isRespuesta ? (
                                    <p className="text-red-1 text-3xl">{preguntas[preguntaModal - 1].respuesta}</p>
                                ) : (
                                    <button className="bg-blue py-3 rounded-lg w-full text-white"
                                        onClick={() => setIsRespuesta(true)}>Mostrar respuesta</button>
                                )
                            }
                            <button onClick={handleCloseModal}
                                className="bg-red-1 py-3 rounded-lg w-full text-white">CERRAR</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
