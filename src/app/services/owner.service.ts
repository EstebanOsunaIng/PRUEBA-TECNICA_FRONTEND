import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerServices {

    constructor(
      public http: HttpClient,
    ){}

    registerOwners(newOwners:any){
       return this.http.post <any>('http://localhost:3000/api/owner', newOwners);
    }

    getOwners(){
     return this.http.get<any>('http://localhost:3000/api/owner' )
    }

    getOwnersbyId(id:string){
       return this.http.get<any>('http://localhost:3000/api/owner/'+ id)
    }
    
    updateOwners (id: string , updateOwners : any){
      return this.http.patch<any>('http://localhost:3000/api/owner/'+ id , updateOwners )
    }

}