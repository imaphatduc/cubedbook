export const getKeyframeFromPixels = (
  pixels: number,
  unitPixels: number,
  unitValue: number
) => {
  const nearestUnit = pixels / unitPixels;

  const keyframe = nearestUnit * unitValue * 1000;

  return keyframe;
};
