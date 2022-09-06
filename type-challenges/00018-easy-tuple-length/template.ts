type Length<T extends readonly any[]> = T["length"]

// 知识点
// tuple类型
// 和普通类型数组有什么不同

// function getLength(arr: string[] | number[]) {
//     if(Array.isArray(arr)) return
//     return arr.length
// }