type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}



interface People {
    phone: number;
    name: string;
}

type p = keyof People;

// const kay: p = 'kalen';

// 1. 返回一个对象
// 2. 遍历 obj (js 对象, ts 接口) in => mapped, keyof -> lookup
// 3. 加上readonly 关键字 
// 4. 通过 key 来获取 obj 接口 里面的值 indexed

// function readonly(object) {
//     const result = {}; 

//     for (const key in object) {
//         result['readonly ' + key ] = object[key]
//     }

//     return result
// }