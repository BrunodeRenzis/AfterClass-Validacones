/*let valor = prompt("Ingresa un valor");
while(!containsNumber(valor)){
    valor = prompt("Ingresa un valor");
}*/

/*let pedirNumeroSinValidar = (numero)=>{
    numero = prompt("Ingrese un número");
    alert(numero);
}*/

/*let numeroMal = prompt("Ingrese un número");
let numeroMalMal = parseInt(numeroMal);
alert(numeroMalMal);*/

/*let numeroBien = prompt("Ingrese un número");
while(isNaN(numeroBien)){
    numeroBien = prompt("Ingrese un número esta vez");
}
alert(numeroBien);*/

/*let stringBien = prompt("Ingrese un string");
while(!isNaN(stringBien)){
    stringBien = prompt("Ingrese un string esta vez");
}
alert(stringBien);*/

/*let str1 = prompt("Ingrese un string sin números");
//d se refiere a digit.
while(/\d/.test(str1)){
    str1 = prompt("Ingrese un string SIN NÚMEROS CAPO");
}

alert(str1);*/

//Funciones

/*function containsNumber(str) {
  return /\d/.test(str);
  alert(containsNumber(str1));
}*/


/*let pedirNumeroSinValidarSinParametros = ()=>{
    let numero = prompt("Ingrese un número");
    alert(numero);
}

let pedirNumeroSinValidarConParametros = (numero)=>{
    numero = prompt("Ingrese un número");
    alert(numero);
}*/




class Golosina{
    /*constructor(nombre,precio,descripcion){
        this.id = this.automaticlyId();
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.vendido = false;
    }*/

    constructor(id,nombre,precio,descripcion){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.vendido = false;
    }


    getId(){
        return true
    }

    vender(){
            this.vendido = true;
    }

    vender(parametro){
        console.log(parametro);
    }

    automaticlyId(){
        let id = Math.random().toString(16).slice(2);
        return id;
    }

}

class Gomita extends Golosina{
    constructor(id,nombre,precio,descripcion,tipoGolosina){
        super(id,nombre,precio,descripcion);
        this.tipoGolosina = tipoGolosina;
    }
}

//let Golosina1 = new Golosina("Chocolate",420,"Barra de chocolate");
let Golosina2 = new Golosina(2,"Chocolate",420,"Barra de chocolate");
let gomita = new Gomita(3,"Mogul",420,"Paquete gomitas",false,"GOmitas acidas",);
//console.log(Golosina2);
// Golosina1.vender();
// Golosina1.vender(Golosina1);
Golosina2.vender();
//console.log(Golosina1);
console.log(Golosina2);
console.log(gomita);