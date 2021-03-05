"use strict";

let alphabetPosition = (function(){
    const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
    const STRING = ("ab aec 1 a1 ab1c Aa");

    let lowCaseString = STRING.toLowerCase();
    let splittedAlphabet = ALPHABET.split('');

    let _filterStr = function(str){
        let filteredStr = str.split('')
                             .filter( char => splittedAlphabet.includes(char));
        
        return filteredStr;
    };

    return {
        firstWay: function(){
            let mapAlphabet = new Map(splittedAlphabet.entries());
        
            let lettersPos = _filterStr(lowCaseString).map( char => {
                for (let [key, letter] of mapAlphabet) {
                    if (char == letter) {
                        return key+1;
                    }
                }
            }).join(' ');

            return lettersPos;
        },

        secondWay: function(){
            let lettersPos = _filterStr(lowCaseString).map( letter => letter.charCodeAt(0) - 96).join(' ');
        
            return lettersPos;
        },

        thirdWay: function(){
            let lettersPos = '';
        
            for (let char of lowCaseString) {
                splittedAlphabet.includes(char) ? lettersPos += char.charCodeAt(0) - 96 + ' ' : false;
            };

            return lettersPos;
        }
    };
}());