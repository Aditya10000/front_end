let btn = document.querySelector('body');

btn.addEventListener('click', (event) => {
    if(event.target.tagName == 'BUTTON'){
        event.target.parentNode.remove();
    }
});