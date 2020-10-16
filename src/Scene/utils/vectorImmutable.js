/* eslint-disable no-param-reassign */

export function normalize(vector) {
  const vectorLength = length(vector);
  if (vectorLength > 0) {
    return {
      x: vector.x / vectorLength,
      y: vector.y / vectorLength,
      z: vector.z / vectorLength
    };
  }
  return vector;
}

export function length(vector) {
  return Math.sqrt(vector.x ** 2 + vector.y ** 2 + vector.z ** 2);
}

export function checkHasLength({ x, y, z }) {
  return x || y || z;
}

// no need to calc root, because result used only for comparison
export function squareDistance(vectorA, vectorB) {
  return (
    (vectorA.x - vectorB.x) ** 2 +
    (vectorA.y - vectorB.y) ** 2 +
    (vectorA.z - vectorB.z) ** 2
  );
}

export function multiply(vector, scalar) {
  return {
    x: vector.x * scalar,
    y: vector.y * scalar,
    z: vector.z * scalar
  };
}

export function add(vectorA, vectorB) {
  return {
    x: vectorA.x + vectorB.x,
    y: vectorA.y + vectorB.y,
    z: vectorA.z + vectorB.z
  };
}

export function subtract(vectorA, vectorB) {
  return {
    x: vectorA.x - vectorB.x,
    y: vectorA.y - vectorB.y,
    z: vectorA.z - vectorB.z
  };
}
export function rotate(vectorA, angle) {
  return {
    x: vectorA.x * Math.cos(angle) - vectorA.y * Math.sin(angle),
    y: vectorA.x * Math.sin(angle) + vectorA.y * Math.cos(angle),
    z: vectorA.z
  };
}
