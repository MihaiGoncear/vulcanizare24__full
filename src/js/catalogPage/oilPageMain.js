import { renderOilPage } from "./renderOilPage.js"

let toggleButton = document.getElementById('title__head');

toggleButton.addEventListener('click', renderPage) 

function renderPage(event) {

    let title = event.target.dataset.name;
    
    if (!title) {
        return;
    }
    let main = document.getElementById('main');
    main.innerHTML = '';
    
    renderOilPage(title)
}