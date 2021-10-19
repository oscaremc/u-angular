Curso de udemy Angular! 
HOLA MUNDO! 

Requerimientos: 

Node: tener instalado node.js
Angular: instalar de forma global por preferencia, el programa de angular cli

para instalar angular: 

    - Abrir una terminal
    - Agregar el siguiente codigo, que instalara angular cli

npm install -g @angular/cli

    - Despues de cargar 
    - creamos una carpeta donde deseamos guardar el proyecto que vayamos a crear. 
    - ingresamos a la carpeta donde vamos a crear el proyecto.
    - Para crear un nuevos proyecto, usamos la siguiente linea de codigo.

ng new "nombre del proyecto"

    - El valor de las comillas se cambian con el nombre del proyecto por preferencias. 
    - Cuando cargar creacion del proyecto, entras a la carpeta con el siguiente comando.

cd my-first-project

    - Con esto podemos ya correr el primer proyecto que acabamos de crear, con el siguiente comando.

ng serve


Abrimos nuestro proyecto en el editor de codigo por preferencia: 

Nos ubicamos dentro de la carpeta, src > app > app.component.html

Este archivo nos mostrara lo que se pinta apenas corremos el programa, por eso borramos todo lo que este dentro y se halla creado por preferencia. 

luego podemos agregar el codigo: 


<div>
  <h1 class="colorTitulo">HOLA MUNDO</h1>
</div>


con esto tenemos que ver el mensaje impre en pantalla "HOLA MUNDO"

el siguiente paso es crear componente! 

LOS COMPONENTES! 
son cuatro archivos: 
    - html      ( maquetar la estructura del componente )
    - ts        ( tener las variables dinamicas del componente )
    - css       ( los estilos que solo afectan el componente )
    - aspect    ( archivo para pruebas del componente )

Ademas: 
todo componente que se crea debe agregarse al archivo que contiene los modulos llamado: app.module.ts
con dos tareas, la primera es que se debe importart el nuevo componente y dos, que se agrege dentro del contenido del declarations. 

hay una forma que angular nos permite crear un componente de forma automatica, donde todos los detalles el mismo programa los completa y donde el desarrollador solo se encargue modificar a su gusto el componente. 

crear de forma automatica un componente de la siguiente manera: 

ng generate component "nomber del componente"

para tener un ejemplo podemos crear: 

ng generate component copyright

cuando termina de cargar notamos que dentro del proyecto se ha creado una carpeta con el nombre del nuevo componenete y ademas dentro esta los 4 archivos que contiene un componente de angular, adicional mnete, vemos que en el archivo app.module.ts de la carpeta app, ya se agregado automaticamente lo que significa que solo modificamos los archivos que nos serviran para perzonalizar el componente. 

empezamos con el archivo copyright.component.ts, agregando el siguiente codigo: 


export class CopyrightComponent implements OnInit {


  copyright: string = 'ACME S.A.';
  hoy: any = new Date();


  constructor() { }

  ngOnInit(): void {
  }

}


luego dentro del archivo copyright.component.html, agregamos el siguiente codigo: 


<p>{{ copyright }} {{ hoy | date: 'y'}}</p>


por ultimo para ver en pantalla el componente que acabamos de crear debemos agregarlo a nuestro archivo prinicpal, dentro del archivo app.component.html 


<div>
  <h1 class="colorTitulo">HOLA MUNDO</h1>
  <app-fechaactual></app-fechaactual>
  <app-copyright></app-copyright>
</div>


con esto sera suficiente para que cuando recarguemos nuestra aplicacion podamos ver que los cambios realizados y el nuevo componente funcionando