"use strict";



// 01- Create a variable called carName, assign the value Volvo to it.

let carName = "Volvo";
console.log(carName)






// 02- On one single line, declare three variables with the following names and values:


// let firstName = "John";  
// let lastName = "Doe" 
// let age = 35 ; 

// let fullInfo = firstName +" "+ lastName + " " + age;

// console.log(fullInfo)





// 03- Use the correct assignment operator that will result in x being 50 (same as x = x * y).

let x = 10;
let y = 5;
let z = x * y;

console.log(z)





// 04- Use comments to describe the correct data type of the following variables:

let length = 16; // data type  Number
let lName = "Johnson"; // data type is String 

const a = {
  firstName: "John",  
  lastName: "Doe"
};    // data type is Object 





// 05- Execute the function named myFunction.

// function myFunction() {
//     alert("Hello World!");
// }
// myFunction()





// 06- Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").

// let person = {
//     name: "John",
//     age: 50
// } 
// alert (person.name + " is " + person.age)





// 07- The <button> element should do something when someone clicks on it. Try to fix it!

function Dog(){
    
    alert("Please Subscribe Hablu Programmer");

}
Dog()





// 08- Array Related Question 

// 01-Alert the number of items in an array, using the correct Array property: 

// function countArray(){
//     const cars = ["Volvo", "Jeep", "Mercedes"];

//     alert ("The number of item in an array is " + cars.length)
// }
// countArray()

// 02-  Change the first item of Brand to "Ford".

// const Brand = ["Volvo", "Jeep", "Mercedes"]; 
// Brand[0] = "Ford"

// console.log(Brand)





// 09- Math Related Problems

// 01- Use the correct Math method to create a random number.
console.log(Math.random())

// 02-  Use the correct Math method to return the largest number of 10 and 20.

console.log(Math.max(10,20))

// 03- Use the correct Math method to get the square root of 9.

console.log(Math.sqrt(9))



// 10- comparison operator related problems! 
// 01- Choose the correct comparison operator to alert true, when x is greater than y. 
// let n = 10;
// let m = 5;

// alert(n > m)

// 02- Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

// let age = 18;
// let yourInfo = age < 18 ? "Too young" : "Old enough";

// alert(yourInfo)