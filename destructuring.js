const fish = { id: 58, name: 'King Hilsha', price: 9000, phone: '0171755555555', address: 'Chandpur', dress: 'silver' };

/* 
const phone = fish.phone;
const price = fish.price;
const dress = fish.dress;
const id = fish.id;

 */

// uporer ongshoke evabe lekha zay- বড় অবজেক্টকে ছোট আকারে এভাবে লেখা যায়। 
const { phone, price, dress, id } = fish;

console.log(phone, dress);
console.log(phone, price);
console.log(phone);
console.log(phone, id);

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

// const work = company.web.work;
// const framework = company.web.framework;

// উপরের একই কাজ 
const { work, framework } = company.web;
const { food } = company.ceo;

const { second, third } = company.web.tech;

console.log(work, framework, food, second, third);

