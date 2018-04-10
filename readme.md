## JS 类型判断

```javascript
// 引入
import {
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
} from "tf-type";

// 或
import * as Type from "tf-type";
// let isObject = Type.isObject;

// 使用
isObject({ a: "aaa" });
isArray([1, 2, 3]);
isBoolean(true);
```
