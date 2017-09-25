import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})//No se cierra con punto y coma

export class FrutaComponent{
    public nombreComponente = 'Componente de fruta';
    public listadoFrutas = 'Naranja, Manzana, Pera y Sandia';
}
