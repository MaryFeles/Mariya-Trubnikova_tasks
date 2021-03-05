"use strict";

let arrayDiff = (function(){
    let arrA = [2,1,2,2,2,3,5,1,2];
    let arrB = [5,2,2,9];

    let _fillBuffer = function(arrA, arrB){
        let buffer = [];
        let setB = [...new Set(arrB)];
        
        arrA.forEach( elemA => {
            setB.forEach( elemB => (elemA == elemB) ? buffer.push(elemA) : false );
        });
    
        return buffer;
    };

    return {
        firstWay: function(){
            arrB.forEach ( elB => {
                let index = arrA.indexOf(elB);

                while (index != -1) {
                    arrA.splice(index, 1);
                    index = arrA.indexOf(elB);
                }
            });
            
            return arrA;
        },

        secondWay: function(){
            arrB.forEach ( elB => {      
                let index = arrA.findIndex( elA => elA == elB );

                while (index != -1) {
                    arrA.splice(index, 1);
                    index = arrA.findIndex( elA => elA == elB );
                }
            });
            
            return arrA;
        },

        thirdWay: function(){
            let buffer = _fillBuffer(arrA, arrB);

            buffer.forEach( elemB => {
                arrA.forEach( (elemA, index) => (elemA == elemB) ? arrA.splice(index, 1) : false );
            });

            return arrA;
        }
    };
}());