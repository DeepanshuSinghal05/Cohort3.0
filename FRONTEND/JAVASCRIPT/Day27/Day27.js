// OOPs Practice Questions
// Question 1 — Understanding this in an Object
const user= { 
    name:"Ritik", 
    greet() { console.log(this.name); }
 };

 user.greet()

//  Question 2 — Default Binding

function show() { 
    console.log(this);
 } 
show();

// Question 3 — call()
function introduce() {
     console.log(this.name); } 

const person= { name:"Ritik" };

introduce.call(person);

// Question 4 — apply()

function introduce1(city,country) { 
    console.log(`${this.name} from ${city}, ${country}`); } 

introduce1.apply(person,["Delhi","India"]);


// Question 5 — Fix Lost 'this'

const user1= { 
    name:"Ritik",
    greet() { console.log(this.name); }
     };

const fn = user1.greet.bind(user1);

fn()

// Question 6 — Create an Inheritance Chain

const animal= { 
    eats : true
 };

 const dog = Object.create(animal);
 
 console.log(dog.eats); // true

//  Question 7 — Prototype Method

function Person2(name) {
     this.name=name;
     }

Person2.prototype.greet = function() {
        console.log(`Hello, my name is ${this.name}`); }

// Question 8 — Student Class System

class Student{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }

    getGrade(){
        if(this.marks>=90){
            return 'A';
        } else if(this.marks>=80){
            return 'B';
        } else if(this.marks>=70){
            return 'C';
        } else if(this.marks>=60){
            return 'D';
        } else {
            return 'F';
        }
    }
}

const student1 = new Student("Ritik", 20, 85);

console.log(student1.getGrade()); // Output: B

// Question 9 — Employee Inheritance

class Employee{
    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }

    work(){
        console.log(`${this.name} is working.`);
    }
}

class Develpoer extends Employee{
    constructor(name,age,salary,language){
        super(name,age,salary);
        this.language=language;
    }

    code(){
        console.log(`${this.name} is coding in ${this.language}.`);
    }
}

const emp1 = new Develpoer("Ritik", 25, 50000, "JavaScript");
emp1.work(); // Output: Ritik is working.\
emp1.code(); // Output: Ritik is coding in JavaScript.

// Question 10 — Bank Account (InterviewLevel)

class BankAccount{
    #balance
    constructor(owner, balance){
        this.owner = owner;
        this.#balance = balance;
    }
    deposit(amount){
        if(amount > 0){
            this.#balance += amount;
            console.log(`Deposited ${amount} `);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }
    withdrawl(amount){
        if(amount > 0 && amount <= this.#balance){
            this.#balance -= amount;
            console.log(`Withdrew ${amount}`);
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }
    getBalance(){
        return this.#balance;
    }
}

const account = new BankAccount("Ritik", 1000);

account.deposit(500); // Deposited 500
account.withdrawl(200); // Withdrew 200
console.log(account.getBalance()); // 1300

// Library Management System

class Library{
    constructor(title,author,borrowed){
        this.book = []
    }

    addBooks(title,author){
      this.book.push({title,author,borrowed:false});
    }

    borrowBooks(title){
        const book = this.book.find(b => b.title === title);
        if(book && !book.borrowed){
            book.borrowed = true;
            console.log(`You have borrowed "${book.title}" by ${book.author}.`);
        } else {
            console.log(`Sorry, "${title}" is not available.`);
        }
    }

    returnBooks(title){
        const book = this.book.find(b => b.title === title);
        if(book && book.borrowed){
            book.borrowed = false;
            console.log(`You have returned "${book.title}" by ${book.author}.`);
        } else {
            console.log(`Sorry, "${title}" was not borrowed.`);
        }
    }

    showAvailableBooks(){
        const availableBooks = this.book.filter(b => !b.borrowed);
        if(availableBooks.length > 0){
            console.log("Available books:");
            availableBooks.forEach(book => {
                console.log(`- "${book.title}" by ${book.author}`);
            });
        } else {
            console.log("No books are currently available.");
        }
    }

}

const books1 = new Library();

books1.addBooks("The Great Gatsby", "F. Scott Fitzgerald");

const books2 = new Library();

books2.addBooks("To Kill a Mockingbird", "Harper Lee");

books1.showAvailableBooks();