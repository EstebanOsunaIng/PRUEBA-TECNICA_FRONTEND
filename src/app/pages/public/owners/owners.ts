import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OwnerServices } from '../../../services/owner.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-owners',
  imports: [RouterLink],
  templateUrl: './owners.html',
  styleUrl: './owners.css'
})
export class OwnersList {
  owners : any = []
    constructor(
      private ownersServices: OwnerServices
    ){}
   
    ngOnInit(){
      this.onLoadData()
    }
  
    onLoadData() {
      this.ownersServices.getOwners().subscribe({
        next: (data) => {
          console.log(data);
          this.owners = data;
        },
        error: (error)=> {
          console.log(error);
        },
        complete: () => {}
      });
    
    }
  
    onDelete(id : string){
     this.ownersServices.deleteOwners(id).subscribe({
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