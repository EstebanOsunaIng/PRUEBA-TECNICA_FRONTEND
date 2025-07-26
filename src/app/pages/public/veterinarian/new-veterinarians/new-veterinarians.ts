import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VeterinianServices } from '../../../../services/veterinarian.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-veterinarians',
  imports: [ReactiveFormsModule],
  templateUrl: './new-veterinarians.html',
  styleUrl: './new-veterinarians.css'
})
export class NewVeterinarians {
  
formData!: FormGroup ;
veterinarians : any = []


constructor(
  
  private veterinarianServices : VeterinianServices,
  private router: Router
  )
  {
  this.formData = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
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
    this.veterinarianServices.registerVeterinian(this.formData.value).subscribe({
      next: ( data ) => {
        console.log(data);
        this.router.navigateByUrl('/veterinarians/list')

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
    this.veterinarianServices.getVeterinian().subscribe({
      next: ( data ) => {
        console.log ( data );
        this.veterinarians = data;
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
