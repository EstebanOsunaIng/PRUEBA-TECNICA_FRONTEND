import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OwnerServices } from '../../../../services/owner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-owners',
  imports: [ReactiveFormsModule],
  templateUrl: './new-owners.html',
  styleUrl: './new-owners.css'
})
export class NewOwners {

  ranges: any = [];
formData!: FormGroup ;
owners : any = []


constructor(
  
  private ownersServices : OwnerServices,
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
    this.ownersServices.registerOwners(this.formData.value).subscribe({
      next: ( data ) => {
        console.log(data);
        this.router.navigateByUrl('/owners/list')

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
    this.ownersServices.getOwners().subscribe({
      next: ( data ) => {
        console.log ( data );
        this.owners = data;
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
