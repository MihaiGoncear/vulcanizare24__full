let tireCategory = document.getElementById('choose__tire__category');

tireCategory.addEventListener('click', setToStorage);

function setToStorage(event) {

    tireStorage = event.target.dataset.category;
    setTodosToLocalStorage(tireStorage);
}

function setTodosToLocalStorage(category) {
    localStorage.setItem('category', JSON.stringify(category))
};