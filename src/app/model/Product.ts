import {ProductDetails} from './ProductDetails';

export class Product {
  public id: number;
  public name: string;
  public imageUrl: string;
  public price: number;
  public details: ProductDetails;


  constructor(id: number, name: string, imageUrl: string, price: number, details: ProductDetails) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
    this.details = details;
  }
}
