//During ES5

function MakeProfile(firstName, lastName, contact, isVerified){
    this.firstName = firstName;
    this.lastName = lastName;
    this.contact = contact;
    this.isVerified = isVerified;
    this.showProfile = function(){
        if (this.isVerified){
            console.log(`Name: ${this.firstName} ${this.lastName}, Contact: ${this.contact}`);
        }
        else{
            console.log("student is not verified");
        }
    }
}

let s1 = new MakeProfile('Deepanshu', 'Singhal', 931334729, true)
let s2 = new MakeProfile('Dev', 'Singh', 84735332451, true)
let s3 = new MakeProfile('Anshul', 'Mishra', 8452352121, false)

console.log(s1)
console.log(s2)
console.log(s3)

s1.showProfile()

//after ES6

class MakeStudents{
    constructor(fName, lName, contact, isVerified){
        this.fName = fName;
        this.lName = lName
        this.contact = contact;
        this.isVerified = isVerified;
    }
    showProfile(){
        if (this.isVerified){
            console.log(`Name: ${this.fName} ${this.lName}, Contact: ${this.contact}`);
        }
        else{
            console.log("student is not verified");
        }
    }
}

let s4 = new MakeStudents('Deepanshi', 'Saxena', 931334729, true)
let s5 = new MakeStudents('Devansh', 'Singh', 84735332451, true)
let s6 = new MakeStudents('Anshul', 'Bishra', 8452352121, false)

console.log(s4)
console.log(s5)
console.log(s6)

s6.showProfile()

class User{
    constructor(fname, lname, contact){
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
    }
    greet(){
        console.log("Good Morning", this.fname);
    }
}

let user1 = new User('Deepanshu', 'Singhal', 931334729)

user1.greet()

class Admin extends User{
    constructor(fname, lname, contact, role){
        super(fname, lname, contact);
        this.role = role;
    }
    showRole(){
        console.log(`Admin Role: ${this.role}`);
    }
}

let user2 = new Admin('Dev', 'Singh', 84735332451, 'Super Admin')

user2.greet()
user2.showRole()