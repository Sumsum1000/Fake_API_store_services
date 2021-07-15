import express from 'express';
import loadJson from 'load-json-file';
export const usersRouter = express.Router();
import {getUsers} from './Users.Services.mjs';
import {getUser} from './Users.Services.mjs';
import {addUser} from './Users.Services.mjs';
import {deleteUser} from './Users.Services.mjs';
import {editUser} from './Users.Services.mjs';
import {getProducstByUserId} from './Products.Services.mjs';

usersRouter.use(express.json());

let users = loadJson.sync('./data/Users.json');


//Get all
usersRouter.get('/', (req, res) => {
    res.send(getUsers());
})


//Get single
usersRouter.get('/:id', (req, res) => {
    const [users] = products.filter(user => user.id == req.params.id);
    res.send(getUser());
})


//Add single
usersRouter.post('/', (req, res) => {
    res.send(addUser(req.body));
})


//Update single
usersRouter.put('/:id', (req, res) => {
    req.send(editUser(req.params.id, req.body));
})


//Delete single
usersRouter.delete('/:id', (req, res) => {
    res.send(deleteUser(req.params.id));
})

usersRouter.get ('./', (req, res) => {
    return getProducstByUserId(req.params.id);
})
    
