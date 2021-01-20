export declare function isDate(val: any): val is Date;
export declare function isObject(val: any): val is Object;
export declare function isPlainObject(val: any): val is Object;
export declare function isFormData(val: any): val is FormData;
export declare function isURLSearchParams(val: any): val is URLSearchParams;
export declare const extend: <T extends object, U extends object>(a: T, b: U) => T & U;
export declare function deepMerge(...objs: any[]): any;
