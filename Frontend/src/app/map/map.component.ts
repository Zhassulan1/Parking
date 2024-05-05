import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Parking } from '../models';
import { ParkingService } from '../parking.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit{
  mapString: string = "";
  parkings: Parking[] = [];
  parking!: Parking;
  selectedTime!: string;
  price!: number;

  isUserExist:any;

  loginObj: any = {
    Email: '',
    Password: ''
  };

  signupUsers: any[] = [];
  
  time: string ="456";
  timenext: string = "456";

  constructor(private parkingService: ParkingService, private router: Router) {}

  ngOnInit(): void {
    // this.price = this.parking.price;
  }


  // logout(){
  //   this.logged = false;
  //   localStorage.removeItem("access");
  //   localStorage.removeItem("refresh");
  // }

  onTimeSelected(event: any): void {
    this.selectedTime = event.target.value;

    if(this.selectedTime == "1h"){
      this.price = this.parking.price;
    }
    else if (this.selectedTime == "2h"){
      this.price = this.parking.price * 2;
    }
    else if (this.selectedTime == "3h"){
      this.price = this.parking.price * 3;
    }
    else{
      this.price = this.parking.price * 4;
    }
  }

  onNext(id: Number){
    if (Number(id) - 1 == this.parkings.length){
      this.parking = this.parkings[0];
    }
    else {
      this.parking = this.parkings[Number(id)];
    }
  }

  onPrev(id: Number){
    if(Number(id) - 1 == 0){
      this.parking = this.parkings[this.parkings.length + 1];
    }
    else{
      this.parking = this.parkings[Number(id)-2];
    }
  }

  getParkings(){
    this.parkingService.ParkingList().subscribe((data: Parking[]) => {
      this.parkings = data;
    })
  }
}
