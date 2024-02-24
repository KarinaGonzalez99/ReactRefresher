import MyComponent from './components/MyComponent'
import Title from './components/Title';
import './App.css'

function App() {
  // css inline dinamico
  const n = 15;

  // classe dinamica
  const redTitle = true;

  return (
    <>
    {/* css global */}
    <h1>CSS em React</h1>
    {/* css de componente */}
    <MyComponent />
    {/* inline style */}
    <p style={{color: 'lightblue', padding: '25px', borderTop: '1px dotted blue'}}>Este elemento tem estilo inline</p>
    {/* inline style dinâmico */}
    <h2 style={n > 10 ? {color:'lightcoral'} : {color:'lightblue'}}>CSS dinâmico</h2>
    {/* classe dinamica */}
    <h2 className={redTitle ? 'red-title' : 'title'}>Este título vai ter uma classe</h2>
    {/* css modules */}
    <Title />
    </>
  )
}

export default App
