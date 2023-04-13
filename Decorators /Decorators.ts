// Decoraters are Experimantal

// A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter.
// Decorators use the form @XPathExpression, where expression must evaluate to a function that will be called at runtime with information about the declaration

// This function will get the constructor function as an argument


enum Manufacturers {
    boeing = "boeing",
    airbus = "aibus"
}

interface AirCraftInterface {
    _aircraftModel: string;
    prototype?: any;
    origin?: string;
    manufacturer?: string;
    type?: string;
    airbusMehtod?: () => void;
    boeingMehtod?: () => void;
}

const AircraftManufacturer = (manufacturer: Manufacturers) => {
    return (target: Function) => {
        if (manufacturer === Manufacturers.airbus) {
            target.prototype.origin = "United States of America"
            target.prototype.manufacturer = Manufacturers.airbus
            target.prototype.type = "Jet"
            target.prototype.airbusMehtod = () => {
                console.log("Function performed by Airbus")
            }
        } else {
            target.prototype.origin = "France"
            target.prototype.manufacturer = Manufacturers.boeing
            target.prototype.type = "Helicopter"
            target.prototype.boeingMehtod = () => {
                console.log("Function performed by Boeing")
            }
        }
    }
}


@AircraftManufacturer(Manufacturers.airbus)
class Airplane implements AirCraftInterface {
    constructor(
        public _aircraftModel: string,
        private pilot: string
    ) { }

    public pilotName() {
        console.log(this.pilot)
    }

    public get aircraftModel() {
        return this._aircraftModel
    }
}


@AircraftManufacturer(Manufacturers.boeing)
class Helicopter implements AirCraftInterface {
    constructor(
        public _aircraftModel: string,
        private pilot: string
    ) { }

    public pilotName() {
        console.log(this.pilot)
    }

    public get aircraftModel() {
        return this._aircraftModel
    }
}

const airplane: AirCraftInterface = new Airplane("Airbus A340", "Johny")
const helicopter: AirCraftInterface = new Helicopter("Boeing A340", "Johnyyy")

console.log(helicopter)
console.log(airplane.manufacturer)


airplane.airbusMehtod ? airplane.airbusMehtod() : console.log("That Method does not exists")


export { }


// METHOD DECORATOR

// More additional in lecutres 130-133


enum Manufacturers2 {
    boeing = "boeing",
    airbus = "aibus"
}

interface AirCraftInterface2 {
    _aircraftModel: string
    pilotName: () => void
    prototype?: any;
    origin?: string;
    manufacturer?: string;
    type?: string;
    airbusMehtod?: () => void;
    boeingMehtod?: () => void;
}


// Here we get 3 arguments 
// first :> classPrototype: object
// second :> methodName: string
// third :> descriptor: PropertyDescriptor
const MethodDecorator = (classPrototype: object, mehtodName: string, descriptor: PropertyDescriptor) => {
    console.log(classPrototype)
    console.log(mehtodName)
    descriptor.writable = true
}

const StaticMethodDecorator = (constructor: object, mehtodName: string, descriptor: PropertyDescriptor) => {
    console.log(constructor)
    console.log(mehtodName)
    descriptor.writable = true
}


class Airplane2 implements AirCraftInterface2 {
    constructor(
        public _aircraftModel: string,
        private pilot: string
    ) { }

    @StaticMethodDecorator
    public static seatCound(): void {
        console.log("167 Seats")
    }

    // @MethodDecorator
    public pilotName() {
        console.log(this.pilot)
    }

    public get aircraftModel() {
        return this._aircraftModel
    }
}




const airplane2: AirCraftInterface2 = new Airplane2("Airbus A340", "Johny")


airplane2.pilotName = () => console.log("Function changed")