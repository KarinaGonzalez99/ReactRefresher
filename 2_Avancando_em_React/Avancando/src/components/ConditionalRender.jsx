import React from 'react'
// && é uma avaliação curto-circuito, ele renderiza o que está depois

const ConditionalRender = () => {
     const x = true;
     const y = false;
     const a = 5;
     const name = 'Karina';
  return (
    <div>
     <h3>Isso será exibido?</h3>

     {/* && */}
     {x && <p>Se x for true sim</p>}
     {y && <p>Se x for true sim</p>}
     {a > 2 && <p>Se a for maior que 5 sim</p>}

     {name === 'Meg' ? <p>Se o nome for Karina sim</p> : <p>Seu nome não é Karina</p>}

     {name === 'Karina' ?(
          <div>
               <p>Seu nome é Karina</p>
          </div>
     ) : (
          <div>
               <p>Seu nome não é Karina</p>
          </div>
     )}

     {/* || */}

    </div>
  )
}

export default ConditionalRender