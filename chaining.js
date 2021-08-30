//declare variable based on the name of an object property- অবজেক্টের প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার।

const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
// console.log('myObject.p', myObject?.p?.q);//TypeError: Cannot read property 'q' of undefined. ? মার্কটা সবজায়গায় দেয়া যাবে সমস্যা নেই। এর কাজ হচ্ছে কোন একটি ভ্যালুর মান যদি undefined হয়ে যায় তবে তা error না দিয়ে undefined show করবে।

// destructuring array
const [p, q] = [45, 37, 91, 86];//45, 37 এরপর যেই মান দেয়া হোক না কেন প্রথম দুইটাই দেখাবে কারণ p , q এর মান নিবে। 
console.log(p, q);

const [best, worst] = ['momotaj', 'poroshi'];
// console.log(best, worst);

// object এর ক্ষেত্রে- 
const { sky, color, money } = { sky: 'blue', soil: 'matti', color: 'rec', money: 500 };

//chaining
const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }

    }
}

console.log(company.web.tech.third);
console.log(company?.back?.tech.third);
//? মার্কটা সবজায়গায় দেয়া যাবে সমস্যা নেই। এর কাজ হচ্ছে কোন একটি ভ্যালুর মান যদি undefined হয়ে যায় তবে তা error না দিয়ে undefined show করবে।

