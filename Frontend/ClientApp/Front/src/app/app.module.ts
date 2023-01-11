import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PersonaModificacionComponent } from './personamodificacion/personamodificacion.component';
import { PersonaTablaComponent } from './personatabla/personatabla.component';
import { ApiService } from './shared/services/api.service';
import { RouterModule } from '@angular/router';
import { PersonaCreacionComponent } from './personacreacion/personacreacion.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing-module';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    AppComponent,
    PersonaCreacionComponent,
    PersonaModificacionComponent,
    PersonaTablaComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    AgGridModule.withComponents(
      [
      PersonaTablaComponent,
      ]),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
