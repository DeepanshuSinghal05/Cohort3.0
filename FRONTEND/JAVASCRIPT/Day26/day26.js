// Arrays + Objects + Functions

// Question 1 — Find Adult Users

let users= [
    { name:"Ritik", age:20 },
    { name:"Aman", age:16 },
    { name:"Priya", age:25 }
    ];

function getAdultUsers(users){

    let adultUsers = []
    for(let i=0; i<users.length; i++){
        if(users[i].age >= 18){
            adultUsers.push(users[i])
        }
    }
    return adultUsers
}

console.log(getAdultUsers(users))

// Question 2 — Product Names Extractor

let products= [
    { name:"Laptop", price:50000 },
    { name:"Mouse", price:500 }
    ];

function getProductNames(products){
    let product = []
    for(let i=0;i<products.length;i++){
        product.push(products[i].name)
    }
    return product
}

console.log(getProductNames(products))

// Question 3 — Find User By Name

let users1= [
    { name:"Ritik" },
    { name:"Aman" },
    { name:"Priya" }
    ];

function findUsers(users, username){
    for(let i=0; i<users.length; i++){
        if(users[i].name === username){
            return `User found: ${users[i].name}`
        }
    }
    return 'user not found'
}

console.log(findUsers(users1, "Aman"))

// Question 4 — Total Marks

let students= [
    { name:"Ritik", marks:80 },
    { name:"Aman", marks:90 },
    { name:"Priya", marks:70 }
    ];

function getMarks(students){
    let totalMarks = 0
    for(let i=0; i<students.length; i++){
        totalMarks += students[i].marks
    }
    return totalMarks
}

console.log(getMarks(students))

// Question 5 — Available Products

let products1= [
    { name:"Mouse", stock:10 },
    { name:"Keyboard", stock:0 },
    { name:"Monitor", stock:5 }
    ];

function stockFinder(products1){
    let availableProducts = []
    for(let i=0; i<products1.length; i++){
        if(products1[i].stock > 0){
            availableProducts.push(products1[i].name)
        }
    }
    return availableProducts
}

console.log(stockFinder(products1))

// Question 6 — Add New Student

function addStudents(students, student){
    students.push(student)
    return students
}

console.log(addStudents(students, { name:"Amit Mishra", marks:85 }))

// Question 7 — Count Premium Products

let products2= [
    { name:"Laptop", price:50000 },
    { name:"Phone", price:30000 },
    { name:"Mouse", price:500 }
    ];

function findPremiumProducts(products2){
    let PremiumProducts = []
    for(let i=0; i<products2.length; i++){
        if(products2[i].price > 10000){
            PremiumProducts.push(products2[i])
        }
    }
    return PremiumProducts
}

console.log(findPremiumProducts(products2))

// Question 8 — Shopping Cart Total

let cart= [
    { name:"Mouse", price:500, qty:2 },
    { name:"Keyboard", price:1000, qty:1 },
    { name:"Monitor", price:10000, qty:1 }
    ];

function getCartTotal(cart){
    let total = 0
    for(let i=0; i<cart.length; i++){
        total += cart[i].price * cart[i].qty
    }
    return total
}

console.log(getCartTotal(cart))

// Question 9 — Student Average Generator

let students2= [
    { name:"Ritik", marks: [80,90,85] },
    { name:"Aman", marks: [70,75,80] }
    ];

function generateAverageMarks(students2){
    let averageMarks = []
    for(let i=0;i<students2.length; i++){
        let sum = 0
        for(let j=0; j<students2[i].marks.length; j++){
            sum += students2[i].marks[j]
        }
        let average = sum / students2[i].marks.length
        averageMarks.push({ name: students2[i].name, averageMarks: average })
    }
    return averageMarks
}

console.log(generateAverageMarks(students2))

// Question 10 — Inventory Search

let
inventory= [
{ id:1, name:"Laptop" },
{ id:2, name:"Mouse" },
{ id:3, name:"Monitor" }
];

function findProductById(inventory, id){
    for(let i=0; i<inventory.length; i++){
        if(inventory[i].id === id){
            return `Product found: ${inventory[i].name}`
        }
    }
    return 'Product not found'
}

console.log(findProductById(inventory, 2))

// Question 11 — Usernames Generator

let users3= [
    { name:"Ritik Rajput" },
    { name:"Aman Gupta" }
    ];

function usernameGenerator(users3){
    for(let i=0; i<users3.length; i++){
        let nameParts = users3[i].name.replace(/\s/g, '_').toLowerCase()
        users3[i].username = nameParts
    }
    return users3
}

console.log(usernameGenerator(users3))

// Question 12 — Highest Scoring Student

let students3= [
    { name:"Ritik", marks:85 },
    { name:"Aman", marks:95 },
    { name:"Priya", marks:75 }
    ];

function getHighestMarks(students3){
    let highestMarks = 0
    let highestScoringStudent = ''
    for(let i=0; i<students3.length; i++){
        if(students3[i].marks > highestMarks){
            highestMarks = students3[i].marks
            highestScoringStudent = students3[i].name
        }
    }
    return `Highest scoring student: ${highestScoringStudent} with marks: ${highestMarks}`
}

console.log(getHighestMarks(students3))

// Question 13 — Update Product Stock

function updateStock(id,quantity){
    for(let i=0; i<products1.length; i++){
        if(products1[i].id === id){
            products1[i].stock += quantity
            return products1[i]
        }
    }
    return 'Product not found'
}

console.log(updateStock(1, 5))

// Question 14 — Sort Students by Marks

let students4 = [
    {name:"A", marks:70},
    {name:"B", marks:95},
    {name:"C", marks:80}
    ]

function sortByMarks(students4){
    students4.sort((a,b) => b.marks - a.marks)
    return students4
}

console.log(sortByMarks(students4))

// Question 15 — Student Grade Report

let students5= [
    {
    name:"Ritik",
    marks: [80,90,85]
    },
    {
    name:"Aman",
    marks: [50,40,60]
    }
    ];

    function generateReport(students5){
    let report = []
    for(let i=0; i<students5.length; i++){
        let sum = 0
        for(let j=0; j<students5[i].marks.length; j++){
            sum += students5[i].marks[j]
        }
        let average = sum / students5[i].marks.length
        let grade = ''
        if(average >= 90){
            grade = 'A'
        } else if(average >= 80){
            grade = 'B'
        } else if(average >= 70){
            grade = 'C'
        } else if(average >= 60){
            grade = 'D'
        } else {
            grade = 'F'
        }
        report.push({ name: students5[i].name, averageMarks: average, grade: grade })
    }

    return report
}

console.log(generateReport(students5))

// Question 16 — Product Revenue Analyzer

let products4= [
    {
    name:"Mouse",
    price:500,
    sold:20
    },
    {
    name:"Keyboard",
    price:1000,
    sold:10
    }
    ];

function productRevenueAnalyzer(products4){
    let revenue = []
    let highestSellingProduct = ''
    let highestRevenue = 0
    for(let i=0; i<products4.length; i++){
        let productRevenue = products4[i].price * products4[i].sold
        revenue.push({ name: products4[i].name, revenue: productRevenue })
        if(productRevenue > highestRevenue){
            highestRevenue = productRevenue
            highestSellingProduct = products4[i].name
        }
    }
    return { revenue: revenue, highestSellingProduct: highestSellingProduct, highestRevenue: highestRevenue }
}

console.log(productRevenueAnalyzer(products4))

// Question 17 — Attendance System

let
students6= [
{ name:"Ritik", present:true },
{ name:"Aman", present:false },
{ name:"Priya", present:true }
];

function countPresent(students6){
    let count = 0
    for(let i=0; i<students6.length; i++){
        if(students6[i].present){
            count++
        }
    }
    return count
}

function countAbsent(students6){
    let count = 0
    for(let i=0; i<students6.length; i++){
        if(!students6[i].present){
            count++
        }
    }
    return count
}

function getPresntStudents(stuents6){
    let presentStudents = []
    for(let i=0; i<students6.length; i++){
        if(students6[i].present){
            presentStudents.push(students6[i].name)
        }
    }
    return presentStudents
}

console.log(countPresent(students6))
console.log(countAbsent(students6))
console.log(getPresntStudents(students6))

// Question 18 — Library Management System

let books = [{
    id:1,
    title:"Atomic Habits",
    borrowed:false
    }]

function addBooks(id, title, borrowed){
    books.push({ id: id, title: title, borrowed: borrowed })
    return books
}

function boorowBook(books, id){
    for(let i=0; i<books.length; i++){
        if(books[i].id === id){
            if(!books[i].borrowed){
                books[i].borrowed = true
                return `You have borrowed: ${books[i].title}`
            } else {
                return 'Book is already borrowed'
            }
        }
    }
    return 'Book not found'
}

function returnBooks(id, books){
    for(let i=0; i<books.length; i++){
        if(books[i].id === id){
            if(books[i].borrowed){
                books[i].borrowed = false
                return `You have returned: ${books[i].title}`
            } else {
                return 'Book was not borrowed'
            }
        }
    }
    return 'Book not found'
}

function showAvailableBooks(books){
    let availableBooks = []
    for(let i=0; i<books.length; i++){
        if(!books[i].borrowed){
            availableBooks.push(books[i].title)
        }
    }
    return availableBooks
}

console.log(addBooks(2, "The Power of Habit", false))
console.log(boorowBook(books, 1))
console.log(returnBooks(1, books))
console.log(showAvailableBooks(books))

// Question 19 — Order Management System

let orders = [{
    id:1,
    customer:"Ritik",
    amount:5000,
    status:"Pending"
    }]

function createOrder(customer,amount,status){
    let id = orders.length + 1
    orders.push({ id: id, customer: customer, amount: amount, status: status })
    return orders
}

function updateStatus(id, status){
    for(let i=0; i<orders.length; i++){
        if(orders[i].id === id){
            orders[i].status = status
            return `Order ${id} status updated to ${status}`
        }
    }
    return 'Order not found'
}

function getPendingOrders(orders){
    let pendingOrders = []
    for(let i=0; i<orders.length; i++){
        if(orders[i].status === 'Pending'){
            pendingOrders.push(orders[i])
        }
    }
    return pendingOrders
}

function getCompletedOrders(orders){
    let completedOrders = []
    for(let i=0; i<orders.length; i++){
        if(orders[i].status === 'Completed'){
            completedOrders.push(orders[i])
        }
    }
    return completedOrders
}

// Question 20 — Mini E-Commerce System

let products7 = [{
    id:1,
    name:"Laptop",
    price:50000,
    stock:10
    }]

function addProduct(name, price, stock){
    let id = products7.length + 1
    products7.push({ id: id, name: name, price: price, stock: stock })
    return products7
}

function removeProduct(id){
    for(let i=0; i<products7.length; i++){
        if(products7[i].id === id){
            products7.splice(i, 1)
            return `Product with id ${id} removed`
        }
    }
    return 'Product not found'
}

function updateStocks(id, quantity){
    for(let i=0; i<products7.length; i++){
        if(products7[i].id === id){
            products7[i].stock += quantity
            return products7[i]
        }
    }
    return 'Product not found'
}

function purchaseProduct(name, quantity){
    for(let i=0; i<products7.length; i++){
        if(products7[i].name === name){
            if(products7[i].stock >= quantity){
                products7[i].stock -= quantity
                return `You have purchased ${quantity} ${name}(s)`
            } else {
                return 'Not enough stock available'
            }
        }
    }
}

function getInventoryValue(products7){
    let totalValue = 0
    let eachProductValue = []
    for(let i=0; i<products7.length; i++){
        let productValue = products7[i].price * products7[i].stock
        eachProductValue.push({ name: products7[i].name, value: productValue })
        totalValue += productValue
    }
    return { totalInventoryValue: totalValue, eachProductValue: eachProductValue }
}

console.log(addProduct("Phone", 30000, 20))
console.log(removeProduct(1))
console.log(updateStocks( 2, 10))
console.log(purchaseProduct("Phone", 5))
console.log(getInventoryValue(products7))