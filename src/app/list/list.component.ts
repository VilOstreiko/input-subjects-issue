import {Component, OnDestroy, OnInit} from '@angular/core';
import {takeWhile} from 'rxjs/operators';
import {ModesService} from '../modes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  list: any;
  private alive = true;

  constructor(private modesService: ModesService) {
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.modesService.listSubject
      .pipe(takeWhile(() => this.alive))
      .subscribe((list) => {
        this.list = list;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
