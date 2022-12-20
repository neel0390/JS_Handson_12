//  1. Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

// class  Parent{
//     constructor() {
//         this.company = "BMW"

//     }
// }
// class Child extends Parent {
//     constructor(name, model) {
//         super()
//         this.name = name

//     }
// }
// let data = new Child("Audi")
// console.log( data.name );

// 2. Write code to explain prototype chaining
// const obj = {
//     num1: 1,
//     num2: 2,
//     // __proto__ sets the [[Prototype]]. It's specified here
//     // as another object literal.
// };
// obj.__proto__ = {
//     anotherNum : 24
// }
// console.log(obj.anotherNum);

// 3.Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays
// let arr = [1,2,3,4,5,6];
// const arraySum = {
//     addAll : function (arr) {
//         let sum = 0;
//         for(let i = 0; i < arr.length; i++ ) {
//             sum = sum + arr[i]
//         }
//         console.log(sum);
//     }
// }
// Array.__proto__ = arraySum;
// Array.addAll(arr)

// Write a JavaScript function to retrieve all the names of object's own and inherited properties.
// class Customer {
//     constructor() {
//         name = "Arun"
//     }
// }
// Customer.prototype.newCustomer = "Abhijeet";
// let data =  Customer.prototype.newCustomer
// console.log(data);
