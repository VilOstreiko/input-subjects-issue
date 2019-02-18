import {Component, Input, OnInit} from '@angular/core';
import {MainService} from '../main.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: any;
  @Input() itemPosition: any;

  originalItem: any;
  isMacAddressEditing = false;

  constructor(private mainService: MainService) {
  }

  ngOnInit() {
  }

  toggleMacEditInput() {
    if (this.isMacAddressEditing) {
      this.handleSaveMacAddress();
    } else {
      this.originalItem = this.item;
    }

    this.isMacAddressEditing = !this.isMacAddressEditing;
  }

  handleSaveMacAddress() {
    this.mainService.updateMacAddressesList(
      this.originalItem,
      this.item,
      this.itemPosition);
  }
}
