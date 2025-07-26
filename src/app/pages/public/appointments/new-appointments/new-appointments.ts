import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppointmentsServices } from '../../../../services/appointments.service';
import { PetsServices } from '../../../../services/pets.service';
import { VeterinianServices } from '../../../../services/veterinarian.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-appointments',
  imports: [ReactiveFormsModule],
  templateUrl: './new-appointments.html',
  styleUrl: './new-appointments.css'
})
export class NewAppointments {

formData!: FormGroup ;
pets : any = []

states :any = []
veterinarian : any = []


constructor(
  public petsServices : PetsServices,
  public veterinarianServices: VeterinianServices,
  public appointmentsServices : AppointmentsServices,
  private router: Router
  
  )
  {
  this.formData = new FormGroup({
    petsId: new FormControl('',Validators.required),
    reason: new FormControl('',Validators.required),
    date: new FormControl('',Validators.required),
    veterinarianId: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required),
  });
}

onSubmit(){
  console.log(this.formData.value);
  console.log(
    this.formData.valid,
    this.formData.invalid,
    this.formData.pristine,
    this.formData.dirty,
    this.formData.touched
  );

  if(this.formData.valid){

    console.log(this.formData.value);
    this.appointmentsServices.registerAppointments(this.formData.value).subscribe({
      next: ( data ) => {
        console.log(data);
        this.router.navigateByUrl('/appointments/list')

      },
      error:(error)=> {
        console.error(error);
      },
      complete:()=>{
        this.formData.reset(); //limpiamos los campos del formulario
      }
    });
  }
}

ngOnInit() {
    this.petsServices.getPets().subscribe({
      next: ( data ) => {
        console.log ( data );
        this.pets = data;
      },
      error: ( error ) => {
        console.log ( error )
      },
      complete: () => {
        console.log ( 'Complete' )
      }
    }),

    this.veterinarianServices.getVeterinian().subscribe({
      next: ( data ) => {
        console.log ( data );
        this.veterinarian = data;
      },
      error: ( error ) => {
        console.log ( error )
      },
      complete: () => {
        console.log ( 'Complete' )
      }
    })


  }
  ngOnDestroy() {
    console.log( 'ngOnDestroy' );
  }

}





