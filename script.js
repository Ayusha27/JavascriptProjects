// let arr = [1,2,3,4,5,6,7,8,9,10];

// arr.forEach((num) => {
//     console.log(num);
// });


// 1️⃣ Double the numbers
// let arr = [1, 2, 3, 4, 5]
// 👉 Create a new array where each number is doubled.


// let input = prompt("Enter numbers with commas:")
// // let arr = input.split(",").map(Number)
// let arr = input.split(",").map((val) => {
//     return Number(val)
// });
// console.log(arr)

// let doubledNum = arr.map((val) => {
//     return val ** 2
// })

// console.log(doubledNum)



// 2️⃣ Convert to uppercase
// let words = ["apple", "banana", "mango"]
// 👉 Convert all words to uppercase.

// let input = prompt("Enter words with commas:")
// let words = input.split(",").map((val) => {
//     return val.trim().toUpperCase()
// });
// console.log(words)


// Extract names
// let users = [
//   { name: "John", age: 25 },
//   { name: "Jane", age: 30 },
//   { name: "Mark", age: 28 }
// ]


// 👉 Create an array containing only the names.

// let users = [
//   { name: "John", age: 25 },
//   { name: "Jane", age: 30 },
//   { name: "Mark", age: 28 }
// ]
// let namess = []
// let names = users.map((users) => {
//     return namess.push(users.name)
// });
// console.log(namess)




// Add a new property
// let products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 }
// ]


// 👉 Add a new property inStock: true to each object (without modifying original).

//  let products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 }
// ]
// let newProperty = products.map((property) =>{
//     return {
//         ...property,
//         inStock: true
//     }
// });
// console.log(newProperty)

// 5️⃣ Get even numbers
// let arr = [1,2,3,4,5,6,7,8]


// 👉 Return only even numbers.
// let arr = [1,2,3,4,5,6,7,8]
// let evenNumber=arr.filter((number)=>{
//     return number % 2 == 0
// });
// console.log(evenNumber)


// let people = [
//   { name: "Tom", age: 17 },
//   { name: "Jerry", age: 22 },
//   { name: "Anna", age: 19 }
// ]
// 👉 Return only people age 18 or older.

// let people = [
//   { name: "Tom", age: 17 },
//   { name: "Jerry", age: 22 },
//   { name: "Anna", age: 19 }
// ]

// let filteredPeople = people.filter((val => val.age >= 18 ));

// console.log(filteredPeople)


// 7️⃣ Long words only
// let words = ["hi", "hello", "sun", "javascript"]


// 👉 Keep words longer than 3 characters.

// let words = ["hi", "hello", "sun", "javascript"]

// let newWords = words.filter((val)=>{
//       return val.length>3
// })
// console.log(newWords)


// 8️⃣ Sum of numbers
// let arr = [1,2,3,4,5]


// 👉 Find the total sum.

// let arr = [1,2,3,4,5]

// let sum = arr.reduce((preVal, currVal) => {
//     return preVal + currVal
// });
// console.log(sum)







// 9️⃣ Find the maximum number
// let arr = [10, 5, 25, 8, 15]


// 👉 Return the largest number.
// let arr = [10, 5, 25, 8, 15]
// let maxArr =arr.reduce((preVal, currVal) => {
//     return Math.max(preVal, currVal)
// });
// console.log(maxArr)


// Count occurrences
// let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"]

// let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"]

// let countFruits = fruits.reduce((preVal,idx) => {
//     if(preVal[idx]){ apple
//         preVal[idx]++ banana
//     }else{
//         preVal[idx] = 1 apple = 1
//     }
//     return preVal
// })

// console.log(countFruits)




