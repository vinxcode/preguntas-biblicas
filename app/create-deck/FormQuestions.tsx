import React from 'react'
import ListOfQuestions from './ListOfQuestions'

type FormQuestionsProps = {
    idDeck: number
}

export default function FormQuestions({ idDeck }: FormQuestionsProps) {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold'>Agregar preguntas</h1>

            <div className='flex flex-col items-center gap-3 p-5 w-3/4 mx-auto rounded-lg border-4 border-blue mt-5'>
                <div className='flex flex-col w-full'>
                    <label htmlFor="mazo" className='text-left'>Pregunta</label>
                    <input type="text" name="mazo" id="mazo" placeholder='Ej. Profetas de la biblia'
                        className='py-2 px-5 rounded-lg border-4 border-blue'
                    />
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="descripcion" className='text-left'>Respuesta</label>
                    <input type="text" name="descripcion" id="descripcion" placeholder='Ej. Acerca de los profetas menores de la biblia'
                        className='py-2 px-5 rounded-lg border-4 border-blue'
                    />
                </div>

                <button className='w-full bg-red-2 hover:bg-red-3 text-white py-3 rounded-lg font-semibold'
                >Agregar pregunta</button>
            </div>

            <ListOfQuestions idDeck={idDeck}/>
        </div>
    )
}
