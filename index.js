// Code your solutions in this file

const messages = [];

function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  
  return messages;
}

