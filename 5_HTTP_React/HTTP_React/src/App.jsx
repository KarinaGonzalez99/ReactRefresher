import './App.css'
import {useState, useEffect} from 'react';

const url = 'http://localhost:3000/products' // essa url é uma API que retorna um array de objetos, esse url foi tirado do arquivo db.json(npm run server)

function App() {
// 1 - resgatando dados de uma API
const [products, setProducts] = useState([]) // começa com um array vazio

useEffect(() => { // useEffect faz com que seja possivel controlar a execução de uma ação, como por exemplo, fazer uma requisição a uma API
  async function getData(){ // usado o async para poder usar o await, que é usado para esperar a resposta da requisição
    const res = await fetch(url);// fetch faz chamadas assincronas, chamando a url
    const data = await res.json(); // transforma a resposta em json, ou seja, transforma a resposta em um objeto
    console.log(data);

    setProducts(data); // seta o estado products com o valor de data

  }
  getData(); // chama a função getData
  // console.log('Carregando produtos...');
}, []) // [] é um array de dependências, que serve para dizer ao useEffect quando ele deve ser executado. Se estiver vazio, ele só será executado uma vez, quando o componente for montado.

  return (
    <>
  <h1>HTTP em React</h1>
  {/* 1 - resgaste de dados */}
  <ul>
    {products.map(product => (
      <li key={product.id}>{product.name} - R${product.price}</li>
    ))}
  </ul>

    </>
  )
}

export default App
