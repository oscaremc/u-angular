Directivas ngSwitch 

creamos un nuevo componente con el siguiente comando en la terminal: 

ng g c ejdirectivangswitch 

luego de cargar lo que primero vamos a modificar es el archivo ejdirectivangswitch.component.ts agregando el siguiente codigo: 

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangswitch',
  templateUrl: './ejdirectivangswitch.component.html',
  styleUrls: ['./ejdirectivangswitch.component.css']
})
export class EjdirectivangswitchComponent implements OnInit {

  juagadores: any[] = [                                         //creamos la clase y agregamos la informacion
    {nombre: 'Earving Magic Johnson', equipo: 'L.A. Lakers'}, 
    {nombre: 'Michael Jordan', equipo: 'Chicago Bulls'}, 
    {nombre: 'Larry Bind', equipo: 'Boston Celtics'},
    {nombre: 'Kareem Abdul Jabbar', equipo: 'L.A. Lakers'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}


luego vamos a crear la plantilla en el archivo con nombre ejdirectivangswitch.component.html con el siguiente codigo: 

<ul *ngFor="let juagador of juagadores" [ngSwitch]="juagador.equipo">       
    <li *ngSwitchCase="'L.A. Lakers'" class="lakers">
        <h4> {{ juagador.nombre }} | {{ juagador.equipo }} </h4>
    </li>
    <li *ngSwitchCase="'Chicago Bulls'" class="bulls">
        <h4> {{ juagador.nombre }} | {{ juagador.equipo }} </h4>
    </li>
    <li *ngSwitchCase="'Boston Celtics'" class="celtics">
        <h4> {{ juagador.nombre }} | {{ juagador.equipo }} </h4>
    </li>
</ul>

*ngFor="let juagador of juagadores" me permite que recorra la informacion de jugadores y la guarde por cada interacion en el variable juagador

[ngSwitch]="juagador.equipo" me permite definir que sobre la informacion del equipo voy a tomar la decision de segun el caso. 

*ngSwitchCase="'L.A. Lakers'" class="lakers" esta igual que los demas li, lo que significa es quee ne el caso! que equipo sea el que defino en ngswitchCase entonces aplica la clase de css que le sigue. 


luego de estos entonces seguimos en el archivo con nombre, ejdirectivangswitch.component.css para crear las clases: 

ul {
    text-align: center;
    list-style: none;
}

.lakers {
    max-width: 600px;
    height: 120px;
    background-image: url("../../assets/LALakers.png");
    background-position-x: 10px;
    background-position-y: 10px;
    background-repeat: no-repeat;
    border-style: solid;
    border-width: 5px;
    border-color: #552582;
    margin-top: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}

.celtics {
    max-width: 600px;
    height: 120px;
    background-image: url("../../assets/BostonCeltics.png");
    background-position-x: 10px;
    background-position-y: 10px;
    background-repeat: no-repeat;
    border-style: solid;
    border-width: 5px;
    border-color: #008348;
    margin-top: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.bulls {
    max-width: 600px;
    height: 120px;
    background-image: url("../../assets/ChicagoBulls.png");
    background-position-x: 10px;
    background-position-y: 10px;
    background-repeat: no-repeat;
    border-style: solid;
    border-width: 5px;
    border-color: #CE1141;
    margin-top: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}



teniendo esto completo agregamos las imagenes que hacemos llamar a la carpeta assents. recuerda son 3 imagnes que corresponden al logo de cada equipo de basketball 


teniendo las imagenes cargadas lo que sigue es actualizar el componente raiz con el nuevo componente de la siguiente manera: 


  <h3>Ejemplo Directiva ngSwitch</h3>
  <hr>
  <app-ejdirectivangswitch></app-ejdirectivangswitch>


con esto completo podemos correr el proyecto y debemos ver como la informacion se ve con un borde de colores diferentes segun el equipo que convina con el logo del equipo. 

import { Directive, HostBinding, HostListener } from '@angular/core';       //agregamos componentes extras que vamos usar

@Directive({
  selector: '[appMenuitem]'                                                 //igual que los componentes este seria el nombre para usar en el codigo html
})
export class MenuitemDirective {

  @HostBinding('class.intemOrange') private mostrar: boolean = false;       //creamos la variable mostrar tipo boleano con caracteristica que contiene una clase que modificara segun su compotamiento. 

  @HostListener('mouseover') onOver() {                                     // cuando el mause pasa sobre el codigo se activa la clase
    this.mostrar = true;
  }

  @HostListener('mouseout') onOut() {                                     // cuando el mause se quita del codigo se desactiva la clase
    this.mostrar = false; 
  }

}


luego debemos crear la clase intemOrange en archivo de estilos general: src>styles.css con el siguiente codigo: 

.intemOrange {
    border-left: solid;
    border-width:  5px;
    border-left-color: orange;
    padding-left: 10px;
}


luego creamos un componente para usar nuestra nueva directiva en este caso, lo que hacemos es usar la siguiente linea de comando en la teminal: 

ng g c ejmidirectiva

luego de cargar lo que modificamos es el archivo ejmidirectiva.component.html con el siguiente codigo: 

<div class="container">
    <h1 appMenuitem>Titulo</h1>
    <h1 appMenuitem>Descuentos</h1>
    <h1 appMenuitem>Precios</h1>
</div>

y por ultimo lo que hacemos es agregar nuestro nuevo component a la raiz de los componentes: 


  <h3>Ejemplo de Directiva propia con HostBinding y HostListener</h3>
  <hr>
  <app-ejmidirectiva></app-ejmidirectiva>

con esto ya podemos correr el proyecto con el siguiente comando en la terminal: 

ng serve

lo debemos ver es la ventana con una lista tipo menu donde al mover el mouse sobre el texto debe generar un borde en lado izquierdo de color naranja para 




Datos entre Componentes: @input

para este ejemplo vamos a crear dos componenetes uno padre y otro hijo, con el objetivo de que la informacion que creamos en el componente padre podamos llamarla y usarla desde el componete hijo. creamos los componentes en la terminal con los comandos: 

ng g c padre

ng g c hijo 

en el componete padre: 
agregamos la siguiente informacion al archivo padre.component.ts: 

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  avisos: string[] = ['Aviso1', 'Aviso2', 'Aviso3']     //creamos la informacion a enviar

  constructor() { }

  ngOnInit(): void {
  }

}

creamos la siguiente plantilla en el archivo, padre.component.html: 


<h2>Componente Padre</h2>

<div class="padre">
    <app-hijo *ngFor="let avisop of avisos" [aviso]="avisop"></app-hijo>    
</div>

app-hijo  llamamos al componente hijo para usarlo en este espacio y enviarle la siguiente informacion.

*ngFor="let avisop of avisos"   el ngFor recorre el arreglo avisos y lo guarda en cadavez que intera en avisop

[aviso]="avisop"    la variable avisop se guarda o sera usada en la propiedad [aviso] que ya veremos como la usamos en el componente hijo


dentro de archivo padre.component.css agregamos el siguiete estilo 

.padre{ 
    border-style: solid;
    border-width: 2px;
    border-color: orange;
    padding: 10px;
}

con esto ya podemos ir al componente hijo y usar la informacion quenos esta enviando el componente padre po medio de la propieda aviso que esta en el documento padre.component.html

COMPONENTE HIJO
abrimos y editamos el componente hijo empezando desde el archivo hijo.component.ts 


import { Component, OnInit, Input } from '@angular/core';     //llamamos el coponente Input

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() aviso!: string;                                  //usamos el componente para declara que aviso es una variable de tipo texto

  constructor() { }

  ngOnInit(): void {
  }

}

luego en el archivo hijo.component.html creamos el siguiente codigo: 


<h3>Componente Hijo</h3>

<div class="hijo">
    <h4> {{ aviso }} </h4>      //declaro la variable donde se vera la info del array que esta en el comp padre. 
</div>


y le agregamos los estilos al hijo en el archivo hijo.component.css 

.hijo{ 
    border-style: solid;
    border-width: 2px;
    border-color: violet;
    padding: 10px;
}

ahora temos la logica lista donde la informacion la creamos en el padre pero la usamos en el hijo donde los componentes se comparten informacion y para verla en el navegador lo que hacemos es, agregar el componente padre en el componenete raiz. 


  <h3>Ejemplo de Componenetes padre e Hijo</h3>
  <hr>
  <app-padre></app-padre>


conn esto ya podemos actualizar el servidor del proyecto y ver que los cambios nos muestra la informacion del array en el navegador donde el componente padre esta en un cuadro amarillo y dentro esta la informacion del componente hijo dentro de un cuadro violeta. 




Datos entre Componentes: @Output

este tipo de autos lo que hace es que por causa de un evento en el componente hijo se produzca un cambio en el componente padre. usando el ejemplo anterior vamos hacer las siguiente modificaciones para que poodamos ver este tipo de resultado. 

abrimo el archivo hijo.component.html donde realizaremos las siguientes modificaciones: 

<div class="hijo">
    <h4 [ngClass]="{tachado: leido == true}" style="display: inline"> {{ aviso }} </h4>
    <button class="btn btn-success float-md-right" (click)="marcar(); detectar($event)" *ngIf="leido == false">Marcar como leido</button>
    <button class="btn btn-danger float-md-right" (click)="marcar()" *ngIf="leido == true">Desermarcar como leido</button>
</div>

lo que realizamos fue:
[ngClass]="{tachado: leido == true}" cuando haya un cambio de estado el texto tenga un cambio visual con la clase tachado

se crean botones donde el usuario pueda "Marcar como leido" o "Desmarcar como leido". y a su vez creen un cambio de estado. 

(click)="marcar(); detectar($event)" cuando ocurra el evento click ocurriran dos metodos marcar() y detectar($event)

*ngIf="leido == false" quiere decir que muestre este boton solo si la variable leido es falsa

*ngIf="leido == true" quiere decir que muestre este boton solo si la variable leido es verdadera

entendiendo esto podemos ir al archivo hijo.component.ts y agregamos el siguiente codigo: 

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';     // Output y EventEmitter son los componentes que usaremos para enviar la informacion del hijo al padre.

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})

export class HijoComponent implements OnInit {

  @Input() aviso!: string;      
  @Output() mensajeMarcado = new EventEmitter();        // creamos la variable que crea un nuevo espacio para enviar la informacion

  leido: boolean = false;       // se crea variable que cambiara el etado del texto
  mensaje!: string;             //se crea la variable mensaje que llevara info al padre 

  marcar(){                     //metodo que cambia el estado del texto 
    this.leido = !this.leido; 
  }

  detectar(event: any) {        // metodo que toma el mensaje y lo envia contiene en mensajeMarcado para enviarlo al padre
    this.mensaje = this.aviso; 
    this.mensajeMarcado.emit(this.mensaje);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

para terminar con el componente hijo debemos agregar estilos a este compoenten en el archivo hijo.component.css: 


.tachado{
    text-decoration: line-through;
}

ahora debemos prepara al componente padre para recibir la informacion que se envia del componente hijo, para esto vamos al archivo padre.component.html


<h2>Componente Padre</h2>

<div class="padre">
    <app-hijo *ngFor="let avisop of avisos" [aviso]="avisop" (mensajeMarcado)="mostrarMensaje($event)"></app-hijo>
    <h3 class="text-center">{{ texto }}</h3>
</div>

(mensajeMarcado)="mostrarMensaje($event)" la propiedad mensajeMarcado es igual a el metodo mostrarMensaje que lleva un evento como parametro

<h3 class="text-center">{{ texto }}</h3> de esta forma le vamos a decir que nos muestre el texto que nos trae del comp hijo


luego vamos al archivo padre.component.ts y editamos el siguiente archivo: 

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})

export class PadreComponent implements OnInit {

  avisos: string[] = ['Aviso1', 'Aviso2', 'Aviso3'];
  texto!: string;                                       // varible donde guardamos el texto que viene del componente hijo

  mostrarMensaje(event: string) {                       // metodo para mostrar el mensaje en el padre que viene del hijo
    this.texto = event + ' marcado como leido'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

con estas modificaciones ya podemos cargar de nuevo el servidor y podemos ver las modificaciones realizadas. 

ng serve
