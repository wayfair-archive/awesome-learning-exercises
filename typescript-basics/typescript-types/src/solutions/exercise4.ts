export const INITIAL_NUMBER = 0;
export const INITIAL_STRING = "";

export const addAllTogether = <T>(array: Array<T>, initialValue: T): T => {
  return array.reduce((sum, value) => sum + value, <any>initialValue);
};
