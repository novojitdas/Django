// making h1 red
// var myHeader = document.querySelector("h1");
// myHeader.style.color = 'red';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    console.log("loop " + i + "th: " + color);
    color = color + letters[Math.floor(Math.random() * 16)];

  }
  return color;
}

console.log(getRandomColor());

// logic behind random generator
// comment out the top part before running below.

// var letters = '0123456789ABCDEF';
// floor = Math.floor(Math.random() * 16);
// console.log(floor)
// console.log(letters[floor]);

// here letters is a string 
// letters[floors] is same as string[index]