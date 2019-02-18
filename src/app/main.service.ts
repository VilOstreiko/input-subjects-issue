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

  updateMacAddressesList(originalMagnetronMacAddress: string,
                         newMagnetronMacAddress: string,
                         magnetronMacAddressPosition: number) {

    const updatedList =
      this.list.mac.map((mac, macIndex) => {
        const isMacOriginal = mac === originalMagnetronMacAddress;
        const isIndexEqual = macIndex === magnetronMacAddressPosition;

        if (isMacOriginal && isIndexEqual) {
          return newMagnetronMacAddress;
        }
        return mac;
      });
    const updatedMacAddressesDto: MainModel = {mac: updatedList};

    this.modesService.updateMacAddresses(updatedMacAddressesDto);
  }
}
