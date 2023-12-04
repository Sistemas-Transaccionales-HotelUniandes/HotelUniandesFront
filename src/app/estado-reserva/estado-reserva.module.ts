import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoReservaComponent } from './estado-reserva.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [EstadoReservaComponent]
})
export class EstadoReservaModule { }
