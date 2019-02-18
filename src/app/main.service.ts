import {Injectable} from '@angular/core';
import {ModesService} from './modes.service';

export interface MainModel {
  mac: string[];
}

@Injectable({
  providedIn: 'root'
})
export class MainService {
  list: MainModel;

  constructor(private modesService: ModesService) {
    this.initMacAddressesList();
  }

  initMacAddressesList() {
    this.modesService.listSubject
      .subscribe((modesMacAddresses: MainModel) => {
        this.list = modesMacAddresses;
      });
  }

  updateMacAddressesList(originalItem: string,
                         newItem: string,
                         itemPosition: number) {

    const updatedList =
      this.list.mac.map((mac, macIndex) => {
        const isMacOriginal = mac === originalItem;
        const isIndexEqual = macIndex === itemPosition;

        if (isMacOriginal && isIndexEqual) {
          return newItem;
        }
        return mac;
      });
    const updatedMacAddressesDto: MainModel = {mac: updatedList};

    this.modesService.updateMacAddresses(updatedMacAddressesDto);
  }
}
