function intro(name: string, age: number): string {
    return "My Name is " + name + " and age is " + age
}

const intro1 = function (name: string, age: number): string {
    return "My Name is " + name + " and age is " + age
}

const intro3 = (name: string, age: number): string => {
    return "My Name is " + name + " and age is " + age
}

// Country is an optional Parameter
function intro4(name: string, age: number, country?: string): string {
    return "My Name is " + name + " and age is " + age
}

console.log(intro4("john"))
//! ERROR (Expected 2 arguments, but got 1.ts(2554))

console.log(intro4(1, 1))
//! ERROR (Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345))

//* CUSTOM TYPE AND RETURN TYPES

enum AgeUnit {
    years = "years",
    months = "months"
}

type Person = {
    name: string;
    age: number;
    ageUnit: AgeUnit;
    country: string;
}

const person1: Person = {
    name: "Marius",
    age: 21,
    ageUnit: AgeUnit.years,
    country: "Germany"
}


const convertAgeToMonths = (person: Person): Person => {
    person.age = person.age * 12;
    person.ageUnit = AgeUnit.months
    return person
}

console.log(convertAgeToMonths(person1))


const convertAgeToYears = (person: Person): Person => {
    person.age = person.age / 12;
    person.ageUnit = AgeUnit.years
    return person
}

//* Function call signitures

type GreetingFunction = (greeting: string) => string

type NewPerson = {
    name: string;
    age: number;
    ageUnit: AgeUnit;
    country: string;
    greet: GreetingFunction
}


const person2: NewPerson = {
    name: "Marius",
    age: 21,
    ageUnit: AgeUnit.years,
    country: "Germany",
    greet: (greeting => { return `${greeting} ${person2.name}` })

}

person2.greet("Hallo")



//* FUNCTION Overloading


type Reservation = {
    departureDate: Date;
    returnDate?: Date;
    departingFrom: string;
    destination: string
}

type Reserve = {
    (
        departureDate: Date,
        returnDate: Date,
        departingFrom: string,
        destination: string
    ): Reservation | never;
    (
        departureDate: Date,
        departingFrom: string,
        destination: string
    ): Reservation | never
}


// const reserve: Reserve = (
//     departureDate: Date,
//     returnDateOrDepartingFrom: Date | string,
//     departingFromOrDestination: string,
//     destination?: string,
// ) => {

// }
const reserve: Reserve = (
    departureDate: Date,
    returnDateOrDepartingFrom: Date | string,
    departingFromOrDestination: string,
    destination?: string,
) => {
    if (returnDateOrDepartingFrom instanceof Date && destination) {
        return {
            departureDate: departureDate,
            returnDate: returnDateOrDepartingFrom,
            departingFrom: departingFromOrDestination,
            destination: destination
        }
    } else if (typeof returnDateOrDepartingFrom === "string") {
        return {
            departureDate: departureDate,
            departingFrom: returnDateOrDepartingFrom,
            destination: departingFromOrDestination
        }
    }
    throw new Error("This is a big Error")

}


reserve(new Date(), new Date(), "string1", "string2")
