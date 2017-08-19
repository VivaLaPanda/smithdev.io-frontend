import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildBetterRowComponent } from './build-better-row.component';

describe('BuildBetterRowComponent', () => {
  let component: BuildBetterRowComponent;
  let fixture: ComponentFixture<BuildBetterRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildBetterRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildBetterRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
