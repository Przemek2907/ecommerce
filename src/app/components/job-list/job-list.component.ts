import {Component, OnInit} from '@angular/core';
import {JobAdsService} from '../../services/JobAdsService';
import {JobAds} from '../../model/JobAds';
import {JobAdDetails} from "../../model/JobAdDetails";

@Component({
  selector: 'app-product-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  products: JobAds[];

  constructor(private productListService: JobAdsService) {
  }

  ngOnInit(): void {
    this.products = this.productListService.products;
  }

  addNewProduct () {
    console.log("How to pass an event from parent to child");
    this.products.push(new JobAds(1, 'Przemek product', 'some url', 1000, new JobAdDetails()))
  }
}
