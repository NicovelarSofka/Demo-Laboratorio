import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-personamodificacion',
  templateUrl: './personamodificacion.component.html',
  styleUrls: ['./personamodificacion.component.css']
})
export class PersonaModificacionComponent implements OnInit {

  userModel:any

  id: number = 0;

  constructor(public api: ApiService, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
      // this.userModel = this.api.getAllUsers().filter((persona) => {
      //    return persona.Id == this.route.snapshot.params.id
      // })[0]
  }

  modificarPersona() {

      this.api.updateUser(this.id, {
          nombre: this.userModel.PrimerNombre,
          cedula: this.userModel.cedula,
          fecha: this.userModel.fecha,
          telefono: this.userModel.telefono,
          direccion: this.userModel.direccion
      })
          .subscribe();
  }
}


