// Code your solutions in this file

const cards = []

function writeCards(name, event) {
  for (let i = 0; i < cards.length; i++) {
    console.log(`Thank you, ${name[i]} for the wonderful ${event} gift!`);
  }
  
  return cards;
}