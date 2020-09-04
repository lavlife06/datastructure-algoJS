// The link to understand the deep copy and shallow copy and simple copy
// https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/

// This both a and b are now seperated even having same data
// let a = { next: 'lav', now: 'karan' };
// let b = { next: 'lav', now: 'karan' };
// a.next = 'hii';
// console.log(a);
// console.log(b);

// { next: 'hii', now: 'karan' }
// { next: 'lav', now: 'karan' }

// Problem
// Another problem this is due to shallow copy
// let l = { next: 'lav', now: 'karan' };
// let a = l;
// let b = l;
// l.next = 'hii';
// console.log(a);
// console.log(b);
// console.log(l);

// { next: 'hii', now: 'karan' }
// { next: 'hii', now: 'karan' }
// { next: 'hii', now: 'karan' }

// Solution
// let l = { next: 'lav', now: 'karan' };
// let a = { ...l }; //This creates new object
// l.next = 'hii';
// console.log(a);
// console.log(l);

// { next: 'lav', now: 'karan' }
// { next: 'hii', now: 'karan' }

////// 1)
// This a and b are both connected becasuse of the l vriable
// let l = { next: { next: null, now: 'karan3' }, now: 'karan2' };
// let a = l;
// let b = l;
// a.next = 'hii';
// console.log(a);
// console.log(b);
// console.log(l);

// { next: 'hii', now: 'karan2' }
// { next: 'hii', now: 'karan2' }
// { next: 'hii', now: 'karan2' }

////// 2)
// let l = {
//   next: { next: { next: null, now: 'karan3' }, now: 'karan2' },
//   now: 'karan',
// };
// let a = l.next;
// a.next = null;
// console.log(a);
// console.log(l);

// { next: null, now: 'karan2' }
// { next: { next: null, now: 'karan2' }, now: 'karan' }

// Compare 1 and 2 u can notice that if u take a part of bigger variable then that new
//  variable is not atteached to prev.. one
