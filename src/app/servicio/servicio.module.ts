import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioComponent } from './servicio.component';
import { ServicioGimnasioComponent } from './servicio-gimnasio/servicio-gimnasio.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule, HttpClientModule
  ],
  declarations: [ServicioComponent, ServicioGimnasioComponent],
  exports: [ServicioComponent]
})
export class ServicioModule { }
