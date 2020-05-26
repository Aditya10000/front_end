let div = document.getElementsByClassName('main')[0];


let selectedElement  = null ; 

div.addEventListener('click', (event) => {
    let target = event.target;
    colorIt(target);
});

function colorIt(target) {
    if(target.className === 'main'){
        // none
    }
    else{ 
        if(selectedElement != null)
            selectedElement.style.backgroundColor = 'red';
        
        selectedElement = target;
        selectedElement.style.backgroundColor = 'green';
    }
    
}