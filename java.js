// const array = [1, 2, 10, 16];

// const triple = []
// const newArray = array.forEach((num) => triple.push(num * 3));

// console.log("triple numbers (" + triple + ")")

 
// // map array
// const mapArray = array.map(num => num * 3);
// console.log("map array (" + mapArray + ")");

// // filter array
// const filterArray = array.filter(num => num > 10);
// console.log("filter array (" + filterArray + ")");

// // reduce array
// const reduceArray = array.reduce((accumulator, num) => accumulator + num);
// console.log("reduce Array (" + reduceArray + ")");

// var object1 = {value:10};
// var object2 = object1;
// var object3 = {value:10};

class Player {
    constructor(name, type) {
        console.log("player", this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi i am ${this.name}, ${this.type}`)
    }
};

class Brute extends Player {
    constructor(name, type) {
        debugger;
        super(name, type);
        console.log("brute", this);
    }
    play() {
        console.log(`Hell ya Bruda i'm a ${this.name}, ${this.type}`);
    }
};

const brute1 = new Brute('Blake, attacker');
const brute2 = new Brute('Isla, defender');