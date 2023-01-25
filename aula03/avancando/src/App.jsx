import './App.css'

// importando imagem da pasta assets
import night from './assets/city.jpg';
import ConditionalRander from './components/ConditionalRander';

import Data from './components/Data';
import ListRender from './components/ListRender';



function App() {
  

  return (
    <div className="App" style={{paddingBottom: "500px"}}>
     <h1>Avançando em React</h1>
     {/**Imagem da pasta public */}
     <img src="/img1.jpg" alt="imagem da paisagem" />

     {/*Imagem da pasta assets*/}
     <img src={night} alt="noite" />    

     <Data />

     <ListRender />

     <ConditionalRander />

    
    </div>
  )
}

export default App
