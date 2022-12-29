import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'personacreacion',
    templateUrl: './personacreacion.component.html'
})
export class PersonaCreacionComponent {

    crearPersonaForm: FormGroup;

    userModel = {
        name:'x', cel:1, direccion:'x', 
          }

    constructor(public api: ApiService) {
        this.crearPersonaForm = new FormGroup({
            nombre: new FormControl(),
            cedula: new FormControl(),
            fecha: new FormControl(),
            telefono: new FormControl(),
            direccion: new FormControl()
        })
    }


    crearPersona() {

        this.api.createUser({
            nombre: this.crearPersonaForm.value.nombre,
            cedula: this.crearPersonaForm.value.cedula,
            fecha: this.crearPersonaForm.value.fecha,
            telefono: this.crearPersonaForm.value.telefono,
            direccion: this.crearPersonaForm.value.direccion
        })
            .subscribe();
    }
}

