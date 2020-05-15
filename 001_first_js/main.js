
let button = document.querySelector('button');

let url = "https://facebook.com";

button.addEventListener('click', () =>{
  let newWindow = window.open(url);
  setTimeout(()=>{
    newWindow.close();
  },3000);
});
