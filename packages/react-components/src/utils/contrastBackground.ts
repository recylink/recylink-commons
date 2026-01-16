function cutHex(h: string) {
  return h.charAt(0) === '#' ? h.substring(1, 7) : h
}
function hexToR(h: string) {
  return parseInt(cutHex(h).substring(0, 2), 16)
}
function hexToG(h: string) {
  return parseInt(cutHex(h).substring(2, 4), 16)
}
function hexToB(h: string) {
  return parseInt(cutHex(h).substring(4, 6), 16)
}

export default function contrastBackground(hexColor: string) {
  const threshold = 180

  const hRed = hexToR(hexColor)
  const hGreen = hexToG(hexColor)
  const hBlue = hexToB(hexColor)

  const cBrightness = (hRed * 299 + hGreen * 587 + hBlue * 114) / 1000
  if (cBrightness > threshold) {
    return '#000000'
  } else {
    return '#ffffff'
  }
}
