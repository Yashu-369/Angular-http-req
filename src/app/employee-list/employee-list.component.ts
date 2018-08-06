import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { EmpService } from '../emp.service';
import { observable, Observable } from 'rxjs';
import {IEmp} from '../emp';



@Component({
  selector: 'app-employee-list',
  template:
  `<h2> {{"Hello" + parentData}}</h2>
  <button (click)="emplist()"> EmployeeList</button>
  <br>
  <br>
  <button (click)="postEmp()"> Add </button>
  <br>
  <br>
 
  <ul *ngFor="let employee of employees"> 
  <li>
  {{employee.title}} - {{employee.id}}
  <br>
  <button (click)="Empupdt(employee.id)"> UPDATE </button> 
   <button (click)="delete(employee.id)"> DELETE </button>
</li>
  </ul> `,
  styles:[]
})
export class EmployeeListComponent implements OnInit {

@Input() public parentData;

@Output() public Event = new EventEmitter();

  public employees=[];
  
  constructor(private _empservice : EmpService) { }

  ngOnInit() {
   
  }

  emplist()
  {
    // this.Event.emit('its working');
    this._empservice.getEmployees()
    .subscribe(data =>{this.employees = data
     console.log(data)});
  }

  postEmp()
  {
    this._empservice.addEmp()
    .subscribe(data =>{this.employees.push(data);
     console.log(data)});
  }
 
Empupdt(id)
{console.log('this id for update',id);
  this._empservice.dataStatus(id).subscribe(data =>{
    console.log('update data',data);
     this.employees.push((elem) => {
       return elem.id !== id;
       
     });});

}

  delete(id){
    this._empservice.deleteEmp(id).subscribe(data=>   {
    this.employees = this.employees.filter((elem) => {
      return elem.id !== id;
         
  });
        
    
  });
  }
}