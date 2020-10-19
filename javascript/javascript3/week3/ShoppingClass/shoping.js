class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  convertToCurrency(currency){
     fetch('https://api.exchangeratesapi.io/latest?base=DKK')
    .then( response => response.json())
    .then( data =>{
        console.log(`${this.name}'s price in ${currency} is : ${(data.rates[currency]*this.price).toFixed(2)}`);   }
      )
    .catch((error)=>
    console.log(error))

  }
}
// Part 1
// Create the functionality for the ShoppingCart class.

// addProduct should add a product to the products array.
// removeProduct should remove a product from the products array.
// renderProducts should render the products to html. You decide what to show and how.
// searchProduct should return an array of product that match the productName parameter
// getUser should return a promise with the data from this api: https://jsonplaceholder.typicode.com/users/1

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    this.products = this.products.filter(item => item.name != product.name);
  }

  searchProduct(productName) {
    return this.products.filter(product => product.name === productName);
  }
  getTotal() {
    const total = this.products
      .map(item => item.price)
      .reduce((a, b) => a + b, 0);
    const h3 = document.createElement('h3');
    h3.innerHTML = `The total price is : ${total} Kr.`;
    shopping.appendChild(h3);
  }

  
  renderProducts(customer) {
    const customerInfo = document.getElementById('customer');
    const shopping = document.getElementById('shopping');

    this.products.forEach(product => {
      const productItem = document.createElement('li');
      productItem.innerHTML = `
                <div>${product.name}: ${product.price} Kr.</div>`;
      shopping.appendChild(productItem);
    });
    const customerDetails = document.createElement('li');
    customerDetails.innerHTML = `
        <div>Name: ${customer.name}</div>
        <div>Email: ${customer.email}</div>
        <div>Username: ${customer.username}</div>`;

    customerInfo.appendChild(customerDetails);
  }
  // renderProducts should render theproductList products to html. You decide what to show and how.
  // getUser should return a promise with the data from this api: https://jsonplaceholder.typicode.com/users/1

  getUser() {
    return new Promise(resolve => {
      const response = fetch('https://jsonplaceholder.typicode.com/users/1');
      resolve(response.then(promise => promise.json()));
    });
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product('flat-screen', 5000);
shoppingCart.addProduct(flatscreen);

const laptop = new Product('laptop', 5000);
shoppingCart.addProduct(laptop);

const mobile = new Product('Galaxy', 5000);
shoppingCart.addProduct(mobile);

const tablet = new Product('Tab.Galaxy', 5000);
shoppingCart.addProduct(tablet);
shoppingCart.removeProduct(mobile);
shoppingCart.addProduct(mobile);


console.log(shoppingCart);
shoppingCart
  .getUser()
  .then(customer => {
    shoppingCart.renderProducts(customer);
  })
  .catch(error => {
    console.log(error);
  });

shoppingCart.getTotal();
// Assuming dkk as default currency
const plant = new Product('plant', 50);
console.log(plant.convertToCurrency('EUR')); // 7.5
