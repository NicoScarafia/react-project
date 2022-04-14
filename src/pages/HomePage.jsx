import React from 'react'
// Componentes
import Slider from '../components/Slider'
import HomeNovedades from '../components/HomeNovedades'
import VerTodo from '../components/VerTodo'
import Newsletter from '../components/Newsletter'

const HomePage = () => {

    return (
        <div>
            <Slider />
            <HomeNovedades />
            <VerTodo />
            <Newsletter />
        </div>
    )
}

export default HomePage