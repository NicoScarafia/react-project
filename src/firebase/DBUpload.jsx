import React from 'react'
import { db } from './config';
import { addDoc, collection } from 'firebase/firestore';

import { data } from './data'



const DBUpload = () => {

    const uploadData = () => {
        data.forEach((el) => {
            addDoc(collection(db, 'productos'), el)
        })
    }

    return (
        <div className='text-center'>
            <h3>SUBIR DATA</h3>
            <button onClick={uploadData}>SUBIR ARCHIVOS</button>
        </div>
    )
}

export default DBUpload