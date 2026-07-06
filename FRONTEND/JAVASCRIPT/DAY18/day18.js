// "this" keyword in JavaScript refers to the current object that is executing the code. It can be used to access properties and methods of the object. The value of "this" depends on how the function is called. In the example below, we have an object "obj" with properties "firstName", "lastName", and "age". The method "getIntro" uses "this" to access these properties and print an introduction message.

var student1 = {
  firstName: "Deepanshu",
  lastName: "Singhal",
  age: 22,
  getIntro: function (city, state) {
    console.log(
      this.firstName +
        " " +
        this.lastName +
        " is " +
        this.age +
        " years old." +
        " He lives in " +
        city +
        ", " +
        state +
        "."
    );
  },
};

student1.getIntro("DelhiNCR", "UP");

var student2 = {
  firstName: "sarthak",
  lastName: "sharma",
  age: 33,
};

var student3 = {
  firstName: "Rohit",
  lastName: "sharma",
  age: 37,
};

// Call, Apply, Bind

student1.getIntro.call(student2, "Udaipur", "Rajasthan");

student1.getIntro.apply(student3, ["Mumbai", "Maharashtra"]);

//Bind returns a new function with the specified "this" value and arguments. It does not immediately invoke the function like call and apply. In the example below, we use bind to create a new function "out" that has "student2" as its "this" value and "Udaipur" and "Rajasthan" as its arguments. When we call "out()", it will execute the getIntro method with the context of student2.

var out = student1.getIntro.bind(student2, "Udaipur", "Rajasthan");


//PROTOTYPE

var arr = [1, 2, 3, 4, 5];

console.log(arr.__proto__)

