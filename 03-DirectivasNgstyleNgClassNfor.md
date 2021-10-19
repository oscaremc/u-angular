DIERECTIVA ngStyle

Para esta directiva vamos a crear un nuevo componente con la siguiente linea de comando dentro de la terminal: 

ng g c ejdirectivangstyle

luego de cargar el primer archivo que modificaremos es el de ejdirectivangstyle.component.html y agregaremos el siguiente codigo: 

<div class="container">
    <input type="number" class="form-control" [(ngModel)]="puntuacion">
    <hr>
    <h4 style="display: inline-block;">Putnuacion obtenida: &nbsp;</h4>
    <h4 style="display: inline-block;" [ngStyle]="{color: setColor()}">{{ puntuacion }}</h4>
</div>

[(ngModel)]="puntuacion"   dentro de la etiqueta input sera la varible que evaluaremos. 

 [ngStyle]="{color: setColor()}"  ngstyle es la directiva que induciremos por interpolacion el valor que vaya teniendo puntuacion. segun el resultado que nos arroje el metodo setColor()

  &nbsp; este es la simbo para hacer un espaciado


  luego de entender esta parte de la plantilla vamos a crear la variable puntuacion y el metodo setColor() dentro del archivo llamado ejdirectivangstyle.component.ts agregamos el siguiente codigo :

  import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangstyle',
  templateUrl: './ejdirectivangstyle.component.html',
  styleUrls: ['./ejdirectivangstyle.component.css']
})
export class EjdirectivangstyleComponent implements OnInit {

  puntuacion!: number;              //creamos la variable

  constructor() { }

  ngOnInit(): void {
  }

  setColor() {                      //creamos el metodo donde evaluaremos la variable.
    return this.puntuacion >= 5 ? 'green' : 'red';
  }

}


ahora podemos agregar el nuevo componente al componente raiz asi: 


  <h3>Ejemplo directiva ngStyle</h3>
  <hr>
  <app-ejdirectivangstyle></app-ejdirectivangstyle>


  con esto ya podemos correo el proyecto y ver las modificaciones dentro del navegador. 

  lo que queremos ver es si escribimos el numero menor a 5 aparezca el resutlado en rojo pero si llega a ser igual o mayor a 5 entonces el resultado sera en verde. 

  

DIRECTIVAS ngClass 

crearemos un nuevo componente con la siguiente linea de comando en la terminal: 

ng g c ejdirectivangclass 

luego de cargue lo primero que vamos a modificar es el archivo ejdirectivangclass.component.html modificando el codigo de la siguiente manera: 

<h4>Introduzca la puntuacion del Alumno</h4>
<input type="text" class="form-control" [(ngModel)]="puntuacion">
<hr>
<div *ngIf="puntuacion">
    <h4 *ngIf="puntuacion >= 0 && puntuacion <= 10; else aviso"
        [ngClass]="{aprobado: puntuacion >= 5, 
                    suspenso: puntuacion < 5}">
        Puntuacion obtenida: {{ puntuacion }}
    </h4>
    <ng-template #aviso>
        <h4 *ngIf="puntuacion > 10" class="advertencia"> Introduzca una puntuacion menor de 10</h4>
        <h4 *ngIf="puntuacion < 0" class="advertencia">introduzca un puntuacion mayor o igual a 0</h4>
    </ng-template>
</div>


con  [(ngModel)]="puntuacion"   dentro del input sabemos que la variable puntuacion es la que vamos a recibir y evaluar.

el *ngIf="puntuacion" en el div padre nos dice que si exisite valor en putuacion mostrar el siguiente codigo, si no existe valor no se muestra. 

[ngClass]="{aprobado: puntuacion >= 5, suspenso: puntuacion < 5}"  la directiva ngclass me ayuda a denir el estilo del valor segun su logica como vermos que puntuacion segun su vamor puede recibir la variacion de estilos entre aprobado y suspenso: 

*ngIf="puntuacion >= 0 && puntuacion <= 10; else aviso"  la directiva ngif la usamos para evaluar que el usuario ingrese un numero mayor o igual a cero o menor de 10. si es asi el caso ir a la template con nombre aviso. 


    <ng-template #aviso>
        <h4 *ngIf="puntuacion > 10" class="advertencia"> Introduzca una puntuacion menor de 10</h4>
        <h4 *ngIf="puntuacion < 0" class="advertencia">introduzca un puntuacion mayor o igual a 0</h4>
    </ng-template>

despues de crear el template aviso lo que hacemos es usar la condicional ngif para que segun la puntucion tambien llame un aviso que le ayude a ingresar un valor correcto al usuario. 


seguido de esto crearemos los estilos en el archvio ejdirectivangclass.component.css agregando el siguiente codigo: 

.aprobado{
    color: white; 
    background-color: green;
    padding: 10px;
}

.suspenso{
    color: white; 
    background-color: red;
    padding: 10px;
}


.advertencia{
    color: white; 
    background-color: orange;
    padding: 10px;
}

luego de esto vamos al archivo ejdirectivangclass.component.ts y creamos la variable a evaluar: 

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangclass',
  templateUrl: './ejdirectivangclass.component.html',
  styleUrls: ['./ejdirectivangclass.component.css']
})
export class EjdirectivangclassComponent implements OnInit {

  puntuacion!: number;      // Creamos la variable!

  constructor() { }

  ngOnInit(): void {
  }

}


con estos cambios completado terminaos por agregar el nuevo componente al componente raiz en app.component.html asi: 

<h3>Ejemplo de la directiva ngClass</h3>
<hr>
<app-ejdirectivangclass></app-ejdirectivangclass>

con esto ya esta actualizado nuestro proyecto y corremos el servido en la terminal con el siguiente comando. 

ng serve

tendremos que ver el cambio del comportamiento de los estilos segun el valor que agreguemos al input. 



DIRECTIVAS ngFor con arrays 

creamos un nuevo componente usando la siguiente linea de comando en la terminal: 

ng g c ejdirectivangfor 

luego de que cargue vamos al archivo ejdirectivangfor.component.ts donde agregaremos el siguiente codigo: 

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangfor',
  templateUrl: './ejdirectivangfor.component.html',
  styleUrls: ['./ejdirectivangfor.component.css']
})
export class EjdirectivangforComponent implements OnInit {

  cursos: string[];       //creamos la variable cursos como array de string

  constructor() {   
    this.cursos = ['Angular', 'HTML', 'CSS'];     //agregamos al constructor el array
   }

  ngOnInit(): void {
  }

}

en la plantilla de ejdirectivangfor.component.html creamos el siguiente codigo:

<h3> Cursos Disponibles </h3>
<ul>
    <li *ngFor="let curso of cursos">
        {{curso}}
    </li>
</ul>

*ngFor="let curso of cursos" esta directiva lo que hace es decirle a array cursos que intere en sus objetos y cadaves que lo haga se guarde en la variable local cursos. por esto se creara un nuevo li por cada interacion que haga. 

esto estaria bien para agregar el nuevo componente a al componente raiz y verlo en pantalla: 


  <h3>Ejemplo de la directiva ngFor</h3>
  <hr>
  <app-ejdirectivangfor></app-ejdirectivangfor>


para recargar el proyecto recuerda usar el siguiente comando en la terminal: 

ng serve


