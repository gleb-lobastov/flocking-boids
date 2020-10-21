import React from "react";
import ReactDOM from "react-dom";
import animateFlockingBoids from "../src/index";
import Controls from "./Controls";

document.addEventListener("DOMContentLoaded", function(event) {
  const canvas = document.getElementById("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const flockingBoidsAnimation = animateFlockingBoids({ canvas });
  window.flockingBoidsAnimation = flockingBoidsAnimation;
  flockingBoidsAnimation.settings.characteristics.predators.count = 0;
  flockingBoidsAnimation.play();
  waitAndAddPredator(1, 5000);

  renderControls();
});

function renderControls() {
  ReactDOM.render(
    <Controls settings={{ ...window.flockingBoidsAnimation.settings }} />,
    window.document.getElementById("controls")
  );
}

function waitAndAddPredator(count, timeout) {
  setTimeout(() => {
    flockingBoidsAnimation.settings.characteristics.predators.count += count;
    renderControls();
  }, timeout);
}
