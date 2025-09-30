import { useState } from "react";
function ConditionalComponent() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <button onClick={() => setShow(!show)}>
                {show ? 'Esconder' : 'Mostrar'} Mensagem
            </button>
            {show && <p>Esta é uma mensagem condicional!</p>}
        </div>
    );
}
export default ConditionalComponent;