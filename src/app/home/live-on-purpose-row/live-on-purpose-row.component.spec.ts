import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveOnPurposeRowComponent } from './live-on-purpose-row.component';

describe('LiveOnPurposeRowComponent', () => {
  let component: LiveOnPurposeRowComponent;
  let fixture: ComponentFixture<LiveOnPurposeRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveOnPurposeRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveOnPurposeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
