'use client'

import Form from "./Form"
import { motion } from "framer-motion"

export default function CreateDeck() {


    return (
        <motion.section className='bg-white-bg w-full my-auto rounded-xl p-20 font-league text-blue'
        animate={{ x: 100 }}>
            <Form/>

        </motion.section>
    )
}
