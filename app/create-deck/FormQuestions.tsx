import { useState } from 'react'
import ListOfQuestions from './ListOfQuestions'
import { Toaster, toast } from 'sonner'
import Link from 'next/link'

type FormQuestionsProps = {
    idDeck: number
}

export default function FormQuestions({ idDeck }: FormQuestionsProps) {

    const [pregunta, setPregunta] = useState('')
    const [respuesta, setRespuesta] = useState('')

    const handleAddQuestion = async () => {
        if ((respuesta !== "") && (pregunta !== "")) {
            try {
                const response = await fetch('/api/preguntas', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ pregunta, respuesta, deck: idDeck })
                })

                if (!response.ok) {
                    throw new Error('Error insertando pregunta')
                    toast.error('No hay response ok mi prrito')
                } else {
                    toast.success('A QUE PINCHEEEE PREGUNTOTTAA')
                }

                const { data } = await response.json()
                setPregunta('')
                setRespuesta('')
            } catch (error) {
                toast.error('Error al insertar los datos en el CATCH prrito')
            }
        } else {
            toast.error('Debes ingresar una pregunta y una respuesta')
        }
    }

    return (
        <div>
            <Toaster richColors position='top-center' />
            <h1 className='text-center text-3xl font-bold'>Agregar preguntas</h1>

            <div className='flex flex-col items-center gap-3 p-5 w-3/4 mx-auto rounded-lg border-4 border-blue mt-5'>
                <div className='flex flex-col w-full'>
                    <label htmlFor="mazo" className='text-left'>Pregunta</label>
                    <input type="text" name="mazo" id="mazo" placeholder='Ej. ¿Quién es el rey de la selva?'
                        className='py-2 px-5 rounded-lg border-4 border-blue'
                        value={pregunta}
                        onChange={(e) => setPregunta(e.target.value)}
                    />
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="descripcion" className='text-left'>Respuesta</label>
                    <input type="text" name="descripcion" id="descripcion" placeholder='Ej. Jesús'
                        className='py-2 px-5 rounded-lg border-4 border-blue'
                        value={respuesta}
                        onChange={(e) => setRespuesta(e.target.value)}
                    />
                </div>

                <button className='w-full bg-red-2 hover:bg-red-3 text-white py-3 rounded-lg font-semibold'
                    onClick={handleAddQuestion}>Agregar pregunta</button>
            </div>

            <ListOfQuestions idDeck={idDeck} />
            <div className='w-full pt-10 flex justify-end gap-3 font-semibold'>
                <Link href={'../'} className='bg-blue py-3 px-10 text-white rounded-lg hover:bg-red-mixed'>Finalizar mazo</Link>
                <Link href={`../${idDeck}`} className='bg-red-3 py-3 px-10 text-white rounded-lg hover:bg-red-mixed'>Jugar con este mazo</Link>
            </div>
        </div>
    )
}
