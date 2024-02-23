import Data from '../components/Data'
import ListRender from '../components/ListRender'
import dogswartsIMG from './assets/dogswarts.jpg'
import './App.css'
import ConditionalRender from '../components/ConditionalRender'
import ShowUserName from '../components/ShowUserName'
import CarDetails from '../components/CarDetails'
import Container from '../components/Container'
import ExecuteFunction from '../components/ExecuteFunction'
import Message from '../components/Message'
import { useState } from 'react';
import ChangeMessage from '../components/ChangeMessage'

// 9 - Renderização de listar com componente
const cars = [
  {id: 1, brand: 'Ferrari', km: 5000, color: 'Vermelho'},
  {id: 2, brand: 'Uno', km: 0, color: 'Azul'},
  {id: 3, brand: 'Fiat', km: 30000, color: 'Preto'}
]

// 11 - Utilizando state lift

const handleMessage = (msg) => {
  setMessage(msg);
}


function App() {
  // 11 - Utilizando state lift
  const [message, setMessage] = useState('') //useState sempre dentro do componente
  const handleMessage = (msg) => {
  setMessage(msg);
}

// 10 - Passando função como props
  function showMessage(){
    alert('Você clicou no botão');
  }
  return (
    <div className='App' style={{paddingBottom: "500px"}}>
  <h1>Avançando em React</h1>
  {/* 1 - inserir imagem em public (nao mto utilizado, precisa ser jpg*/}
  <img src='/lovedogs.jpg' className = 'aim' alt='Love Dogs' />
  {/* 2 - inserir imagem em assets */}
  <img src={dogswartsIMG} className = 'aim' alt='Dogswarts' />
  {/* 3 - Hooks: useState */}
  <Data />
  {/* 4 - Hooks: useState de lista */}
  <ListRender />
  {/* 5 - Condicional Render */}
  <ConditionalRender />
  {/* 6 - Passando props */}
  <ShowUserName name='Karina' />
  {/* 7 - Desestruturando props */}
  <CarDetails brand='Ford' km={10000} color='Vermelho' />
  {/* 8 - Reaproveitando componente */}
  <CarDetails brand='BMW' km={200000} color='Azul' />

  <h2>Renderizando listas com componentes:</h2>
  {/* 9 - Renderização de listar com componente */}
  {cars.map((car) => (
    <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} />
  ))}

  <Container>
    <p>Alguma coisa</p>
  </Container>

  <ExecuteFunction myFunction={showMessage}/>

  <Message msg={message} />
  
  <ChangeMessage handleMessage={handleMessage} />
    </div>
  )
}

export default App
