//ARRAYS

//Question 1 — Find Expensive Products

let prices= [100,250,500,150,700];

let filteredArray = prices.filter(function(price){
    return price>300
})

console.log(filteredArray)

//Question 2 — Last Student in Class

let students= ["Aman","Ritik","Priya","Rahul"];

students.forEach(function(student,index){
    console.log(`${student} is at index ${index}`)
})

//Question 3 — Add New Product

let products= ["Laptop","Mouse","Keyboard"];

products.push("Monitor");

console.log(products)

//Question 4 — Remove Last Notification

let notifications= [
    "Order Placed",
    "Order Shipped",
    "Order Delivered"
    ];

console.log(notifications.pop())
console.log(notifications)

//Question 5 — Check User Exists

let users= ["Aman","Ritik","Priya"];

console.log(users.includes('Ritik'))

//Question 6 — Convert Marks to Percentage

let marks1= [80,90,70];

let percentageMarks = marks1.map(function(marks1){
    return (String((marks1/100)*100))+"%"
})

console.log(percentageMarks)

//Question 7 — Count Products

let cart= [
    "Mouse",
    "Keyboard",
    "Monitor",
    "Laptop"
    ];

console.log(cart.length)

// /Question 8 — Student Average

let marks= [80,90,70,85,95];

avg = (marks.reduce(function(total,marks){
    return (total+marks)
},0))/marks.length

console.log(avg)

//Question 9 — Even Numbers Finder

let numbers= [1,2,3,4,5,6,7,8];

let evenNumbers = numbers.filter(function(number){
    if (number%2===0){
        return number
    }
})

console.log(evenNumbers)

//Question 10 — Product Search

let products2= [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor"
    ];

console.log(products.indexOf("Keyboard"))

//Question 11 — Total Revenue

let sales= [500,700,1000,300];

console.log(sales.reduce(function(total,sales){
    return total+sales
},0))

//Question 12 — Uppercase Usernames

let users2= ["ritik","aman","priya"];

let UppercaseUsers = users2.map(function(users2){
    return users2.toUpperCase()
})

console.log(UppercaseUsers)

//Question 13 — Find First Adult

let ages= [12,15,17,19,22];

console.log(ages.find(function(age){
    return age>=18
}))

//Question 14 — Positive Number Check

let nums= [5,8,10,3];

let positiveNumbers = nums.every(function(num){
    return num>0
})
console.log(positiveNumbers)

//Question 15 — Most Frequent Number

let numbers1= [1,2,3,2,4,2,5,1,1,1];

let frequency = {};

numbers1.forEach(function(number){
    if (frequency[number]){
        frequency[number]++;
    } else {
        frequency[number]=1;
    }
})

let mostFrequentNumber = numbers1[0];
let maxFrequency = frequency[mostFrequentNumber];

for (let number in frequency){
    if (frequency[number]>maxFrequency){
        mostFrequentNumber = number;
        maxFrequency = frequency[number];
    }
}

console.log(mostFrequentNumber)

//Question 16 — Second Largest Number

let nums3= [10,50,20,80,40];

let sortedArray = nums3.sort(function(a,b){
    return a-b
})

console.log(sortedArray[sortedArray.length-2])

//Question 17 — Remove Duplicates

let ids= [1,2,2,3,4,4,5,5];

let nonDuplicateIds = ids.filter(function(id,index){
    return ids.indexOf(id)===index
})

console.log(nonDuplicateIds)

//Question 18 — Longest Word

let words= [
    "JavaScript",
    "HTML",
    "CSS",
    "Programming"
    ];

let longestWord = words.reduce(function(longest,word){
    return word.length>longest.length ? word : longest
},"")

console.log(longestWord)

//Question 19 — Rotate Array Right

let nums4= [1,2,3,4,5];

let lastElement = nums4.pop();

nums4.unshift(lastElement);

console.log(nums4)

//Question 20 — Best Selling Product

let sales2= [
    "Mouse",
    "Keyboard",
    "Mouse",
    "Laptop",
    "Mouse",
    "Keyboard"
    ];

let mostSaledProduct = sales2[0];

let frequency2 = {};

sales2.forEach(function(product){
    if (frequency2[product]){
        frequency2[product]++;
    } else {
        frequency2[product]=1;
    }
}) 

let maxFrequency2 = frequency2[mostSaledProduct];

for (let product in frequency2){
    if (frequency2[product]>maxFrequency2){
        mostSaledProduct = product;
        maxFrequency2 = frequency2[product];
    }
}

console.log(mostSaledProduct)