
const Events = () => {
const handleClick = () => {
     alert('Você clicou no botão pra testar o evento2!')
}

const renderSomething = (x) => {
     if(x){
          return <p>Está renderizando</p>
     } else {
          return <p>Não está renderizando</p>
     }
}
  return (
    <div>
          <div>
               <button onClick={() => alert('Você clicou no botão pra testar o evento!')}>Clique aqui</button>
          </div>
          <div>
               <button onClick={handleClick}>Clique aqui2</button>
          </div>
          {renderSomething(true)}
          {renderSomething(false)}
    </div>
  )
}

export default Events