import loadJson from 'load-json-file';

let products = loadJson.sync('./data/productsList.json');

export function getProducts (){
  return products;  
}

export  function getProduct (id) {
    return products.filter(product => product.id == id);
}

export function addProduct (product) {
    products.push(product);
}

export function deleteProduct (productId) {
    products.filter(product => product.id != productId);
}

export function editProduct (id, newProduct) {
    const [ product ] = products.filter(product => product.id == id);
    product.title = newProduct.title;
    product.category = newProduct.category;
    product.price = newProduct.price;
}

export function getProducstByUserId (userId) {
    return product.filter(product => product.userId == userId);
}