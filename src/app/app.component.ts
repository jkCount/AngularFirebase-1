import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private db: AngularFireDatabase) {
        const EmpData$: AngularFireList<any> = db.list('EmpDetails/');
        EmpData$.valueChanges().subscribe(
            val => console.log(val)
        );
    }
}
