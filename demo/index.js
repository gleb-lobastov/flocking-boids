import animateFlockingBoids from "../src/index";

document.addEventListener("DOMContentLoaded", function(event) {
  const canvas = document.getElementById("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const flockingBoidsAnimation = animateFlockingBoids({ canvas });
  window.flockingBoidsAnimation = flockingBoidsAnimation;
  flockingBoidsAnimation.settings.characteristics.predators.count = 0;
  flockingBoidsAnimation.play();//1
  setTimeout(() => {
    flockingBoidsAnimation.settings.characteristics.predators.count = 1;
  }, 5000);
});
