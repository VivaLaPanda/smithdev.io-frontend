import { Component, OnInit } from '@angular/core';
import {ReadModel} from './read-model';
import { readlistJson } from './readlist-json';

@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent implements OnInit {
  public readList: ReadModel[];
  public nonFiction: ReadModel[];
  public fiction: ReadModel[];
  public blog: ReadModel[];

  constructor() {}

  ngOnInit() {
    this.readList = [];
    for (const readItem of readlistJson) {
      this.readList.push(new ReadModel(readItem));
    }

    // Generating primary categories
    this.fiction = this.readList.filter((readItem) => {
      return readItem.genre[0].toLocaleLowerCase() === 'fiction';
    });
    this.nonFiction = this.readList.filter((readItem) => {
      return readItem.genre[0].toLocaleLowerCase() === 'nonfiction';
    });
    this.blog = this.readList.filter((readItem) => {
      return readItem.genre[0].toLocaleLowerCase() === 'blog';
    });
  }

}
