import express from 'express';
import loadJson from 'load-json-file';
import { getCategories } from './Categories.Services.mjs';
import { addCategory } from './Categories.Services.mjs';
import { deleteCategory } from './Categories.Services.mjs';
export const categoriesRouter = express.Router();

let categories = loadJson.sync('./data/categories.json');
categoriesRouter.use(express.json());

//Get all categories
categoriesRouter.get('/', (req, res) => {
    res.send(getCategories());
});

//Add single
categoriesRouter.post('/:category', (req, res) => {
    //categories.push(req.params.category);
    res.send(addCategory(req.params.category));
});

//Delete single
categoriesRouter.delete('/:category', (req, res) => {
    //categories = categories.filter(category => category != req.params.category);
    res.send(deleteCategory(req.params.category));
});


