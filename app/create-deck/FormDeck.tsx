import { useState, useEffect } from 'react'
import { Toaster, toast } from 'sonner'
import { createClient } from '@/utils/supabase/client'

type Deck = {
    id_deck: number,
    nombre_deck: string,
    descripcion_deck: string,
    numero_preguntas: number
}

export default function FormDeck() {

    const supabase = createClient()

    const [nombreDeck, setNombreDeck] = useState("")
    const [descripcionDeck, setDescripcionDeck] = useState("")
    const [numeroPreguntas, setNumeroPreguntas] = useState(10)
    const [isDeckCreated, setIsDeckCreated] = useState(false)
    const [lastRegister, setLastRegister] = useState<Deck>({
        id_deck: 0,
        nombre_deck: "",
        descripcion_deck: "",
        numero_preguntas: 0
    })

    const handleSuma = (quantity: number) => {
        ((numeroPreguntas === 0) && (quantity === -1)) ?
            alert('El numero debe ser positvo') :
            setNumeroPreguntas(numeroPreguntas + quantity)
    }

    useEffect(() => {
        const getLast = async () => {
            const { data, error } = await supabase
                .from('decks')
                .select('*')
                .order('id_deck', { ascending: false }) // Ordena por la columna 'id' en orden descendente
                .limit(1); // Limita la respuesta a 1 registro

            setLastRegister(data?.shift())
            console.log(lastRegister)
        }

        getLast()
    }, [])

    useEffect(() => {
        console.log(lastRegister);
    }, [lastRegister]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (nombreDeck !== "" && descripcionDeck !== "") {
            try {
                const response = await fetch('/api/mazo', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nombre_deck: nombreDeck,
                        descripcion_deck: descripcionDeck,
                        numero_preguntas: numeroPreguntas
                    })
                });

                if (!response.ok) {
                    throw new Error('Error en la solicitud');
                }

                setLastRegister({
                    id_deck: lastRegister.id_deck + 1,
                    nombre_deck: nombreDeck,
                    descripcion_deck: descripcionDeck,
                    numero_preguntas: numeroPreguntas
                })

                setNombreDeck("")
                setDescripcionDeck("")
                setNumeroPreguntas(10)
                setIsDeckCreated(true)

                const data = await response.json();
            } catch (error) {
                console.error('Error al insertar los datos:', error);
            }
        } else {
            toast.error('Debe ingresar un nombre y una descripcion para el mazo')
        }

    };
    return (
        <>
            {
                isDeckCreated ? (
                    <p>{lastRegister.id_deck}, {lastRegister.nombre_deck}</p>
                ) : (
                    <div>
                        <>
                            <Toaster position='top-center' richColors />
                            <h1 className='text-center text-3xl font-bold'>Crear un nuevo mazo</h1>

                            <div className='flex flex-col items-center gap-3 p-5 w-3/4 mx-auto rounded-lg border-4 border-blue mt-5'>
                                <div className='flex flex-col w-full'>
                                    <label htmlFor="mazo">Nombre del mazo</label>
                                    <input type="text" name="mazo" id="mazo" value={nombreDeck} placeholder='Ej. Profetas de la biblia'
                                        className='py-2 px-5 rounded-lg border-4 border-blue'
                                        onChange={(e) => setNombreDeck(e.target.value)} />
                                </div>
                                <div className='flex flex-col w-full'>
                                    <label htmlFor="descripcion">Descripcion</label>
                                    <input type="text" name="descripcion" id="descripcion" value={descripcionDeck} placeholder='Ej. Acerca de los profetas menores de la biblia'
                                        className='py-2 px-5 rounded-lg border-4 border-blue'
                                        onChange={(e) => setDescripcionDeck(e.target.value)} />
                                </div>
                                <div className='flex flex-col w-full'>
                                    <label>Numero de preguntas</label>
                                    <div className='flex justify-center items-center gap-4'>
                                        <button className=' text-red-2 px-3 py-1  rounded-full text-3xl icon-[ph--minus-circle-fill]'
                                            onClick={() => handleSuma(-1)}></button>
                                        <p className='font-semibold'>{numeroPreguntas}</p>
                                        <button className='text-red-2 px-3 py-1  rounded-full text-3xl icon-[ph--plus-circle-fill]'
                                            onClick={() => handleSuma(1)}></button>
                                    </div>
                                </div>
                                <button className='w-full bg-red-2 hover:bg-red-3 text-white py-3 rounded-lg font-semibold'
                                    onClick={handleSubmit}>Crear mazo</button>
                            </div>
                        </>
                    </div>
                )
            }
        </>
    )
}
