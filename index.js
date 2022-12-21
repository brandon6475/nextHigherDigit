//Brandon Galli 12/2022
//Find next higher number with same digits.
//Example 1 : if num = 25468, o/p = 25486
//Example 2 : if num = 21765, o/p = 25167
//Example 3 : If num = 54321, o/p = 54321 (because it's not possible to generate a higher num than this with given digits )

const num1 = 25468;
const num2 = 21765;
const num3 = 54321;

    const numArray = [num1, num2, num3];

    nextHigherNumWithSameDigits = (num) => { 
        let numArray = num.toString().split('').map(Number);
        let i = numArray.length - 1;
        let j = numArray.length - 1;
        while (i > 0 && numArray[i - 1] >= numArray[i]) {
            i--;
        }
        if (i <= 0) {
            return num;
        }
        while (numArray[j] <= numArray[i - 1]) {
            j--;
        }
        let temp = numArray[i - 1];
        numArray[i - 1] = numArray[j];
        numArray[j] = temp;
        j = numArray.length - 1;
        while (i < j) {
            temp = numArray[i];
            numArray[i] = numArray[j];
            numArray[j] = temp;
            i++;
            j--;
        }
        return Number(numArray.join(''));
     }

    const result = numArray.map(num => nextHigherNumWithSameDigits(num));
    

     console.log(result);





