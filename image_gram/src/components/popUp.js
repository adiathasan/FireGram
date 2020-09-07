import React from 'react'
import { motion } from 'framer-motion'

function PopUp({ pop, setPop }) {
    const handleClick = e =>{
        if(!e.target.hasAttribute('src')){
            setPop(null)
        }
    }
    return (
        <div 
        className='backdrop' onClick={handleClick}>
            <motion.img 
            initial={{
                y: '-100vh'
            }}
            animate={{
                y: 0
            }}
           src={pop} alt="pop Image"/>
        </div>
    )
}

export default PopUp
