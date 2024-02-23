import MyComponent from './MyComponent';

const FirstComponent = () => {
     return (
          <>
           <h3>Meu primeiro componente!!!</h3>
           <MyComponent /> 
           <p>Acabou o FirstComponent</p>
          </>
    
     )
};

export default FirstComponent; // exporta pra importar em outro arquivo, como nesse caso será o App.jsx