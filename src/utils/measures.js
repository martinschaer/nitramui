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

export const widths = [
  'default',
  'small',
  'fill',
  'full',
  'full-minus-small',
  'square',
  'golden-horizontal',
  'golden-vertical',
  'golden-width',
  'golden-width-rest',
  'half',
  'third',
  'fourth'
]

export const getCSSWidth = (size) => (
  size === 'full' || size === 'square' || size === 'fill'
    ? '100%'
    : size === 'small'
      ? '16rem'
      : size === 'full-minus-small'
        ? 'calc(100vw - 16rem)'
        : size === 'golden-width'
          ? `${100 / GOLDEN_RATIO}%`
          : size === 'golden-width-rest'
            ? `${100 - (100 / GOLDEN_RATIO)}%`
            : size === 'half'
              ? '50%'
              : size === 'third'
                ? '33.3%'
                : size === 'fourth'
                  ? '25%'
                  // default:
                  : '50rem'
)
