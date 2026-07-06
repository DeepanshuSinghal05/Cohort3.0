function a1(){
    console.log("Normal Function")
}

var a2 = function(){
    console.log("Function Expression")
}

var a3=(a)=>{
    console.log("Arrow Function",a)
}

a1();
a2();
a3(69);  

(function(){
    console.log("This is an IIFE (Immediately Invoked Function Expression)")
})()


/*FUNCTION CALL BACK*/ 

function main(a){
    console.log("I am a main function");
    console.log(a);
    a();
}

function hero(){
    console.log('I am a Hero function');
}

main(hero);