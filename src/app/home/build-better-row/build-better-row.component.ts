import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-build-better-row',
  templateUrl: './build-better-row.component.html',
  styleUrls: ['./build-better-row.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BuildBetterRowComponent implements OnInit {
  public scrollBox: Element;

  constructor() { }

  ngOnInit() {
    this.scrollBox = document.getElementsByClassName('mat-sidenav-content')[0]
  }

}
