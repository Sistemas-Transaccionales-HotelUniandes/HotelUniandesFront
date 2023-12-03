export class TipoHabitacion {
    id: number;
    tipo: string;
    descripcion: string;
    precio: number;
    capacidad: number;

    constructor(
        id: number,
        tipo: string,
        descripcion: string,
        precio: number,
        capacidad: number,
    ){
        this.id = id;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.capacidad = capacidad;
    }
}
