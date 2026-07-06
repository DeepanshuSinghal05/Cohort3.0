//OBJECTS

//Question 1 — Access User Name

let user = {
    name:"Ritik",
    age:21,
    city:"Bhopal"
    };

    console.log(user.name)

// Question 2 — Update User Age

console.log(user.age = 22)

// Question 3 — Add Country

user.country = 'India'

console.log(user.country)

// Question 4 — Delete Property

delete user.city

console.log(user)

// Question 5 — Check Property Exists

let product= {
    name:"Laptop",
    price:60000
    };

console.log(product.hasOwnProperty('price'))

// Question 6 — Print All Keys

let car= {
    brand:"BMW",
    model:"X5",
    year:2025
    };

let keys = []

for(let key in car){
    keys.push(key)
}

console.log(keys)

// Question 7 — Print All Values

let values = []

for(let key in car){
    values.push(car[key])
}

console.log(values)

// Question 8 — Print User Information Dynamically

for(let key in user){
    console.log(`${key}: ${user[key]}`)
}

// Question 9 — Employee Salary Increase

let employee= {
    name:"Aman",
    salary:50000
    };

employee.salary = employee.salary * 1.10

// Question 10 — Nested Object Access

let user2= {
    name:"Ritik",
    address: {
    city:"Bhopal",
    state:"MP"
    }
    };

console.log(user2.address.city)

// Question 11 — Object Destructuring

let student= {
    name:"Priya",
    age:20,
    course:"BCA"
    }

// Question 12 — Rename During Destructuring

let {name: studentName, age: studentAge, course: studentCourse} = student

// Question 13 — Merge User and Address

let user3= {
    name:"Ritik",
    age:21
    };

let address3= {
    city:"Bhopal",
    state:"MP"
    };

let mergedUser = {...user3,...address3}

console.log(mergedUser)

// Question 14 — Count Object Properties

let use4= {
    name:"Ritik",
    age:21,
    city:"Bhopal",
    country:"India"
    };

console.log(Object.keys(use4).length)

// Question 15 — Highest Paid Employee

let employees= {
    aman:25000,
    ritik:50000,
    priya:45000
    }

let highestPaidEmployee = Object.keys(employees)[0];

for(let employee in employees){
    if (employees[employee]>employees[highestPaidEmployee]){
        highestPaidEmployee = employee
    }
}

console.log(highestPaidEmployee)

// Question 16 — Most Used Programming Language

let votes= {
    JavaScript:25,
    Python:30,
    Java:15,
    Cpp:10
    };

let mostUsedLanguage = Object.keys(votes)[0];

for(let language in votes){
    if (votes[language]>votes[mostUsedLanguage]){
        mostUsedLanguage = language
    }
}

console.log(mostUsedLanguage)

// Question 17 — Reverse Key Value

let countries= {
    India:"Delhi",
    Japan:"Tokyo",
    France:"Paris"
    };

let reversedCountries = {} 

for(let country in countries){
    let capital = countries[country]
    reversedCountries[capital] = country
}
console.log(reversedCountries)

// Question 18 — Student Marks Summary

let marks= {
    math:90,
    science:80,
    english:85
};

let totalMarks = 0

for(let subject in marks){
    mark = marks[subject]
    totalMarks += mark
}

console.log(totalMarks)

// Question 19 — Find Missing Property

let user6= {
    name:"Ritik",
    age:21
    };

function findMissingProperty(obj, property){
    if (obj.hasOwnProperty(property)){
        return `${property} exists in the object`
    } else {
        obj[property] = `${property} not provided`
        return `${property} added to the object with value: ${obj.property}`
    }
}

console.log(findMissingProperty(user6, 'email'))
console.log(user6)

// Question 20 — Product Inventory Analyzer

let inventory= {
    mouse:25,
    keyboard:10,
    monitor:5,
    laptop:2
    };

//1. Total items in stock.
// 2. Product with highest stock.
// 3. Product with lowest stock.

let totalItems = 0

for(let product in inventory){
    totalItems += inventory[product]
}

console.log(totalItems)

let highestStockProduct = Object.keys(inventory)[0]

for(let product in inventory){
    if (inventory[product]>inventory[highestStockProduct]){
        highestStockProduct = product
    }
}

console.log(highestStockProduct)

let lowestStockProduct = Object.keys(inventory)[0]

for(let product in inventory){
    if (inventory[product]<inventory[lowestStockProduct]){
        lowestStockProduct = product
    }
}

console.log(lowestStockProduct)