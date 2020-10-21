const SECOND = 1000;
const DESIRED_FPS = 60;
const BUFFER_SIZE = DESIRED_FPS * 2;

export default function fpsAdjustmentLoop(callback) {
  if (!window?.performance?.now) {
    console.warn("fps meter is not supported");
    return;
  }
  const buffer = Array.from({ length: BUFFER_SIZE });

  // wait for %DESIRED_FPS% frames measure before first callback invocation,
  // to ensure meaningful measurement
  let fromIndex = DESIRED_FPS;
  let toIndex = 0;
  let fps;
  let isRunning = true;

  frame();

  return () => {
    isRunning = false;
  };

  function stop() {}
  function frame() {
    const now = performance.now();
    const secondAgo = now - 1000;

    buffer[toIndex] = now;
    toIndex = (toIndex + 1) % BUFFER_SIZE;
    while (fromIndex !== toIndex && buffer[fromIndex] <= secondAgo) {
      fromIndex = (fromIndex + 1) % BUFFER_SIZE;
    }
    if (!buffer[fromIndex]) {
      fromIndex = (fromIndex + 1) % BUFFER_SIZE;
    }

    const fps =
      fromIndex < toIndex
        ? toIndex - fromIndex
        : BUFFER_SIZE - fromIndex + toIndex;

    callback(fps);

    if (isRunning) {
      window.requestAnimationFrame(frame);
    }
  }
}
