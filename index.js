//Задание 1
// let a = ['a', 'b', 'c'];
// let b = [1, 2, 3];
// let c = a.concat(b);
// console.log(c);

//Задание 2
// let d = ['a', 'b', 'c'];
// let e = d.push(1, 2, 3);
// console.log(d);

//Задание 3
// let k =  [1, 2, 3];
// k.reverse();
// console.log(k);

//Задание 4
// const f = [1, 2, 3, 4, 5];
// console.log(f.slice( 0,  3));

//Задание 5
//const f = [1, 2, 3, 4, 5];
//console.log(f.slice(  3));

//Задание 6
// let myObject = {
//         js:'test',
//         jq: 'hello',
//         css: 'world',
// }
// console.log(Object.keys(myObject));

//Задание 7

// let num = [1, 3, 5, 7, 9, 11];
// console.log(num)
// for (let i = 0; i < num.length / 2; i++) {
//     let f = num[num.length - 1 - i];
//     num[num.length - 1 - i] = num[i];
//     num[i] = f;
// }
// console.log(num)

//Задание 8

// let a = [[1, 2, 3], [4, 5], [6]];
// console.log(a)
// let sum = 0;
// for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < a[i].length; j++) {
//         sum += a[i][j];
//     }
// }
// console.log(sum)

//Задание 9

// let col = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
// console.log(col)
// let summa = 0;
// for(let i = 0; i <col.length; i++) {
//     for(let x = 0; x < col[i].length; x++){
//         for(let y = 0; y < col[x].length; y++){
//             summa += col[i][x][y];
//         }
//     }
// }
// console.log(summa)

//Задание 10


// const obj = {
//   name: "Katrin",
//   age: 35,
//   password: "wel",
//   isAdmin: true,
// };
//
// const obj2 = {
//   name: "nat",
//   age: 19,
//   password: "help",
//   isAdmin: false,
// };
//
// for (const key in obj2) {
//   if (obj2[key] == obj[key]);
//   {
//     console.log(key);
//   }
// }
//короче тут не разобралась немного
//выводит сразу 4 -ре свойства