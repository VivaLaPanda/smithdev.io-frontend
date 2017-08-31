import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-live-on-purpose-row',
  templateUrl: './live-on-purpose-row.component.html',
  styleUrls: ['./live-on-purpose-row.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LiveOnPurposeRowComponent implements OnInit {
  public scrollBox: Element;

  constructor() { }

  ngOnInit() {
    this.scrollBox = document.getElementsByClassName('mat-sidenav-content')[0]
  }

}
