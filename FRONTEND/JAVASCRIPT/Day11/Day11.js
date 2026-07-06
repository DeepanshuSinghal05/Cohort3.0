var a = '50'
var a2 = Number(a)

var b = 100
var b2 = String(b)

var c = 'true'
var c2 = Boolean(c)

console.log("5"+2, "5"-2, true+1)

var d = "123abc"
var d2 = Number(d)
console.log(d2)

console.log(parseInt("500px") )

console.log(2+3)
console.log(25%4)
console.log(2**2)

var e = 10
e++
console.log(e)

e -= 1
console.log(e)

f = '10'

console.log(e==f, e===f)

var num1 = Number(prompt("Enter first number : "))
var num2 = Number(prompt("Enter second number : "))

console.log((num1>num2)?"First Number is Greater":"Second Number is Greater")

var num = Number(prompt("Enter a number : "))

if(num>=10 && num<=50){
    console.log("Number is between 10 and 50")
}


var password = prompt("Enter your password : ")
if(password.length>=8){
    console.log("Valid Password")
}else{
    console.log("Invalid Password")
}

var age = Number(prompt("Enter your age : "))
var license = prompt("Do you have a driving license? (yes/no) : ")

if(age>=18 && license.toLowerCase() === "yes"){
    console.log("You are eligible to drive.")}
else{console.log("You are not eligible to drive.")}

if(num1%2===0 && num1%3==0){
    console.log("Number is divisible by both 2 or 3")
}
else if(num1%2===0 || num1%3==0){
    console.log("Number is divisible by 2 or 3")
}
else{
    console.log("Number is not divisible by 2 or 3")
}


var time = Number(prompt("Enter time in 24-hour format (0-23) : "))
if(time>=5 && time<12){
    console.log("Good Morning")}
else if(time>=12 && time<17){
    console.log("Good Afternoon")}
else if(time>=17 && time<21){
    console.log("Good Evening")}
else if(time>=21 && time<5){
    console.log("Good Night")}
else{
    console.log("Invalid time")
}