import { Component, OnInit } from '@angular/core';
import { StoreInfoService } from '../service/storeinfo.service';
import { StoreInfo } from '../service/storeinfo';
@Component({
  selector: 'app-storeinfo',
  templateUrl: './storeinfo.component.html',
  styleUrls: ['./storeinfo.component.css']
})
export class StoreinfoComponent implements OnInit {
  storeinfo: StoreInfo[];
  constructor(private storeinfoService: StoreInfoService) { }

  ngOnInit() {
    this.storeinfoService.findAllStoreinfo().valueChanges().do(console.log).subscribe(storeinfo => this.storeinfo = storeinfo);
  }

}

