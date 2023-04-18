// THIS KEYWORD IN JS 

// method :> object
// function :> window, global

const book = {
    title: "Star Wars Thrawn",
    authors: ["john", "mark", "rob"],
    read() {
        console.log(this)
    },
    printAuthors() {
        // this.authors.forEach(function (author) { console.log(this.title + " - " + author) }, this)
        this.authors.forEach(author => console.log(this.title + " - " + author))
    }
}

book.read()

book.stopreading = function () {
    console.log(this)
}

book.stopreading()


book.printAuthors()

function User(name, email) {
    this.name = name;
    this.email = email;
    this.points = 0;
}

User.prototype.login = function () {
    console.log(this.name, 'Has logged in');
};

User.prototype.logout = function () {
    console.log(this.name, 'Has logged out');
};

User.prototype.addPoint = function () {
    this.points++;
    console.log('total points', this.points);
};


function AdminUser(name, email, peopleReporting) {
    User.apply(this, [name, email])
    this.peopleReporting = peopleReporting
}

AdminUser.prototype = Object.create(User.prototype)

const user = new User('John', 'john@email.com');

const adminUser = new AdminUser("Johnny", "johnny@gmx.de", 10)

// no need to do it like this user.prototype.addPoint
user.addPoint()

const car = {
    brand: "Mercedes",
    ps: 160,
    model: "C-Class"
}

Object.defineProperty(car, "brand", {
    value: "Mercedes-Benz",
    writable: false,
    enumerable: true,
    configurable: true
})

// dont changes any value 
car.brand = "BMW"
