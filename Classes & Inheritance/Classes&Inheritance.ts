let person = {
    name: "john",
    email: "john@doe.com",
    greet: () => console.log(`Hello ${person.name}`)
}


// Class without Constructor
class Person {
    name = "John";
    emai = "john@email.com";


    greet() {
        console.log(`Hello ${person.name}`)
    }
}


const newPerson = new Person()

console.log(newPerson)

// Class with Constructor

class Person2 {
    name: string
    email: string
    constructor(name: string, email: string) {
        this.name = name
        this.email = email
    }
}

const newPerson2 = new Person2("Marius", "marius@gmail.com")
const newPerson3 = new Person2("Mark", "Mark@gmail.com")


class User {
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name
        this.email = email
        this.age = age
    }
}


class AdminUser extends User {
    isAdmin: boolean = true
    usersReporting: number

    constructor(name: string, email: string, age: number, usersReporting: number) {
        super(name, email, age)
        this.usersReporting = usersReporting
    }
}


const user: User = new User("Marius", "marius@gmail.com", 21)
const adminUser: AdminUser = new AdminUser("John", "John@gmail.com", 21, 3)


class Person3 {

    // SHORTHAND
    constructor(protected name: string, public age: number) {
        if (age > 200 || age < 0) {
            throw new Error("Age is Invalid")
        }
    }

    getName() {
        return this.name
    }
}

class Admin extends Person3 {

    returnName(): string {
        return this.name
    }
}

const newPerson4 = new Person3("John", 3)
// const newPerson5 = new Person3("John", 203)

console.log(newPerson4.getName())
console.log(newPerson4)



class Person4 {
    // SHORTHAND
    private testUsersAge(age: number) {
        if (age > 200 || age < 0) {
            throw new Error("Age is Invalid")
        } else {
            return age
        }
    }
    constructor(private _name: string, private _age: number) {
        this.testUsersAge(_age)
        this._age = _age
    }

    public set age(age: number) {
        this.testUsersAge(age)
    }

    public get age() {
        return this._age
    }

    public set name(name: string) {
        this._name = name
    }

    public get name() {
        return this._name
    }
}

class Admin4 extends Person4 {

    returnName(): string {
        return this.name
    }
}
const newPerson5 = new Person4("John", 23)

newPerson5.age = 2


console.log(newPerson5)

export { }