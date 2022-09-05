// 判断条件化，用extends
// type First<T extends any[]> = T extends [] ? never :  T[0];
// type First<T extends any[]> = T[0] extends T[number] ? T[0] :  never;
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never

// T extends [] === []

// 知识点
// 1. extends 类型条件判断  
// type First<T extends any[]> = T extends [] ? never :  T[0];
// --------------------------------------------------------------------------------------------
// 2. 获取tuple 的 length 属性 indexed
// type First<T extends any[]> = T["length"] extends 0 ? never :  T[0];
// const first = (arr) => {
//     if(arr.length === 0) return "never"
//     return arr[0]
// }
// --------------------------------------------------------------------------------------------
// 3. extends union 判断的规则
// type First<T extends any[]> = T[0] extends T[number] ? T[0] :  never;
// type ages = [1,2,3]
// union
// type t1 = ages[number]
// => 1 extends 1, 1 extends 2, 1 extends 3
// type t2 = 1 extends ages[number] ? 'true' : 'false'
// --------------------------------------------------------------------------------------------
// 4. infer 的使用（推断） js 的解构
// type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never
// const first = (arr) => {
//     const [first, ...reset] = arr
//     return first ? first : never
// }
