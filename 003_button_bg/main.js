let b = document.getElementsByClassName('one');
b[0].addEventListener('click', () => {
    b[0].style.backgroundColor = 'green';
});
b[1].addEventListener('click', () => {
    b[1].style.backgroundColor = 'blue';
});
b[2].addEventListener('click', () => {
    b[2].style.backgroundColor = 'red';
});
b[3].addEventListener('click', () => {
    for(i=0; i<b.length;i++){
        b[i].style.transitionProperty = 'all';
        b[i].style.transitionDuration = '1s';
        b[i].style.transitionTimingFunction = 'ease';
        b[i].style.backgroundColor = "black";
    }
});
