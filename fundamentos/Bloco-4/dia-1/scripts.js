let a = 2;
let b = 4;
let c = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

if (a > b) {
  console.log("a é maior do que b");
} else {
  console.log("b é maior do que a");
}

if (a > b && a > c) {
  console.log("a é maior do que b e c");
} else if (b > a && b > c) {
  console.log("b é maior do que a e c");
} else {console.log("c é maior do que a e b");}

