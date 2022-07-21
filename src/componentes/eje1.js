
import React, {useState} from 'react';




const Tarea = () => {
    console.log("Tarea")
const [sistema, mandar] = useState({

uno: 100 ,
dos: 55,
click: 0,
mensaje: "tarea de hoy"
})
 const[cliks, despues] = useState ([])

const derechauno = () => {
mandar 
 ( {
...sistema,
uno: sistema.uno / 2,
dos: sistema.dos,
click : sistema.click + 1,
mensaje: "tarea de hoy"
})

despues ((click1) => [...click1, "D"] )

}

const izquierdados = () => {
    mandar ({
    ...sistema,
    uno: sistema.uno,
    dos: sistema.dos * 2,
    click : sistema.click + 1

    
    })

    despues ((click1) => ([...click1, "Z"] ))

    }
return ( 
    <div>
     {sistema.uno}
    
     <button onClick={derechauno}> libros</button>
      <button onClick={izquierdados}> fotos</button>
     {sistema.dos}
     <p>click{sistema.click}</p>
     <p>{sistema.mensaje}</p>
     {cliks.join (", ")}

    </div>

);
}
 
export default Tarea;