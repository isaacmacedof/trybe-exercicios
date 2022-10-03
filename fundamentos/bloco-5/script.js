
// arquivo script.js

/* console.log(document.getElementById('start').nextSibling) // nó

console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>
 */
/* Crie um irmão para elementoOndeVoceEsta.
Crie um filho para elementoOndeVoceEsta.
Crie um filho para primeiroFilhoDoFilho.
A partir desse filho criado, acesse terceiroFilho. */

// My fist appendChield

/* let container = document.querySelector('#pai');

const element = document.createElement('p');
element.innerText = 'primeiro filho do pai';
console.log(element);

container.appendChild(element) */

let c1 = document.querySelector('.body');
let ele1 = document.createElement('h1');
ele1.innerText = 'Exercício - JavaScript DOM';
c1.appendChild(ele1);

let ele2 = document.createElement('main');
ele2.className = "main-content";
ele2.style.backgroundColor = 'green';
c1.appendChild(ele2);

let ele3 = document.createElement('section');
ele3.className = 'center-content';
ele2.appendChild(ele3);

let ele4 = document.createElement('p');
ele4.innerText = 'Texte apenas para o exercicio que eu espero ter dominado ao menos um pouco a criação de elementos nessa budega';
ele3.appendChild(ele4);

let ele5 = document.createElement('section');
ele5.className = 'left-content';
ele2.appendChild(ele5);

let ele6 = document.createElement('section');
ele6.className = 'right-content';
ele6.style = 'margin-right: auto';
ele2.appendChild(ele6);

let img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
ele5.appendChild(img);

let list = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

let eleList = document.createElement('ul');
ele6.appendChild(eleList);
for (let i = 0; i < list.length; i += 1) {
  let lista = document.createElement('li');
  lista.innerText = list[i];
  eleList.appendChild(lista);
};