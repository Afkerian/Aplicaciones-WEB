import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
    selector:'libro',
    /*template:`
    <h2>Soy el componente libro</h2>
    `
    */
    templateUrl:'./libro.component.html'
})
export class LibroComponent implements OnInit, DoCheck, OnDestroy{
    public titulo:string;
    public listado:string;

    constructor(){
        this.titulo="Componente Libro";
        this.listado="Lista de los mejores libros";
    }
    cambiarTitulo(){
        this.titulo="Soy el nuevo titulo";
    }
    //metodo que se ejecuta cada vez que se carga el componente
    ngOnInit():void{
        console.log("Soy el Init");
    }
    //metodo que se ejecuta cuando se realiza algún cambio
    ngDoCheck():void{
        console.log("Soy el DoCheck");
    }
    //metodo que se ejecuta cuando se destruye el componente
     ngOnDestroy():void{
        console.log("Soy el Destroy");
    }

}