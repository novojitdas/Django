// js object method is just 
// method or function within a object.

// here is examples.

var anObject = {
    prop: "Hello",
    myMethod: function () {
        console.log("method is called");
    }
}
// both shows the info about the object variable.
console.log(anObject);
console.dir(anObject);

// call object method 
// syntex 
// object-name.method();
var temp = anObject.myMethod();
console.log(temp); // ?? str and var not printing ??

// use of this 
var myObj = {
    name: "novojit",
    greet: function () {
        console.log("Hello " + this.name); // this ref - see mozilla dev network 
    }
}
// printing
// object-name.method();
myObj.greet();