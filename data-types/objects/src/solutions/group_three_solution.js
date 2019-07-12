// Group Exercise 3 - Cloning an object

// Implement the method clone() below, which should be able to clone both arrays and objects,
// so that original !== clone(original);
function clone(obj) {
  if (Array.isArray(obj)) {
    return [...obj];
  }
  return { ...obj };
}

export { clone };
