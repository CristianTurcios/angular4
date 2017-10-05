import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})//No se cierra con punto y coma

export class FrutaComponent{
    public nombreComponente = 'Componente de fruta';
    public listadoFrutas = 'Naranja, Manzana, Pera y Sandia';

    public nombre:string;
    public edad:number;
    public casado:boolean;
    public experiencias:Array<string> = ['Cajero', 'Alba;il', 'Ingeniero en sistemas'];
    public hobbies:Array<any> = ['Cajero', 42, true];
    public undefinedVariable:string = undefined;
    public nullVariable:number = null;
    public booleanArray: Array<boolean> = [true, false, true, false];
    public numberArray: Array<number> = [3,4,1,4,2,1,4];

    //Otra manera de como definir un array en TS
    public numberArray2: number[] = [156,161,65,56165,561];
    public booleanArray2: boolean[] = [true,true,false,,true];

    public obj:{valor:'llave', valor1:'llave2', valor3:string, valor4:number, valor5:boolean, valor6:any};
    comodin:any = 'Cualquier tipo de dato que desee';
    //al momento que typeScript se transpila a javascript estas propiedades privadas
    //y publicas se pierden, no tienen ningun efecto
    private hola = 'Soy una propiedad privada';

    //Constructor
    constructor(){
      //La mejor practica es definir los valores en el constructor, es decir tener la declaracion de la variable
      //y dentro del constructor asignarle su valor
      this.nombre = 'Cristian Turcios';
      this.edad = 24;
      this.casado = false;
      this.experiencias = ['Alba;il', 'Cajero', 'Ingeniero en Sistemas'];
    }

    //Se lanza el ngOnInit inmediatamente despues de cargar el constructor
    ngOnInit(){
      this.holaMundo(this.nombre);

    }

    holaMundo(nombre){
      console.log('Hola mundo dentro de una funcion ' + nombre);
    };
}
