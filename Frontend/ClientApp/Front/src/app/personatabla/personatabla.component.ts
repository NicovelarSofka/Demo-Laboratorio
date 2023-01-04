import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-personatabla',
  templateUrl: './personatabla.component.html',
  styleUrls: ['./personatabla.component.css']
})
export class PersonaTablaComponent implements OnInit  {

  personas:any

  constructor(public api: ApiService) {
    
  }

  ngOnInit() {

  //  this.api.getAllUsers().subscribe(users => { 
  //   this.personas = users
  //   })

  this.personas = this.api.getAllUsers();
  console.log(this.personas)
  }

  modificar(id:number) {

  }

  eliminar(id: number) {
      console.log(id)
      
  }

 
}

 


