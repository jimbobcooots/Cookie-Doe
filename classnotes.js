var clickyDiv = document.getElementById('clickMe');
var clickyMeToo = document.getElementById('clickMeToo');
var clickyMeAsWell = document.getElementById('clickMeAsWell');
//this selects our event
var counter = 0;

//METHOD 1
  
clickyDiv.addEventListener('click', function() {
  //adding the event and the function methods to the event listener. 'click' is a string.
  counter++;
  clickyDiv.innerHTML = 'Counter: ' + counter;
//this should change the <div> to become a string called 'Counter' plus the counter that is incrementing
});

//METHOD 2
clickyDiv.addEventListener('click', incrementCounter1)
clickyMeToo.addEventListener('mouseover', incrementCounter2)
clickyMeAsWell.addEventListener('dblclick', incrementCounter3)
//instead of writing out the entire function within the EventListener like METHOD 1, we are simply calling the function while defining the function elsewhere

function incrementCounter1() {
  counter++;
  clickyDiv.innerHTML = 'Counter: ' + counter;
}

function incrementCounter2() {
  counter++;
  clickyMeToo.innerHTML = 'Counter: ' + counter;
}

function incrementCounter3() {
  counter++;
  clickyMeAsWell.innerHTML = 'Counter: ' + counter;
}

//creating a form so that the user can take different values, and make a new store
