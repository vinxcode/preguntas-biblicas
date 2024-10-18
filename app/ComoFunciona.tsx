import React from 'react'

export default function ComoFunciona() {
    return (
        <div className='flex flex-col gap-5 w-3/4 mx-auto mt-20 bg-white text-blue p-10 rounded-xl shadow-lg'>
            <h2 className='text-3xl font-black'>Como funciona Juego Biblico</h2>
            <div className='bg-red-1 rounded-full w-full h-2'></div>
            <article className='flex flex-col gap-2'>
                <p>Lo primero que debes saber es que es un juego de dos equipos, el uno contra el otro.</p>

                <p>Debes escoger un mazo de la colección. Luego cada equipo contestará una pregunta y luego el otro equipo hasta que se acaben las preguntas</p>

                <p>En caso de que necesites un mazo personalizado puedes crear uno nuevo</p>
            </article>
        </div>
    )
}
