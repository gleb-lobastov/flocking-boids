export default function trackMouse(canvas) {
  const mouse = {
    x: 0,
    y: 0,
    hasFocus: false,
    getPosition() {
      return {
        x: mouse.x / canvas.width,
        y: mouse.y / canvas.height,
        z: 0
      };
    }
  };

  canvas.addEventListener("mousemove", function(event) {
    mouse.hasFocus = true;
    mouse.x = event.offsetX;
    mouse.y = event.offsetY;
  });

  canvas.addEventListener("mouseout", function() {
    mouse.hasFocus = false;
  });

  return mouse;
}
