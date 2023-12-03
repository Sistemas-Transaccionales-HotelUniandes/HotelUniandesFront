import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipoHabitacionModule } from './tipo-habitacion/tipo-habitacion.module';
import { HttpClientModule } from '@angular/common/http';
import { TipoHabitacionService } from './tipo-habitacion/tipo-habitacion.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TipoHabitacionModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TipoHabitacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
