//1. javascript object syntax
// js-object-name = {key1: "string value",key2:number};
carInfo = { make: "Toyota", year: 1990, model: "nix" };
// calling object syntax
// js-object-name["key1"];
var print = carInfo["make"];
console.log("output of car info:\n" + print);

//2. nested object

nestedObj = { a: "strings", b: [1, 2, 3], c: { inside: ['a', 'b'] } };

// output 
// for accessing key a
nestedObj["a"];
var one = nestedObj["a"];
console.log("output of key a:\n" + one);
// for accessing key b and index 2
nestedObj["b"];
var two = nestedObj["b"][2];
console.log("output of key b:\n" + two);
// for accessing key c and inside key's first obj
nestedObj["c"];
var three = nestedObj["c"]["inside"][0];
console.log("output of key c:\n" + three);
// to show entire object 
console.log("output of entire object:\n");
console.dir(nestedObj);
// For in loop for key 
// syntax 
// for (temp in object-name)
console.log("output of keys of carInfo objects:\n");
for (key in carInfo) {
    console.log(key);
}
// For in loop for both key and value
console.log("output of keys of carInfo objects and values:\n");
for (key in carInfo) {
    console.log(key);
    console.log(carInfo[key]);
}
