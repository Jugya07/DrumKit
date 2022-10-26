for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", func);
  function func() {
    var text1 = this.innerHTML;
    makeSound(text1);
    buttonAnimation(text1);
  }
}
document.addEventListener("keydown",function(event){
  var press=event.key;
  makeSound(press);
  buttonAnimation(press);
});


function makeSound(key){
    switch (key) {
        case "w":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;
  
        case "a":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;
        case "s":
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
          break;
        case "d":
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
          break;
        case "j":
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
        case "k":
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
        case "l":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
  
      default:
      }
    
}
function buttonAnimation(refer1){
  var button=document.querySelector("."+refer1);
  button.classList.add("pressed");

  setTimeout(function(){
    button.classList.remove("pressed");
  },100);
}
