document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    moveLeft();
  }
  if (e.key === "ArrowRight") {
    moveRight();
  }
});
var character = document.getElementById("character");
var counter = 0;

function moveLeft() {
  var left = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  if (left >= 100) {
    character.style.left = left - 100 + "px";
  }
}

function moveRight() {
  var left = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  if (left < 200) {
    character.style.left = left + 100 + "px";
  }
}

var block = document.getElementById("block");
block.addEventListener("animationiteration", () => {
  var random = Math.floor(Math.random() * 3);
  var left = random * 100;
  block.style.left = left + "px";
  counter++;
});

setInterval(function () {
  var characterLeft = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  var blockTop = parseInt(
    window.getComputedStyle(block).getPropertyValue("top")
  );

  if (characterLeft === blockLeft && blockTop < 500 && blockTop > 300) {
    alert("Game over! Score: " + counter);
    block.style.animation = "none";
  }
}, 1);

document.getElementById("right").addEventListener("touchstart", moveRight);
document.getElementById("left").addEventListener("touchstart", moveLeft);
