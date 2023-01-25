// Template Expression

const TemplateExpression = () => {
    const name = "Alexandre"

    const data = {
        age: 32,
        job: "Developer"
    }

  return (
    <div>
        <p>A soma é {2 + 2}</p>
        <h3>Bem vindo {name}</h3>
        <h3>A sua idade é: {data.age} anos e você é um {data.job}</h3>
    </div>
  )
}

export default TemplateExpression