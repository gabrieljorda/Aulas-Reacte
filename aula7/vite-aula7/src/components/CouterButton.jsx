import React from "react";
import { useState } from "react";

const CounterButton = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Incrementar</button>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count-1)}>Decrementar</button>
        </div>
    )
}
export default CounterButton;