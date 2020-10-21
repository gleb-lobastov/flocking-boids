export const TICK_TIME = 20;

export default class Animation {
  constructor({
    canvas,
    virtualCanvas = document.createElement("canvas"),
    animationScene
  } = {}) {
    if (!canvas) {
      throw new Error("Flocking Boids: option canvas is Requried");
    }
    this.isRunning = false;
    this.renderHandle = null;
    this.animationScene = animationScene;

    this.canvas = canvas;
    this.virtualCanvas = virtualCanvas;
    this.virtualCanvas.width = this.canvas.width * 2;
    this.virtualCanvas.height = this.canvas.height * 2;
  }

  play() {
    this.isRunning = true;
    this.tick();
  }

  pause() {
    window.cancelAnimationFrame(this.renderHandle);
    this.renderHandle = null;
    this.isRunning = false;
  }

  tick() {
    this.animationScene.tick();
    this.requestRender();

    if (this.isRunning) {
      setTimeout(this.tick.bind(this), TICK_TIME);
    }
  }

  requestRender() {
    if (!this.renderHandle) {
      this.renderHandle = window.requestAnimationFrame(() => {
        this.render();
        this.renderHandle = null;
      });
    }
  }

  render() {
    const virtualContext = this.virtualCanvas.getContext("2d");
    virtualContext.clearRect(
      0,
      0,
      this.virtualCanvas.width,
      this.virtualCanvas.height
    );
    virtualContext.fillStyle = "black";

    this.animationScene.render(virtualContext);

    const canvasContext = this.canvas.getContext("2d");
    canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    canvasContext.drawImage(
      this.virtualCanvas,
      0,
      0,
      this.virtualCanvas.width,
      this.virtualCanvas.height,
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
  }
}
