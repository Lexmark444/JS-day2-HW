//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
function display(){
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for(let i = 0; i < Object.keys(person3).length; i++){
    console.log(Object.keys(person3)[i])
}
}

console.log(display())

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo =  () => {
        return `${name} is ${age} years old.`;
    }

    this.addAge = () => {age++;}
}

let krishna = new Person('Krishna', 29);
let apeksha = new Person('Apeksha', 27);

console.log(krishna.printInfo())
krishna.addAge()
krishna.addAge()
krishna.addAge()
console.log(krishna.printInfo())
console.log(apeksha.printInfo())

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isStringGreaterThan10 = (string) => {
    return new Promise( (resolve, reject) => {
        if(string.length > 10) {
            resolve(true)
        } else {
            reject(false)
        }
    })
}

isStringGreaterThan10('applebeeshaha')
isStringGreaterThan10('apple')

.then( (result) => {
    console.log(`Big Word`)
})
//Sad Reject path
.catch( (error) => {
    console.log(`Small Number of characters`)
})

// 8kyu - Even or Odd

function evenOrOdd(number) {
    if (number % 2 == 0){
      return `Even`
    } else {
      return 'Odd'
    }
  }

// 8kyu DNA to RNA

function DNAtoRNA(dna) {
    let newdna = dna.replace(/T/g, 'U');
    return newdna;
  }

