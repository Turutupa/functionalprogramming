const compose = (f, g) => (x) => f(g(x));

// Example 1
const toUpperCase = (x) => x.toUpperCase();
const exclaim = (x) => `${x}!`;
const shout = compose(toUpperCase, exclaim);

const c = shout('send in the clowns'); // "SEND IN THE CLOWNS!"
console.log(c);

// Example 2
const head = (x) => x[0];
const reverse = (y) => y.reduce((acc, x) => [x].concat(acc), []);
const last = compose(head, reverse);

const lastHit = last(['jumpkick', 'roundhouse', 'uppercut']); // 'uppercut'
console.log(lastHit);

/*  associativity
  compose(f, compose(g, h)) === compose(compose(f, g), h);
*/

compose(toUpperCase, compose(head, reverse));
// or
compose(compose(toUpperCase, head), reverse);

const loudLastUpper = compose(
  compose(exclaim, toUpperCase),
  compose(head, reverse)
);
console.log(loudLastUpper(['one', 'two']));
