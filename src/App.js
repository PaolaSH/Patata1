
import './App.css';
import Contador from './componentes/Ccontador'
import Jsx from './componentes/Jsx';
import Holas from './componentes/Hola';
import ReactDOM from 'react-dom/client';


const App = (props) => {

  return (
  <div className="App">
     <Jsx color="red"  />
     <Jsx color ="yellow" />
     <Jsx color="blue" />
     <Contador /> 
     <Holas color='yellow' />
     <h1>{props.propiedadDesdeIndex}</h1>
  </div>
    );

}
let contador = 0
const refrescar = ()=>{
const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
   <App propiedadDesdeIndex = {contador} />
    );}

setInterval (() => {
contador ++
refrescar()
}, 2000)
export default App;
