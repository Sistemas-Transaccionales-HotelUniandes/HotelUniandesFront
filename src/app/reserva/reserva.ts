export class Reserva {

    id: number;
    numNoches: number;
    fechaInicio: Date;
    estado: String;
    acompanantes: number;
    habitacionReserva: number; // id de habitacion
    cuentaReserva: number; // id de cuenta

    constructor(id: number, numNoches: number, fechaInicio: Date,
        estado: String, acompanantes: number, habitacionReserva: number, cuentaReserva: number){
        this.id = id;
        this.numNoches = numNoches;
        this.fechaInicio = fechaInicio;
        this.estado = estado;
        this.acompanantes = acompanantes;
        this.habitacionReserva = habitacionReserva;
        this.cuentaReserva = cuentaReserva;
    }
}
