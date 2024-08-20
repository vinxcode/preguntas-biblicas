import { useState } from 'react'
import { useStore } from '@/app/store/useStore'

type PreguntaProps = {
    id_pregunta: number,
    // isPreguntaCompleted: boolean
}

export default function Pregunta(props: PreguntaProps) {

    const isPreguntaModalOpen = useStore((state) => state.isPreguntaModalOpen)
    const updateIsPreguntaModalOpen = useStore((state) => state.updateIsPreguntaModalOpen)
    const updatePreguntaModal = useStore((state) => state.updatePreguntaModal)
    const [isPreguntaCompleted, setIsPreguntaCompleted] = useState(false)

    const handleSelect = (idPregunta: number) => {
        updateIsPreguntaModalOpen(true)
        updatePreguntaModal(props.id_pregunta)
        setIsPreguntaCompleted(true)
    }

    return (
        <article className={`${ !isPreguntaCompleted ? 'bg-red-3' : 'bg-blue'} flex justify-center items-center font-tilt py-10 rounded-xl shadow-lg border-4 border-blue hover:bg-red-2 cursor-pointer`}
            onClick={() => handleSelect(props.id_pregunta)}>
            {
                !isPreguntaCompleted ? (
                    <p className="text-white text-3xl">{props.id_pregunta}</p>
                ) : (
                    <span className="icon-[ic--sharp-done-outline] text-4xl text-white"></span>
                )
            }
        </article>
    )
}
