import { products } from "../sharedJS/products.js";
import { rennderAutoturismeFilter } from "./renderFilters.js";
import { renderIndustrialeFilter } from "./renderFilters.js";

function getTodosFromLocalStorage() {
    return JSON.parse(localStorage.getItem('category'));
};
const myStorage = getTodosFromLocalStorage();

let product = products.anvelope[myStorage].tireItem;

document.onload = renderFilter();

function renderFilter() {

    if(myStorage === 'autoturisme'){
        rennderAutoturismeFilter(renderTires)
    } else if(myStorage === 'industriale') {
        renderIndustrialeFilter(renderTires)
    }
}


let selectHeight = document.getElementById('height')
let selectWidth = document.getElementById('width')
let selectRadius = document.getElementById('radius')

function renderTires() {
    let main = document.getElementById('main');
    main.innerHTML = '';    
    let i = 0;

    let specs = document.getElementById('specs');
    
    if(myStorage === 'autoturisme'){
        for(let items in product){
            
            if((product[items].height === parseInt(selectHeight.value) || selectHeight.value === '--select--' ) && (product[items].width === parseInt(selectWidth.value) || selectWidth.value === '--select--') && (product[items].radius === parseInt(selectRadius.value) || selectRadius.value === '--select--') && (product[items].season === season.value || season.value === '--select--' )){
                specs.classList.remove('full__filter__container__margin__old');
                specs.classList.add('full__filter__container__margin__new');
                
                let nameTire = document.createElement('p');
                let heightTire = document.createElement('p');
                let widthTire = document.createElement('p');
                let radiusTire = document.createElement('p');
                let season = document.createElement('p');
                let price = document.createElement('p');

                nameTire.innerHTML = '<span> Marca: </span>' + product[items].name;
                nameTire.classList.add('tire__name')
                heightTire.innerHTML = '<span> Inaltime (%): </span>' + product[items].height;
                widthTire.innerHTML = '<span> Latime (mm): </span>' + product[items].width;
                radiusTire.innerHTML = '<span> Diametru (R): </span>' + product[items].radius;
                season.innerHTML = '<span> Sezon: </span>' + product[items].season;
                price.innerHTML = '<span>Pret: </span>' + product[items].price + ' Lei';

                let container = document.createElement('div');
                container.classList.add('tire__container');

                container.append(season);
                container.append(nameTire);
                container.append(heightTire);
                container.append(widthTire);
                container.append(radiusTire);
                container.append(price);
                
                main.append(container);
                
                i++;
                
                console.log(i)   
            }
        } 
    } else if(myStorage === 'industriale'){

        specs.classList.remove('full__filter__container__margin__old');
        specs.classList.add('full__filter__container__margin__new');

        let filter = document.getElementById('anvelope-discuri__filter');

        if(filter.value === 'anvelope'){
            let selectSpecs = document.getElementById('industriala__size')

            for(let items in product.anvelope){
            
                if(product.anvelope[items].specs === selectSpecs.value){
                    let nameTire = document.createElement('p');
                    let size = document.createElement('p');
                    let price = document.createElement('p');
                    let img = document.createElement('img');
    
                    nameTire.innerText = product.anvelope[items].name;
                    img.setAttribute('src', product.anvelope[items].url);
                    size.innerHTML = '<span>Marime: </span>' + product.anvelope[items].size;
                    price.innerHTML = '<span>Pret: </span>' + product.anvelope[items].price + ' Lei';
                    
                    let container = document.createElement('div');
                    container.classList.add('tire__container');

                    container.append(nameTire);
                    container.append(img);
                    container.append(size);
                    container.append(price);
                    
                    main.append(container);
                    
                    i++;
                    
                    console.log(i)   
                }
            } 
        } else if(filter.value === 'camere'){
            let selectSpecs = document.getElementById('industriala__size')

            for(let items in product.camere){
            
                if(product.camere[items].specs === selectSpecs.value){
                    let nameTire = document.createElement('p');
                    let size = document.createElement('p');
                    let price = document.createElement('p');
                    let img = document.createElement('img');
    
                    nameTire.innerText = product.camere[items].name;
                    img.setAttribute('src', product.camere[items].url);
                    size.innerHTML = '<span>Marime: </span>' + product.camere[items].size;
                    price.innerHTML = '<span>Pret: </span>' + product.camere[items].price + ' Lei';
                    
                    let container = document.createElement('div');
                    container.classList.add('tire__container');

                    container.append(nameTire);
                    container.append(img);
                    container.append(size);
                    container.append(price);
                    
                    main.append(container);
                    
                    i++;
                    
                    console.log(i)   
                }
            } 
        }

    } else {
        console.log('fuck you')
    }
    if (main.innerHTML === '') {
        main.innerText = "Nu avem asa produs."
        specs.classList.add('full__filter__container__margin__old');
        specs.classList.remove('full__filter__container__margin__new');
    }
    return;
}
