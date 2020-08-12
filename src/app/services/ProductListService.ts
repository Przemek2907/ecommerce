import {Product} from '../model/Product';
import {ProductDetails} from '../model/ProductDetails';

export class ProductListService {
  products: Product[] = [
    new Product(1, 'My guitar',  'asd',  5000,  new ProductDetails()),
    new Product(2, 'My phone',  'asd',  100,  new ProductDetails()),
    new Product(3, 'My computer',  'asd',  8000,  new ProductDetails()),
    new Product(4, 'My desk',  'asd',  1500,  new ProductDetails()),
  ];
}
