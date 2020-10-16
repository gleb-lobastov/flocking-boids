import Animation from "./Animation";
import ControlUnit from "./Animation/ControlUnit";
import Scene from "./Scene";
import settings from "./Scene/settings";
import trackMouse from "./utils/trackMouse";

export default function animateFlockingBoids(options = {}) {
  const { canvas, virtualCanvas } = options;
  const mouseTracker = trackMouse(canvas);
  const animationScene = new Scene({ mouse: mouseTracker });
  const animation = new Animation({
    canvas,
    virtualCanvas,
    animationScene
  });
  return new ControlUnit(animation, settings);
}
