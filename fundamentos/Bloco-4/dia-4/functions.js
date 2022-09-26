/* const person1 = [10, 9, 8, 10];
const person2 = [10, 10, 7, 9];

function media (person) {
  let medias = 0;
  for (let i = 0; i < person.length; i+=1) {
  medias += person[i];
  }
  console.log(medias / person.length);
};

media (person1)
 */

function max (a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}

console.log (max(10, 25))