import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipoHabitacionModule } from './tipo-habitacion/tipo-habitacion.module';
import { HabitacionModule } from './habitacion/habitacion.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TipoHabitacionModule,
    HabitacionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
