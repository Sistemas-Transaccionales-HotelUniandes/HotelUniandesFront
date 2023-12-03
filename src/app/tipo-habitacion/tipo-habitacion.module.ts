import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoHabitacionCreateComponent } from './tipo-habitacion-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [TipoHabitacionCreateComponent],
  exports: [TipoHabitacionCreateComponent]
})
export class TipoHabitacionModule { }
