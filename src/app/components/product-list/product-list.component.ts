import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {



  ngOnInit(): void {
  }

  addNewProduct () {
    console.log("How to pass an event from parent to child");
  }
}
