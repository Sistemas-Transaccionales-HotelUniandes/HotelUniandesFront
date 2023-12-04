import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitacionComponent } from './habitacion.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [HabitacionComponent],
  exports: [HabitacionComponent]
})
export class HabitacionModule { }