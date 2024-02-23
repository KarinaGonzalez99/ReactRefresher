import './App.css'
import FirstComponent from './components/FirstComponent' // importa ele
import TemplateExpression from './components/TemplateExpression'
import MyComponent from './components/MyComponent'
import Events from './components/Events'


function App() {
  return (
    <div className="App">
      <h1>Fundamentos do React</h1>
      <h2>Mexendo com componentes!</h2>
        <FirstComponent />
        <TemplateExpression />
        <MyComponent />
        <Events />
    </div>
  )
}

export default App
