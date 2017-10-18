import { Injectable } from '@angular/core';
import { Emps } from './emp';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Injectable()
export class EmpService {
  constructor(private db: AngularFireDatabase) { }
  findAllEmp(): AngularFireList<Emps[]> {
    return this.db.list('EmpDetails/');
  }
}
