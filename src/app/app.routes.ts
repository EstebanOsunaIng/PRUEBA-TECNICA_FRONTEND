import { Routes } from '@angular/router';
// import { Home } from './pages/public/home/home';
import { Pets } from './pages/public/pets/new-pets/new-pets';
import { PetsList } from './pages/public/pets/pets';
import {PestEdit } from './pages/public/pets/pest-edit/pest-edit';
import { NewAppointments } from './pages/public/appointments/new-appointments/new-appointments';
import { AppointmentsList } from './pages/public/appointments/appointments';
import{ NewOwners} from './pages/public/owners/new-owners/new-owners'
import { OwnersList} from './pages/public/owners/owners';
import { NewVeterinarians } from './pages/public/veterinarian/new-veterinarians/new-veterinarians';
import { VeterinarianList } from './pages/public/veterinarian/veterinarian';

export const routes: Routes = [
    // { path: 'home', component: Home },
    { path: 'pets/new', component: Pets },
    { path: 'pets/list', component: PetsList },
    { path: 'pets/edit', component: PestEdit},
    { path: 'appointments/new', component: NewAppointments},
    {path: 'appointments/list', component:AppointmentsList},
    {path: 'owners/new', component :NewOwners },
    {path: 'owners/list', component : OwnersList},
    {path:'veterinarians/new', component : NewVeterinarians},
    {path:'veterinarians/list', component: VeterinarianList}


];
