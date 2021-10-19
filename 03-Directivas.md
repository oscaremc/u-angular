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




DIRECTIVA ngIf con metodo

para esto vamos a usar un nuevo formulario por lo tanto vamos al achivo ejdirectivangif y lo actualizamos con el siguiente codigo. 

<div class="container">
    <h3>¿Cual es la capital de España?</h3>
    <input type="text" class="form-control" [(ngModel)]="capital">
    <p *ngIf="!capital; else correcto"> Complete la pregunta </p>
    <ng-template #correcto>
        <h4 *ngIf="setResultado(); else incorrecto"> !Correcto¡ </h4>
    </ng-template>
    <ng-template #incorrecto>
        <h4>Lo siento, intentelo de nuevo</h4>
    </ng-template>
    
    
</div>

con este formulario vemos que:   [(ngModel)]="capital" esta en el input y sera la variable que evaluaremos. 

como primera directiva:  *ngIf="!capital; else correcto"  le decimos que si la varible no existe mostrar el texto "Complete la pregunta" pero si existe mostrar el template de nombre correcto.

<ng-template #correcto>
    <h4 *ngIf="setResultado(); else incorrecto"> !Correcto¡ </h4>
</ng-template>

creando el template tabien ponemos una directiva donde le decios que segun el resultado que nos arroje el metodo setResultado() si es true nos muestre el texto !Correcto¡ pero en caso contrario nos muestre el template de nombre incorrecto.

<ng-template #incorrecto>
    <h4>Lo siento, intentelo de nuevo</h4>
</ng-template>

por ultimo si las directivas nos lleva al template de nombre incorrecto ya vemos que su labor es mostrar el mensaje "Lo siento, intente de nuevo"

Ahora debemos crear la varible capital y el metoedo setResultado en el archivo de ejdirectivangif.component.ts y escribimos lo siguiente: 

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangif',
  templateUrl: './ejdirectivangif.component.html',
  styleUrls: ['./ejdirectivangif.component.css']
})
export class EjdirectivangifComponent implements OnInit {

  // nombre!: string;                   //comentamos o borramos la variables que no vayamos a usar 

  capital!: string;                     //creamos la variable capital

  constructor() { }

  ngOnInit(): void {
  }

  setResultado() {                      //creamos el metodo donde evaluaremos la variable capital
    return this.capital === 'Madrid' ? true : false; 
  }

}


Teniendo esto completado ya podemos actualizar el componente dentro del componente raiz de la siguietne forma: 


<div>
  <h3>Ejemplo de directiva ngif con metodo</h3>
  <hr>
  <app-ejdirectivangif></app-ejdirectivangif>

</div>


ya podemos recargar el proyecto con el siguiente comando el  terminal: 

ng serve