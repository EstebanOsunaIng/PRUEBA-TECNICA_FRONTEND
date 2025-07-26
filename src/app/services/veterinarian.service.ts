import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class VeterinianServices {

    constructor(
      private http: HttpClient,
    ){}

    registerVeterinian(newVeterinian:any){
       return this.http.post <any>('http://localhost:3000/api/veterinarian', newVeterinian);
    }

    getVeterinian(){
     return this.http.get<any>('http://localhost:3000/api/veterinarian' )
    }

    getVeterinianbyId(id:string){
       return this.http.get<any>('http://localhost:3000/api/veterinarian/'+ id)
    }

    deleteVeterinarian(id: string){
      return this.http.delete<any>('http://localhost:3000/api/veterinarian/' + id )
    }
    
    updateSongs (id: string , updateVeterinian : any){
      return this.http.patch<any>('http://localhost:3000/api/veterinarian/'+ id , updateVeterinian )
    }

}