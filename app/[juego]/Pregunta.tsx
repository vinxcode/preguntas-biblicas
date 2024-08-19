import React from 'react'

type PreguntaProps = {
    id_pregunta: number
}

export default function Pregunta(props: PreguntaProps) {
const handleSelect = (idPregunta: number) => {

}

    return (
        <article className="bg-red-3 flex justify-center items-center font-tilt py-10 rounded-xl shadow-lg border-4 border-blue hover:bg-red-2 cursor-pointer"
        onClick={() => handleSelect(props.id_pregunta)}>
            
            <p className="text-white text-3xl">{props.id_pregunta}</p>
        </article>
    )
}
