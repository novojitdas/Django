//1. syntex
// var variable = $('elements');
var head = $('h1');
//variable.css('properties','value');
head.css('color','red');
//----------------------------------------------------

//2. css object using jQuery
var newCSS = {
  'color': 'white',
  'background': 'black',
  'border': '4px solid red',
  'text-align': 'center'
}
// Applying it to head variable
head.css(newCSS);

//----------------------------------------------------

//3. working with array of list elements

var listItems = $('li');
listItems.css('color','blue');
// accessing using array index
// variable.eq(index).css('color','red');
listItems.eq(0).css('color','orange');
// for last element of the array
listItems.eq(-1).css('color','red');

//4. text
// syntex - $('h1').text('new text')
$('h1').text() // put it on console to see the h1 element text
// update the h1 element text
$('h1').text('new text');
// update the h1 element text with html
$('h1').html('<b>I am the Bold Man</b>')
// changing input attribute - submit button to attribute (commnet below)
// $('input').eq(1).attr('type','checkbox')
$("input").eq(0).val("name:");

//----------------------------------------------------

//5. addClass, removeClass, toggleClass
// NB: comment the below code before running upper codes,
// NB: comment the upper code before running below codes.
$('h1').addClass('turnRed'); // for adding
$('h1').removeClass('turnRed'); // for removing
$('h1').toggleClass('turnBlue');
$('h1').toggleClass('turnBlue');
