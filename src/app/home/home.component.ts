import { Component, OnInit } from '@angular/core';
import { EmpService } from '../service/emp.service';
import { Emps } from '../service/emp';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    emp: Emps[];
    constructor(private empService: EmpService) { }
  ngOnInit() {
    this.empService.findAllEmp().valueChanges().do(console.log).subscribe(emp => this.emp = emp);

  }
}
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

