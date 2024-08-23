import React, { useState } from 'react'
import Image from 'next/image'
import gif from './screen.gif'
import ModalContent from './ModalContent'

export default function Hero() {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleClick = () => {
        setIsModalOpen(true)
    }

    return (
        <section className='flex justify-between w-full my-10 flex-col lg:flex-row md:items-center'>
            <div className='flex flex-col w-full p-5 md:w-3/4 lg:pr-40 gap-4'>
                <div className='flex flex-col'>
                    <h1 className='text-white text-7xl font-league font-black'>Juego Bíblico</h1>
                    <div className='bg-red-1 rounded-full w-full h-5'></div>
                </div>
                <p className='text-white font-league text-2xl '>
                    Aprende de la biblia mientras te diviertes. Hazlo con tus amigos, tu familia o en la iglesia.
                </p>
                <button onClick={handleClick}
                    className='border-2 border-white w-3/5 py-3 rounded-lg text-white hover:bg-red-1 hover:border-red-1'>¿Cómo funciona?</button>
            </div>
            <div className='flex justify-center'>
                <Image
                    src={gif}
                    width={450}
                    alt='GIF'
                />
            </div>
            {
                isModalOpen && (
                    <div className='bg-blue absolute bottom-0 top-0 right-0 left-0 m-auto shadow-xl flex justify-center items-center z-10 modal'>
                        <div className='p-10 bg-white-bg rounded-lg w-1/3'>
                            <ModalContent />
                            <button onClick={() => setIsModalOpen(false)}
                                className='w-full bg-red-2 py-3 text-white rounded-lg mt-3 hover:bg-red-3'>Close modal</button>
                        </div>
                    </div>
                )
            }
        </section>
    )
}
