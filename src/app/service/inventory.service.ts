import { Injectable } from '@angular/core';
import { InventoryInfo } from './inventory';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Injectable()
export class InventoryService {
  constructor(private db: AngularFireDatabase) { }
  findAllInventory(): AngularFireList<InventoryInfo[]> {
    return this.db.list('Inventory/-KnEfwxuqESxQrZRQOHK/');
  }
}
