import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { EmployeeService } from './employee.service';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

  employees$: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees$ = this.employeeService.getEmployees();
  }

  totalSalaries(employees) {
    return employees.reduce((acc, curr) => acc + curr.salary, 0);
  }

  ngOnDestroy(): void {

  }

}
