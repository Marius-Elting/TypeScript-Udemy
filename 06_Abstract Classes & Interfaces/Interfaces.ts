interface Person {
    name: string;
    email: string;
    age: number;
    phone?: number;
    greet?: () => void
}


const person: Person = {
    name: "Jack",
    email: "jack@web.de",
    age: 34
}


enum Roles {
    admin = "admin",
    author = "author",
    editor = "editor"
}

interface Role {
    role: Roles
}

enum PermissionsList {
    read = "read",
    write = "write",
    execute = "execute",
}

interface UserPermissions {
    permissions: PermissionsList[]
}


interface User {
    name: string;
    email: string;
    phone: number;
    gender: string;
}


interface AdminUser extends User, Role, UserPermissions {
    numberofUsersReportiing: number;
}

interface UserWithAdress extends User {
    address: string
}

const user1: User = {
    name: "Zack",
    email: "zack@web.de",
    phone: 12323,
    gender: "male"
}

const user2: UserWithAdress = {
    name: "Zack",
    email: "zack@web.de",
    phone: 12323,
    gender: "male",
    address: "123 street of the Moon"
}


const adminUser: AdminUser = {
    name: "rob",
    email: "rob@rob.de",
    phone: 123,
    gender: "male",
    role: Roles.admin,
    permissions: [
        PermissionsList.execute,
        PermissionsList.read,
        PermissionsList.write
    ],
    numberofUsersReportiing: 5
}

enum AutomobileTypes {
    car = "car",
    bus = "bus",
    van = "van",
    truck = "truck",
    bike = "bike"
}

enum AutomobileBrands {
    ferrari = "ferrari",
    honda = "honda",
    bmw = "bmw",
    toyota = "toyota"
}

enum AutomobileColors {
    red = "red",
    blue = "blue",
    white = "white",
    black = "black",
    silver = "silver"
}

interface Automobile<Type, Brand, Colors> {
    type: Type;
    brand: Brand;
    colors: Colors[];
    description: string;
}


const ferrari: Automobile<AutomobileTypes, AutomobileBrands, AutomobileColors> = {
    type: AutomobileTypes.car,
    brand: AutomobileBrands.ferrari,
    colors: [AutomobileColors.black, AutomobileColors.red],
    description: "this is a big ferrari"
}

const honda: Automobile<string, string, string> = {
    type: "Car",
    brand: "Honda",
    colors: ["red", "blue"],
    description: "This is a Honda"
}

const toyota: Automobile<string, AutomobileBrands, number> = {
    type: "car",
    brand: AutomobileBrands.toyota,
    colors: [12345, 123124],
    description: "This is a toyota"
}

class Car implements Automobile<string, AutomobileBrands, AutomobileColors> {
    public type: string = "car"

    constructor(public brand: AutomobileBrands, public colors: AutomobileColors[], public description: string) {

    }
}


const newFerrari: Car = new Car(
    AutomobileBrands.ferrari,
    [AutomobileColors.black, AutomobileColors.red],
    "This is a Red Ferrari"
)



interface CommercialVehicle {
    capacity: string;
    licenseRenewalDate: Date
}
// you can implement as many interfaces as you want
class Truck implements Automobile<string, AutomobileBrands, AutomobileColors>, CommercialVehicle {
    public type: string = "Truck"
    constructor(
        public brand: AutomobileBrands,
        public colors: AutomobileColors[],
        public description: string,
        public capacity: string,
        public licenseRenewalDate: Date,
        private driverName: string = "John"
    ) { }
}


const newTruck: Truck = new Truck(
    AutomobileBrands.toyota,
    [AutomobileColors.black],
    "This is a Toyota Truck",
    "1000kg",
    new Date()
)


// class User {
//     constructor(public name: string) { }
// }

// class Password {
//     constructor(public password: string) { }
// }
// // a class can only be extended by one class, instead use Interfaces and implement them
// // @ts-expect-error
// class RegisteredUser extends User, Password {

// }


type UserType = {
    name: string
}

type AdminUserType = {
    isAdmin: boolean
}

// Union type
// const userAndAdmin: UserType | AdminUserType = {
const userAndAdmin: UserType & AdminUserType = {
    name: "arnold",
    isAdmin: false
}

// Tuples 
type ResponseTuple = [string, number]



interface PersonInterface {
    name: string
}


interface PersonInterface {
    lastName: string
}

// both Interfaces merges together 

const interfacePerson: PersonInterface = {
    name: "John",
    lastName: "Argu"
}


// interface can be extended

interface NameInterface {
    name: string
}

interface LastNameInterface {
    lastName: string
}

interface FullNameInterface extends NameInterface, LastNameInterface { }

// you can implement interfaces in classes
class FullNameClass implements NameInterface, LastNameInterface {
    constructor(public name: string, public lastName: string) { }
}

const FullNamePerson: FullNameClass = new FullNameClass("John", "Argu")


// Differences between Abstract Class and an Interface 
// section 94

abstract class AbstractUser {
    public abstract name: string;
    public abstract email: string;
    public abstract phone: number;

    public greeting() {
        console.log(`hello ${this.name}`)
    }

    public static nameClass() {
        return "class name is AbstractUser"
    }
}

class RegisteredUserClass extends AbstractUser {
    constructor(
        public name: string,
        public email: string,
        public phone: number
    ) {
        super()
    }
}

const abstractClassUser: RegisteredUserClass = new RegisteredUserClass("john", "john@gmail.com", 123)
abstractClassUser.greeting()
console.log(RegisteredUserClass.nameClass())


interface UserInterface {
    name: string;
    email: string;
    phone: number;
    greeting: () => void
}

class RegisteredUserInterface implements UserInterface {
    constructor(
        public name: string,
        public email: string,
        public phone: number
    ) { }


    public greeting() {
        console.log(`hello ${this.name} `)
    }
}



export { }