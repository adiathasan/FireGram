import React from 'react'
import useImageUpload from '../hooks/useImageUpload'

const Progress = (props) => {
    const {file, setFile} = props
    const {url, progress} = useImageUpload(file)
    if(url){
        setFile(null)
    }
    return (
        <div className='col-8 mx-auto  py-4'>
            <div className="" 
            style={{
                width: progress + '%',
                height: '7px',
                backgroundColor: 'orange'
            }}></div>
        </div>
    )
}

export default Progress
