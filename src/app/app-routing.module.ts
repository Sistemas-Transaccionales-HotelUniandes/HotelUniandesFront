import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoHabitacionCreateComponent } from './tipo-habitacion/tipo-habitacion-create.component';
import { ServicioComponent } from './servicio/servicio.component';
import { EstadoReservaComponent } from './estado-reserva/estado-reserva.component';

const routes: Routes = [{path: "rf1", component:TipoHabitacionCreateComponent},
{path: "rf3", component:ServicioComponent},
{path: "rf5", component:EstadoReservaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
