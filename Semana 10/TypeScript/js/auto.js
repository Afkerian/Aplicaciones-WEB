//clase o plantilla
var Auto = /** @class */ (function () {
    //metodos
    //constructor(){}
    function Auto(marca, color, cilindraje, precio) {
        this.marca = marca;
        this.color = color;
        this.cilindraje = cilindraje;
        this.precio = precio;
    }
    Auto.prototype.setColor = function (color) {
        return this.color = color;
    };
    Auto.prototype.getColor = function () {
        return this.color;
    };
    return Auto;
}()); /*
var auto= new Auto();
auto.marca="Mazda";
auto.color="rojo";
auto.cilindraje="1500cc";
auto.precio=1500;
console.log(auto);*/
var auto = new Auto("Ford", "verde", "2500cc", 2800);
var camioneta = new Auto("Toyota", "plata", "2700cc", 3800);
console.log(auto, camioneta);
