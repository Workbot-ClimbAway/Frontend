
import { Injectable,EventEmitter } from '@angular/core';
import { SharedService } from './service/shared.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public changeHandler$: EventEmitter<boolean>;
  public informationChanged$: EventEmitter<SharedService>;
  
  constructor() {
    this.changeHandler$ = new EventEmitter();
    this.informationChanged$ = new EventEmitter();
  }
  public changeHandler =() => this.changeHandler$.emit(true);
  public informationChanged = (sharedService: SharedService) => this.informationChanged$.emit(sharedService);

}
