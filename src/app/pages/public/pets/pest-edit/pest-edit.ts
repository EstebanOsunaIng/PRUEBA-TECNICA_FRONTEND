import { Component } from '@angular/core';
import { PetsServices } from '../../../../services/pets.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerServices } from '../../../../services/owner.service';

@Component({
  selector: 'app-pest-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './pest-edit.html',
  styleUrl: './pest-edit.css'
})
export class PestEdit {
  formData!: FormGroup ;
  owners: any = [];
  selectedId! : string ;

constructor(
  private petsServices : PetsServices,
  private ownersServices : OwnerServices,
  private router: Router,
  private activatedRoute: ActivatedRoute
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

formatDateToYMD(dateStr: string): string {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // meses 0-11
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

onSubmit(){

  if(this.formData.valid){

    console.log(this.formData.value);
    this.petsServices.updateSongs(this.selectedId, this.formData.value). subscribe({
      next : (data) => {
        console.log(data);
        this.router.navigateByUrl('pets/list')
      },
      error : (error) => {
        console.log(error);
      },
      complete: ()=> {}
    })
  }
}

ngOnInit() {
    this.activatedRoute.params.subscribe({
      next: (data) => {
        console.log(data['id'])
        this.selectedId = data['id'] 
        this.petsServices.getPetsbyId(data['id']).subscribe({
          next: (data) => {
            console.log(data)
            console.log(this.formatDateToYMD(data.releaseDate));
            this.formData.patchValue({
              name: data.name ,
              type: data.type ,
              breed: data.breed,
              age: this.formatDateToYMD(data.age),
              range:  data.range,
              ownerId: data.ownerId
            })
          },
          error:(error) => {
            console.log(error)
          },
          complete :() => {}
        })
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {}
    })
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




