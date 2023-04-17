
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
    // @ts-expect-error
    return number * 2
}


//* UNKNONW TYPE

function unkownMultiByTwo(number: unknown) {
    //! ERROR ('number' is of type 'unknown'.)
    // @ts-expect-error
    return number * 2
}


//* BOOLEAN TYPE
// can contain Literal values true or false

let booleanValue: boolean = false
booleanValue = true

// @ts-expect-error
booleanValue = []
//! ERROR (Type 'never[]' is not assignable to type 'boolean'.ts(2322))
// @ts-expect-error
booleanValue = {}
//! ERROR (Type '{}' is not assignable to type 'boolean'.ts(2322))
// @ts-expect-error
booleanValue = undefined
//! ERROR (Type 'undefined' is not assignable to type 'boolean'.ts(2322))
//! [...]


//* NUMBER TYPE

let numberValue: number = 2
numberValue = 2.3
numberValue = -2.3

// @ts-expect-error
numberValue = ""
//! ERROR (Type 'string' is not assignable to type 'number'.ts(2322))

// @ts-expect-error
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

// @ts-expect-error
stringType = 123
//! ERROR (Type 'number' is not assignable to type 'string'.ts(2322))


//* INTERFERENCE TYPE


let nameINTER = "Marius"
// @ts-expect-error
nameINTER = 2
//! ERROR (Type 'number' is not assignable to type 'string'.ts(2322))
// typescript sets the type automatic on declaration of the Variable





//* OBJECT TYPE

let personObject = {
    name: "Marius",
    age: 21
}
// @ts-expect-error
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
    // @ts-expect-error
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


//* INDEX SIGNATURES


type newPlane = {
    model: string;
    flightNumber: string;
    timeOfDeparture: Date;
    timeOfArrival: Date;
    seats: {
        [key: string]: string
    }
}


const newairplane: newPlane = {
    model: "BIGBUS",
    flightNumber: "A123",
    timeOfArrival: new Date(),
    timeOfDeparture: new Date(),
    seats: {
        "10A": "Mark",
        "10B": "Peter"
    }
}
//* ARRAY TYPE


const arr1: number[] = [1, 2, 3]

const arr2: Array<String> = ["1", "2", "3"]

const arr3: (string | number)[] = ["1", "2", 3, 4]



const newAirPlanes: newPlane[] = [
    {
        model: "BIGBUS",
        flightNumber: "A123",
        timeOfArrival: new Date(),
        timeOfDeparture: new Date(),
        seats: {
            "10A": "Mark",
            "10B": "Peter"
        }
    },
    {
        model: "NEWBIGBUS",
        flightNumber: "A124",
        timeOfArrival: new Date(),
        timeOfDeparture: new Date(),
        seats: {
            "10A": "Mark",
            "10B": "Peter"
        }
    }
]


//* TUPLES

const newPerson: [string, string, number] = ["Mark", "Markie", 12]
const newPerson2: [string, string, number?] = ["Mark", "Markie"]

type listOfStudents = [number, boolean, ...string[]]


const passingStudents: listOfStudents = [3, true, "John", "Stella", "Mark", "Marques"]

const failingStudens: listOfStudents = [1, false, "Scott"]



//* Read only ARRAY


const numberArr: readonly number[] = [1, 2, 3]

// @ts-expect-error
numberArr.push(1)
//! ERROR (Property 'push' does not exist on type 'readonly number[]'.ts(2339))


type readOnlyPerson = readonly [string, string, number]

const personOne: readOnlyPerson = ["peter", "griffin", 23]

// @ts-expect-error
personOne.push("mag")
//! ERROR (Property 'push' does not exist on type 'readOnlyPerson'.ts(2339))

// Other Method

type readOnlyPerson2 = Readonly<[string, string, number]>



//* VOID & NEVER TYPES

// Returns void
const addnumbers = (): void => {
    console.log(2 + 4)
}

addnumbers()


// Returns type never
// @ts-expect-error
const throwNewError = (): never => {
    // throw new Error("Big Error")
}

throwNewError()


//* Enums

enum Roles {
    admin = "admin",
    author = "author",
    editor = "editor"
}

type newPerson1 = {
    name: string;
    email: string;
    password: string;
    role: Roles;
}


const enumPerson: newPerson1 = {
    name: "John",
    email: "john@aal.de",
    password: "hello",
    role: Roles.admin
}

console.log(enumPerson)

type TypeOfLibary = 'national' | 'academic' | 'public'

type Book = { title: string, pages: number, isbn: string }
type Member = { name: string, phone: string, email?: string }

type Libary = {
    name: string;
    address: string;
    numberOfBooks: number;
    type: TypeOfLibary;
    books: Book[];
    genres: string[];
    members: Member[]
}

const library: Libary = {
    name: "New York Library",
    address: " 24, Some Street, New York",
    numberOfBooks: 1254,
    type: "national", // 'national', 'academic', 'public'
    books: [
        {
            title: "Harry Potter",
            pages: 756,
            isbn: "9971-5-0210-0",
        },
        {
            title: "Davinci Code",
            pages: 386,
            isbn: "9971-5-0210-0",
        },
    ],
    genres: ["fiction", "history", "computers", "poetry"],
    members: [
        {
            name: "John Doe",
            phone: "+167678978",
        },
        {
            name: "Mark Doe", // Name is mandatory
            phone: "+167678978", // Phone is mandatory
            email: "mark@email.com", // Can have additional optional fields
        },
    ],
};


export { }