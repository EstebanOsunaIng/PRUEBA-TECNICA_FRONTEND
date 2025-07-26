import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AppointmentsServices {

    constructor(
      private http: HttpClient,
    ){}

    registerAppointments(newAppointments:any){
       return this.http.post <any>('http://localhost:3000/api/appointments', newAppointments);
    }

    getAppointments(){
     return this.http.get<any>('http://localhost:3000/api/appointments' )
    }

    getAppointmentsbyId(id:string){
       return this.http.get<any>('http://localhost:3000/api/appointments/'+ id)
    }
    
    deleteAppointments(id: string){
      return this.http.delete<any>('http://localhost:3000/api/appointments/' + id )
    }

    updateAppointments (id: string , updateAppointments : any){
      return this.http.patch<any>('http://localhost:3000/api/appointments/'+ id , updateAppointments )
    }

}