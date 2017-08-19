import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeWorkComponentComponent } from './see-work-component.component';

describe('SeeWorkComponentComponent', () => {
  let component: SeeWorkComponentComponent;
  let fixture: ComponentFixture<SeeWorkComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeWorkComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeWorkComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
