'use client'

import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useStore } from "@/app/store/useStore";
import Header from "./Header";
import Hero from "./Hero";

type Deck = {
  id_deck: number,
  nombre_deck: string,
  descripcion_deck: string,
  numero_preguntas: number
}

export default function Index() {

  const supabase = createClient()

  const [decks, setDecks] = useState<Deck[]>([])
  const updateCurrentDeck = useStore((state) => state.updateCurrentDeck)

  useEffect(() => {
    const getDecks = async () => {
      const { data, error } = await supabase.from('decks').select()
      setDecks(data as Deck[])
    }

    getDecks()
  }, [supabase])

  return (
    <div className="flex-1 w-full flex flex-col gap-2 items-center font-tilt h-screen">
      <Header />
      <Hero />

      <h3 className="text-white text-center mt-5 text-2xl">Escoge un mazo para jugar</h3>
      <div className='bg-white-bg rounded-full w-3/5 h-5 mb-5'></div>

      <section className="grid grid-cols-3 gap-3 w-full items-center">
        <button className="p-5 bg-red-1 rounded-lg w-full h-40  shadow-xl text-white hover:bg-red-3 flex items-center gap-1 justify-center">
          <span className="icon-[lets-icons--add] text-3xl"></span>Crear nuevo Deck
        </button>
        {
          decks.map(deck => (
            <Link href={`./${deck.id_deck}`} key={deck.id_deck} className="p-5 bg-white-bg rounded-lg w-full h-40 flex flex-col justify-between shadow-xl 
            text-blue hover:bg-white hover:text-red-1"
              onClick={() => updateCurrentDeck(deck.nombre_deck)}>
              <div>
                <h3 className="font-bold text-2xl">{deck.nombre_deck}</h3>
                <p className="font-light text-sm">{deck.descripcion_deck}</p>
              </div>
              <p className=" text-xs self-end">{deck.numero_preguntas} preguntas</p>
            </Link>
          ))
        }
      </section>
    </div>
  );
}
