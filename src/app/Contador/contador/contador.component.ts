import { Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    template: ` 
    <h1>{{titulo}}</h1>

<!--Tarea: llamamos a la base dentro de las {{base}} para poder mostrar el valor dado-->
<h3>La base es: <strong>{{base}}</strong></h3>

<!--Para incrementar o decrementar usamos el envento click-->
<button (click)="acumular(base)"> + {{base}} </button>
<span> {{numero}} </span>
<button (click)="acumular(- base)"> - {{base}} </button>

  `
})

export  class ContadorComponent {
    titulo: string = "contador app";
    numero: number = 10;
    // Tarea: Hacer que el contador sume y reste conforme el balor de la base, 
    base:number = 5;
     
    // Se crea un metodo el cual recibe un argumento en el cual cambiamos en valor a mostrar en el contador, 
    acumular( valor:number){
      this.numero += valor;
    }
}