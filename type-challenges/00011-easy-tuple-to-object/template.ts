type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [P in T[number]]: P
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// function tupleToObject(array) {
//     const obj = {};
//
//     array.forEach(item => {
//         obj.[item] = item;
//     })
//
//     return obj;
// }

// 遍历 array T[number]
//typeof js 类型转成 ts 类型