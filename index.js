/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}
*/


const names = [];
const messagesArray = [];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messagesArray.push(message); 
    }
    return messagesArray;
};

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number -= 1;
    }
}

