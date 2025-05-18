/*const pessoa = {nome:"Rafael"}

const apresentar = () =>{
console.log (`Olá, meu nome é ${this.nome}`)
}

apresentar() undefined */


/*const pessoa = {
    nome :"Rafael",
    comeco: function () {
        console.log(`Olá, meu nome é ${this.nome}`)
    },*/
/*const obj = {nome:"Rafael" ,

    apresentar: () => {
        console.log(`${this.nome}`)
    } }


obj.apresentar() */


/*const obj = {
    nome: "Rafael"
};

const externalObj = {
    apresentar: () => {
        console.log(`Oi, meu nome é ${obj.nome}`);
    }
};

externalObj.apresentar(); // Output: Rafael /*/

let pessoa = ["Rafael", 16, "programador", "estudante", "católico"]
const obj = {
    nome: "Rafael",
    arrowFunction: () => {
      console.log(` Olá, meu nome é ${pessoa[0]}, tenho ${pessoa[1]} anos de idade, sou ${pessoa[2]}, ${pessoa[3]} e ${pessoa[4]}`);
    }
  }; 
  
  obj.arrowFunction()






function soma(n1, n2)  {
 return n1+ n2
}
console.log (soma(20, 88))