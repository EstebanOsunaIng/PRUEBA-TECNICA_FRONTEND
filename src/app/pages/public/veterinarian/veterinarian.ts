import { Component } from '@angular/core';
import { VeterinianServices } from '../../../services/veterinarian.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-veterinarian',
  imports: [RouterLink],
  templateUrl: './veterinarian.html',
  styleUrl: './veterinarian.css'
})
export class VeterinarianList {

  veterinarians: any = []
formData: any;
  constructor(
    private veterinariansServices: VeterinianServices
  ) { }

  ngOnInit() {
    this.onLoadData()
  }

  onLoadData() {
    this.veterinariansServices.getVeterinian().subscribe({
      next: (data) => {
        console.log(data);
        this.veterinarians = data;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => { }
    });

  }

  onDelete(id: string) {
    this.veterinariansServices.deleteVeterinarian(id).subscribe({
      next: (data) => {
        console.log(data);
        this.onLoadData()
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => { }
    })

  }
}

