import "../../styles/style.scss"

let homeBtn = document.getElementById('home');
let catalogBtn = document.getElementById('catalog');
let contactBtn = document.getElementById('contacts');
let headTitle = document.getElementById('title');

homeBtn.onclick = buttonChange(homeBtn);
catalogBtn.onclick = buttonChange(catalogBtn);
contactBtn.onclick = buttonChange(contactBtn);

function buttonChange(mainButton){

    if(headTitle.dataset.title === mainButton.id){
        mainButton.style.color = 'rgb(212, 212, 212)';
        mainButton.style.fontWeight = 'bold';
    }
}