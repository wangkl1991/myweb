import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduTableComponent } from './edu-table.component';

describe('EduTableComponent', () => {
  let component: EduTableComponent;
  let fixture: ComponentFixture<EduTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
