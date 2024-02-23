//rafce: extensão do vscode para criar um componente funcional com arrow function e export default (pode deletar o import react, pois não é necessário)

const TemplateExpression = () => {
     const name = 'Karina'
     const data = {
          age: 24,
          job: 'Programadora'
     }
  return (
    <div>
     <p>A soma é {2+2}</p>
     <p>Bem-vinda {name}</p>
     <p>Idade: {data.age}</p>
     <p>Profissão: {data.job}</p>
     <p>Acabou o TemplateExpression</p>
    </div>
  )
}

export default TemplateExpression