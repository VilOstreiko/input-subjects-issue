import {Injectable} from '@angular/core';
import {MainModel} from './main.service';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModesService {
  list = {
    mac: (new Array(8)).fill('00-00-00-00-00-00'),
  };
  listSubject = new BehaviorSubject({...this.list});

  constructor() {
  }

  updateMacAddresses(newList: MainModel) {
    this.list = {...newList};
    this.listSubject.next({...newList});
  }
}
