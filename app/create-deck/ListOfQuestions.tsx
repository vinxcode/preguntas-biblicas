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

    useEffect(()=> {
        const getPreguntas = async () => {
            const { data, error } = await supabase
            .from('preguntas')
            .select()
            .eq('deck', idDeck)

            setQuestions(data as Question[])
        }

        getPreguntas()
    },[supabase, questions, setQuestions])

    return (
        <div>
            {
                questions?.map(question => (
                    <div key={question.id_pregunta}>
                        <p>{question.pregunta}</p>
                    </div>
                ))
            }
        </div>
    )
}
