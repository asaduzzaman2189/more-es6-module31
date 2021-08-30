const numbers = [5, 13, 7, 41, 30, 9, 2, 19];

//filter() হচ্ছে map() এর মতোই, তবে পার্থক্য হচ্ছে filter() কোনো কিছু শর্ত অনুযায়ী কাজ করে। 
bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10);

// console.log(smallNumbers);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
]

const expensive = products.filter(product => product.price > 100);
// console.log(expensive);
const blacks = products.filter(product => product.color == 'pink');

// console.log(pink);// filter() কোনো কিছু না পেলে [] ফাঁকা array দেখাবে। 

//পার্থক্য- 
// map() গনহারে সবগুলো element এর কাজ শেষে কিছু একটা রেজাল্ট দিবে,
// filter() - প্রত্যেকটা element এর জন্য একটি শর্ত দিবে, যদি শর্তটা সত্যি হয় তবে ঐ element কে দিবে তবে সেই element টা একটি array এর মধ্যে দিবে। যেমন-console.log(blacks); এর ক্ষেত্রে আউটপুট হচ্ছে- 
// [ { name: 'sticky note', price: 30, color: 'pink' } ] 


// find() array দিবে না, শুধু ঐ element টাই দিবে। আর যদি অনেকগুলো element পায় তবে শুধু প্রথম element কেই দিবে। 
const colorItem = products.find(product => product.color == 'black');

console.log(colorItem);//  find() কোনো কিছু না পেলে undefined দেখাবে। 

//black এর জন্য output দুইটি হবে, কিন্তু filter করলে শুধু প্রথমটা দিবে যেমন-
//{ name: 'mobile phone', price: 15000, color: 'black' }

