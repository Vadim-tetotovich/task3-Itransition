import pkg from 'bluebird';
const { Promise } = pkg;
import randomNumber from "random-number-csprng";
import GenHMAC from './hmac.js';

class GenKey {

    args = []

    constructor(initArray) {
        this.args = initArray;
    }

    get key() {
        return this.generateKey(this.args)
    }

    generateKey(array) {
        Promise.try(function() {
            return randomNumber(0, array.length - 1)
        }).then(function(number) {
            new GenHMAC(number, array[number], array).generateHMAC()
        }).catch({ code: "RandomGenerationError" }, function(err) {
            console.log("Something went wrong!")
        })
    }
}

export default GenKey