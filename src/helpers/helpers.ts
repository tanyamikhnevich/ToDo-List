export const getMediaQuery = (pixels: number) =>
  window.matchMedia(`(max-width: ${pixels}px)`).matches;
