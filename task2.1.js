"use strict";

let a = [2,1,2,2,2,3,5,1,2];
let b = [5,2,2,9];

let arrayDiff = (function(arrA, arrB){

    let _fillBuffer = function(arrA, arrB){
        let buffer = [];
        let setB = [...new Set(arrB)];
        
        arrA.forEach(elemA => {
            setB.forEach(elemB => (elemA == elemB) ? buffer.push(elemA) : false);
        });
    
        return buffer;
    };

    return {
        firstWay: function(){
            arrB.forEach (item1 => {      
                let index = arrA.findIndex(item2 => item2 == item1);

                while (index != -1) {
                    arrA.splice(index, 1);
                    index = arrA.findIndex(item2 => item2 == item1);
                }
            });
            
            return arrA;
        },

        thirdWay: function(){
            let buffer = _fillBuffer(arrA, arrB);

            buffer.forEach(item1 => {
                arrA.forEach((item2, index) => (item2 == item1) ? arrA.splice(index, 1) : false);
            });

            return arrA;
        }
    };
}(a, b));