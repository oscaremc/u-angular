import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejpropetybinding',
  templateUrl: './ejpropetybinding.component.html',
  styleUrls: ['./ejpropetybinding.component.css']
})
export class EjpropetybindingComponent implements OnInit {

  texto = 'Escribe algo';

  constructor() { 
      setTimeout(() => {
        this.texto = 'por favor';
      }, 3000);
    }

  ngOnInit(): void {
  }

}
