import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Parking } from '../models';
import { ParkingService } from '../parking.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit{
  iframeString: string = "";
  parkings: Parking[] = [];
  parking!: Parking;
  selectedTime!: string;
  price!: number;
  time: Number = 20;
  reserved: boolean = false;

  constructor(private parkingService: ParkingService,private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // this.price = this.parking.price;
    this.getParkings();
  }


  // logout(){
  //   this.logged = false;
  //   localStorage.removeItem("access");
  //   localStorage.removeItem("refresh");
  // }

  onTimeSelected(event: any): void {
    this.selectedTime = event.target.value;
    this.price = Number(this.parking.price);

    if(this.selectedTime == "1h"){
      this.price = Number(this.parking.price);
      this.time = Number(this.time) + 0;
    }
    else if (this.selectedTime == "2h"){
      this.price = Number(this.parking.price) * 2;
      this.time = 19 + 2;
    }
    else if (this.selectedTime == "3h"){
      this.price = Number(this.parking.price) * 3;
      this.time = 19 + 3;
    }
    else{
      this.price = Number(this.parking.price) * 4;
      this.time = 19 + 4;
    }
  }

  onNext(id: Number){
    if (Number(id) - 1 == this.parkings.length){
      this.parking = this.parkings[0];
    }
    else {
      this.parking = this.parkings[Number(id)];
    }
    this.price = Number(this.parking.price);
  }

  onPrev(id: Number){
    if(Number(id) - 1 == 0){
      this.parking = this.parkings[this.parkings.length + 1];
    }
    else{
      this.parking = this.parkings[Number(id)-2];
    }
    this.price = Number(this.parking.price);
  }

  getParkings(){
    this.parkingService.ParkingList().subscribe((data) => {
      this.parkings = data;
      this.parking = this.parkings[0];
      this.price = Number(this.parking.price);

    })
  }

  getSafeHtml(iframeString: any): SafeHtml {
    this.iframeString = String(iframeString)
    return this.sanitizer.bypassSecurityTrustHtml(this.iframeString);
  }

  onTake(){
    this.parkingService.postRentedParking().subscribe((data)=>{
      alert("Parking reserved successfully!");
    })
    this.parking.free_spaces = Number(this.parking.free_spaces) - 1;  
  }

}
