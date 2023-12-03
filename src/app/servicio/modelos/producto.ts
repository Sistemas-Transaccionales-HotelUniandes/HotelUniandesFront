import { Servicio } from "./servicio";

export class Producto extends Servicio{
    capacidad: number;
    numMaquinas: number;
    horaInicio: string;
    horaFinal: string;

    constructor(
      id: number,
      precio: number,
      fecha: Date,
      descripcion: string,
      capacidad: number,
      numMaquinas: number,
      horaInicio: string,
      horaFinal: string
    ) {
      super(id, precio, fecha, descripcion);
      this.capacidad = capacidad;
      this.numMaquinas = numMaquinas;
      this.horaInicio = horaInicio;
      this.horaFinal = horaFinal;
    }
}
