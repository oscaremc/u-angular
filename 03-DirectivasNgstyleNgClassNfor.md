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

  