DIRECTIVAS ANGULAR

    - ngif

Creamos un nuevo componente, abrimos la consola que este dentro del proyecto y usamos la siguiente linea de codigo: 

ng g c ejdirectivangif 

luego de cargar el nuevo componente, primero editamos el archivo de la plantilla ejdirectivangif.component.html agregando el siguiente codigo: 


<div class="container">
    <label>Nombre y Apellido</label>
    <input type="text"
            class="form-control"
            placeholder="Complete su nombre y apellido
            [(ngModel)]="nombre">
    <button type="submit" class="btn btn-primary"
            *ngIf="nombre">
        Enviar
    </button>
</div>


con esto queda crear en el componente la variable nombre en el archivo ejdirectiva.compononent.ts agregando la siguiente variable:

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangif',
  templateUrl: './ejdirectivangif.component.html',
  styleUrls: ['./ejdirectivangif.component.css']
})
export class EjdirectivangifComponent implements OnInit {

  nombre!: string;           //creamos la variable

  constructor() { }

  ngOnInit(): void {
  }

}

luego podemos agregar el componente al componente raiz, app.component.html y quedaria asi: 




<div>
  <h3>Ejemplo de directiva ngif</h3>
  <hr>
  <app-ejdirectivangif></app-ejdirectivangif>
  
</div>


con esto podemos correr el proyecto con siguiente comando en la terminal: 

ng serve




