const matematic = {
  sum: (...numbers) => numbers.reduce((acc, cur) => acc + cur, 0),
}

console.log(matematic.sum(4, 5, 6, 13, 2, 5, 6, 7, 78, 75));