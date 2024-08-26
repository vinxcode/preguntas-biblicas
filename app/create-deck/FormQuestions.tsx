import React from 'react'

export default function FormQuestions() {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold'>Agregar preguntas</h1>

            <div className='flex flex-col items-center gap-3 p-5 w-3/4 mx-auto rounded-lg border-4 border-blue mt-5'>
                <div className='flex flex-col w-full'>
                    <label htmlFor="mazo">Nombre del mazo</label>
                    <input type="text" name="mazo" id="mazo" placeholder='Ej. Profetas de la biblia'
                        className='py-2 px-5 rounded-lg border-4 border-blue'
                    />
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="descripcion">Descripcion</label>
                    <input type="text" name="descripcion" id="descripcion" placeholder='Ej. Acerca de los profetas menores de la biblia'
                        className='py-2 px-5 rounded-lg border-4 border-blue'
                    />
                </div>

                <button className='w-full bg-red-2 hover:bg-red-3 text-white py-3 rounded-lg font-semibold'
                >Agregar pregunta</button>
            </div>
        </div>
    )
}
