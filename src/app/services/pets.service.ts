import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class PetsServices {

    constructor(
      private http: HttpClient,
    ){}

    registerPets(newPets:any){
       return this.http.post <any>('http://localhost:3000/api/pets', newPets);
    }

    getPets(){
     return this.http.get<any>('http://localhost:3000/api/pets' )
    }

    getPetsbyId(id:string){
       return this.http.get<any>('http://localhost:3000/api/pets/'+ id)
    }

    deletePets(id: string){
      return this.http.delete<any>('http://localhost:3000/api/pets/' + id )
    }
    
    updateSongs (id: string , updatePets : any){
      return this.http.patch<any>('http://localhost:3000/api/pets/'+ id , updatePets )
    }

}