import React, { useState } from 'react'

const OnlineStatus = () => {

    let [online, setOnline] = useState(true)

    const changeStatus = () => {
        setOnline(!online ? online = true : online = false)
        console.log(online)
    }
    

    return (
        <>
            <button
                className={online ? 'btn btn-success' : 'btn btn-danger'}
                onClick={changeStatus}
            >
                {online ? "You're online" : "You're offline"}
            </button>
        </>
    )
}

export default OnlineStatus