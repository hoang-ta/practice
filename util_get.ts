/**
 * Get nested propery value
 * @param {Object} objectParam
 * @param {string | Array<string>} pathParam
 * @param {T} defaultValue
 * @returns {T | undefined}
 */
function get<T>(
  objectParam: Record<string, any>,
  pathParam: string | Array<string>,
  defaultValue?: T
): T | undefined {
  const keys =
    typeof pathParam === 'string'
      ? pathParam.split('.')
      : pathParam;
  let result = defaultValue;
  keys.reduce(
    (
      prevValue: Record<string, any>,
      value: string,
      index
    ) => {
      if (prevValue === undefined || prevValue === null) {
        return defaultValue;
      }
      const object = prevValue[value];
      if (
        index === keys.length - 1 &&
        object !== undefined
      ) {
        result = object;
      }
      return object;
    },
    objectParam
  );
  return result;
}

/**
 * Better
 */
function getV2<T>(
  objectParam: Record<string, any>,
  pathParam: string | Array<string>,
  defaultValue?: T
): T | undefined {
  const keys = Array.isArray(pathParam)
    ? pathParam
    : pathParam.split('.');
  let index = 0;
  let object = objectParam;
  while (
    index < keys.length &&
    object !== null &&
    object !== undefined
  ) {
    object = object[keys[index]];
    index++;
  }
  const result = (
    index === keys.length && object !== undefined
      ? object
      : defaultValue
  ) as T;
  return result;
}
