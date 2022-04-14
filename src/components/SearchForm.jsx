import React from 'react'
// Estilos
import '../styles/SearchForm.scss'


const SearchForm = ({handleSubmit, handleChange}) => {
    
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Buscar'
                    onChange={handleChange}
                />
                <i className="bi bi-search"></i>
            </form>
        </div>
    )
}

export default SearchForm