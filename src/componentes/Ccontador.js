import React, {useState, Fragment} from 'react';

const Contador = (uwu) => {

    const[numero,setNumero] = useState(25) 
    
   const tempe = numero
     
        const mas = () => {
        setNumero(numero + 1)
    }
        
        const menos = () => {
        setNumero(numero - 1)
    }
       // const Temperatura = (numero) => {

      return (
        <Fragment>
        <button onClick={mas}>aumentar</button>
        <button onClick={menos}>disminuir</button>
       
        <p>{tempe >24 ? 'calor' : 'frio'}</p>
         
        <h1>{uwu.mensagge}</h1>
        <h2>mi componente {numero}</h2>
        </Fragment>
     );
}
 
export default Contador ;

