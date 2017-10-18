import { Injectable } from '@angular/core';
import { StoreInfo } from './storeinfo';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Injectable()
export class StoreInfoService {
  constructor(private db: AngularFireDatabase) { }
  findAllStoreinfo(): AngularFireList<StoreInfo[]> {
    return this.db.list('StoreInfo/-KoQW-xJ1ThK1cv-qwiD/header');
  }
}
