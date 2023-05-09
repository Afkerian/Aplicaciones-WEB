import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
    selector:'zapatilla',
    templateUrl:'./zapatilla.component.html',
    providers:[ZapatillaService]
})
 export class ZapatillaComponent implements OnInit{
    public titulo:string="Componente Zapatilla";
    public zapatillas:Array<Zapatilla>=[];
    public color:string;
    
    constructor(
        private _zapatillaService:ZapatillaService
    ){
        this.color='red';
    }

    ngOnInit(){
        //this.zapatillas=["Nike","azul","80"];
        /*this.zap1atillas=[
            new Zapatilla("Nike","azul",80,true),
            new Zapatilla("Adidas","rojo",90,true),
            new Zapatilla("Rebook","negro",70,false),
            new Zapatilla("Puma","azul",100,true),
            new Zapatilla("Nike","azul",120,false),
        ];*/
        this.zapatillas=this._zapatillaService.getZapatillas();
        console.log(this.zapatillas);

    }

 }