Javascript/React Challenge

JavaScript Coding: Write a multiplication function in javascript to use like this.
console.log(mul(2)(4)(5));

const mul = (num) => {
    const bankedArgs = [];

    return function _mul(arg){
        bankedArgs.push(arg);

        if(bankedArgs.length === num){
            let result = 1;

            bankedArgs.forEach((operand) => result *= operand)

            return result;

        } else {
            return _mul;
        }
    }
}

console.log(mul(2)(4)(5))




Please see github page for React Countdown Clock Component




The following code snippet appends an element value at the end of the array:
 b) arr[arr.length] = value



The correct way to create a Javscript array:
 a) var items = ["Orange", "Apple"];




The output of the below code would be: 2

foo = 1;

 (function () {

     foo = 2;

 })();

 var x = function () {

     foo = 3;

 };

 (function () {

     var foo = 4;

 })();

 console.log(foo);

