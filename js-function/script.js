// res(1)
// async function res (id) {
//     const res = await fetch (`https://swapi.dev/api/people/${id}`)
//     const result = await res.json()
//     // console.log(result.name)
//     // alert(`name: ${result.name}, birth name: ${result.birth_year} vechiles: ${result.vehicles} `)
//     const vihecles = result?.vehicles?.map(async (veh)=>{
//         const vehName = await fetch(veh)
//         const nameCar = await vehName.json()
//         console.log(nameCar.name)
//     })
//     console.log(result.vehicles)
// }
//

// array = [1, 2, 3];
// reversed = array.reverse()
// console.log(reversed)

// function arrayReverse(array){
//     const a = array.reverse()
//     return a
// }
//
// console.log(arrayReverse([1, 2, 3]))
// console.log(arrayReverse([1, 2, 3,4,5]))


// let arr = [0, 1, false, 2, undefined, " ", 3, null]
//
// function filter(item) {
//     if (Number.isFinite(item) && item !== 0){
//         return true
//     }
//     else
//         return false;
// }
//
// let a = arr.filter(filter)
// console.log(a)

// let array = [1, 2, 3, 1, 2];
//
// uniqueArray = array.filter(function (item, pos){
//     return array.indexOf(item) == pos;
// })
// console.log(uniqueArray)

// const a = ['a', 'b', 'c'];
// const b = [1, 2, 3];
// const c = a.concat(b);
// console.log(c)

// const a = [1, 2, 3];
// const b = a.push(4, 5, 6)
// const c = a.unshift(4, 5, 6)

// let array = [1, 2, 3]
// function haha(array){
//     array.push(4, 5, 6)
//     array.unshift(4, 5, 6)
//     return array
// }
//
// console.log(haha(array))



// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
//     const array = [1, 2, 3, 4, 5]
//     array.splice( 1, 2)
//
// console.log(array)

// function arraySplice (array){
//     const a = array.splice(1,2)
//     return array
// }
//
// console.log(arraySplice([1, 2, 3, 4, 5]))

// Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

// let array = {
//     js: 'test',
//     jq: 'hello',
//     css: 'world',
// };
// console.log(Object.keys(array));


// Напишите код, который преобразовывает и объединяет все
// элементы массива в одно строковое значение.
//     Элементы массива будут разделены запятой.
//
//     ['Капуста', 'Репа', 'Редиска', 'Морковка']

// let element = ['kapusta', 'Repa', 'Rediska', 'morkovka']
//
// console.log(element.join(", "));

// Пользователь вводит строку кириллицей разного регистра.
//     Напишите функцию, которая принимает строку в
// качестве аргумента и заменяет регистр каждого символа
// на противоположный. Например, если вводится
// «КаЖдЫй ОхОтНиК», то на выходе должен быть массив
//     [кАжДыЙ оХоТнИк]

let result = changeLowerUpperCases("КаЖдЫй ОхОтнИк плОхОй");

console.log(result);


function changeLowerUpperCases(string){
    let array = [];
    for(let i = 0; i < string.length; i++){
        let letter = string[i];
        if(letter.toLowerCase() === letter){
            array.push(letter.toUpperCase());
        } else {
            array.push(letter.toLowerCase());
        }
    }
    return array;
}
