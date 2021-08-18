//key press
document.addEventListener('keydown',checkKey);
function checkKey(e){
  makeSound(e.key);
  buttonAnimation(e.key);
}
// button click
var i = 0;
while (i < 8) {
  document.getElementsByClassName("drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
  i++;
}


 function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;

    case "k":
      var bass = new Audio("kick-bass.mp3");
      bass.play();
      break;

    case "l":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;
    default: console.log("ok");

  }

}
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },200);
}
