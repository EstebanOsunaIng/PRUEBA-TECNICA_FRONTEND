import { DatePipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { PetsServices } from '../../../services/pets.service';
import { RouterLink } from '@angular/router';
import { AppointmentsServices } from '../../../services/appointments.service';

@Component({
  selector: 'app-pets',
  imports: [ RouterLink],
  templateUrl: './pets.html',
  styleUrl: './pets.css'
})
export class PetsList {

  pets: any[any] = [];
  appointments: any =[]

  constructor(
    private petsServices: PetsServices,
    private appointmentsServices : AppointmentsServices
  ){}
 
  ngOnInit(){
    this.onLoadData()
  }

  onLoadData() {
    this.petsServices.getPets().subscribe({
      next: (data) => {
        console.log(data);
        this.pets = data;
      },
      error: (error)=> {
        console.log(error);
      },
      complete: () => {}
    });
    this.appointmentsServices.getAppointments().subscribe({
      next: (data) => {
        console.log(data);
        this.appointments = data;
      },
      error: (error)=> {
        console.log(error);
      },
      complete: () => {}
    });
  }

  onDelete(id : string){
   this.petsServices.deletePets(id).subscribe({
    next: (data) => {
        console.log(data);
        this.onLoadData()
      },
      error: (error)=> {
        console.log(error);
      },
      complete: () => {}
   })

  }
}

