// array value গুলোকে দ্বিগুন করার স্বাভাবিক প্রোগ্রাম - 

const numbers = [4, 6, 8, 10];
const output2 = [];

// type1 old function no need
/* function doubleOld(number) {
    return number * 2;
}
 */

//type2 arrow function using
// const doubleIt = number => number * 2;


// for (const number of numbers) {
//     const result = doubleIt(number);
//     output2.push(result);
// }
// console.log(output2);


// এই পুরো কাজটা এক লাইনেই করা যাবে- map() ব্যবহার করে। map() array এর ক্ষেত্রে যা করে-
//1.loop through each element
//2.ror each element call the proveded function (element diye function ke call korchi.)
//3. result for each element will be stored in an arry(reuslt ekta array er moddhe push korchi.)


// const output = numbers.map(doubleIt);//const doubleIt = number => number * 2; এটাতে যাবে। or,

// const output = numbers.map(number => number * 2);// এভাবেও সরাসরি লেখা যাবে। অথবা,

const output = numbers.map(x => x * 2);
// console.log(output);//output= [ 8, 12, 16, 20 ]

const squares = numbers.map(x => x * x);
console.log(squares);

