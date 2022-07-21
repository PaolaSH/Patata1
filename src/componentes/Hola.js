import React from "react";
import { useState } from "react";

import Props1 from "./Props";



const Hola = () => {
const [valor, update]= useState (22)

const tocar = () => {update(valor + 1)}
/*
const contador = useState(0)
 const valor = contador [0]
 const update = contador [1]  */
const reset = () => { update (0)}

const isEven = valor % 2 === 0
const op2 = isEven ? "es par" : "no es par" 

return (
    <div>

        <h1>{valor}</h1>

        <button onClick={tocar}>
            
            mas2
        </button>
        <p>{op2}</p>
        <button onClick={ reset }>
            reset
        </button>
        <Props1 number = {valor} />
    </div>
)
}
 
export default Hola;