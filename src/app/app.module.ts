import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeedetailsListComponent } from './employeedetails-list/employeedetails-list.component';
import {EmpService} from './emp.service';


import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeedetailsListComponent,
    
    
  ],
  imports: [HttpClientModule,
    BrowserModule
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
