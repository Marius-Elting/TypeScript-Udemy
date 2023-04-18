// SUBTYPE & SUPERTYPE

//* SUBTYPE
// Array is an subtype of an object
// Unknown :> Any :> Object :> Array :> Tuples :> Never
// if you have a class helicopter that extneds the class aircraft than helicopter is a subtype of Aircraft



let numbers: number[] = [4, 5, 6, 7, 2]

let numbers2: object = [4, 5, 6, 7, 2]


//* TYPECASTING


const numbers3 = <const>{
    x: 10,
    y: {
        z: 20
    }
}
// alternative writing
// const numbers3 ={
//     x: 10,
//     y: {
//         z: 20
//     }
// } as const

// @ts-expect-error
numbers3.x = 2
//! ERROR(Cannot assign to 'x' because it is a read-only property.ts(2540))

const nameField = document.querySelector("#Firstname")! as HTMLInputElement

// nameField.value


//* TOTALITY

type Weekdays = "Mon" | "Tue" | "Wed" | "Thu" | "Fri"

type Day = Weekdays | "Sat" | "Sun"

const nextDayForAWeekDay = (weekday: Weekdays): Day => {
    switch (weekday) {
        case 'Mon':
            return 'Tue';
        case 'Tue':
            return 'Wed';
        case 'Wed':
            return 'Thu';
        case 'Thu':
            return 'Fri';
        case 'Fri':
            return 'Sat';
    }
}


//* DISCRIMINATED UNIONS

const firstname = "Mark"

console.log(typeof firstname)


type Cat = {
    type: "cat"
    purrs: boolean
}
type Dog = {
    type: "dog"
    barks: boolean
}

type Animal = Cat | Dog

const dog: Animal = { type: "dog", barks: true }
const cat: Animal = { type: "cat", purrs: true }


const animalReaction = (animal: Animal) => {
    switch (animal.type) {
        case "cat":
            console.log("This is a Cat")
            break
        case "dog":
            console.log("This is a Dog")
    }
}

animalReaction(dog)


//* KEYING-IN OR INDEX ACCESSED TYPES (141)

type ServiceList = UserDetailsAPIResponse['servicesList'];

type UserDetailsAPIResponse = {
    id: number;
    name: string;
    servicesList: {
        count: number;
        services: {
            id: number;
            name: string;
            price: number;
        }[];
    };
};

const fetchUserDetails = (
    name: string
): Promise<UserDetailsAPIResponse> => {
    return new Promise((res, rej) => {
        if (name) {
            res({
                id: 23,
                name: 'John',
                servicesList: {
                    count: 2,
                    services: [
                        {
                            id: 1,
                            name: 'Accounting',
                            price: 49,
                        },
                        {
                            id: 2,
                            name: 'Design',
                            price: 19,
                        },
                    ],
                },
            });
        } else rej(new Error('Pass new a valid name'));
    });
}

const printServiceList = (services: ServiceList): void => {
    console.log(services);
}

fetchUserDetails('John')
    .then((res) => {
        console.log(res);
        printServiceList(res.servicesList);
    })
    .catch((err) => console.log(err));



//* KEY OF OPERATOR


type Events = {
    id: number;
    date: Date;
    type: 'indoor' | 'outdoor';
};

// -> "id" | "date" | "type"

type unionOfKeysOfEvents = keyof Events;

type Numeric = {
    [key: number]: string;
};

type NumericKeyOf = keyof Numeric;

type NumberAndString = {
    [key: string]: string;
};

type NumberAndStringKeyoff = keyof NumberAndString;


//* MAPPED TYPES


let numbers1 = [1, 5, 6, 8, 10];

let stringNumbers1 = numbers1.map((each) => each.toString());

console.log(stringNumbers1);

type Weekdays2 = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
type Day2 = Weekdays2 | 'Sat' | 'Sunday';

type NextDay = {
    [W in Weekdays2]: Day2;
};

let nextDay: NextDay = {
    Mon: 'Tue',
    Tue: 'Wed',
    Wed: 'Thu',
    Thu: 'Fri',
    Fri: 'Sat',
};

// Using it 

type Artist = {
    id: number;
    name: string;
    bio: string;
};

type MappedArtistForEdit = {
    [Property in keyof Artist]?: Artist[Property];
} & { id: number };

const artist: Artist = {
    id: 1,
    name: 'Justin',
    bio: 'Hey, I am Justin',
};

const editedArtist: MappedArtistForEdit = {
    id: 1,
    bio: 'Hello, I am Justin',
};

//* CONDITIONAL TYPES

interface Animal1 {
    live: () => void;
}

interface Dog1 extends Animal1 {
    woof: () => void;
}

type Example = Dog1 extends Animal1 ? string : number;

// SomeType extends OtherType ? TrueType : FalseType;
type isString<T> = T extends string ? true : false;

type A = isString<string>;
type B = isString<number>;

export { }