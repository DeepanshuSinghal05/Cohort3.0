//ARRAYS

//Q1
let prices= [100,250,500,150,700];

let newPrices = prices.filter(function(price){
    return price>300
}  )

console.log(newPrices)

//Q2

let marks= [80,90,70,85,95];

let avgMarks = (marks.reduce(function(total, value){
    return total + value;
},0)) / marks.length;

console.log(avgMarks)

//Q3

let numbers= [1,2,3,2,4,2,5,1,1,1];

let count = {}

for(let i=0; i<numbers.length; i++){
    let num = numbers[i];
    if(count[num]){
        count[num]++;
    }
    else{
        count[num] = 1;
    }
}

console.log(count)

//Objects

//Q4

let user= { name:"Ritik", age:20 };

user.age = 21

console.log(user)

//Q5
let user1= { name:"Ritik", age:20, city:"Bhopal" };

for(let key in user1){
    console.log(key + ": " + user1[key])
}

//Q6

let employees= { 
    aman:25000, 
    ritik:50000,
    priya:45000
 };

let highestSalary = 0;

for(let employee in employees){
    if(employees[employee] > highestSalary){
        highestSalary = employees[employee];
    }
}

console.log(highestSalary)

for(let employee in employees){
    if(employees[employee] === highestSalary){
        console.log(employee)
    }
}

//Functions

//Q7

let names = "Ritik"

function greet(name){
    console.log("Hello", name)
}

greet(names)

//Q8

function calculateDiscount(price){
    return price * 0.9
}

console.log(calculateDiscount(500))

//Q9

function sum(...numbers){
    return numbers.reduce(function(total, value){
        return total + value
    }, 0)
}

console.log(sum(1,2,3,4,5))

//Q10

let users= [ 
     { name:"Ritik", age:20 },
     { name:"Aman", age:16 },
     { name:"Priya", age:25 } ];

function getAdults(users){
    return users.filter(function(user){
        return user.age>18
    })
}

console.log(getAdults(users))

//Q11

let cart= [ 
    { name:"Mouse", price:500, qty:2 },
    { name:"Keyboard", price:1000, qty:1 },
    { name:"Monitor", price:10000, qty:1 }
 ]

function getCartTotal(cart){
    return cart.reduce(function(total, item){
        return total + item.price * item.qty
    },0)
}

console.log(getCartTotal(cart))

//Q12

let students= [ { 
    name:"Ritik" , 
    marks: [80,90,85] 
}, 
{ name:"Aman",
 marks: [50,40,60]
 } 
];

function generateReport(students){
    return students.map(function(student){
        let avgMarks = student.marks.reduce(function(total, value){
            return total + value
        },0) / student.marks.length;

        if(avgMarks >= 85){
            return  {
                name: student.name,
                averageMarks: avgMarks,
                grade: "A"
            }
        }
        else if(avgMarks >= 70 && avgMarks < 85){
            return {
                name: student.name,
                averageMarks: avgMarks,
                grade: "B"
            }
        }
        else if(avgMarks >= 50 && avgMarks < 70){
            return {
                name: student.name,
                averageMarks: avgMarks,
                grade: "C"
            }
        }
        else{
            return {
                name: student.name,
                averageMarks: avgMarks,
                grade: "D"
            }
        }
    })
}

console.log(generateReport(students))

//MAIN QUESTION (VERY HARD)

let books = [{
    id : 1,
    title : "Atomic Habits",
    author : "James Clear",
    borrowed : false 
}]

function addBook(title, author){
    let newBook = {
        id : books.length + 1,
        title : title,
        author : author,
        borrowed : false
    }
    books.push(newBook)

}

function borrowBook(id){
    let book = books.find(function(book){
        return book.id === id
    })

    if(book && !book.borrowed){
        book.borrowed = true
        console.log("You have borrowed", book.title)
    }
    else if(book && book.borrowed){
        console.log("Sorry, this book is already borrowed")
    }
    else{
        console.log("Book not found")
    }
}

function returnBook(id){
    let book = books.find(function(book){
        return book.id === id
    })

    if(book && book.borrowed){
        book.borrowed = false
        console.log("You have returned", book.title)
    }
    else if(book && !book.borrowed){
        console.log("This book was not borrowed")
    }
    else{
        console.log("Book not found")
    }
}

function showAvailableBooks(){
    let availableBooks = books.filter(function(book){
        return !book.borrowed
    })

    console.log("Available Books:")
    availableBooks.forEach(function(book){
        console.log(book.title, "by", book.author)
    })
}

borrowBook(1)

addBook("The Power of Now", "Eckhart Tolle")

console.log(books)