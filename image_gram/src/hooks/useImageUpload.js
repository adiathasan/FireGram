import React, {useState, useEffect} from 'react'
import { fireStorage, firestore, timeStamp } from '../config/firebaseConfig'

const useImageUpload = (file) => {
    const [progress, setProgress] =  useState(0)
    const [error, setErro] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(()=>{
        const storageRef = fireStorage.ref(file.name)
        const firestoreRef = firestore.collection('images')
        storageRef.put(file).on('state_changed', (snap)=>{
            const percentage = (snap.bytesTransferred/snap.totalBytes) * 100
            setProgress(percentage)
        }, (err)=>{
            setErro(err)
        }, async ()=>{
            const url = await storageRef.getDownloadURL()
            setUrl(url)
            firestoreRef.add({
                url: url,
                createdAt: timeStamp()
            })
            setProgress(0)
        })
    }, [file])

    return {
        progress,
        error,
        url
    }
}

export default useImageUpload
