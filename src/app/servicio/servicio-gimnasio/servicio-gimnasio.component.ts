import { Component, Input, OnInit } from '@angular/core';
import { Gimnasio } from '../modelos/gimnasio';

@Component({
  selector: 'app-servicio-gimnasio',
  templateUrl: './servicio-gimnasio.component.html',
  styleUrls: ['./servicio-gimnasio.component.css']
})
export class ServicioGimnasioComponent implements OnInit {
  @Input() gimnasio!: Gimnasio;

  constructor() { }

  ngOnInit() {
  }

}
