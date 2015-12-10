// Add as you see fit
var nouns = [
  'parrot',
  'horse',
  'cart',
  'carrot',
  'rabbit',
  'dick',
  'shotglass',
  'snail',
  'mushroom',
  'bird',
  'antenna',
  'satellite dish',
  'arm'
];

// Be creative. Why not.
var verbs = [
  'running',
  'riding',
  'cycling on',
  'bludgeoning',
  'eyeballing',
  'hitting on',
  'stroking',
  'yelling at',
  'quietly contemplating'
];

function getSuggestion() {
  var str = 'you should draw a ';
  var nounRand = Math.floor(Math.random()* nouns.length);
  str += nouns[nounRand];
  while (nounRand%2===0) {
    // add another noun, reset nounRand
    nounRand = Math.floor(Math.random()* nouns.length);
    str += ' and a ' + nouns[nounRand];
  }
  var verbRand = Math.floor(Math.random()* verbs.length);
  str += ' ' + verbs[verbRand] + ' a '
  nounRand = Math.floor(Math.random()* nouns.length);
  str += nouns[nounRand];
  return str;
}

console.log(getSuggestion());