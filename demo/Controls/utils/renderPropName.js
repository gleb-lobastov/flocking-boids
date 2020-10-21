export default function renderPropName(propName) {
  const match =
    propName.match(/[a-zA-Z][a-z]+/g) || propName.match(/[A-Z]+(?=_)?/g);
  if (!match) {
    return propName;
  }
  const result = match.map(token => token.toLowerCase()).join(" ");
  return result.charAt(0).toUpperCase() + result.substring(1);
}
