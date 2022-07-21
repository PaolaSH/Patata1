
import React, {useState} from 'react';




const Boton = () => {

const [valor, mandado] = useState ({

uno: 100,
dos:0

})

const derechauno = () => { 
    mandado ({
        
       uno : valor.uno - 2,
       dos : valor.dos  
    })

}

    const izquierdados = () => { 
        mandado ({
            
           uno : valor.uno,
           dos : valor.dos + 1  
        })


    }

    return ( 
               <div>
             {valor.uno}
        <button onClick={derechauno }> mas</button>
         <button onClick={izquierdados}> menos</button>  

              {valor.dos}


               </div>
            );
}
 
export default Boton;