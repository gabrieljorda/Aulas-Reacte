import React, { useState } from 'react'

const CheckLogin = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const toggleLogin = () => {
        setLoggedIn(!isLoggedIn);
    }

    const handleLogin = () => {
        if(isLoggedIn) {
            alert('AVISO: Usuário está logado!');
        }
        else {
            alert('AVISO: Usuário não está logado!');
        }
    }
    

    return (
        <div>
            <h2>
                {isLoggedIn ? 'Usuário logado' : 'Usuário não logado'}
            </h2>
            <button onClick={handleLogin}>
                Checar estado
            </button>
            <button onClick={toggleLogin}>
                { isLoggedIn ? 'Log Out' : 'Log In'}
            </button>
        </div>
    )
}

export default CheckLogin