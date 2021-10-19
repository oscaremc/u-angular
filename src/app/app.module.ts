import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FechaactualComponent } from './fechaactual/fechaactual.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';
import { EjmetodoComponent } from './ejmetodo/ejmetodo.component';
import { EjpropetybindingComponent } from './ejpropetybinding/ejpropetybinding.component';
import { EjeventbindingComponent } from './ejeventbinding/ejeventbinding.component';

@NgModule({
  declarations: [
    AppComponent, 
    FechaactualComponent, 
    CopyrightComponent, ViewmodeloComponent, EjmetodoComponent, EjpropetybindingComponent, EjeventbindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
