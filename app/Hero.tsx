import React from 'react'

export default function Hero() {
    return (
        <div className='flex justify-between w-full my-10 flex-col md:flex-row'>
            <div className='flex flex-col w-full p-5 md:w-2/5 gap-4'>
                <div className='flex flex-col'>
                    <h1 className='text-white text-7xl font-league font-black'>Juego Bíblico</h1>
                    <div className='bg-red-1 rounded-full w-full h-5'></div>
                </div>
                <p className='text-white font-league text-2xl '>
                    Aprende de la biblia mientras te diviertes. Hazlo con tus amigos, tu familia o en la iglesia.
                </p>
                <button className='border-2 border-white w-3/5 py-3 rounded-lg text-white hover:bg-red-1 hover:border-red-1'>¿Cómo funciona?</button>
            </div>
            <div>
                Screenshot
            </div>
        </div>
    )
}
