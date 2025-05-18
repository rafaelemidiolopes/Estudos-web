"use strict"
const user = {
name:"Rafael",
age:"16",
email:"rafael2006@gmail.com",
introduce: function() {
console.log (`Olá, meu nome é ${this.name} e eu tenho ${this.age} anos de idade. Meu email é ${this.email}! `);
},
changeEmail: function() {
    this.email = 'emailnovo@gmail.com'
    console.log (`Olá, meu novo email é ${this.email}`)
    
}
}
   
user.introduce()
user.changeEmail()

