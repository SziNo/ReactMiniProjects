function componentToHex(c) {
  const hex = c.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}

// function componentToHex(c) {
//   const hex = c.toString(16)
//   return hex.padStart(2, '0')
// }

function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

export default rgbToHex
