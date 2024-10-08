'use client'

import FormDeck from "./FormDeck"
import { motion } from "framer-motion"

export default function CreateDeck() {


    return (
        <motion.section className='bg-white-bg w-full my-auto rounded-xl pt-16 pb-10 px-20 font-league text-blue'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}>
            <FormDeck />

        </motion.section>
    )
}
