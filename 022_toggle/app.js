let body = document.querySelector('body');
body.addEventListener('click',(event)=> {
    // let colorMe = Math.floor(Math.random()*16777256).toString(16);
    // console.log(colorMe);
    if(event.target.tagName == 'DIV'){
        // event.target.classList.toggle('second');   
        event.target.textContent = 'This is adi';
        event.target.style.transition = '0.4s';
        event.target.style.left = '100vw';
        event.target.style.top = 0;
    }// event.target.style.backgroundColor = `#${colorMe}`;
});