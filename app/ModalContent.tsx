import React from 'react'

export default function ModalContent() {
    return (
        <div className="flex flex-col gap-3 w-full">
            <h1 className='font-bold text-center text-2xl'>Instrucciones</h1>
            <p>Lo primero que debes saber es que es un juego de dos equipos, el uno contra el otro.</p>
            <p>Debes escoger un mazo de la colección.
            Luego cada equipo contestará una pregunta y luego el otro equipo hasta que se acaben las preguntas
            </p>
            <p>En caso de que necesites un mazo personalizado puedes crear uno nuevo </p>
        </div>
    )
}
