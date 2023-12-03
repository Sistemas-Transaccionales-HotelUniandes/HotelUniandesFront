import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoHabitacionCreateComponent } from './tipo-habitacion/tipo-habitacion-create.component';

const routes: Routes = [{path: "rf1", component:TipoHabitacionCreateComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
