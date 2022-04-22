import React, {useState, useEffect} from 'react'
// Firebase
import { getDocs } from "firebase/firestore"

const useCollection = ( q, categoryId = null, user ) => {

    const [data, setData] = useState([])
    const [cargando, setCargando] = useState(false)

    useEffect(() => {
        setCargando(true)
        let unmounted = false;
        
        getDocs(q)
            .then( res => {
                let items = res.docs.map( (doc) => (
                    { 
                        id: doc.id,
                        ...doc.data()
                    }
                ))
                if (!unmounted) {
                    setData(items)
                } 
            })
            .catch( (err) => {console.log(err)} ) 
            .finally( () => {
                if (!unmounted) {
                    setCargando(false) 
                }
            })
        return () => { unmounted = true };
    }, [categoryId, user])


  return {
    cargando, data
  }
}

export default useCollection