import './MyForm.css';
import {useState } from 'react';

const MyForm = ({userName, userEmail}) => {
  // 3 - gerenciamento de dados do form
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [bio, setBio] = useState('');
  const [role, setRole] = useState('');

  // 3 - gerenciamento de dados do form
  const handleName = (e) => {
    setName(e.target.value); //target.value pega o valor do input
  };

  // 5 - envio de formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // preventDefault previne o comportamento padrão do form, que seria recarregar a página
    // 7 - limpar o formulário
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  }  


  console.log(name, email, bio, role);

  return (
    <div>
     {/* 1 - criação de form */}
     {/* 5 - envio de formulário */}
     <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Nome:</label>
        <input type='text' 
        name='name' 
        placeholder='Digite seu nome' 
        onChange={handleName} 
        // 6 - controlled input
        value={name || ''}
        />
      </div>
     {/* 2 -label envolvendo input */}
     <label>

      <span>Email:</span>
      {/* 4 - simplificando manipulação */}
      <input type='email' 
      name='email' 
      placeholder='Digite seu email' 
      onChange={(e) => setEmail(e.target.value)}
      // 6 - controlled input
      value={email || ''}
      />
     </label>
     
    {/* 8- textarea */}
    <label>
      <span>Bio:</span>
      <textarea name='bio' 
      placeholder='Descrição do usuário' 
      onChange={(e) => setBio(e.target.value)}
      value={bio}></textarea>
    </label>

    {/* 9 -  select*/}
    <label>
      <span>Função no sistema</span>
      <select name='role' 
      onChange={(e) => setRole(e.target.value)}
      value={role}
      >
        <option value=''>Selecione</option>
        <option value='front-end'>Front-end</option>
        <option value='back-end'>Back-end</option>
        <option value='full-stack'>Full-stack</option>
      </select>
    </label>


      <input type='submit' value='Enviar' />
     </form>
    </div>
  )
}

export default MyForm