import React from 'react'
// props é um objeto que contém todos os atributos passados para o componente, nesse caso foi passado pelo App.jsx
const ShowUserName = (props) => {
  return (
    <div>
     <h2>O nome do usuário é: {props.name}</h2>
    </div>
  )
}

export default ShowUserName