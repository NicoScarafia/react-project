import React from 'react'
import { db } from './config';
import { addDoc, collection } from 'firebase/firestore';

import { data } from './data'



const DBUpload = () => {

    // [
    //     {
    //         "name": "Superman - Death of Superman",
    //         "img": "images/comics/superman-dos",
    //         "pub": "DC",
    //         "date": "27/12/2019",
    //         "price": "2300"
    //     },,
    //     {
    //         "name": "Maus - Volume 1",
    //         "img": "images/comics/maus-1",
    //         "pub": "Art Spiegelman",
    //         "date": "14/08/2018",
    //         "price": "2740"
    //     },
    //     {
    //         "name": "TMNT - Volume 1",
    //         "img": "images/comics/tmnt-1",
    //         "pub": "IVREA",
    //         "date": "14/03/2016",
    //         "price": "990"
    //     }
    // ]

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