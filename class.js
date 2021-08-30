// class এর নাম সাধারনত বড় হাতের letter দিয়ে শুরু হয়। class এ ফাংশন লিখতে ফাংশনের নামের প্রথমে function লিখতে হবে না। class এর ভিতরে অনেকগুলো object থাকে। class এর ভিতরে কোনো property কে access করতে হলে this.propery-name দিতে হবে। 
class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

const aamir = new Support('Aamir khan', 'Bangladesh');
const salman = new Support('Solaiman khan', 'Dubai')
const sharuk = new Support('SRK khan', 'Dubai')
const akshay = new Support('Akshay kumar', 'Dubai')

aamir.startSession();//যার নাম দিব তার startSession() দিলে ঐ ফাংশনের কাজ হবে। আউটপুট-Aamir khan start a support session
salman.startSession();
sharuk.startSession();
akshay.startSession();

// console.log(aamir, salman);


