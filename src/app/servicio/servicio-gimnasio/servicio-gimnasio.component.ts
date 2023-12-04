import { Component, Input, OnInit } from '@angular/core';
import { Gimnasio } from '../modelos/gimnasio';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-servicio-gimnasio',
  templateUrl: './servicio-gimnasio.component.html',
  styleUrls: ['./servicio-gimnasio.component.css']
})
export class ServicioGimnasioComponent implements OnInit {
  @Input() gimnasio!: Gimnasio;

  constructor(private servicioService: ServicioService) { }

  actualizarGimnasio(){
    this.servicioService.updateServicio('gimnasio', this.gimnasio.id, this.gimnasio).subscribe(response => {
      alert("Gimnasio actualizado correctamente");
      window.location.reload();
    });
  }

  eliminarGimnasio(){
    this.servicioService.eliminarServicio(this.gimnasio.id).subscribe(response => {
      alert("Gimnasio eliminado correctamente");
      window.location.reload();
    });
  }
  
  crearGimnasio(){
    this.servicioService.crearGimnasio(this.gimnasio).subscribe(response => {
      alert("Gimnasio creado correctamente");
      window.location.reload();
    });
  }

  ngOnInit() {
  }

}
