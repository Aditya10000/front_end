// we may have used toggle method


// event.target.classlist.toggle('className');

let body = document.querySelector('body');
let clicked = 0;
body.addEventListener('click', (event) => {
    if(event.target.tagName == 'BODY' || event.target.tagName == 'UL'){}
    else{
        // console.log(event.target.nextElementSibling.tagName);
        if(event.target.nextElementSibling.className == ''){
            // console.log(event.target.parentNode.children);
            for (const child of event.target.parentNode.children) {
                if (child.tagName == 'UL') {
                    child.className = 'hide';
                }
            }
        }
        else {
            for (const child of event.target.parentNode.children) {
                if (child.tagName == 'UL') {
                    child.className = '';
                }
            }
        }
    }
});
// body.addEventListener('click', hideMe);
// function hideMe(event) {
    
// }
