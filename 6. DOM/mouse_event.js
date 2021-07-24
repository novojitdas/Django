// variable = #id 
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");

// syntax
// variable.addEventListener("Event",function(){
// function code here;
// });

// ------------------------------------------------ 
// 1. Hover
one.addEventListener("mouseover", function () {
    one.textContent = "Mouse currently over!";
    one.style.color = 'red';
})
// Event ending function
one.addEventListener("mouseout", function () {
    one.textContent = "Hover Over Me!";
    one.style.color = 'black';
})

// ------------------------------------------------ 

//2. Click 
two.addEventListener("click", function () {
    two.textContent = "Clicked oh no!";
})

// ------------------------------------------------ 
//3. Double Click 
three.addEventListener("dblclick", function () {
    three.textContent = "Double Clicked oh no!";
})
// ------------------------------------------------



