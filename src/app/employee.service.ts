import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Employee } from './employee';

@Injectable()
export class EmployeeService {

  constructor(private db: AngularFirestore) { }

  getEmployees(): Observable<Employee[]> {
    return this.db.collection<Employee>('employees').valueChanges();
  }
}
