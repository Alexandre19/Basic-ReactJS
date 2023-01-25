import React from 'react'

const ConditionalRander = () => {
    const z = false;

    const name = "Alexandre";

  return (
    <div>
        <h3>Será que é verdade?</h3>
        {z && <p>se o Z for verdadeiro, sim!</p>}

        <h3>Render Ternário</h3>
        {name === "Alexandre" ?(<div><p>Olá Alexandre</p></div>) : (<div><p>Nome não encontrado</p></div>)}
    </div>
  )
}

export default ConditionalRander