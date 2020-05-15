 let animals = ['dog','cat','elephant','giraffe','eagle','lion'];
// let b = document.querySelector('body');
// let newElement = document.createElement('p');
// newElement.textContent = "hellow";
//
// let h = document.querySelector('h1');
// h.remove();
// b.appendChild(newElement);
// for(i=0;i<animals.length,i++) {
//   newElement.textContent = animals[i];
//   b.appendChild(newElement);
// }
let b = document.querySelector('ul');


for(i=0; i<animals.length;i++){
  let p = document.createElement('li');
  p.textContent = animals[i];
  b.appendChild(p);
}
