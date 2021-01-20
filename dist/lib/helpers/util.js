"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toString = Object.prototype.toString;
function isDate(val) {
    return toString.call(val) === '[object Date]';
}
exports.isDate = isDate;
function isObject(val) {
    return val !== null && typeof val === 'object';
}
exports.isObject = isObject;
function isPlainObject(val) {
    return toString.call(val) === '[object Object]';
}
exports.isPlainObject = isPlainObject;
function isFormData(val) {
    return typeof val !== 'undefined' && val instanceof FormData;
}
exports.isFormData = isFormData;
function isURLSearchParams(val) {
    return typeof val !== 'undefined' && val instanceof URLSearchParams;
}
exports.isURLSearchParams = isURLSearchParams;
// export function extend<T, U>(to: T, from: U): T & U {
//   for (const key in from) {
//     ;(to as T & U)[key] = from[key] as any
//   }
//   return to as T & U
// }
exports.extend = function (a, b) {
    for (var key in b) {
        ;
        a[key] = b[key];
    }
    return a;
};
function deepMerge() {
    var objs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objs[_i] = arguments[_i];
    }
    var result = Object.create(null);
    objs.forEach(function (obj) {
        if (obj) {
            Object.keys(obj).forEach(function (key) {
                var val = obj[key];
                if (isPlainObject(val)) {
                    if (isPlainObject(result[key])) {
                        result[key] = deepMerge(result[key], val);
                    }
                    else {
                        result[key] = deepMerge(val);
                    }
                }
                else {
                    result[key] = val;
                }
            });
        }
    });
    return result;
}
exports.deepMerge = deepMerge;
//# sourceMappingURL=util.js.map