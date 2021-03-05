"use strict";

let squareEveryDigit = (function(){
    const NUMBER = 9119;

    let _square = function(digit){
        let squareDigit = digit*digit;
    
        return squareDigit.toString();
    }

    return {
        firstWay: function(){
            let newNumber = '';
        
            for (let digit of NUMBER.toString()){
                newNumber += digit*digit;
            };
        
            return parseInt(newNumber);
        },

        secondWay: function(){
            let newNumber = NUMBER.toString()
                                    .split('')
                                    .map( digit => digit ** 2 )
                                    .join('');

            return parseInt(newNumber);           
        },

        thirdWay: function(){
            let splitStrNumber = NUMBER.toString().split('');
        
            let newNumber = splitStrNumber.map( digit => digit.replace(/\d/, _square(digit)) );
                        
            return parseInt(newNumber.join(''));
        }        
    };
}());