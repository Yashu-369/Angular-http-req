import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedetailsListComponent } from './employeedetails-list.component';

describe('EmployeedetailsListComponent', () => {
  let component: EmployeedetailsListComponent;
  let fixture: ComponentFixture<EmployeedetailsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeedetailsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
