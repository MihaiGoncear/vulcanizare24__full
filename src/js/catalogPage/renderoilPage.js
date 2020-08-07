import { products } from "../sharedJS/products.js";

export function renderOilPage(title) {
    let productList =  products.ulei;
    let main = document.getElementById('main');
    main.innerHTML = '';

    for(let items in productList){

        let oilTitleContainer = document.createElement('div');
        oilTitleContainer.classList.add('oil__title__container');

        let oilTitleImg = document.createElement('img');
        oilTitleImg.classList.add('oil__title__img');
        oilTitleImg.setAttribute('src', productList[items].description.url);

        let oilFullContainer = document.createElement('div');
        oilFullContainer.classList.add('oil__container');

        oilTitleContainer.append(oilTitleImg);

        if(items === title) {
            for(let fitems in productList[items].oilItems){

                let oilContainer = document.createElement('div');
                oilContainer.setAttribute('class', 'oil__container__list');
            
                let oilCard = document.createElement('div');
                oilCard.setAttribute('class', 'oil__card');
    
                let oilFront = document.createElement('div');
                oilFront.setAttribute('class', 'oil__front');
    
                let pFront = document.createElement('p');
                pFront.setAttribute('class', 'oil__name');
                pFront.innerText = productList[items].oilItems[fitems].name;
    
                let img = document.createElement('img');
                img.setAttribute('src', productList[items].oilItems[fitems].url); 
                img.setAttribute('alt', "oil");
                img.setAttribute('class', 'oil__img');
    
                let spanOne = document.createElement('span');
                spanOne.setAttribute('class', 'oil__quantity');
    
                spanOne.innerText = `${productList[items].oilItems[fitems].quantity}L`;
    
                let spanTwo = document.createElement('p');
                spanTwo.setAttribute('class', 'oil__price');
                spanTwo.innerText = `${productList[items].oilItems[fitems].price} Lei/L`
    
                let oilBack = document.createElement('div');
                oilBack.setAttribute('class', 'oil__back');
    
                let specifications = document.createElement('p');
                specifications.setAttribute('class', 'oil__specifications')
                specifications.innerHTML = ` <strong>Specificatii: </strong>${productList[items].oilItems[fitems].specifications}`;
    
                let pBack = document.createElement('p');
                pBack.setAttribute('class', 'oil__description');
                pBack.innerText = productList[items].oilItems[fitems].description;

                let quantityDiv = document.createElement('div');
                quantityDiv.classList.add('quantity__div')

                let quantityIcon = document.createElement('img');
                quantityIcon.setAttribute('src', './images/page-pictogram/weight-icon.png');     
                quantityIcon.setAttribute('alt', "quantity");
               
                quantityDiv.append(quantityIcon);
                quantityDiv.append(spanOne);
               
                oilFront.append(img);
                oilFront.append(quantityDiv);
    
                oilBack.append(pBack);
                oilBack.append(specifications);

                oilCard.append(oilFront);
                oilCard.append(oilBack);
                
                oilContainer.append(pFront);
                oilContainer.append(oilCard);
                oilContainer.append(spanTwo);

                oilFullContainer.append(oilContainer)
    
        
                main.append(oilTitleContainer);
                main.append(oilFullContainer);
            }
        } 
    }
}