console.log("connected");
// Restart button
var restartButton = document.querySelector('#button');
// Check box
var box = document.querySelectorAll('td');
// Clear box
 function clearBoard (){
   for (var i=0;i<box.length;i++)
   {
     box[i].textContent = '';
   }
 }

 restartButton.addEventListener("click",clearBoard);
// check box marker
function marker()
{
  if(this.textContent === '')
  {
    this.textContent = 'X';
  }
  else if(this.textContent === 'X')
  {
    this.textContent = 'O';
  }
  else
  {
    this.textContent = '';
  }
}
// For loop for add event listener for all boxes

for(var i=0;i<box.length;i++)
{
  box[i].addEventListener("click",marker);
}
