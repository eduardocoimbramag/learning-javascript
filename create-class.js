class Person {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }
    walk() {
        console.log(`${this.name} is walking`)
    }
    talk() {
        console.log(`${this.name} is talking`)
    }
}

const p1 = new Person('Eduardo', 'Coimbra')
const p2 = new Person('Cristina', 'Silva')

console.log(p1)
console.log(p2)
p1.walk()
p2.talk()

class animal {
    constructor(species) {
        this.species = species
    }
    ride() {
        console.log(`${this.species} taking my time on my ride`)
    }
    jumping() {
        console.log(`${this.species} is jumping`)
    }
}

const s1 = new animal('Monkey')
const s2 = new animal('Dog')

console.log(s1)
console.log(s2)
s1.jumping()
s2.ride()