import { Component, OnInit } from '@angular/core';
import { CuentaService } from './cuenta.service';
import { Cuenta } from './cuenta';

@Component({
  selector: 'app-Cuenta',
  templateUrl: './Cuenta.component.html',
  styleUrls: ['./Cuenta.component.css']
})
export class CuentaComponent implements OnInit {
  cuentas: Cuenta[] = []
  show: boolean = false;
  idCuenta!: number;
  idServicio!: number;

  constructor(private cuentaService: CuentaService) { }

  ngOnInit() {
    this.getCuentas();
  }

  getCuentas(): void {
    this.cuentaService.getAllCuentas()
      .subscribe(cuentas => this.cuentas = cuentas);
  }

  mostrar(): void {
    this.show = !this.show;
  }

  agregarConsumo(): void{
    this.cuentaService.registrarConsumo(this.idCuenta, this.idServicio).subscribe(cuenta => {
      this.getCuentas(); // actualizar
    })
  }



}
