import React, { createContext, useRef, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth, useAuth } from '../firebase/config'

export const AuthContext = createContext()

export const AuthContextProvider = ( {children} ) => {

    const [loading, setLoading] = useState(false)

    const currentUser = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const emailRef = useRef()
    const passwordRef = useRef()

    const [campoVacio, setCampoVacio] = useState(false)
    
    const [weekPassword, setWeekPassword] = useState(false)
    const [mailInUse, setMailInUse] = useState(false)

    const handleSignUp = async () => {
        if (emailRef.current.value === '' || passwordRef.current.value === '') {
            setCampoVacio(true)
        }
        else {
            setLoading(true)
            try {
                await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                setWeekPassword(false)
                setMailInUse(false)
            }
            catch (error) {
                console.error(error.message)
                if (error.code === 'auth/weak-password') {
                    setWeekPassword(true)
                }
                if (error.code === 'auth/email-already-in-use') {
                    setMailInUse(true)
                }
            }
            setLoading(false)
        }
    }

    const [emailnotFound, setEmailNotFound] = useState(false)
    const [wrongPassword, setWrongPassword] = useState(false)

    const handleLogIn = async () => {
        if (emailRef.current.value === '' || passwordRef.current.value === '') {
            setCampoVacio(true)
        }
        else {
            setLoading(true)
            try {
                await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            }
            catch (error) {
                console.error(error.message)
                if (error.code === 'auth/user-not-found') {
                    setEmailNotFound(true)
                }
                if (error.code === 'auth/wrong-password') {
                    setWrongPassword(true)
                }
            }
            setLoading(false)
        }
    }

    const handleLogOut = async () => {
        setLoading(true)
        try {
            signOut(auth)
        }
        catch (error) {
            console.error(error.message)
        }
        setLoading(false)
    }


  return (
    <AuthContext.Provider 
        value={{
            loading,
            currentUser,
            handleSubmit,
            campoVacio,
            weekPassword,
            mailInUse,
            handleSignUp,
            emailnotFound,
            wrongPassword,
            handleLogIn,
            handleLogOut,
            emailRef,
            passwordRef
        }}
    >
        { children }
    </AuthContext.Provider>
  )
}
