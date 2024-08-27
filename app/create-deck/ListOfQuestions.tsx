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
        <div className='py-10'>
            <table>
                <thead className='text-start'>
                    <tr >
                        <th>ID</th>
                        <th>Pregunta</th>
                        <th>Respuesta</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        questions?.map((question, index) => (
                            <tr key={index} className='text-start'>
                                <td>{index + 1}</td>
                                <td>{question.pregunta}</td>
                                <td>{question.respuesta}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    )
}
