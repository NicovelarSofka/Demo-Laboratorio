import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

@Component({
    selector: 'persona',
    templateUrl: './persona.component.html'
})
export class PersonaComponent implements OnInit {

    id: number = 0;

    constructor(public api: ApiService) { }

    ngOnInit() {
        this.api.getAllUsers()
            .subscribe(x => x);
    }

    eliminarPersona() {
        this.api.deleteUser(this.id).subscribe();
    }
}

