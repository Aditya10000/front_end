let ar = ['rgb(51, 255, 62)','rgb(131, 34, 0)','rgb(221, 168, 20)','rgb(2, 215, 112)','rgb(191, 0, 11)','rgb(204, 8, 188)'];

let rand;

body = document.querySelector('body');

p = document.createElement('p');
p.innerHTML = 'This is pure DOM manipulation';
div = document.createElement('div');
body.appendChild(div);
body.appendChild(p);


div.addEventListener('click', () => {
  rand = Math.floor(Math.random() * ar.length);
  div.style.backgroundColor = ar[rand];
});
