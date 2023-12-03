import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoHabitacionCreateComponent } from './tipo-habitacion-create/tipo-habitacion-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TipoHabitacionCreateComponent],
  exports: [TipoHabitacionCreateComponent]
})
export class TipoHabitacionModule { }
