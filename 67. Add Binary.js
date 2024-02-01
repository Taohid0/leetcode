/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const reverseA = a.split('').reverse();
    const reverseB = b.split('').reverse();
    const length = Math.max(reverseA.length, reverseB.length);
    let carry = 0;
    let result = '';

    for (let i = 0; i < length; i++) {
        const sum = parseInt(reverseA[i] || 0) + parseInt(reverseB[i] || 0) + carry;
        result = sum%2+result;
        carry = Math.floor(sum/2);
        console.log(carry)
    }
    if(carry){
        result = carry+result;
    }
    return result;
    
};

const result = addBinary('1010', '1011'); // 10101
console.log(result);