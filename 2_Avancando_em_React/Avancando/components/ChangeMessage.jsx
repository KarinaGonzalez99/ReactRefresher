import React from 'react'

const ChangeMessage = ({handleMessage}) => {
     const messages = ['Oi', 'Tudo bem?', 'Tenha um excelente dia']
  return (
    <div>
     {/* usou ()=> pois temos parametros */}
     <button onClick={() => handleMessage(messages[0])}>1</button>
     <button onClick={() => handleMessage(messages[1])}>2</button>
     <button onClick={() => handleMessage(messages[2])}>3</button>
    </div>
  )
}

export default ChangeMessage