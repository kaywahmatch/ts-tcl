type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}


// 从类型T中选择出属性K,构造成一个新的类型

// 1. 返回一个对象
// 2. 遍历 foreach => mapped
//  => https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
// 3. todo[key] 取值
//  => https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content
// 4. 看看 key 在不在 todo 里面
//  => https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types
// 约束
//  => https://www.typescriptlang.org/docs/handbook/2/generics.html
// function fn(todo, keys) {
//     let obj = {} 

//     keys.forEach(key => {
//         if (key in todo) {
//             obj[key] = todo[key]            
//         }
//     });

//     return obj;

// }