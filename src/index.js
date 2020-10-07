const manip = document.getElementById("manip");
const manipTwo = document.getElementById("manip-2");

const blue = document.getElementById("blue");

function goToBlue() {
  manip.pause();
  manip.currentTime = 3;
  manip.play();
  manip.addEventListener("timeupdate", () => {
    if (manip.currentTime >= 4.5) {
      manip.currentTime = 3;
    }
  });
  console.log("blue");
}

manip.currentTime = 0;

blue.addEventListener("click", () => {
  goToBlue();
  return;
});

manipTwo.currentTime = 8;
manipTwo.play();
manipTwo.addEventListener("timeupdate", () => {
  if (manipTwo.currentTime >= 11) {
    manipTwo.currentTime = 4;
  }
  manipTwo.play();
});
