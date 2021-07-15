import express from 'express';
import { categoriesRouter } from './src/Categories.Router.mjs';
import { productsRouter } from './src/Products.Router.mjs';
import { usersRouter } from './src/Users.Router.mjs';

const app = express();

app.use('/products', productsRouter);
app.use('/users', usersRouter)
app.use('/categories', categoriesRouter);

app.use(express.static('../Store_react/build/'))

app.listen(8080);
console.log('8080 is running');