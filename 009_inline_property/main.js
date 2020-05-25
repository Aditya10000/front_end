let btn = document.querySelector('button');
let sel = document.querySelector('div');

btn.style.backgroundColor = "rgb(77, 245, 73)";
btn.onclick = () => {
  if(sel.className == ""){
    sel.className = 'change';
    btn.innerHTML = "Show Less";
    btn.style.backgroundColor = "rgb(195, 133, 13)";
  }else {
    sel.className = "";
    btn.innerHTML = "Show More";
    btn.style.backgroundColor = "rgb(77, 245, 73)";
  }
}
