
class TeamMember {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}//এগুলো একই আছে তাই আলাদা একটি ক্লাসে লিখে বাকি গুলোতে super() দিয়ে কল করলেই হবে। 

// এটা derived class; একে কমন ক্লাসের সাথে লিংক করতে derived-class-name extends common-class-name লিখতে হবে।
class Support extends TeamMember {
    groupSupportTime;
    constructor(name, address, time) {
        super(name, address);// যখন নতুন কোনো property তৈরি করব তখন constructor এর ভিতরে super() call করতে হবে। যেখান থেকে পাবে বা extends করবে সেখানে পাঠিয়ে দিবে। তাই সুপার । এখানে সুপার কল করবে TeamMember কে। super () এ যা property call দিব তা constructor() এও যোগ করতে হবে। 
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }//এটা startSession() বাদেও যেকোনো নাম হতে পারে। 
}

// এটা derived class
class StudentCare extends TeamMember {
    // super(name, address);
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
// console.log(ash);

