import {Component} from '@angular/core';
import {JobAdsService} from './services/JobAdsService';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [JobAdsService]
})
export class AppComponent {

}
