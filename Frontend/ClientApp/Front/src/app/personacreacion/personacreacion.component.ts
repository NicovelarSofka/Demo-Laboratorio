import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-personacreacion',
  templateUrl: './personacreacion.component.html',
  styleUrls: ['./personacreacion.component.css']
})
export class PersonaCreacionComponent {

  constructor(public api: ApiService) {
  }


  crearPersona(data) {

      this.api.createUser({
        identificacion: data.identificacion,
        primerNombre: data.nombre,
        primerApellido: data.apellido,
        telefono: data.telefono,
        direccion: data.direccion,
        correo: data.correo,
        fechaNacimiento: data.fecha
      })
          .subscribe();
  }

}

