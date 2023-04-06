// HELPER
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]

const greaterThanSeven = (item: number) => {
    return item > 7
}

const strings = ["dog", "cat", "rat", "lion"]

const filterCats = (item: string) => {
    return item === "cat"
}


// Without Generics

type Filter = {
    (array: number[], predicate: (item: number) => boolean): number[];
    (array: string[], predicate: (item: string) => boolean): string[];
    (array: object[], predicate: (item: object) => boolean): object[];
}



const filter: Filter = (array: any[], predicate: Function) => {
    let result = []
    for (let i = 0; i < array.length; i++) {
        let item = array[i]
        if (predicate(item)) {
            result.push(array[i])
        }
    }
    return result
}



filter(strings, filterCats)


// Second Version


type NewFilter = {
    // if an array with the type "string" is parsed the other "T"s wouldbe type string too
    <T>(array: T[], predicate: (item: T) => boolean): T[]
}


const newfilter: NewFilter = (array, predicate) => {
    let result = []
    for (let i = 0; i < array.length; i++) {
        let item = array[i]
        if (predicate(item)) {
            result.push(array[i])
        }
    }
    return result
}

newfilter(strings, filterCats)


// Third Version

// This is a shorthand Syntax
type AllNewFilter<T> = (array: T[], predicate: (item: T) => boolean) => T[]



const allNewfilter: AllNewFilter<string> = (array, predicate) => {
    let result = []
    for (let i = 0; i < array.length; i++) {
        let item = array[i]
        if (predicate(item)) {
            result.push(array[i])
        }
    }
    return result
}


allNewfilter(strings, filterCats)



// HELPER 2

// Writing Map Function

type MapType = <T>(array: T[], predicate: (item: T) => T) => T[]

const map: MapType = (array, predicate) => {
    const output = []
    for (let i = 0; i < array.length; i++) {
        const item = array[i]
        output.push(predicate(item))
    }
    return output
}


const mapped = map(numbers, (item: number) => {
    return item * 10
})


const mapped2 = map(strings, (item) => {
    return "This is a " + item + "!"
})

console.log(mapped)