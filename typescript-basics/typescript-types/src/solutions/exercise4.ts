export const NUMBER_TO_MASH = 10;
export const STRING_TO_MASH = "Hello";

export const mash = <S, T>(key: S, value: T): Map<S, T> => {
  const map = new Map<S, T>();
  map.set(key, value);
  return map;
};
