// Returns keys of an object
export const ObjKeys = (input: Object) => Object.keys(input);

// Returns values of an object
export const ObjValue = (input: Object) => Object.values(input);

export const ObjEntries = (input: Object) => Object.entries(input);

// Returns keys of first object
export const ArrrayObjectKeys = (data: Object[]) => ObjKeys(data[0]);

// Checks if object is empty
export const EmptyObjectChecker = (obj: {}) =>
  ObjKeys(obj).length === 0 ? true : false;

// Checks if all objects in array of a particular value are unique
export const UnqiueValues = (data: any[], value: string) => {
  const allValues = data.map((obj) => obj[value]);

  const uniqueArray = allValues.filter(
    (item, pos) => allValues.indexOf(item) === pos
  );

  return uniqueArray;
};
