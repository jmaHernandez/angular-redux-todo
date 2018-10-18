export class Todo {
    public id: number;
    public texto: string;
    public completado: boolean;

    constructor(texto: string) {
        this.id = Math.random();
        this.texto = texto.charAt(0).toUpperCase() + texto.slice(1);
        this.completado = false;
    }
}