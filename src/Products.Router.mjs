import express from 'express';
//import { deleteProduct } from './Products.Services.mjs';
//import loadJson from 'load-json-file';
import {getProducts} from './Products.Services.mjs'
import {getProduct} from './Products.Services.mjs'
import {addProduct} from './Products.Services.mjs'
import {deleteProduct} from './Products.Services.mjs'
import {editProduct} from './Products.Services.mjs'

export const productsRouter = express.Router(); 
productsRouter.use(express.json());

//let products = loadJson.sync('./data/productsList.json');


//Get all
productsRouter.get('/', (req, res) => {
    res.send(getProducts());
})


//Get single
productsRouter.get('/:id', (req, res) => {
    res.send(getProduct(req.params.id));
})


//Create single
productsRouter.post('/', (req, res) => {
    res.send(addProduct(req.body));
})


//Update single
productsRouter.put('/:id', (req, res) => {
    res.send(editProduct(req.params.id, req.body));
})


//Delete single
productsRouter.delete('/:id', (req, res) => {
    res.send(deleteProduct(req.params.id));
})