import React from "react";
import { useState } from "react";

const Imput = () => {
    const[imputValue,setImputValue] = useState("");

    const handleChange = () => {
        setImputValue(event.target.value)
    }
    return(
        <div>
            <input type="text"
            value={imputValue}
            onChange={handleChange}
            placeholder="Digite algo..."/>
                <p>Você digitou: {imputValue}</p>
        </div>
    )


}
export default Imput;
