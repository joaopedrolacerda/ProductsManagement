import {Router} from  'express';

import {ProductController} from '../controller/ProductController'
import {ProductDomain} from '../domain/productDomain'
const productDomain = new ProductDomain();
    //@ts-ignore
const productController = new ProductController(productDomain);
const productsRoute = Router();


// Define routes
productsRoute.get('/', productController.get.bind(productController));
productsRoute.post('/', productController.save.bind(productController));
productsRoute.get('/priceAbove/:price', productController.getByPrice.bind(productController));
productsRoute.get('/specificDescription/:keyWord', productController.getByDescription.bind(productController));
productsRoute.put('/:id', productController.put.bind(productController));
productsRoute.delete('/:id', productController.delete.bind(productController));
export default productsRoute;