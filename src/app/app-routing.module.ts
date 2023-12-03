import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoHabitacionCreateComponent } from './tipo-habitacion/tipo-habitacion-create.component';
import { ServicioGimnasioComponent } from './servicio/servicio-gimnasio/servicio-gimnasio.component';
import { ServicioComponent } from './servicio/servicio.component';

const routes: Routes = [{path: "rf1", component:TipoHabitacionCreateComponent},
{path: "rf3", component:ServicioComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
