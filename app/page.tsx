// Importa tu cliente Supabase
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

type Deck = {
  id_deck: number,
  nombre_deck: string,
  descripcion_deck: string,
  numero_preguntas: number
}

async function fetchDecks(): Promise<Deck[]> {
  const supabase = createClient();
  const { data, error } = await supabase.from('decks').select();
  
  if (error) {
    // Maneja el error adecuadamente
    console.error(error);
    return [];
  }
  
  return data as Deck[];
}

export default async function Index() {
  const decks = await fetchDecks();

  return (
    <div className="flex-1 w-full flex flex-col gap-2 items-center font-tilt h-screen">
      <Header />
      <Hero />

      <h3 className="text-white text-center my-5 text-2xl">Escoge un mazo para jugar</h3>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 w-full items-center">
        <Link href={'./create-deck'}
          className="p-5 bg-red-1 rounded-lg w-full h-40  shadow-xl text-white hover:bg-red-3 flex items-center gap-1 justify-center">
          <span className="icon-[lets-icons--add] text-3xl"></span>Crear nuevo Deck
        </Link>
        {
          decks.map(deck => (
            <Link href={`./${deck.id_deck}`} key={deck.id_deck} className="p-5 bg-white-bg rounded-lg w-full h-40 flex flex-col justify-between shadow-xl 
            text-blue hover:bg-white hover:text-red-1">
              <div>
                <h3 className="font-bold text-2xl">{deck.nombre_deck}</h3>
                <p className="font-light text-sm">{deck.descripcion_deck}</p>
              </div>
              <p className=" text-xs self-end">{deck.numero_preguntas} preguntas</p>
            </Link>
          ))
        }
      </section>
      <Footer/>
    </div>
  );
}
