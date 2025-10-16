import React from 'react'
import CounterButton from './CouterButton';
const Button = () => {
    const handleClick = () => {
        alert("clicou no botao!");
    }

    return (
        <>
            <button onClick={handleClick}>
                Clique aqui
            </button>
        </>
    )
}

export default Button