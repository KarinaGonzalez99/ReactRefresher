// Mexendo com HOOKS: USESTATE
import { useState } from 'react';

const Data = () => {
     let someData = 10;
     // cria-se uma constante para renderizar, damos o que queremos renderizar e a função que vai mudar o valor
     const [anotherData, setAnotherData] = useState(15);
  return (
    <div>
     <p>Valor: {someData}</p>
     {/* Nãi vai atualizar porque não reenderiza, pra isso vamos criar com uma const uma maneira de renderizar */}
     <button onClick={() => someData = 15}>Mudar Valor</button>
     <div>
          <p>Valor: {anotherData}</p>
          <button onClick={() => setAnotherData(20)}>Mudar Valor</button>
     </div>
    </div>
  )
}

export default Data