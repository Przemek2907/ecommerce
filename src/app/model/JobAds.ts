import {JobAdDetails} from './JobAdDetails';

export class JobAds {
  public id: number;
  public name: string;
  public imageUrl: string;
  public price: number;
  public details: JobAdDetails;


  constructor(id: number, name: string, imageUrl: string, price: number, details: JobAdDetails) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
    this.details = details;
  }
}
