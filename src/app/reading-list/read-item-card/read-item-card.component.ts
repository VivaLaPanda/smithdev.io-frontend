import {Component, Inject, Input, OnInit} from '@angular/core';
import {ReadModel} from '../read-model';
import {MdDialogRef, MdDialog, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-read-item-card',
  templateUrl: './read-item-card.component.html',
  styleUrls: ['./read-item-card.component.scss']
})
export class ReadItemCardComponent implements OnInit {
  @Input()
  public readItem: ReadModel;
  @Input()
  public scrollBox: Element;

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ReadItemDetailsComponent, {
      data: this.readItem,
    });
  }
}

@Component({
  selector: 'app-read-item-details',
  template:  `<h2 class="mat-subheading-2" md-dialog-title>Short Review - {{readItem.title}}</h2>
<md-dialog-content>
  <p class="mat-body-1">{{readItem.details}}</p>
</md-dialog-content>
<md-dialog-actions>
  <button md-button md-dialog-close>Close</button>
</md-dialog-actions>`
})
export class ReadItemDetailsComponent {
  readItem: ReadModel;

  constructor(@Inject(MD_DIALOG_DATA) public data: any) {
    this.readItem = data;
  }
}
