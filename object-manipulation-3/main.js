console.log('Lodash is loaded:', typeof _ !== 'undefined');
const $playButton = document.querySelector('.play-btn');

var players = [
  {
    name: 'Moo',
    hand: null
  },
  {
    name: 'Ed',
    hand: null
  },
  {
    name: 'Edd',
    hand: null
  },
  {
    name: 'Eddy',
    hand: null
  }
];

const rank = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const suit = ['club', 'diamond', 'heart', 'spade'];
const deck = [];

$playButton.addEventListener('click', () => {
  const createDeck = () => {
    for (let i = 0; i < suit.length; i++) {
      for (let j = 0; j < rank.length; j++) {
        const card = {
          suit: suit[i],
          rank: rank[j]
        };
        deck.push(card);
      }
    }
    return deck;
  };
  createDeck();
  const shuffledDeck = _.shuffle(createDeck());

  const dealTwoCards = () => {
    players[0].hand = [shuffledDeck.pop(), shuffledDeck.pop()];
    players[1].hand = [shuffledDeck.pop(), shuffledDeck.pop()];
    players[2].hand = [shuffledDeck.pop(), shuffledDeck.pop()];
    players[3].hand = [shuffledDeck.pop(), shuffledDeck.pop()];
  };
  dealTwoCards();

  const getNumberValue = () => {
    for (let i = 0; i < players.length; i++) {
      for (let j = 0; j < players[i].hand.length; j++) {
        if (players[i].hand[j].rank === 'A') {
          players[i].hand[j].rank = 11;
        } else if (players[i].hand[j].rank === 'J' || players[i].hand[j].rank === 'Q' || players[i].hand[j].rank === 'K') {
          players[i].hand[j].rank = 10;
        }
      }
    }
    return players;
  };
  getNumberValue();

  const addScore = () => {
    for (let i = 0; i < players.length; i++) {
      players[i].finalScore = players[i].hand[0].rank + players[i].hand[1].rank;
    }
  };
  addScore();

  players.sort((player1, player2) => {
    return player1.finalScore - player2.finalScore;
  });

  const declareWinner = () => {
    if (players[2].finalScore === players[3].finalScore) {
      console.log(`${players[2].name} and ${players[3].name} tied!`);
    } else {
      console.log(`${players[3].name} won!`);
    }
  };
  declareWinner();
});
