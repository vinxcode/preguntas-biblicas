'use client'

import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { useEffect, useState } from "react";

type Deck = {
  id_deck: number,
  nombre_deck: string,
  descripcion_deck: string,
  numero_preguntas: number
}

export default function Index() {

  const supabase = createClient()

  const [decks, setDecks] = useState<Deck[]>([])

  useEffect(() => {
    const getDecks = async () => {
      const { data, error } = await supabase.from('decks').select()
      setDecks(data as Deck[])
    }

    getDecks()
  }, [supabase])

  return (
    <div className="flex-1 w-full flex flex-col gap-2 items-center font-tilt">
      <nav className="w-full flex justify-center h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
        </div>
      </nav>

      <h1 className="text-5xl text-center font-league font-black px-5">Bienvenido a Juego Biblico</h1>
      <p className="text-center">Escoja un mazo para poder jugar</p>
      <section className="flex flex-col gap-3 w-full items-center">
        <button className="p-5 bg-blue rounded-lg w-11/12 shadow-xl text-white hover:bg-red-3">
          Crear nuevo Deck
        </button>
        {
          decks.map(deck => (
            <Link href={`./${deck.id_deck}`} key={deck.id_deck} className="p-5 bg-red-mixed rounded-lg w-11/12 flex flex-col justify-between shadow-xl hover:bg-red-3">
              <div>
                <h3 className="text-white font-bold text-2xl">{deck.nombre_deck}</h3>
                <p className="text-white font-light text-sm">{deck.descripcion_deck}</p>
              </div>
              <p className="text-white text-xs self-end">{deck.numero_preguntas} preguntas</p>
            </Link>
          ))
        }
      </section>
    </div>
  );
}
