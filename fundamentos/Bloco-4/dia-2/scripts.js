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

if (a > 0) {
  console.log("positive");
} else if (a < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

a = 20
b = 64
c = -200

if (a + b + c == 180) {
  console.log(true);
} else if (a + b + c < 0) {
  console.log("Angulos invalidos");
} else { 
  console.log(false);
}

if (a%2 == 0 | b%2 == 0 | c%2 ==0) {
  console.log(true);
} else {
  console.log(false);
}