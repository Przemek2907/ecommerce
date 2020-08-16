import {JobAds} from '../model/JobAds';
import {JobAdDetails} from '../model/JobAdDetails';

export class JobAdsService {
  products: JobAds[] = [
    new JobAds(1, 'My guitar',  'asd',  5000,  new JobAdDetails()),
    new JobAds(2, 'My phone',  'asd',  100,  new JobAdDetails()),
    new JobAds(3, 'My computer',  'asd',  8000,  new JobAdDetails()),
    new JobAds(4, 'My desk',  'asd',  1500,  new JobAdDetails()),
  ];
}
