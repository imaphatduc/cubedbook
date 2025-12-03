export const clone = (original: any) => {
  return Object.assign(
    Object.create(Object.getPrototypeOf(original)),
    original
  );
};
