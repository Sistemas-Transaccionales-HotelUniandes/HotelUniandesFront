export class Servicio {
id: number;
  precio: number;
  fecha: Date;
  descripcion: string;

  constructor(id: number, precio: number, fecha: Date, descripcion: string) {
    this.id = id;
    this.precio = precio;
    this.fecha = fecha;
    this.descripcion = descripcion;
  }
}
