import {Component} from '@angular/core';
import {ProductListService} from './services/ProductListService';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductListService]
})
export class AppComponent {

}
