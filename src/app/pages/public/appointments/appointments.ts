import { Component } from '@angular/core';
import { AppointmentsServices } from '../../../services/appointments.service';
import { RouterLink } from '@angular/router';
import { PetsServices } from '../../../services/pets.service';
import { VeterinianServices } from '../../../services/veterinarian.service';

@Component({
  selector: 'app-appointments',
  imports: [RouterLink],
  templateUrl: './appointments.html',
  styleUrl: './appointments.css'
})
export class AppointmentsList {
pets: any[any] = [];
appointments : any [any]= []
veterinarian : any = []

  constructor(
    private appointmentsServices: AppointmentsServices,
    private petsServices: PetsServices,
    private veterinariansServices : VeterinianServices
  
  ){}
 
  ngOnInit(){
    this.onLoadData()
  }

  onLoadData() {
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

     this.veterinariansServices.getVeterinian().subscribe({
      next: (data) => {
        console.log(data);
        this.veterinarian = data;
      },
      error: (error)=> {
        console.log(error);
      },
      complete: () => {}
    });


  }

  

  onDelete(id : string){
   this.appointmentsServices.deleteAppointments(id).subscribe({
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



