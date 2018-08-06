import { Component, Input,OnInit,Output } from '@angular/core';
import { EmpService } from '../emp.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-employeedetails-list',
  template:  `<h2> {{"Hello" + parentData}}</h2>
  <button (click)="empdetlist()"> EmployeedetailsList</button>
  <br>
  <br>
  <button (click)="postEmp()"> Add Details </button>
  <ul *ngFor="let employee of employees"> 
  <li>{{employee.userId}} - {{employee.id}}-{{employee.body}} </li>
  </ul> `,
  styles: []
})
export class EmployeedetailsListComponent implements OnInit {
  @Input() public parentData;
  @Output() public Event = new EventEmitter;

  public employees=[];
  

  constructor(private _empservice : EmpService) { }

  ngOnInit() {

    // this._empservice.getEmployees()
    // .subscribe(data=> this.employees=data);
  }

  empdetlist()
  {
    // this.Event.emit('its working');
    this._empservice.getEmployees()
    .subscribe(data =>{this.employees = data
     });
  }

  postEmp()
  {
    this._empservice.addEmp()
    .subscribe(data =>{this.employees.push(data);
     console.log(data)});
  }

}
