import Image from 'next/image'
import logo from './logo.png'

export default function Header() {
    return (
        <div className='w-full flex justify-start p-7'>
            <Image width={200} 
            src={logo}
            alt='Logo de Juego biblico'/>
        </div>
    )
}
