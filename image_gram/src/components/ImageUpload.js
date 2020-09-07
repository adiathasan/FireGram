import React, { useState } from 'react'
import useImageUpload from '../hooks/useImageUpload'
import Progress from './progress'

const ImageUpload = () => {
    const [file, setFile] = useState(null)
    const [err, setErr] = useState(null)
    const imgTypes = ['image/png', 'image/jpeg', 'image/jpg']
    const changeHandler = e =>{
        const file = e.target.files[0]
        if(imgTypes.includes(file.type)){
            setFile(file)
            setErr(null)
        }else{
            setErr('file must be of .png or .jpg')
        }
    }
    return (
        <div className='container-fluid form-bg'>
            <div className="row">
                <form className='img-form mx-auto'>
                    <label className=' rounded-circle px-3 py-2'>
                        <input type='file' onChange={changeHandler} />
                        <span>+</span>
                    </label>
                   
                    {
                        err && <div className="text-center alert alert-info">
                            <p>{err}</p>
                        </div>
                    }
                </form>
            </div>
            <div className="row">
                {
                    file && <Progress file={file} setFile={setFile}/>
                }
            </div>

        </div>
        
    )
}

export default ImageUpload
