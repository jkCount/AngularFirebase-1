import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../service/inventory.service';
import { InventoryInfo } from '../service/inventory';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  prod: InventoryInfo[];
  constructor(private inventoryService: InventoryService) { }
ngOnInit() {
  this.inventoryService.findAllInventory().valueChanges().do(console.log).subscribe(prod => this.prod = prod);

}
}
