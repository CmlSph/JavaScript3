/*# STORY

Abdulkareem is a 35 year old man, that lives in Riyadh. 
He has a wife and 3 children. As a day job he's a construction worker, 
that makes houses. He likes to eat dates and smoke water pipe.

Abdulkareem has a horse, named Adel. 
The horse is 15 years old and has the color brown. 
Usually the horse eats grass or 
helps transport materials for Abdulkareem.

And they lived happily ever after! */

class Person {
    constructor (name, age, city, numberOfChildren, work, eats, smokes, whatHappened) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.numberOfChildren = numberOfChildren;
        this.work = work;
        this.eats = eats;
        this.smokes = smokes;
        this.whatHappened = whatHappened;
    }
}


class Animal extends Person {
    constructor(name, age, color, eats, work) { 
        super(name, age);
        
        this.color = color;
        this.eats = eats;
        this.work = work;
    }
}



const person1 = new Person ("Abdulkareem", 35, "Riyadh", 3, "construction worker", "dates", "water pipe", "And they lived happily ever after!");

const animal1 = new Animal ("Adel", 15, "brown", "grass", "help transport materials");

console.log(`${person1.name} is a ${person1.age} year old man, that lives in ${person1.city}. 
He has a wife and ${person1.numberOfChildren} children. As a day job he's a ${person1.work}
that makes houses. He likes to eat ${person1.eats} and smoke ${person1.smokes}.`)

console.log(`${person1.name} has a horse, named ${animal1.name}. 
The horse is ${animal1.age} years old and has the color ${animal1.color}. 
Usually the horse eats ${animal1.eats} or 
${animal1.work} for Abdulkareem.`)

console.log(`${person1.whatHappened}`)