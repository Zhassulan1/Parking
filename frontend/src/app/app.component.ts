import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IosComponent } from './ios/ios.component';
import { AndroidComponent } from './android/android.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, HomeComponent,IosComponent, AndroidComponent, FormsModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  


  

}
