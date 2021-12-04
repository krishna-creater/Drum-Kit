// alert("Hello from js!");
var bt = document.querySelectorAll("button");

for (var i = 0; i < bt.length; i++) {
  bt[i].addEventListener("click", function () {
    var innerText = this.innerText;
    makeSound(innerText);
    animation(innerText);
  });
}

document.addEventListener("keydown", function (event) {
makeSound(event.key);
animation(event.key);
})

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      console.log(innerText);
  }
}

function animation(key) {
    var currbtn = document.querySelector("."+key);
    currbtn.classList.add("pressed");
    setTimeout(function () {
    currbtn.classList.remove("pressed");
    },100);
}