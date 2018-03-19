'use strict';
//This function will show the button when the user scrolls down 20px from the top of the doc

window.onscroll = function () {scrollFunction()}; 

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //if we are more than 20px down the body of the page, or if the scroll to the top is greater than 20px then...
    document.getElementById("scrollBtn").style.display = "block";
    //we display the button
  } else {
    document.getElementById("scrollBtn").style.display = "none";
    //else, the body is less than 20 px or the amount to be scrolled to the top is greater than 20, then "none" button displays
  }
}

//When the user clicks on the button, scroll to the top of the document

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  //when the button is pressed we scroll to the 0px point of the body
}

