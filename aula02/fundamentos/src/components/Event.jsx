import React from 'react'

const Event = () => {
     
    const handleClick = () => {
        console.log("Executou")
    }

    //Função de renderização
    const renderSometing = (x) => {
        if(x) {
            return <h1>Renderizando isso</h1>
        } else {
            return <h1>Renderizando outra coisa</h1>
        }
    }

  return (
    <div>
        <div>
            <button onClick={() => console.log("Testado um evento")}>Clique aqui</button>
        </div>

         {/**Evento com Função */}
       <div>
         <button onClick={handleClick}>Clique aqui - Função</button>
       </div>

       {/*Função com Render */}
       {renderSometing(true)}
       {renderSometing(false)}
    </div>
  )
}

export default Event