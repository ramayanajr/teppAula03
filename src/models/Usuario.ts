import { Carro } from "./Carro";
import { Moto } from "./Moto";

export class Usuario {
    nome: string = '';
    private idade: number = 0;
    altura?: number;

    falar() {
        console.log('Usuario Falando');
    }

    getIdade(perfil:string) {
        if(perfil == "adm")
            return this.idade
    }

    setIdade(idade:number) {
        this.idade = idade
    }

    dirige(carro: Carro): void;
    dirige(moto: Moto): void;
    dirige(auto: any): void {
        if(auto instanceof Carro)
            console.log(this.nome+' dirige um carro')
        else
            console.log(this.nome+' dirige uma moto')
    }
    
}
