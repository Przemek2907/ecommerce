import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../model/Product';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  ngOnInit(): void {
  }

}
