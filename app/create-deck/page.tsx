'use client'

import { useState } from 'react'

export default function CreateDeck() {

    const [deck, setDeck] = useState({ nombre_deck: "", descripcion_deck: "", numero_preguntas: 10 })

    const handleSuma = (quantity: number) => {
        ((deck.numero_preguntas === 0) && (quantity === -1)) ? 
        alert('El numero debe ser positvo') : 
        setDeck({ nombre_deck: deck.nombre_deck, descripcion_deck: deck.descripcion_deck, numero_preguntas: deck.numero_preguntas + quantity})
    }

    return (
        <section className=' bg-white-bg w-full mt-0 h-screen rounded-b-xl p-10 font-league'>
            <h1 className='text-center text-3xl font-bold'>Crear un nuevo mazo</h1>

            <div className='flex flex-col items-center gap-3 p-5 w-[400px] mx-auto rounded-lg border-4 border-blue mt-5'>
                <div className='flex flex-col w-full'>
                    <label htmlFor="mazo">Nombre del mazo</label>
                    <input type="text" name="mazo" id="mazo" value={deck.nombre_deck} placeholder='Ej. Profetas de la biblia'
                        className='py-2 px-5 rounded-lg border-4 border-blue' />
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="descripcion">Descripcion</label>
                    <input type="text" name="descripcion" id="descripcion" value={deck.descripcion_deck} placeholder='Ej. Acerca de los profetas menores de la biblia'
                        className='py-2 px-5 rounded-lg border-4 border-blue' />
                </div>
                <div className='flex flex-col w-full'>
                    <label>Numero de preguntas</label>
                    <div className='flex justify-center items-center gap-4'>
                        <button className='bg-red-2 px-3 py-1 text-white rounded-full font-semibold text-2xl'
                        onClick={() => handleSuma(-1)}>-</button>
                        <p className='font-semibold'>{deck.numero_preguntas}</p>
                        <button className='bg-red-2 px-3 py-1 text-white rounded-full font-semibold text-2xl'
                        onClick={() => handleSuma(1)}>+</button>
                    </div>
                </div>
                <button className='w-full bg-red-2 hover:bg-red-3 text-white py-3 rounded-lg font-semibold'>Crear mazo</button>
            </div>

        </section>
    )
}
