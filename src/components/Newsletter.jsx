import React, { useState } from 'react'
// Firebase
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/config'
// Estilos
import '../styles/Newsletter.scss'


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
        <div className='newsletter-container'>

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
                    <small className='error'>
                        <i className="bi bi-x-lg"></i>Ingrese su dirección de mail
                    </small>
                }
                {
                    suscripto &&
                    <small className='success'>
                        <i className="bi bi-check-lg"></i>Te suscribiste con éxito
                    </small>
                }
            </form>

        </div>
    )
}

export default Newsletter