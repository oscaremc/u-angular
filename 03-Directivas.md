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

Sabemos que esta correcto si vamos impreso el mini formulario que creamos, pero inicialimente no aparecera el boton si solamente se esctriba un nombre en el input. 



DIRECTIVA ngIf + else 

usando el mismo codigo del ngIf lo que realizaremos es agregarle la logica que el boton este desactivado mientras le agreguen informacion campo texto. 

actualizamos el archivo ejdirectivangif.component.html y agregamos el siguiente codigo: 


<div class="container">
    <label>Nombre y Apellido</label>
    <input type="text" class="form-control" placeholder="Complete su nombre y apellido" [(ngModel)]="nombre">
    <button type="submit" class="btn btn-primary" *ngIf="nombre; else desactivado">
        Enviar
    </button>
    <ng-template #desactivado>
        <button type="submit" class="btn btn-primary" disabled>
            Enviar
        </button>
    </ng-template>
    
</div>

lo primero que hacemos es agregar el:  *ngIf="nombre; else desactivado"    esto quiere decir que si no ocurre nada en ese evento muestre la templat con nombre desactivado. 
luego creamos la templat desactivado que seria asi: 

    <ng-template #desactivado>
        <button type="submit" class="btn btn-primary" disabled>
            Enviar
        </button>
    </ng-template>

como puedes notar son etiquetas de apetura y cierre, que se muestra miestras el evento llame al templet desactivado, y en este caso muestra el mismo boton pero con la diferencia al original que ya no tene esta linea de codigo  *ngIf="nombre; else desactivado"   sino que fue remplazada por disabled. 

recargamos el proyecto en la terminal con el comando:

ng serve