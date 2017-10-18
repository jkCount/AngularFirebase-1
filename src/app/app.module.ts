import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { routes } from './app.router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// import { LoginService } from './service/login.service';
// import { LogoutService } from './service/logout.service';
import { EmpService } from './service/emp.service';
import { InventoryService } from './service/inventory.service';
import { StoreInfoService } from './service/storeinfo.service';
// import 'rxjs/add/operator/add';
import 'rxjs/add/operator/do';
import { StoreinfoComponent } from './storeinfo/storeinfo.component';
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        StoreinfoComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule, // imports firebase/database, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features
        routes
    ],
    providers: [EmpService, InventoryService, StoreInfoService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

