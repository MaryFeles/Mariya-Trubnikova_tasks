"use strict";

let a = [2,1,2,2,2,3,5,1,2];
let b = [5,2,2,9];

let arrayDiff = (function(arrA, arrB){

    return {
        firstWay: function(){
            arrB.forEach (item => {      
                let hasItem = arrA.includes(item);
                while (hasItem) {
                    let index = arrA.indexOf(item)
                    arrA.splice(index, 1);
                    hasItem = arrA.includes(item);
                }
            });
            
            return arrA;
        },

        secondWay: function(){
            
            let buffer = []; // промежуточный массив для хранения всех элементов, которые нужно удалить из первого массива
            let setB = [...new Set(arrB)];   // исключение повторений из второго масива

            arrA.forEach(item1 => {
                setB.forEach(item2 => {
                    item1 == item2 ? buffer.push(item1) : false;
                });
            });

            buffer.forEach(item1 => {
                arrA.forEach((item2, index) => {
                    item1 == item2 ? arrA.splice(index, 1) : false;
                });
            });

            return arrA;
        }
    };
}(a, b));