import React, { useState } from 'react'
// Firebase
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/config'
// Estilos
import '../styles/Newsletter.scss'
import SmallMsg from './SmallMsg'


const Newsletter = () => {

    const [newsletterEmail, setNewsletterEmail] = useState('')
    const [suscripto, setSuscripto] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(newsletterEmail === '') {
            setError(true)
        }
        if (newsletterEmail !== '') {
            const newsletter = {
                email: newsletterEmail
            }
            const newsletterRef = collection(db, 'newsletter')
            addDoc(newsletterRef, newsletter)
                .then( () => {
                    setError(false)
                    setSuscripto(true)
                })
                .catch((err) => console.log(err))
        }
    }

    const handleChange = (e) => {
        setNewsletterEmail(e.target.value)
    }


    return (
        <div className='newsletter-container text-center'>

            <h3>Suscribite a nuestro newsletter</h3>

            <form onSubmit={handleSubmit}>

                <input
                    type='email'
                    placeholder='Ingresá tu e-mail'
                    value={newsletterEmail}
                    onChange={handleChange}
                />
                <button type='submit'>Enviar</button>
                {
                    error && 
                    <SmallMsg texto='Ingrese su dirección de mail' />
                }
                {
                    suscripto &&
                    <SmallMsg texto='Te suscribiste con éxito' color='seagreen' icon='bi bi-check-lg' />
                }
            </form>

        </div>
    )
}

export default Newsletter