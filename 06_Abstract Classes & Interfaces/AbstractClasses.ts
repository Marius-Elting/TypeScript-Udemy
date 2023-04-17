class Automobile {
    public static color: string = "red";

    public static calculateMilage(miles: number, litres: number) {
        return miles / litres
    }
}

const car: Automobile = new Automobile()

console.log(Automobile.color)

console.log(Automobile.calculateMilage(50, 10))


type Holidays = { date: Date, reason: string }[]


abstract class Department {
    protected abstract holidays: Holidays
    // when the constructor is protected, only the child Classes can accees it from the super() method
    protected constructor(protected name: string) { }


    public addHolidays(holidays: Holidays) {
        if (Array.isArray(holidays)) {
            for (const holiday of holidays) {
                this.holidays.push(holiday)
            }
        }
    }

    public abstract printHolidays(): void

}


class ItDepartment extends Department {
    protected holidays: Holidays = []

    constructor() {
        super("IT Department")
    }

    public printHolidays() {
        if (this.holidays.length <= 0) {
            return console.log("There are no Holidays")
        } else {
            console.log("Here is a list of Holidays for " + this.name)
            this.holidays.forEach((holiday, i) => console.log(`${i + 1} - ${holiday.reason} ${holiday.date}`))
            return
        }
    }
}

class AdminDepartment extends Department {
    protected holidays: Holidays = []
    constructor() {
        super("Admin Department")
    }

    public printHolidays() {
        if (this.holidays.length <= 0) {
            return console.log("There are no Holidays")
        } else {
            console.log("Here is a list of Holidays for " + this.name)
            this.holidays.forEach((holiday, i) => console.log(`${i + 1} - ${holiday.reason} ${holiday.date}`))
            return
        }
    }
}


// const itDepartment: ItDepartment = new ItDepartment()



// @ts-expect-error
const depart = new Department("Admin")
//! ERROR (Cannot create an instance of an abstract class.ts(2511))



const itHolidays: Holidays = [
    {
        date: new Date(2022, 12, 25),
        reason: "Christmans"
    },
    {
        date: new Date(2022, 7, 25),
        reason: "IT Department Day"
    }
]
const adminHolidays: Holidays = [
    {
        date: new Date(2022, 12, 25),
        reason: "Christmans"
    },
    {
        date: new Date(2022, 7, 25),
        reason: "Admin Department Day"
    }
]


const itDepartment: ItDepartment = new ItDepartment()
const adminDepartment: AdminDepartment = new AdminDepartment()


itDepartment.addHolidays(itHolidays)
adminDepartment.addHolidays(adminHolidays)
itDepartment.printHolidays()
adminDepartment.printHolidays()

console.log(itDepartment)


