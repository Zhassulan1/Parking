import { Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { UserpageComponent} from './userpage/userpage.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: MapComponent},
    {path: 'userpage', component: UserpageComponent},
    {path: 'signup', component: SignupComponent},
    {path: '**', redirectTo: 'home'}];
