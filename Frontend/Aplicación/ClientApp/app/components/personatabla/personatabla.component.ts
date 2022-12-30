import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'personatabla',
    templateUrl: './personatabla.component.html'
})
export class PersonaTablaComponent implements OnInit  {

    personas:any

    constructor(public api: ApiService) {
      
    }

    ngOnInit() {
        this.personas = this.api.getAllUsers()
    }

    modificar(id:number) {

    }

    eliminar(id: number) {
        console.log(id)
        
    }

   
}

   


