export default class ControlUnit {
  constructor(animation, settings) {
    this.animation = animation;
    this.settings = settings;
  }

  play() {
    this.animation.play();
  }

  pause() {
    this.animation.pause();
  }
}
