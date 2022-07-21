
import './App.css';

import Jsx from './componentes/Jsx';
import Holas from './componentes/Hola';
import Boton from './ejercicio';
import Tarea from './componentes/eje1';
const App = (props) => {

  return (
  <div className="App">
     <Jsx color="red"  />
     <Jsx color ="yellow" />
     <Jsx color="blue" />
    
     <Holas color='yellow' />
     <h1>{props.propiedadDesdeIndex}</h1>
     <Tarea />

     <Boton />
  </div>
    );

}

export default App;
