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

