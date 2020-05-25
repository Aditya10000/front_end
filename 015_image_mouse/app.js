

let img = document.querySelector('img');
img.addEventListener('mousemove', (event) => {
    let message = document.getElementById('message');
    message.textContent += 'hi';


    // creating a div element during the mouse movement
    let dot = document.createElement('div');
    dot.className = 'dot';
    document.querySelector('body').appendChild(dot);
    dot.style.left = `${event.x}px`;
    dot.style.top = `${event.y}px`;

});