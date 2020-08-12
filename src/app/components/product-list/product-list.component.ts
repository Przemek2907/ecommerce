import {Component, OnInit} from '@angular/core';
import {ProductListService} from '../../services/ProductListService';
import {Product} from '../../model/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productListService: ProductListService) {
  }

  ngOnInit(): void {
    this.products = this.productListService.products;
  }


}
