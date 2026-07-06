// FUNCTIONS

// Question 1 — Greeting Function

function greet(name){
    console.log(`Good Morning, ${name}!`)
}

greet("Deepanshu")

// Question 2 — Add Two Numbers

function add(num1, num2){
    return num1 + num2
}

console.log(add(5, 10))

// Question 3 — Find Square

function square(num){
    return num * num
}

console.log(square(100))

// Question 4 — Check Even Number

function isEven(num){
    if(num % 2 === 0){
        return true
    }
    return false
}

console.log(isEven(4)) // true

// Question 5 — Default Username

function greeet(name = "Dev"){
    console.log(`Hello, ${name}!`)
}

greeet() // Hello, Dev!

// Question 6 — Celsius to Fahrenheit

function celsiusToFahrenheit(celsius){
    return (celsius * 9/5) + 32
}

console.log(celsiusToFahrenheit(0)) // 32

// Question 7 — Arrow Function Practice

// functionmultiply(a,b) {
// return a*b;
// }

const multiply = (a, b) => a * b

console.log(multiply(5, 10)) // 50

// Question 8 — Discount Calculator

function calculateDiscount(price){
    return price * 0.9
}

console.log(calculateDiscount(100)) // 90

// Question 9 — Largest of Three Numbers

function findLargestNumber(a,b,c){
    if(a >= b && a >= c){
        return a
    } else if(b >= a && b >= c){
        return b
    } else {
        return c
    }
}

console.log(findLargestNumber(10, 20, 15)) // 20

// Question 10 — Reverse String

function reverseString(str){
    return str.split('').reverse().join('')
}

console.log(reverseString("Hello")) // "olleH"

// Question 11 — Count Vowels

function countVowels(str){
    const vowels = 'aeiouAEIOU'
    let count = 0
    for(let char of str){
        if(vowels.includes(char)){
            count++
        }
    }
    return count
}

console.log(countVowels("Hello World")) // 3

// Question 12 — Generate Username

function generateUsername(name){
    return name.toLowerCase().replace(/\s/g, '_') + Math.floor(Math.random() * 1000)
}

console.log(generateUsername("Ritik Rajput"))

// Question 13 — Dynamic Sum Function

function sum(...numbers){
    return numbers.reduce(function(total, sum1){
        return total + sum1
    },0)
}

console.log(sum(1, 2, 3, 4, 5)) // 15

// Question 14 — Login Validation

function validateLogin(username, password){
    if(username === 'admin' && password === 'password123'){
        return "Login successful!"
    }
    return "Invalid username or password."
}

console.log(validateLogin('admin', 'password123')) // Login successful!

// Question 15 — Factorial Function

function factorial(n){
    return n <= 1 ? 1 : n * factorial(n - 1)
}

console.log(factorial(5)) // 120

// Question 16 — Palindrome Checker

function pallindromeChecker(str){

    let reversedStr = str.split('').reverse().join('')

    if (str === reversedStr){
        return 'It is a pallindrome'
    }

    return "Not a palindrome"

}

console.log(pallindromeChecker("madam")) // It is a pallindrome

// Question 17 — Password Strength CheckerQ

function passwordStrengthChecker(password){
   let passLen = password.length

   let nums = '1234567890'

   for(let char of password){
    if(nums.includes(char) && passLen >= 8){
        return "Strong password"
    }
   }
   return "Weak password"
}

console.log(passwordStrengthChecker("pass1234")) // Strong password

// Question 18 — Function Returning Function

function makeMultiplier(multiplier){
    return function(num){
        return num * multiplier
    }
}

let double = makeMultiplier(2)

console.log(double(10))

// Question 19 — Callback Function

function processUser(name,callback){
    console.log(`Processing user: ${name}`)
    callback()
}

function afterProcessing(){
    console.log("Processing User...")
    console.log(`Welcome ${name}!`)
}

processUser("Deepanshu", afterProcessing)

// Question 20 — Shopping Bill Generator

let items = [
    { name:"Mouse", price:500 },
    { name:"Keyboard", price:1000 },
    { name:"Monitor", price:10000 }
    ]

function generateBill(items){
    let total = 0
    console.log("Shopping Bill:")
    items.forEach(function(item){
        console.log(`${item.name}: ₹${item.price}`)
        total += item.price
    })
    console.log(`Total: ₹${total}`)
}

generateBill(items)