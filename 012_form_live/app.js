// selecting the text box to produce live output
let name = document.querySelector('input[type=text]');
let p = document.querySelector('p');
    

// selecting the button of the form to make changes when i t is clicked
// we could have used form and its event would listen for the submit button
// but i have tried this one to check whether it works or not

document.querySelector('button').addEventListener('click',(event) => {
    p.style.color = 'inherit';
    p.addEventListener('click',(event)=>{

        // checking whether event.target == paragraph p itself

        event.target.style.color = 'rgb(232, 93, 255)';
    })
    p.textContent = `The button clicked on time stamp : ${event.timeStamp}`;
    // whenever any button is clicked, the page
    // will be auto refreshed
    // to prevent this we will use prevent Default to the event

     event.preventDefault();
});

// live output code 
name.addEventListener('input', (event) => {

    // we could have used name.value at event.target.value
    // both are same
    p.textContent = event.target.value;
});