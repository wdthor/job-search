export const nextElementInList = (list: string[], value: string) => {
  const currentValueIndex = list.indexOf(value);
  const nextValueIndex = (currentValueIndex + 1) % list.length;
  const nextValue = list[nextValueIndex];
  return nextValue;
};
