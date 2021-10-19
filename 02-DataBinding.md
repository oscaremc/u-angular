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

