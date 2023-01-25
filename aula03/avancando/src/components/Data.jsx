import { useState } from "react"

const Data = () => {
    let somaData = 10;
    let text = "Hoje eu acordei de madrugada";

    const [anotherNumber, setAnotherNumber] = useState(15);
    const [anotherText, setAnotherText] = useState("Hoje eu acordei tarde.")

  return (
    <div>
        <div> 
            <p>Valor: {somaData}</p>
            <button onClick={() => (somaData=15)}>Mudar Variável</button>
        </div>
        <div>
            <p>Valor:{anotherNumber}</p>
            <button onClick={() => setAnotherNumber(20)}> Mudar State</button>
        </div>
        <div>
            <p>Texto: {text}</p>
            <button onClick={() => (text="Você")}>Mudar Texto</button> 
        </div>
        <div>
            <p>Texto: {anotherText}</p>
            <button onClick={() => setAnotherText("Na verdade eu acordei cedo")}>Mudar State</button>
        </div>
    </div>
  );
};

export default Data