import {useState} from 'react'

const ListRender = () => {
     const [list] = useState(['Karina', 'Sunna', 'Meg'])
     const [list2] = useState(['Karina', 'Sunna', 'Meg', 'Karina'])

     const[users, setUsers] = useState([
          {id: 1, name: 'Karina', age: '24'},
          {id: 2, name: 'Sunna', age: '24'},
          {id: 3, name: 'Meg', age: '24'}
     ])

     const deleteRandomUser = () => {
          const randomNumber = Math.floor(Math.random() * 4) //gera um numero aleatorio, para deletar um usuario aleatorio baseado no index
          setUsers((prevUsers) =>  prevUsers.filter((user) => randomNumber !== user.id)
          );
     }

  return (
    <div>
     {/* 4 - render sem key */}
     <ul>
     {list.map((item) => (
          <li>{item}</li>
     ))}
     </ul>

     {/* 5/6 - render sem chave unica usamos sua posição no index */}
     <ul>
     {list2.map((item, i) => (
          <li key={i}>{item}</li>
     ))}

     </ul>
     {/* 5 - render com key */}
     <ul>
     {users.map((user) => (
          <li key={user.id}>{user.name} - {user.age} anos</li>
     ))}
     </ul>
     {/* 6 - Previous state(usado para mudar o valor original) */}
     <button onClick={deleteRandomUser}>Deletar usuário aleatório</button>

    </div>
  )
}

export default ListRender