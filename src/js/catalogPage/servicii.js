function getTodosFromLocalStorage() {
    return JSON.parse(localStorage.getItem('servicii'));
};

let myStorage = getTodosFromLocalStorage()

document.onload = renderServiciiPage();

function renderServiciiPage() {
    let iframe = document.getElementById('iframe')
    let h1 = document.getElementById('servicii__title')
    if(myStorage === 'simiring') {
        h1.innerText = 'Producerea simiringurilor de toate tipurile'
        iframe.setAttribute('src', 'https://www.youtube.com/embed/y4FFxbXcZaU');

    } else if(myStorage === 'furtun') {
        h1.innerText = 'Presarea furtunurilor hidraulice'
        iframe.setAttribute('src', 'https://www.youtube.com/embed/YLqkVWpI7L0')
    }
}
