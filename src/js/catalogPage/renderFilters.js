export function rennderAutoturismeFilter(clickEvent) {
    let specs = document.getElementById('specs');
        
    let filterContainerDiv = document.createElement('div');
    filterContainerDiv.classList.add('filter__container');
    
    // --------------Pentru filtrul de Season------------------ //

    let seasonFilterDiv = document.createElement('div');
    seasonFilterDiv.classList.add('filter');

    let seasonLabel = document.createElement('label');
    seasonLabel.setAttribute('for', 'season');
    seasonLabel.innerText = 'Alegeti sezonul:'

    let seasonSelect = document.createElement('select');
    seasonSelect.setAttribute('name','season');
    seasonSelect.setAttribute('id', 'season');
    
    let selectOptionSeason = document.createElement('option');
    selectOptionSeason.setAttribute('value', '--select--')
    selectOptionSeason.innerText = '--select--';

    let varaOption = document.createElement('option');
    varaOption.setAttribute('value', 'Vara')
    varaOption.innerText = ' ☀️ Vara';
    
    let iarnaOption = document.createElement('option');
    iarnaOption.setAttribute('value', 'Iarna')
    iarnaOption.innerText = ' ❄️ Iarna';
    
    seasonSelect.append(selectOptionSeason);
    seasonSelect.append(varaOption);
    seasonSelect.append(iarnaOption);
    
    
    seasonFilterDiv.append(seasonLabel);
    seasonFilterDiv.append(seasonSelect);

    filterContainerDiv.append(seasonFilterDiv);
    
    // --------------Pentru filtrul de inaltime--------------- //

    let heightFilterDiv = document.createElement('div');
    heightFilterDiv.classList.add('filter');

    let heightLabel = document.createElement('label');
    heightLabel.setAttribute('for', 'height');
    heightLabel.innerText = 'Alegeti inaltimea (%): '

    let heightSelect = document.createElement('select');
    heightSelect.setAttribute('name','height');
    heightSelect.setAttribute('id', 'height');
    
    let selectOptionHeight = document.createElement('option');
    selectOptionHeight.setAttribute('value', '--select--')
    selectOptionHeight.innerText = '--select--';

    let heightOption1 = document.createElement('option');
    heightOption1.setAttribute('value', '35')
    heightOption1.innerText = '35';
    
    let heightOption2 = document.createElement('option');
    heightOption2.setAttribute('value', '40')
    heightOption2.innerText = '40';

    let heightOption3 = document.createElement('option');
    heightOption3.setAttribute('value', '45')
    heightOption3.innerText = '45';

    let heightOption4 = document.createElement('option');
    heightOption4.setAttribute('value', '50')
    heightOption4.innerText = '50';

    let heightOption5 = document.createElement('option');
    heightOption5.setAttribute('value', '55')
    heightOption5.innerText = '55';

    let heightOption6 = document.createElement('option');
    heightOption6.setAttribute('value', '60')
    heightOption6.innerText = '60';

    let heightOption7 = document.createElement('option');
    heightOption7.setAttribute('value', '65')
    heightOption7.innerText = '65';

    let heightOption8 = document.createElement('option');
    heightOption8.setAttribute('value', '70')
    heightOption8.innerText = '70';
    
    let heightOption9 = document.createElement('option');
    heightOption9.setAttribute('value', '75')
    heightOption9.innerText = '75';
    
    heightSelect.append(selectOptionHeight);
    heightSelect.append(heightOption1);
    heightSelect.append(heightOption2);
    heightSelect.append(heightOption3);
    heightSelect.append(heightOption4);
    heightSelect.append(heightOption5);
    heightSelect.append(heightOption6);
    heightSelect.append(heightOption7);
    heightSelect.append(heightOption8);
    heightSelect.append(heightOption9);        
    
    heightFilterDiv.append(heightLabel);
    heightFilterDiv.append(heightSelect);
    
    filterContainerDiv.append(heightFilterDiv);

    //---------------Pentru Filtru Latime----------------- //

    let widthFilterDiv = document.createElement('div');
    widthFilterDiv.classList.add('filter');

    let widthLabel = document.createElement('label');
    widthLabel.setAttribute('for', 'width');
    widthLabel.innerText = 'Alegeti latimea (mm): '

    let widthSelect = document.createElement('select');
    widthSelect.setAttribute('name','width');
    widthSelect.setAttribute('id', 'width');
    
    let selectOptionWidth = document.createElement('option');
    selectOptionWidth.setAttribute('value', '--select--')
    selectOptionWidth.innerText = '--select--';

    let widthOption1 = document.createElement('option');
    widthOption1.setAttribute('value', '175')
    widthOption1.innerText = '175';
    
    let widthOption2 = document.createElement('option');
    widthOption2.setAttribute('value', '185')
    widthOption2.innerText = '185';

    let widthOption3 = document.createElement('option');
    widthOption3.setAttribute('value', '195')
    widthOption3.innerText = '195';

    let widthOption4 = document.createElement('option');
    widthOption4.setAttribute('value', '205')
    widthOption4.innerText = '205';

    let widthOption5 = document.createElement('option');
    widthOption5.setAttribute('value', '215')
    widthOption5.innerText = '215';

    let widthOption6 = document.createElement('option');
    widthOption6.setAttribute('value', '225')
    widthOption6.innerText = '225';

    let widthOption7 = document.createElement('option');
    widthOption7.setAttribute('value', '235')
    widthOption7.innerText = '235';

    let widthOption8 = document.createElement('option');
    widthOption8.setAttribute('value', '245')
    widthOption8.innerText = '245';
    
    let widthOption9 = document.createElement('option');
    widthOption9.setAttribute('value', '255')
    widthOption9.innerText = '255';

    let widthOption10 = document.createElement('option');
    widthOption10.setAttribute('value', '265')
    widthOption10.innerText = '265';

    let widthOption11 = document.createElement('option');
    widthOption11.setAttribute('value', '275')
    widthOption11.innerText = '275';

    let widthOption12 = document.createElement('option');
    widthOption12.setAttribute('value', '285')
    widthOption12.innerText = '285';

    let widthOption13 = document.createElement('option');
    widthOption13.setAttribute('value', '295')
    widthOption13.innerText = '295';
    
    widthSelect.append(selectOptionWidth);
    widthSelect.append(widthOption1);
    widthSelect.append(widthOption2);
    widthSelect.append(widthOption3);
    widthSelect.append(widthOption4);
    widthSelect.append(widthOption5);
    widthSelect.append(widthOption6);
    widthSelect.append(widthOption7);
    widthSelect.append(widthOption8);
    widthSelect.append(widthOption9); 
    widthSelect.append(widthOption10); 
    widthSelect.append(widthOption11); 
    widthSelect.append(widthOption12);
    widthSelect.append(widthOption13);         
    
    widthFilterDiv.append(widthLabel);
    widthFilterDiv.append(widthSelect);
    
    filterContainerDiv.append(widthFilterDiv);

    // ---------------Pentru Filtru Raza------------------- //

    let radiusFilterDiv = document.createElement('div');
    radiusFilterDiv.classList.add('filter');

    let radiusLabel = document.createElement('label');
    radiusLabel.setAttribute('for', 'radius');
    radiusLabel.innerText = 'Alegeti raza (R): '

    let radiusSelect = document.createElement('select');
    radiusSelect.setAttribute('name','radius');
    radiusSelect.setAttribute('id', 'radius');
    
    let selectOptionRadius = document.createElement('option');
    selectOptionRadius.setAttribute('value', '--select--')
    selectOptionRadius.innerText = '--select--';

    let radiusOption1 = document.createElement('option');
    radiusOption1.setAttribute('value', '14')
    radiusOption1.innerText = '14';
    
    let radiusOption2 = document.createElement('option');
    radiusOption2.setAttribute('value', '15')
    radiusOption2.innerText = '15';

    let radiusOption3 = document.createElement('option');
    radiusOption3.setAttribute('value', '16')
    radiusOption3.innerText = '16';

    let radiusOption4 = document.createElement('option');
    radiusOption4.setAttribute('value', '17')
    radiusOption4.innerText = '17';

    let radiusOption5 = document.createElement('option');
    radiusOption5.setAttribute('value', '18')
    radiusOption5.innerText = '18';

    let radiusOption6 = document.createElement('option');
    radiusOption6.setAttribute('value', '19')
    radiusOption6.innerText = '19';
    
    let radiusOption7 = document.createElement('option');
    radiusOption7.setAttribute('value', '20')
    radiusOption7.innerText = '20';

    let radiusOption8 = document.createElement('option');
    radiusOption8.setAttribute('value', '21')
    radiusOption8.innerText = '21';

    radiusSelect.append(selectOptionRadius);
    radiusSelect.append(radiusOption1);
    radiusSelect.append(radiusOption2);
    radiusSelect.append(radiusOption3);
    radiusSelect.append(radiusOption4);
    radiusSelect.append(radiusOption5);
    radiusSelect.append(radiusOption6);
    radiusSelect.append(radiusOption7);
    radiusSelect.append(radiusOption8);     
    
    radiusFilterDiv.append(radiusLabel);
    radiusFilterDiv.append(radiusSelect);
    
    filterContainerDiv.append(radiusFilterDiv);

    // ---------------Pentru Filtru Buton------------------- //

    let button = document.createElement('button');
    button.setAttribute('id', 'button')
    button.innerText = 'Aplicati Filtrele'

    specs.append(filterContainerDiv)
    specs.append(button)

    button.addEventListener('click', clickEvent);
}

export function renderIndustrialeFilter(clickEvent) {
    let specs = document.getElementById('specs');

    let filterContainerDiv = document.createElement('div');
    filterContainerDiv.classList.add('filter__container');
        
    // ------ Filtru pentru Anvelope sau Discuri ------ //

    let anvelopeDiscuriFilterDiv = document.createElement('div');
    anvelopeDiscuriFilterDiv.classList.add('filter__industriala')

    let anvelopeDiscuriFilterLabel = document.createElement('label');
    anvelopeDiscuriFilterLabel.setAttribute('for', 'anvelope-discuri__filter');
    anvelopeDiscuriFilterLabel.innerText = 'Alegeti produsul:'

    let anvelopeDiscuriFilterSelect = document.createElement('select');
    anvelopeDiscuriFilterSelect.setAttribute('name', 'anvelope-discuri__filter');
    anvelopeDiscuriFilterSelect.setAttribute('id', 'anvelope-discuri__filter');

    let selectOptionAnvelopeDiscuriFilter = document.createElement('option');
    selectOptionAnvelopeDiscuriFilter.setAttribute('value', '--select--');
    selectOptionAnvelopeDiscuriFilter.innerText = '--select--';

    let optionAnvelope = document.createElement('option');
    optionAnvelope.setAttribute('value', 'anvelope');
    optionAnvelope.innerText = 'Anvelope';

    let optionDiscuri = document.createElement('option');
    optionDiscuri.setAttribute('value', 'camere');
    optionDiscuri.innerText = 'Camere'

    anvelopeDiscuriFilterSelect.append(selectOptionAnvelopeDiscuriFilter);
    anvelopeDiscuriFilterSelect.append(optionAnvelope);
    anvelopeDiscuriFilterSelect.append(optionDiscuri)

    anvelopeDiscuriFilterDiv.append(anvelopeDiscuriFilterLabel)
    anvelopeDiscuriFilterDiv.append(anvelopeDiscuriFilterSelect)

    filterContainerDiv.append(anvelopeDiscuriFilterDiv)

    anvelopeDiscuriFilterSelect.addEventListener('change', renderFilter)


    function renderFilter() {
        
        
        let filter = document.getElementById('filter')
        let rmvBtn = document.getElementById('button')
        
        if(filter && rmvBtn){
            filterContainerDiv.removeChild(filter)
            specs.removeChild(rmvBtn)
        }
        
        if(anvelopeDiscuriFilterSelect.value === 'anvelope') {
            let industrialaFilterDiv = document.createElement('div');
            industrialaFilterDiv.classList.add('filter__industriala');
            industrialaFilterDiv.setAttribute('id', 'filter')

            // ------ Filtru pentru anvelope speedways --------- //
            

            let industrialaLabel = document.createElement('label');
            industrialaLabel.setAttribute('for', 'industriala-size');
            industrialaLabel.innerText = 'Alegeti marimea potrivita:'
            
            let industrialaSelect = document.createElement('select');
            industrialaSelect.setAttribute('name','industriala-size');
            industrialaSelect.setAttribute('id', 'industriala__size');
            
            let selectOptionIndustriala = document.createElement('option');
            selectOptionIndustriala.setAttribute('value', '--select--')
            selectOptionIndustriala.innerText = '--select--';

            let industrialaSize1 = document.createElement('option');
            industrialaSize1.setAttribute('value', '6.00-9')
            industrialaSize1.innerText = ' 6.00 - 9';
            
            let industrialaSize2 = document.createElement('option');
            industrialaSize2.setAttribute('value', '7.00-12')
            industrialaSize2.innerText = ' 7.00 - 12';
            
            let industrialaSize3 = document.createElement('option');
            industrialaSize3.setAttribute('value', '10.00-20')
            industrialaSize3.innerText = ' 10.00 - 20';
            
            let industrialaSize4 = document.createElement('option');
            industrialaSize4.setAttribute('value', '10-16.5')
            industrialaSize4.innerText = ' 10.00 - 16.5';
            
            let industrialaSize5 = document.createElement('option');
            industrialaSize5.setAttribute('value', '10.5/80-18')
            industrialaSize5.innerText = ' 10.5/80 - 18';
            
            let industrialaSize6 = document.createElement('option');
            industrialaSize6.setAttribute('value', '11.00-20')
            industrialaSize6.innerText = ' 11.00 - 20';
            
            let industrialaSize7 = document.createElement('option');
            industrialaSize7.setAttribute('value', '12.00-16.5')
            industrialaSize7.innerText = ' 12.00 - 16.5';
            
            let industrialaSize8 = document.createElement('option');
            industrialaSize8.setAttribute('value', '12.00-20')
            industrialaSize8.innerText = ' 12.00 - 20';
            
            let industrialaSize9 = document.createElement('option');
            industrialaSize9.setAttribute('value', '12.5/80-18')
            industrialaSize9.innerText = ' 12.5/80 - 18';
            
            let industrialaSize10 = document.createElement('option');
            industrialaSize10.setAttribute('value', '14.00-17.5')
            industrialaSize10.innerText = ' 14.00 - 17.5';
            
            let industrialaSize11 = document.createElement('option');
            industrialaSize11.setAttribute('value', '14.00-24')
            industrialaSize11.innerText = ' 14.00 - 24';
            
            let industrialaSize12 = document.createElement('option');
            industrialaSize12.setAttribute('value', '15.5-25')
            industrialaSize12.innerText = ' 15.5 - 25';
            
            let industrialaSize13 = document.createElement('option');
            industrialaSize13.setAttribute('value', '16.9-24')
            industrialaSize13.innerText = ' 16.9 - 24';
            
            let industrialaSize14 = document.createElement('option');
            industrialaSize14.setAttribute('value', '16.9-28')
            industrialaSize14.innerText = ' 16.9 - 28';
            
            let industrialaSize15 = document.createElement('option');
            industrialaSize15.setAttribute('value', '16.9-30')
            industrialaSize15.innerText = ' 16.9 - 30';
            
            let industrialaSize16 = document.createElement('option');
            industrialaSize16.setAttribute('value', '17.5-25')
            industrialaSize16.innerText = ' 17.5 - 25';

            let industrialaSize17 = document.createElement('option');
            industrialaSize17.setAttribute('value', '18.4-26')
            industrialaSize17.innerText = ' 18.4 - 26';

            let industrialaSize18 = document.createElement('option');
            industrialaSize18.setAttribute('value', '20.5-25')
            industrialaSize18.innerText = ' 20.5 - 25';

            let industrialaSize19 = document.createElement('option');
            industrialaSize19.setAttribute('value', '23.1-26')
            industrialaSize19.innerText = ' 23.1 - 26';
            
            industrialaSelect.append(selectOptionIndustriala);
            industrialaSelect.append(industrialaSize1);
            industrialaSelect.append(industrialaSize2);
            industrialaSelect.append(industrialaSize3);
            industrialaSelect.append(industrialaSize4);
            industrialaSelect.append(industrialaSize5);
            industrialaSelect.append(industrialaSize6);
            industrialaSelect.append(industrialaSize7);
            industrialaSelect.append(industrialaSize8);
            industrialaSelect.append(industrialaSize9);
            industrialaSelect.append(industrialaSize10);
            industrialaSelect.append(industrialaSize11);
            industrialaSelect.append(industrialaSize12);
            industrialaSelect.append(industrialaSize13);
            industrialaSelect.append(industrialaSize14);
            industrialaSelect.append(industrialaSize15);
            industrialaSelect.append(industrialaSize16);
            industrialaSelect.append(industrialaSize17);
            industrialaSelect.append(industrialaSize18);
            industrialaSelect.append(industrialaSize19);
            
            industrialaFilterDiv.append(industrialaLabel);
            industrialaFilterDiv.append(industrialaSelect);

            filterContainerDiv.append(industrialaFilterDiv);

            let button = document.createElement('button');
            button.setAttribute('id', 'button')
            button.innerText = 'Aplicati Filtrele'

            specs.append(button)

            button.addEventListener('click', clickEvent);
        } else if (anvelopeDiscuriFilterSelect.value === 'camere') {
            let industrialaFilterDiv = document.createElement('div');
            industrialaFilterDiv.classList.add('filter__industriala');
            industrialaFilterDiv.setAttribute('id', 'filter')

            let industrialaLabel = document.createElement('label');
            industrialaLabel.setAttribute('for', 'industriala-size');
            industrialaLabel.innerText = 'Alegeti marimea potrivita:'
            
            let industrialaSelect = document.createElement('select');
            industrialaSelect.setAttribute('name','industriala-size');
            industrialaSelect.setAttribute('id', 'industriala__size');
            
            let selectOptionIndustriala = document.createElement('option');
            selectOptionIndustriala.setAttribute('value', '--select--')
            selectOptionIndustriala.innerText = '--select--';

            let industrialaSize1 = document.createElement('option');
            industrialaSize1.setAttribute('value', '10.00-16.5')
            industrialaSize1.innerText = ' 10.00 - 16.5';
            
            let industrialaSize2 = document.createElement('option');
            industrialaSize2.setAttribute('value', '12.5/80-18')
            industrialaSize2.innerText = ' 12.5/80 - 18';
            
            let industrialaSize3 = document.createElement('option');
            industrialaSize3.setAttribute('value', '14.00-24')
            industrialaSize3.innerText = ' 14.00 - 24';
            
            let industrialaSize4 = document.createElement('option');
            industrialaSize4.setAttribute('value', '16.9-28')
            industrialaSize4.innerText = ' 16.9 - 28';
            
            let industrialaSize5 = document.createElement('option');
            industrialaSize5.setAttribute('value', '16.9-30')
            industrialaSize5.innerText = ' 16.9 - 30';
            
            industrialaSelect.append(selectOptionIndustriala);
            industrialaSelect.append(industrialaSize1);
            industrialaSelect.append(industrialaSize2);
            industrialaSelect.append(industrialaSize3);
            industrialaSelect.append(industrialaSize4);
            industrialaSelect.append(industrialaSize5);            
            
            industrialaFilterDiv.append(industrialaLabel);
            industrialaFilterDiv.append(industrialaSelect);
            
            filterContainerDiv.append(industrialaFilterDiv);

            let button = document.createElement('button');
            button.setAttribute('id', 'button')
            button.innerText = 'Aplicati Filtrele'

            specs.append(button)

            button.addEventListener('click', clickEvent);
        }
    }
    specs.append(filterContainerDiv)
}