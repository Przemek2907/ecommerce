import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {JobAds} from '../../../model/JobAds';

@Component({
  selector: 'app-product-component',
  templateUrl: './job-ad.component.html',
  styleUrls: ['./job-ad.component.scss']
})
export class JobAdComponent implements OnInit {
  @Input() product: JobAds;

  ngOnInit(): void {
  }

}
