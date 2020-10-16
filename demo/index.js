import animateFlockingBoids from "../src/index";

document.addEventListener("DOMContentLoaded", function(event) {
  const canvas = document.getElementById("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const flockingBoidsAnimation = animateFlockingBoids({ canvas });
  window.flockingBoidsAnimation = flockingBoidsAnimation;
  flockingBoidsAnimation.settings.characteristics.predators.count = 0;
  flockingBoidsAnimation.play();
  refreshLoop();
  setTimeout(() => {
    flockingBoidsAnimation.settings.characteristics.predators.count = 1;
  }, 5000);
});

const times = [];
let fps;
function refreshLoop() {
  window.requestAnimationFrame(() => {
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }
    times.push(now);
    fps = times.length;
    updateBoidsCount(fps);
    refreshLoop();
  });
}

const updateBoidsCount = throttle(function updateBoidsCount(fps) {
  flockingBoidsAnimation.settings.characteristics.flockingBoids.spawnPattern.maxShrinkPerTick = 10;
  flockingBoidsAnimation.settings.characteristics.flockingBoids.spawnPattern.maxGrowthPerTick = 10;
  const flockingBoids =
    flockingBoidsAnimation.settings.characteristics.flockingBoids;
  if (fps < 45) {
    flockingBoids.count = Math.max(100, flockingBoids.count - 100);
    console.log("-", { fps, count: flockingBoids.count });
  } else if (fps >= 59 && flockingBoids.count < 1500) {
    flockingBoids.count += 100;
    console.log("+", { fps, count: flockingBoids.count });
  }
}, 1000);

function throttle(callback, limit) {
  let waiting = false;
  return function() {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(function() {
        waiting = false;
      }, limit);
    }
  };
}
