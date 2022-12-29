import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';

@Component({
    selector: 'personamodificacion',
    templateUrl: './personamodificacion.component.html'
})
export class PersonaModificacionComponent {

    modificarPersonaForm: FormGroup;
    id: number = 0;

    constructor(public api: ApiService) {
        this.modificarPersonaForm = new FormGroup({
            nombre: new FormControl(),
            cedula: new FormControl(),
            fecha: new FormControl(),
            telefono: new FormControl(),
            direccion: new FormControl()
        })
    }


    modificarPersona() {

        this.api.updateUser(this.id, {
            nombre: this.modificarPersonaForm.value.nombre,
            cedula: this.modificarPersonaForm.value.cedula,
            fecha: this.modificarPersonaForm.value.fecha,
            telefono: this.modificarPersonaForm.value.telefono,
            direccion: this.modificarPersonaForm.value.direccion
        })
            .subscribe();
    }
}


