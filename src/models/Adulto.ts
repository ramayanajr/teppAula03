import { Usuario } from "./Usuario"

export class Adulto extends Usuario {
    temCNH: boolean
    temGraduacao?: boolean
    temEmprego?: boolean

    constructor (nome:string, idade:number, temCNH:boolean) {
        super();
        this.nome = nome;
        this.setIdade(idade);
        this.temCNH = temCNH;
    }

    falar() {
        console.log('Adulto falando')
    }

    somar(a: number, b:number): void;
    somar(a: string, b:string): void;
    somar(a: any, b: any): void {
        if(typeof a === 'number')
            console.log(a+b);
        else
            console.log(a+' '+b);
    }

    

}