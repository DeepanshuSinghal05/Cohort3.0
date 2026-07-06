let arr = [10,20,30,40,50,60,70,80,90,100];

console.log(arr.length)

arr.push("I am push method");

console.log(arr)

arr.pop()

console.log(arr)

arr.unshift("I am unshift method")

console.log(arr)

arr.shift()

console.log(arr)

// arr.splice(starting index, number of elements to be removed)

console.log(arr.splice(1, 2))

console.log(arr)

// arr.splice(starting index, ending index, bumber to be added)

console.log(arr.splice(2,0,'I am added using spilce method'))

console.log(arr)

//Multi Dimensional Array

var multArr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
    ]

console.log(multArr[0], multArr[1], multArr[2])

// FOR of Loop

for(value of arr){
    console.log(value)
}

var EvenArr = []

for(a=0;a<100;a++){
    if(a%2==0){
        EvenArr.push(a)
    }
}
console.log(EvenArr)

//Concatination of Array

var arr1 = [1,2,3,4,5]
var arr2 = [6,7,8,9,10]

var newArr = arr1.concat(arr2)

console.log(newArr)

// spread operator

var MainArray = [20,50,70,'Hi','hello', 'hey']

var CopyArray = [...MainArray]

console.log(CopyArray)

CopyArray.push("I am added in copy array")

console.log(MainArray, CopyArray)