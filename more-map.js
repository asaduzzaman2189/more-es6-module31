const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Braddy', 'Tom Solaiman'];

const fLength = friends.map(friend => friend.length);
// console.log(fLength);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
]

const productNames = products.map(product => product.name);
const productPrices = products.map(product => product.price);

// products.map(product => console.log(product));// প্রতিটা object কে দেখার জন্য।
// console.log(productPrices);


// যখন কোনো রিটার্ন এর দরকার হবে না তখন map() এর পরিবর্তে forEach(){} ফাংশন ব্যবহার করতে পারি। এই দুইটা ফাংশনের কাজ একই শুধু রিটার্ন এ ভিন্নতা। map() beshi lagbe-
products.forEach(product => console.log(product));

