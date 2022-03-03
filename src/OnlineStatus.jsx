import React, { useState } from 'react'

const OnlineStatus = () => {

    let [online, setOnline] = useState(true)

    const changeStatus = () => {
        setOnline(!online ? online = true : online = false)
        console.log(online)
    }
    

    return (
        <div className='mt-5'>
            <hr />
            <button
                className={online ? 'btn btn-success mt-2' : 'btn btn-danger mt-2'}
                onClick={changeStatus}
            >
                {online ? "You're online" : "You're offline"}
            </button>
        </div>
    )
}

export default OnlineStatus