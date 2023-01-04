import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-personacreacion',
  templateUrl: './personacreacion.component.html',
  styleUrls: ['./personacreacion.component.css']
})
export class PersonaCreacionComponent {

  userModel = {
      nombre: 'x', cedula: 0, fecha: 'x', telefono: 0, direccion: "x" 
        }

  constructor(public api: ApiService) {
    
  }


  crearPersona() {

      this.api.createUser({
          nombre: this.userModel.nombre,
          cedula: this.userModel.cedula,
          fecha: this.userModel.fecha,
          telefono: this.userModel.telefono,
          direccion: this.userModel.direccion
      })
          .subscribe();
  }
}

