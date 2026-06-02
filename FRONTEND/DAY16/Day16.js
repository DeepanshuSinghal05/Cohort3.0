//CRUD opertations

var obj = {
    name : "Deepanshu",
    Age : 22,
    City : "Delhi NCR"
}
console.log(obj)

obj.isSingle = false

console.log(obj)

obj.course = "Cohort3.0"

console.log(obj)

console.log(obj.City)

delete obj.isSingle

console.log(obj)


var obj1 = {
    name : "Virat Kohli",
    Age : 37,
    Skills : ["Batting", 'Fielding', 'Captain'],
    livesIn : "London",
    origin : "India",
    spouse : {
        name : "Anushka Sharma",
        age : 34,
        Children : 2
    },
    greet : ()=>{
        console.log("Hello I am Virat Kohli")
    }
}

// A FUNCTION  INSIDE A OBJECT IS CALLED A METHOD

var maths = {
    add : (a,b)=>{
        return a+b
    },
    square : (a)=>{
        return a*a
    },
    cube : (a)=>{
        return a*a*a
    },
    multiply : ( a, b )=>{
        return a*b
    }
}

console.log(obj1)

console.log(obj1.greet())

console.log(maths.add(2,3))

console.log(maths.cube(1000))

// FREEZE and SEAL 

Object.seal(obj)

obj.name = "MS DHONI"

console.log(obj)

Object.freeze(obj)

obj.name = "Rohit Sharma"

// Destructuring (deep copy and shallow copy)

//SHALLOW COPY

var profile = {
    name : "Deepanshu",
    Age : 22,
    City : "Delhi NCR",
    college : {
        name : "ABESIT",
        students : 1000,
        course : "Btech"
    }
}

var profile2 = {...profile}

profile2.name = "Dev"

profile2.college.students = 500

// console.log(profile2)
// console.log(profile)

//DEEP COPY 

var profile3 = JSON.parse(JSON.stringify(profile))

profile3.name = "Aakash"

profile3.college.students = 200

console.log(profile3)

console.log(profile)