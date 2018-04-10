// 类型判断

//使用: Object.prototype.toString.call
function isType(type) {
  return function(obj) {
    return Object.prototype.toString.call(obj) === "[object " + type + "]";
  };
}

let isObject = isType("Object"),
  isString = isType("String"),
  isArray = Array.isArray || isType("Array"),
  isFunction = isType("Function"),
  isNumber = isType("Number"),
  isRegExp = isType("RegExp"),
  isDate = isType("Date"),
  isElement = isType("HTMLBodyElement"),
  isBoolean = isType("Boolean");

export {
  isType,
  isObject,
  isString,
  isArray,
  isFunction,
  isNumber,
  isRegExp,
  isDate,
  isElement,
  isBoolean
};
