// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array

function add() {
    var addName = prompt("What's the name of new student?")
    roster.push(addName);
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

function remove() {
    // Find the index of the array element you want to remove using indexOf
    // and then remove that index with splice.

    var removeName = prompt("what name would you like to remove");
    var index = roster.indexOf(removeName);
    roster.splice(index, 1);
}

// DISPLAY ROSTER

// Create a function called display that prints out the roster to the console.

function display() {
    console.log(roster);
}

// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.

var start = prompt("Hi, would you like to start our webapps? Please type y/n to continue");
var request = "empty"; // just initialized with empty string

if (start === "y");
{
    while (request !== "quit") {
        request = prompt("please type \"add,remove,display or quit\" only");
        if (request === "add") {
            add();
        }
        else if (request === "remove") {
            remove();
        }
        else if (request === "display") {
            display();
        }
        else {
            alert("wrong keyword, please type \"add,remove,display or quit\" only");
        }
    }
}
alert("thanks for using the app! pleast reload to restart.");
