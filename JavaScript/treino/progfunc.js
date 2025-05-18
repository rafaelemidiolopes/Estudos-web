function apresentar(comprimento) {
    return ` eu sou o ${comprimento} `;
  }
  
  function info(nome) {
    return `${nome("Rafael, o foda")}`;
  }
  
  console.log(info(apresentar))
  



  const n1 = () => ({ nome: 'Rafael', sobrenome: 'Emídio' });
  const n2 = () => 'Silva';
  
  const { nome } = n1();
  
  console.log(nome, n2()); // "Rafael"
  
  