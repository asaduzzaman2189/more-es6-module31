
class TeamMember {
    name;
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}//এগুলো একই আছে তাই আলাদা একটি ক্লাসে লিখে বাকি গুলোতে super() দিয়ে কল করলেই হবে। 

// এটা derived class; একে কমন ক্লাসের সাথে লিংক করতে derived-class-name extends common-class-name লিখতে হবে।
class Support extends TeamMember {
    groupSupportTime;
    designation = 'Support Web Dev';
    constructor(name, address, time) {
        super(name, address);// যখন নতুন কোনো property তৈরি করব তখন constructor এর ভিতরে super() call করতে হবে। যেখান থেকে পাবে বা extends করবে সেখানে পাঠিয়ে দিবে। তাই সুপার । এখানে সুপার কল করবে TeamMember কে। super () এ যা property call দিব তা constructor() এও যোগ করতে হবে। 
        this.groupSupportTime = time;
    }
    startSession() {
        designation = 'Care Web Dev';
        console.log(this.name, 'start a support session');
    }//এটা startSession() বাদেও যেকোনো নাম হতে পারে। এগুলোকে method বলে। রিটার্নও করা যাবে। শুধু এর আগে function কথাটা লেখা যাবে না। 
}

// এটা derived class
class StudentCare extends TeamMember {
    designation = 'Neptune App Dev';
    buildARoutine(student) {
        console.log(this.name, 'Build a routine for', student);
    }
}

class NeptuneDev extends TeamMember {
    codeEditor;
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'Release app version', version);
    }
}

const aamir = new Support('Aamir khan', 'Bangladesh', 11);
const salman = new Support('Solaiman khan', 'Dubai', 4)
const sharuk = new Support('SRK khan', 'Dubai', 9)
const akshay = new Support('Akshay kumar', 'Dubai', 11)

// console.log(aamir, salman);


const alia = new StudentCare('Alia Bhatt', 'Mumbai');
// console.log(alia);


const ash = new NeptuneDev('Ash', 'Mumbai', 'Android studio');

ash.releaseApp('1.4.5');// function ধরেও কল করা যাবে। 
console.log(ash.name);



// proto typical chain--- google chrome e console kore
// জাভাস্ক্রিপ্টে একটি object থেকে আরেকটি object এর propery গুলো যে শেয়ার হচ্ছে সেটা একটি চেইনের মত কাজ করে এটাকেই proto typical chain বা proto typical inheritance বলে।  
ash.name
"Ash"

ash.__proto__
TeamMember { constructor: ƒ, releaseApp: ƒ }

ash.__proto__.__proto__
{ constructor: ƒ } constructor: class TeamMember[[Prototype]]: Object

ash.__proto__.__proto__.__proto__
{ constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, … } constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()

ash.__proto__.__proto__.__proto__.__proto__
null

