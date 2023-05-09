import { Injectable  } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaService{
    public zapatillas:Array<Zapatilla>;

    constructor(){
    this.zapatillas=[
        new Zapatilla("Nike","azul",80,true),
        new Zapatilla("Adidas","rojo",90,true),
        new Zapatilla("Rebook","negro",70,false),
        new Zapatilla("Puma","azul",100,true),
        new Zapatilla("Nike","azul",120,false),
    ];
    }
    getZapatillas():Array<Zapatilla>{
        return this.zapatillas;
    }
}