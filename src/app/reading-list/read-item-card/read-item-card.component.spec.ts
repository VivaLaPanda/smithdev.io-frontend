import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadItemCardComponent } from './read-item-card.component';

describe('ReadItemCardComponent', () => {
  let component: ReadItemCardComponent;
  let fixture: ComponentFixture<ReadItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
