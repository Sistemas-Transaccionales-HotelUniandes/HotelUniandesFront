import { Servicio } from "./servicio";

export class Piscina extends Servicio {
capacidad: number;
  profundidad: number;
  horaInicio: string;
  horaFinal: string;

  constructor(
    id: number,
    precio: number,
    fecha: Date,
    descripcion: string,
    capacidad: number,
    profundidad: number,
    horaInicio: string,
    horaFinal: string
  ) {
    super(id, precio, fecha, descripcion);
    this.capacidad = capacidad;
    this.profundidad = profundidad;
    this.horaInicio = horaInicio;
    this.horaFinal = horaFinal;
  }
}
