
console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

//  code added here
const inputInsert = document.getElementById('textInput');
inputInsert.addEventListener('change',filterTheProduct);

const sliderPrice = document.getElementById('start');
sliderPrice.addEventListener('change',filterPriceFunc,false);

//  when we choose to sort 
 document.getElementById("selected") 
        .addEventListener("change", function(evt){
            cleanUp();
            switch(evt.target.value){
                case 'expensive': sortDescending();
                                    break;
                case 'cheap'    :   sortAscending();
                                    break;
                case 'name'     :   sortByName();
                                    break;
                case 'highest'  :   renderProducts(products
                    .filter(item => item.price > 9000));
                                    break;
            }
        });
            
 document.getElementById("countryToShip") 
        .addEventListener("change", function(evt){
                cleanUp();
            switch(evt.target.value){
                case 'denmark':     renderProducts(products
                    .filter(item => item.shipsTo.includes('Denmark')));
                                    break;
                case 'sweden'    :  renderProducts(products
                    .filter(item => item.shipsTo.includes('Sweden')));
                                    break;
                case 'norway'     :   renderProducts(products
                    .filter(item => item.shipsTo.includes('Norway')));
                                    break;
                case 'iceland'     :   renderProducts(products
                    .filter(item => item.shipsTo.includes('Iceland')));
                                    break;
                case 'germany'     :   renderProducts(products
                    .filter(item => item.shipsTo.includes('Germany')));
                                    break;
                case 'england'     :   renderProducts(products
                    .filter(item => item.shipsTo.includes('England')));
                                    break;
            }
        });




function renderProducts(products) {
    products.forEach(product => {
        const li = document.createElement('li');
        
        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });
}

renderProducts(products);


// added the lister function  by Ali
function filterTheProduct(){
    productsUl.innerHTML = "";

  const typedText = document.getElementById("textInput").value;
  const filterItems= products
  .filter(item =>item.name.toLocaleLowerCase().includes(typedText));
  renderProducts(filterItems);
}

// add codes for slider listener
function filterPriceFunc(){
    productsUl.innerHTML = "";
    let selectedPrice= document.getElementById('start').value;
    const priceIndicator= document.getElementById('show');
    priceIndicator.innerHTML=selectedPrice;
    const filteredByPrice= products
    .filter(item => item.price < selectedPrice);
    renderProducts(filteredByPrice);
}


function sortDescending(){
    const sortDescend = products
        .sort((a,b) => a.price > b.price ? -1 : 1);
    renderProducts(sortDescend);
}

function sortAscending(){
    const sortAescend = products
        .sort((a,b) => a.price > b.price ? 1 : -1);
    renderProducts(sortAescend);

}

function sortByName(){
    renderProducts(products
        .sort((a,b) => a.name > b.name ? 1 : -1));
}

function cleanUp(){
    productsUl.innerHTML='';
}


