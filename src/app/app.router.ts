import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StoreinfoComponent } from './storeinfo/storeinfo.component';
// import { LoginService } from './service/login.service';
// import { LogoutService } from './service/logout.service';
// import { EmpService } from './service/emp.service';

export const router: Routes = [
    {path: '', redirectTo: '', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'storeinfo', component: StoreinfoComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
