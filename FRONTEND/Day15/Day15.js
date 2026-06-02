//forEach  used for ITERATION

var arr = [10,-290,30, -40,50, 34,-10, -34, 566, 69];

var sum = 0

arr.forEach(function(value){
    sum = sum+value
})

console.log(sum)

//MAP used for TRANSFORMATION 

var arr2 = arr.map(function(value){
    return value*value
})

console.log(arr2)

var names = [ 'Rohit','Virat','Dhoni','Rishabh']

var names2 = names.map(function(value){
    return value+" Sharma"
})

console.log(names2)

//Filter used for FILTERATION of an array based on a condition

var arr3 = arr.filter(function(element){
    return element>0 //Condition that is used for filteration
})

console.log(arr3)

//REDUCE turns the array into SINGLE VALUE 

var arr4 = [10,40,512,23443,46647,1233,23,-7]

var greater = arr4.reduce(function(acc,val){
    if(val>acc){
        return val
    }
    return acc
},0)

console.log(greater)

//FIND return the first matching Element based on a condition in the array 

var findElem = arr.find(function(value){
    return value>100
})

console.log(findElem)

//DESTRUCTURING

var arr5 = [10,20,30,40,50]

var [a,b,...c] = arr5

console.log(a,b,c)
