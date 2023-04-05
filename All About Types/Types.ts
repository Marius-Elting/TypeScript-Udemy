
//* ANY TYPE

// Is the Default type
// You can save any type to this variable
const anyStr: any = "Marius"
const anyNumb: any = 2
const anyBoo: any = true
const anyArr: any = [1, 2, 3]
const anyObj: any = { type: "ANY" }

function anyMultiByTwo(number: unknown) {
    //! ERROR ('number' is of type 'unknown'.)
    return number * 2
}


//* UNKNONW TYPE


function unkownMultiByTwo(number: unknown) {
    //! ERROR ('number' is of type 'unknown'.)
    return number * 2
}


//* BOOLEAN TYPE
// can contain Literal values true or false

let booleanValue: boolean = false
booleanValue = true


booleanValue = []
//! ERROR (Type 'never[]' is not assignable to type 'boolean'.ts(2322))
booleanValue = {}
//! ERROR (Type '{}' is not assignable to type 'boolean'.ts(2322))
booleanValue = undefined
//! ERROR (Type 'undefined' is not assignable to type 'boolean'.ts(2322))
//! [...]


//* NUMBER TYPE

let numberValue: number = 2
numberValue = 2.3
numberValue = -2.3

numberValue = ""
//! ERROR (Type 'string' is not assignable to type 'number'.ts(2322))
numberValue = [1]
//! ERROR (Type 'number[]' is not assignable to type 'number'.ts(2322))


//* BIGINT TYPE

let bigInt1 = BigInt(945845)

let bigInt2 = 123456n

const safeInt = Number.MAX_SAFE_INTEGER

const safeIntPlusOne = safeInt + 1
const safeIntPlusTwo = safeInt + 2

console.log(safeIntPlusOne) // 9007199254740992
console.log(safeIntPlusTwo) // 9007199254740992
console.log(safeIntPlusOne === safeIntPlusTwo) // true


let a: bigint = BigInt(12345678)
let b: bigint = 2345234n

let c: bigint = a - b

// let e: bigint = 23234.23n
//! ERROR (Type 'number' is not assignable to type 'bigint'.ts(2322))
//! ERROR (A bigint literal must be an integer.ts(1353))

// let f = Math.log(a)
//! ERROR (Argument of type 'bigint' is not assignable to parameter of type 'number'.ts(2345))


//* STRING TYPE

let stringType: string = "Marius"
stringType = 'Marius'

stringType = stringType + " Elting"

stringType = 123
//! ERROR (Type 'number' is not assignable to type 'string'.ts(2322))


//* INTERFERENCE TYPE


let nameINTER = "Marius"

nameINTER = 2
//! ERROR (Type 'number' is not assignable to type 'string'.ts(2322))
// typescript sets the type automatic on declaration of the Variable





//* OBJECT TYPE

let personObject = {
    name: "Marius",
    age: 21
}

personObject.age = "123"
//! ERROR (Type 'string' is not assignable to type 'number'.ts(2322))


let car: {
    color: string;
    brand: string
} = {
    color: "red",
    brand: "bmw"
}

let article: {
    author: string;
    content: string;
    title: string;
    // image is not necessary 
    image?: string
}

article = {
    author: "me",
    content: "cool",
    title: "The cool Book"
}

article = {
    author: "me",
    content: "cool",
    title: "The cool Book",
    subtitle: "this is cool"
    //! ERROR (Type '{ author: string; content: string; title: string; subtitle: string; }' is not assignable to type '{ author: string; content: string; title: string; image?: string | undefined; }'.
    //! Object literal may only specify known properties, and 'subtitle' does not exist in type '{ author: string; content: string; title: string; image?: string | undefined; }'.ts(2322))
}


//* TYPE ALIAS

type article = {
    author: string;
    content: string;
    title: string;
    image?: string
}


let article2: article = {
    author: "me",
    content: "cool",
    title: "The cool Book",
}


const post: article = {
    author: "Peter",
    content: "Peters Post",
    title: "This is my firs Post"
}

//* NESTED TYPE

type plane = {
    model: string;
    flightNumber: string;
    timeOfDeparture: Date;
    timeOfArrival: Date;
    caterer: {
        name: string;
        address: string;
        phone: number
    }
}


const airplane: plane = {
    model: "BIGBUS",
    flightNumber: "A123",
    timeOfArrival: new Date(),
    timeOfDeparture: new Date(),
    caterer: {
        name: "SPECIAL",
        address: "Cool street",
        phone: 123
    }
}



//* UNION TYPE

type Dog = {
    name: string;
    barks: boolean;
    wags: boolean
}

type Cat = {
    name: string;
    purrs: boolean
}

type DogAndCatUnion = Dog | Cat


const dog: DogAndCatUnion = {
    name: "buddy",
    barks: true,
    wags: true
}

const cat: DogAndCatUnion = {
    name: "bella",
    purrs: false
}

const dogAndCat: DogAndCatUnion = {
    name: "Hybrid DOG",
    barks: true,
    wags: true,
    purrs: false
}


//* PRIMITIVE TYPES

type stringOrNumber = number | string

const addNumberOrString = (a: stringOrNumber, b: stringOrNumber) => {
    if (typeof a === "number" && typeof b === "number") {
        return a + b
    } else {
        return a.toString() + b.toString()
    }
}

addNumberOrString(5, 10)
addNumberOrString("Marius", 10)


//* INTERSECTION TYPE



type newCAT = {
    name: string;
    purrs: boolean;
    color: string;
}

type newDog = {
    name: string;
    barks: boolean;
    color: string
}


type HybridAnimal = newDog & newCAT


const hybridAnimal: HybridAnimal = {
    name: "Max",
    color: "red",
    barks: false,
    purrs: false
}


