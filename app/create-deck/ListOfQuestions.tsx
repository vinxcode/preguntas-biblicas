import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'

type ListOfQuestionProps = {
    idDeck: number
}

type Question = {
    id_pregunta: number,
    pregunta: string,
    respuesta: string,
    deck: number,
    dificultad: number
}

export default function ListOfQuestions({ idDeck }: ListOfQuestionProps) {

    const supabase = createClient()

    const [questions, setQuestions] = useState<Question[]>([])

    useEffect(() => {
        const getPreguntas = async () => {
            const { data, error } = await supabase
                .from('preguntass')
                .select()
                .eq('deck', idDeck)

            setQuestions(data as Question[])
        }

        getPreguntas()
    }, [supabase, questions, setQuestions])

    const deleteQuestion = async (idPregunta: number) => {

        try {
            const response = await fetch('/api/preguntas', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id_pregunta: idPregunta })
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const data = await response.json();
        } catch (error) {
            console.error('Error al ELIMINAR:', error);
        }
    }

    return (
        <div className='p-7 mt-10  flex justify-center '>
            <div className='w-full flex flex-col'>
                <div className='flex justify-start font-bold py-3'>
                    <p className='w-1/12'>ID</p>
                    <p className='w-5/12 text-start'>Pregunta</p>
                    <p className='w-5/12 text-start'>Respuesta</p>
                </div>
                <div className='flex flex-col w-full gap-4 h-80 overflow-y-auto'>
                    {
                        questions?.map((question, index) => (
                            <div key={index} className='flex justify-start text-start h-max-5'>
                                <p className='text-center w-1/12'>{index + 1}</p>
                                <p className='w-5/12'>{question.pregunta}</p>
                                <p className='w-5/12'>{question.respuesta}</p>
                                <div className='w-1/12 text-end'>
                                    <button onClick={() => deleteQuestion(question.id_pregunta)}
                                        className='bg-red-1 rounded-lg text-white py-1 px-5 icon-[material-symbols--delete] hover:bg-red-3 text-xl'>
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
