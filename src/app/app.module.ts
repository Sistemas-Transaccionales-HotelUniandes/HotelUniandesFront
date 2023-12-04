import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipoHabitacionModule } from './tipo-habitacion/tipo-habitacion.module';
import { HabitacionModule } from './habitacion/habitacion.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReservaModule } from './reserva/reserva.module';
import { CuentaModule } from './Cuenta/Cuenta.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TipoHabitacionModule,
    HabitacionModule,
    HttpClientModule,
    ReservaModule,
    CuentaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
