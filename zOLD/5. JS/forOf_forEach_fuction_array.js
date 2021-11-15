// REMEMBER, in js
// array is mutable, but string is not mutable.

//1. for of loop

var arr = ["BD", "USA", "UK"];
console.log("1.Output of for of loop: \n")
for (temp of arr) {
    console.log(temp);
}

//2. forEach Loop

var arr2 = ["DJANGO", "JS", "PYTHON"];

function print(name) {
    console.log(name + " is Awesome!");
}

console.log("2.Output of forEach loop: \n");

// systex for alerting something on browser using foreach loop
// array.forEach(alert);

arr2.forEach(print);