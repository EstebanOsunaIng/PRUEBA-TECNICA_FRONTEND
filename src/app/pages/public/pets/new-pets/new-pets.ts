import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PetsServices } from '../../../../services/pets.service';
import { OwnerServices } from '../../../../services/owner.service';

@Component({
  selector: 'app-pets',
  imports: [ReactiveFormsModule],
  templateUrl: './new-pets.html',
  styleUrl: './new-pets.css'
})
export class Pets {
ranges: any;
  
formData!: FormGroup ;
owners : any = []
router: any;

constructor(
  private petsServices : PetsServices,
  private ownersServices : OwnerServices
  )
  {
  this.formData = new FormGroup({
    name: new FormControl('',Validators.required),
    type: new FormControl('',Validators.required),
    breed: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    range: new FormControl('',Validators.required),
    ownerId: new FormControl( '',Validators.required)
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
    this.petsServices.registerPets(this.formData.value).subscribe({
      next: ( data ) => {
        console.log(data);
        this.router.navigateByUrl('http://localhost:3000/api/pets')

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




