import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'personamodificacion',
    templateUrl: './personamodificacion.component.html'
})
export class PersonaModificacionComponent implements OnInit {

    userModel:any

    id: number = 0;

    constructor(public api: ApiService, private route: ActivatedRoute) {
      
    }

    ngOnInit() {
        this.userModel = this.api.getAllUsers().filter((persona) => {
           return persona.Id == this.route.snapshot.params.id
        })[0]
    }

    modificarPersona() {

        this.api.updateUser(this.id, {
            nombre: this.userModel.nombre,
            cedula: this.userModel.cedula,
            fecha: this.userModel.fecha,
            telefono: this.userModel.telefono,
            direccion: this.userModel.direccion
        })
            .subscribe();
    }
}


