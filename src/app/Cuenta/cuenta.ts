export class Cuenta {

    id: number;
    total: number;
    serviciosConsumidos: number[];

    constructor(id: number, total: number, serviciosConsumidos: number[]){
        this.id = id;
        this.total = total;
        this.serviciosConsumidos = serviciosConsumidos;
    }
}
