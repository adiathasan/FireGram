import React, { useEffect, useState } from 'react'
import { firestore } from '../config/firebaseConfig'

function useImageRetrive(name) {

    const [images, setImages] = useState([])
    useEffect(()=>{   
        const unsub = firestore.collection(name).orderBy(
            'createdAt', 'desc'
        ).onSnapshot((snap)=>{
            let docs = []
            snap.forEach(doc=>{
                docs = [...docs, {...doc.data(), id: doc.id}]
            })
            setImages(docs)
        })
        return () => unsub()
    }, [name])
    return {
        images
    }
}

export default useImageRetrive
