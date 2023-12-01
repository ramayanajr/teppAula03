import { Adulto } from "./models/Adulto";
import { Carro } from "./models/Carro";
import { Moto } from "./models/Moto";
import { Usuario } from "./models/Usuario";

let variavel:number;
console.log('Hello World')

let us1:Adulto = new Adulto('Rama', 30, true)
us1.falar()
console.log('Idade Us1', us1.getIdade('padrao'))
console.log('Objeto', us1);

us1.somar(1,2);
us1.somar('1','2');

let carro1:Carro = new Carro()
carro1.modelo = 'Celta'
carro1.motorizacao = 1.0
console.log('Obj Carro', carro1)

let moto1:Moto = new Moto();
moto1.cilindradas = 600;

us1.dirige(moto1)