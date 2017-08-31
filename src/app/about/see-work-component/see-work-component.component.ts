import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-see-work-component',
  templateUrl: './see-work-component.component.html',
  styleUrls: ['./see-work-component.component.scss']
})
export class SeeWorkComponentComponent implements OnInit {
  public scrollBox: Element;

  constructor() { }

  ngOnInit() {
    this.scrollBox = document.getElementsByClassName('mat-sidenav-content')[0];
  }

}
