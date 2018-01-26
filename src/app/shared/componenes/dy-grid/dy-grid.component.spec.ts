import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyGridComponent } from './dy-grid.component';

describe('DyGridComponent', () => {
  let component: DyGridComponent;
  let fixture: ComponentFixture<DyGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
