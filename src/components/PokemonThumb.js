import React from 'react'
import "../components/Pokemon.css"
const PokemonThumb = ({ id, image, name, type, _callback }) => {
    const style = type + " thumb-container";
    return (
        <div className='container'>
            <div className='container-item'>
                <h2>#0{id}</h2>
                <div className={style}>
                    <div class="imagen-caja">
                        <img src={image} alt={name} />
                    </div>
                </div>
                <h1>{name}</h1>
                <h3>Tipo: {type}</h3>
            </div>
        </div>
    )
}

export default PokemonThumb