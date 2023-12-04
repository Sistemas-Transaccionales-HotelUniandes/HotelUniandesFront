import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuentaComponent } from './Cuenta.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CuentaComponent],
  exports: [CuentaComponent]
})
export class CuentaModule { }
