import React from "react";
import { useState } from "react";
import Contador from "./Ccontador";



const Hola = () => {
const [valor, update]= useState (22)

const tocar = () => {update(valor + 2)}
/*
const contador = useState(0)
 const valor = contador [0]
 const update = contador [1]  */



return (
    <div>
        <h1>{valor}</h1>
        <button onClick={tocar}>
            
            mas2
        </button>
    </div>
)
}
 
export default Hola;