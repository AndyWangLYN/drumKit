var buttonArray = document.querySelectorAll(".drum");

for (var i = 0; i < buttonArray.length; i++) {
  buttonArray[i].addEventListener("mouseover", function () {
    document.querySelector("." + this.innerText).classList.add("pressed");
  });

  buttonArray[i].addEventListener("mouseout", function () {
    document.querySelector("." + this.innerText).classList.remove("pressed");
  });

  buttonArray[i].addEventListener("click", function () {
    var buttonName = this.innerText;
    playSound(buttonName);
    buttonAnimation(buttonName);
  });
}

document.addEventListener("keydown", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

function playSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      break;
  }
}

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();

function buttonAnimation(currentKey) {
  var currentButton = document.querySelector("." + currentKey);
  currentButton.classList.add("pressed");
  setTimeout(function () {
    currentButton.classList.remove("pressed");
  }, 100);
}
