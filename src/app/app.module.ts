import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipoHabitacionModule } from './tipo-habitacion/tipo-habitacion.module';
import { HabitacionModule } from './habitacion/habitacion.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReservaModule } from './reserva/reserva.module';
import { CuentaModule } from './Cuenta/Cuenta.module';
import { TipoHabitacionService } from './tipo-habitacion/tipo-habitacion.service';
import { FormsModule } from '@angular/forms';
import { ServicioService } from './servicio/servicio.service';
import { ServicioModule } from './servicio/servicio.module';
import { EstadoReservaModule } from './estado-reserva/estado-reserva.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TipoHabitacionModule,
    EstadoReservaModule,
    HabitacionModule,
    HttpClientModule,
    ReservaModule,
    CuentaModule,
    ServicioModule,
    FormsModule
  ],
  providers: [TipoHabitacionService, ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
