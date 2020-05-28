

//event for adding/removing and hiding/showing elements
let body = document.querySelector('body');


body.addEventListener('click',addorRemove);

function addorRemove(event) {
   if(event.target.textContent == 'Add'){
        let getItem = document.getElementById('getItem');
        if(getItem.value != ''){
            let para = document.createElement('p');
            let newBtn = document.createElement('button'); 
            newBtn.className = 'newButton';
            newBtn.textContent = 'Delete';
            para.textContent = getItem.value;
            getItem.value = '';
            para.appendChild(newBtn);
            let ul = document.querySelector('ul');
            ul.appendChild(para);
        }
   }
   else if(event.target.textContent == 'Delete'){
       event.target.parentElement.remove();
   }
   else if(event.target.name == 'check'){
        let ul = document.querySelector('ul');
       if(event.target.checked == true){
           ul.className = 'hideMe'
       }
       else{
           ul.className = '';
       }
   }
   
}


/// another event for search box


let searchBox = document.getElementById('searchBox');

searchBox.addEventListener('keyup', (event) => {
    let ul = document.querySelector('ul');
    let valueFromBox = searchBox.value;
    for (const element of ul.children) {
        if(valueFromBox.length != 0){
            if(valueFromBox.toLowerCase() == element.firstChild.data.toLowerCase()){
                element.className = '';
            }
            else{
                element.className = 'hideMe';
            }
        }
        else{
            element.className = '';
        }
                
    }
        
});




// event for tab buttons

let selectedButton = null;

let footer = document.querySelector('footer');
footer.addEventListener('click', buttonClicked);



let counter1 = 0;
let counter2 = 0;
function buttonClicked(event) {
    
    if(event.target.className == 'footerButton' || event.target.className == 'footerButton footerButtonClicked'){
        event.preventDefault();
        if(selectedButton != null){
            selectedButton.classList.remove('footerButtonClicked');
            if(selectedButton.name == 'firstButton'){
                let paraOfFirstButton = document.getElementById('firstPara');
                paraOfFirstButton.classList.add('hideMe');
            }else{
                let paraOfSecondButton = document.getElementById('secondPara');
                paraOfSecondButton.classList.add('hideMe');
            }
        }
        
        selectedButton = event.target;
        event.target.classList.add('footerButtonClicked');

        if(selectedButton.name == 'firstButton'){
            let paraOfFirstButton = document.getElementById('firstPara');
            let anchor = document.querySelector('a');
            anchor.textContent = 'Answer';
            if(counter1 == 0){
                paraOfFirstButton.className = 'para';
                counter1++; 
                counter2 = 0;
            }
            else{
                paraOfFirstButton.classList.add('hideMe');
                counter1 = 0;
                console.log(counter1);
                selectedButton.classList.remove('footerButtonClicked');
            }
        }else {
            let paraOfSecondButton = document.getElementById('secondPara');
            if(counter2 == 0){
                counter2 = 1;
                paraOfSecondButton.className = 'para';
                counter1 = 0;
            }
            else{
                selectedButton.classList.remove('footerButtonClicked');
                paraOfSecondButton.classList.add('hideMe');
                counter2 = 0;
            }

        }
    }
   
}


let anchor = document.querySelector('a');
anchor.addEventListener('click', (event)=> {
    
    event.preventDefault();
    anchor.textContent = 'As mushroom as possible';
    anchor.style.backgroundColor = 'rgb(216, 255, 108)'
});

