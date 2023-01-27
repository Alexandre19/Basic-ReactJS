import "./App.css";

import { useState, useEffect } from "react";

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("Carregou");
  }, []);



  return (
    <div className="App">
      <h1>HTTP em REACT</h1>
    </div>
  )
}

export default App;
