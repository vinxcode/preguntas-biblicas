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
                .from('preguntas')
                .select()
                .eq('deck', idDeck)

            setQuestions(data as Question[])
        }

        getPreguntas()
    }, [supabase, questions, setQuestions])

    return (
        <div className='p-7 mt-10 bg-white flex justify-center rounded-xl shadow-lg'>
            <table className='w-full'>
                <thead className='text-start'>
                    <tr className='text-start'>
                        <th>ID</th>
                        <th className='text-start'>Pregunta</th>
                        <th className='text-start'>Respuesta</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        questions?.map((question, index) => (
                            <tr key={index} className='text-start'>
                                <td className='text-center'>{index + 1}</td>
                                <td>{question.pregunta}</td>
                                <td>{question.respuesta}</td>
                                <td><button className='bg-red-1 rounded-lg text-white py-1 px-5 icon-[material-symbols--delete] hover:bg-red-3 text-xl'></button></td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    )
}
