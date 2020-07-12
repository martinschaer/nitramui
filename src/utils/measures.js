export const GOLDEN_RATIO = 1.61803398875

export const convertRemToPixels = (rem) => {
  return rem * parseFloat(window.getComputedStyle(document.documentElement).fontSize)
}

export const styleValueToPX = (value) => {
  if (value.indexOf('px') !== -1) {
    return parseFloat(value)
  } else if (value.indexOf('rem') !== -1) {
    return convertRemToPixels(parseFloat(value))
  } else {
    return parseFloat(value)
  }
}
