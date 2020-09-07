import React from 'react'
import useImageRetrive from '../hooks/useImageRetrive'
import {motion} from 'framer-motion'

const ImageGrid =({setPop}) => {
    const {images} = useImageRetrive('images')
    return (
        <div className="grid-full">
            <div className=' img-wrap'>
                {
                    images.map(image=>{
                        return (
                            <motion.div
                                
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1
                                }}
                                transition={{
                                    delay: 1
                                }}
                            className=' img-nail' key={image.id}>
                                <motion.img src={image.url} alt="image1"
                                onClick={()=> setPop(image.url)}
                                layout
                                whileHover={{
                                    minWidth: '100%',
                                    minHeight: '125%',
                                    opacity: 1
                                    
                                }}
                                />
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ImageGrid