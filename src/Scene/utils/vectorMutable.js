/* eslint-disable no-param-reassign */
import { length, squareDistance, checkHasLength } from "./vectorImmutable";

export { length, squareDistance, checkHasLength };

export function normalize(vector) {
  const vectorLength = length(vector);
  if (vectorLength > 0) {
    vector.x /= vectorLength;
    vector.y /= vectorLength;
    vector.z /= vectorLength;
  }
  return vector;
}

export function multiply(vector, scalar) {
  vector.x *= scalar;
  vector.y *= scalar;
  vector.z *= scalar;
  return vector;
}

export function add(vectorA, vectorB) {
  vectorA.x += vectorB.x;
  vectorA.y += vectorB.y;
  vectorA.z += vectorB.z;
  return vectorA;
}

export function subtract(vectorA, vectorB) {
  vectorA.x -= vectorB.x;
  vectorA.y -= vectorB.y;
  vectorA.z -= vectorB.z;
  return vectorA;
}

export function rotate(vectorA, angle) {
  const x = vectorA.x * Math.cos(angle) - vectorA.y * Math.sin(angle);
  vectorA.y = vectorA.x * Math.sin(angle) + vectorA.y * Math.cos(angle);
  vectorA.x = x;
  return vectorA;
}
