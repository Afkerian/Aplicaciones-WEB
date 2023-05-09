//clase o plantilla
class Auto{
    //propiedades atributos
    public marca:string;
    public color:string;
    public cilindraje:string;
    public precio:number;
    //metodos
    //constructor(){}
    constructor(marca,color,cilindraje,precio){
        this.marca=marca;
        this.color=color;
        this.cilindraje=cilindraje;
        this.precio=precio;
    }
    public setColor(color){
        return this.color=color;
    }
    public getColor(){
        return this.color;
    }
}/*
var auto= new Auto();
auto.marca="Mazda";
auto.color="rojo";
auto.cilindraje="1500cc";
auto.precio=1500;
console.log(auto);*/
var auto=new Auto("Ford","verde","2500cc",2800);
var camioneta=new Auto("Toyota","plata","2700cc",3800);
console.log(auto,camioneta);