DATA BINDING! 
El databinding es la forma que tiene Angular para permitirnos mostrar contenido dinámico en lugar de estático (en inglés, hardcoded). Podríamos traducir el databinding como "comunicación" entre nuestro código HTML (archivo .html) y nuestra lógica de programación (archivo .ts).

databinding = comunicacion 

sus propiedades :
    - interpolation         ( muestra informacion )
    - property binding      ( muestra informacion )
    - event binding         ( reaciona a eventos del usuario )
    - two way databinding   ( combinacion de ambios )


CONOCIENDO LAS PROPIEDADES DE DATA BINDING

INTERPOLATION: 

    - dentro de la carpeta src > app
    - creamos la carpeta modelos
    - dentro de la carpeta modelos creamos el archivo alumnos.models.ts
    - agregamos el siguiente codigo: 

export class Alumno {
    public id: number; 
    public nombre: string; 
    public apellido: string; 
    public ciudad: string; 

    constructor(id: number, nombre: string, apellido: string, ciudad: string){
        this.id = id; 
        this.nombre = nombre; 
        this.apellido = apellido; 
        this.ciudad = ciudad;
    }
    
}

    - luego creamos un nuevo componente con el siguiente comando en la terminal. 

ng generation component viewmodel

o tambien, 

ng g c viewmodel

luego de cargar modificamos el archivo de viewmodel.components.ts crearemos nuestro primer alumno usando el contructor del modulo que creamos en alumnos.model.ts

import { Component, OnInit } from '@angular/core';

import { Alumno } from '../modelos/alumnos.models';


@Component({
  selector: 'app-viewmodelo',
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.css']
})
export class ViewmodeloComponent implements OnInit {

  alumno1 = new Alumno (1, 'Juan', 'Gutierrez', 'Madrid');

  constructor() { }

  ngOnInit(): void {
  }

}


luego vamos a darle una visual al componente modificando el archivo viewmodelo.components.html


<div class="row">
    <h4>Informacion del Alumno</h4>
    <hr>
    <h5>Id: {{ alumno1.id }}</h5>
    <hr>
    <h5>Nombre: {{ alumno1.nombre }}</h5>
    <hr>
    <h5>Apellido: {{ alumno1.apellido }}</h5>
    <hr>
    <h5>Ciudad: {{ alumno1.ciudad }}</h5>
</div>


luego vamos a llamar nuestro componente desde el componente principal para ver sus modificaciones.

abrimos app.component.html y modificamos el codigo por el siguiente: 

<div>
  <app-viewmodelo></app-viewmodelo>
</div>

luego corremos el proyecto con el siguiente comando: 

ng serve 


CONOCIENDO LAS PROPIEDADES DE DATA BINDING

INTERPOLATION CON METODOS:

    - creamos un nuevo componente en la terminal usando el comando: 

ng g c ejmetodo

luego de cargar abrimos la carpeta ejmetodo > ejmetodo.component.ts y lo modificamos de la siguiente manera: 


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejmetodo',
  templateUrl: './ejmetodo.component.html',
  styleUrls: ['./ejmetodo.component.css']
})
export class EjmetodoComponent implements OnInit {

  puntuacion = 9;                           // creamos la variable

  constructor() { }

  ngOnInit(): void {
  }

  getPuntuacion(){                          // creamos el metodo para usar la variable.
    return this.puntuacion;
  }
}


luego vamos a usar el metodo en el archivo ejmetodo.component.html modificandolo de la siguiente manera: 


<p>
    La puntuacion por Angular para la mayoria de los desarrolladores  es de {{ getPuntuacion() }} sobre 10.
</p>


luego agregamos el nuevo component en el componenete principal para visualizar las modificaciones, que es en el archivo app.component.html agregando la siguiente linea de codigo: 


<div>
  <app-viewmodelo></app-viewmodelo>
  <app-ejmetodo></app-ejmetodo>
</div>


con esto podremos notar las modificaciones realizadas cargando de nuevo el proyecto con el siguiente comando: 

ng serve



CONOCIENDO LAS PROPIEDADES DE DATA BINDING

PROPETY BINDING:

creamos un nuevo conmponente abriendo la consola con el siguiente componente: 

ng g c ejpropetybinding 

despues de cargar en el archivo que se acaba de crear ejpropetybinding.component.html modificamos el codigo de la siguiente forma: 

<input type="text" [placeholder]="texto">   //teniendo etiqueta placeholder en corchetes [] le damos a entender al codigo que busque la variable texto en el archivo ejpropetybinding.component.ts 

abrimo el archivo ejpropetybinding.component.ts y agregamos las siguientes lineas de codigo: 

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejpropetybinding',
  templateUrl: './ejpropetybinding.component.html',
  styleUrls: ['./ejpropetybinding.component.css']
})

export class EjpropetybindingComponent implements OnInit {

  texto = 'Escribe algo';             //Creamos la variable texto

  constructor() { 
      setTimeout(() => {              //Creamos un metodo donde la variable texto un cambio por tiempo.
        this.texto = 'por favor';
      }, 3000);
    }

  ngOnInit(): void {
  }

}

ahora agregamos, este nuevo componente a nuestro componente principal que es app.component.html para ver sus modificaciones: 


<div>
  <h3>Ejemplo de Interpolacion</h3>
  <app-viewmodelo></app-viewmodelo>
  <h3>Ejemplo de Interpolacion con metodo</h3>
  <app-ejmetodo></app-ejmetodo>
  <h3>Ejemplo Propety Bindding</h3>
  <app-ejpropetybinding></app-ejpropetybinding>
</div>

Con esto puedo correr el proyecto y ver las modificaciones realizadas, recuerda que si todo esta bien, tenemos que ver como texto del imput cambia de "Escribir algo.." a "por favor" en 3 segundos despues de actualizar la pagina. 


CONOCIENDO LAS PROPIEDADES DE DATA BINDING

EVENT BINDING:

creamos un nuevo componente, abrimos la terminal y con usamos la siguiente linea de comando:

ng g c ejeventbinding 

luego de cargar, modificamos el archivo ejeventbinding.component.html y agregamos el siguiente codigo: 

<button class="btn btn-success" (click)="modTexto()"> 
     <!-- //(click) con click defino el metodo que voy a usar y modTexto() es el metodo que voy a llamar cuando ocurra el evento -->
    Modificar Texto
</button>
<hr>
<h3>{{ texto }}</h3>        
<!-- //variable que tendra el texto dinamico -->

luego creamos el metodo y las variables, dentro del archivo ejeventbinding.component.ts 

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejeventbinding',
  templateUrl: './ejeventbinding.component.html',
  styleUrls: ['./ejeventbinding.component.css']
})
export class EjeventbindingComponent implements OnInit {

  texto = "Originalmente el texto se carga aqui!";  //creamos la variable

  constructor() { }

  ngOnInit(): void {
  }

  modTexto() {      //creamos el metodo para cuando ocurra el evento se modifique la variable. 
    this.texto = 'Al pulsar el boton el texto se muestra asi';
  }

}


luego agregamos el nuevo metodo a nuestro componente raiz llamado app.component.html




<div>
  <h3>Ejemplo de Interpolacion</h3>
  <app-viewmodelo></app-viewmodelo>
  <br>
  <br>
  <h3>Ejemplo de Interpolacion con metodo</h3>
  <app-ejmetodo></app-ejmetodo>
  <br>
  <br>
  <h3>Ejemplo Propety Bindding</h3>
  <app-ejpropetybinding></app-ejpropetybinding>
  <br>
  <br>
  <h3>Ejemplo de Event Binding</h3>
  <app-ejeventbinding></app-ejeventbinding>
</div>

por ultimo corremos el servidor del proyecto ponindo el siguiente comando dentro de la terminal: 

ng serve

cuando alla cargado se tiene que mostrar las modificacioens que se hicieron, y cuando se haga click en el boton debe cambiar el texto como se diseño.
