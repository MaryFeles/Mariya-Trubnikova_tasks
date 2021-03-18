"use strict";

const EXPONENT = 2;
let number = 9119;

let squareEveryDigit = (function(number, exponent){    

    let _raiseToDegree = function(base, exponent){
        return Math.pow(base, exponent).toString();
    }

    let splitStrNumber = number.toString().split('');

    return {
        firstWay: function(){
            let newNumber = '';
        
            for (let digit of number.toString()){
                newNumber += _raiseToDegree(digit, exponent);
            };
        
            return parseInt(newNumber);
        },

        secondWay: function(){
            let newNumber = splitStrNumber
                                .map(digit => digit ** exponent)
                                .join('');

            return parseInt(newNumber);           
        },

        thirdWay: function(){
            let newNumber = splitStrNumber.map(digit => digit.replace(/\d/, _raiseToDegree(digit, exponent)));
                        
            return parseInt(newNumber.join(''));
        }        
    };
}(number, EXPONENT));