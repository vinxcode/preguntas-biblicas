import { createClient } from '@supabase/supabase-js';

const supabaseUrl: any = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey: any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: any) {
    const { pregunta, respuesta, deck } = await request.json()

    try {
        const { data, error } = await supabase
            .from('preguntas')
            .insert([{ pregunta, respuesta, deck }])

        if (error) {
            throw error
        }

        return new Response(JSON.stringify({ data }), { status: 200 })
    } catch (e: any) {
        return new Response(JSON.stringify({ error: e.message }), { status: 500 })
    }
}