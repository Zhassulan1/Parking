import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IosComponent } from './ios/ios.component';
import { AndroidComponent } from './android/android.component';
import { LoginComponent } from './login/login.component';
import { UserpageComponent } from './userpage/userpage.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'ios' , component: IosComponent},
    {path: 'android' , component: AndroidComponent},
    {path: 'login', component: LoginComponent},
    {path: 'userpage', component: UserpageComponent},
    {path: '**', redirectTo: 'home'}
];
