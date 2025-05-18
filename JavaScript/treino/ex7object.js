"use strict"
var person = {
    name: 'Rafael',
    age: '16',
    hobbies: [],
    introduce: function () {
        console.log(`Olá, meu nome é ${this.name}, e eu tenho ${this.age} anos de idade!`)
    },
    addhobby: function (hobby) {
        this.hobbies.push(hobby)
    },
    listHobbies: function () {
        console.log('Meus hobbies:')
        this.hobbies.forEach(function (hobby) {
            console.log(hobby)

        })

    }
}

person.introduce()
person.addhobby('programar e passar raiva')
person.listHobbies()