let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
let deadCount = 0;
let lostCount = 0;

for (let i = 1; i < 9; i++) {
const hole = document.getElementById("hole" + i);
hole.onclick = function () {
   if (getHole(i).className === "hole hole_has-mole") {
      deadCount++;
      dead.textContent = deadCount;
   if (deadCount === 9) {
      gameOver("Победа!");
   }
   } else {
      lostCount++;
      lost.textContent = lostCount;
      if (lostCount === 5) {
         gameOver("Проигрыш!");
      }
   }
}
}

function getHole(index) {
   return document.getElementById (`hole${index}`);
}

function gameOver(text) {
   alert(text);
   deadCount = 0;
   lostCount = 0;
   location.reload();
}