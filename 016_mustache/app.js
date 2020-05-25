let boy = document.getElementById('boy');
let mustache = document.getElementById('mustache');

boy.addEventListener('click', (event) => {
    mustache.style.left = `${event.x}px`;
    mustache.style.top = `${event.y}px`;
});

