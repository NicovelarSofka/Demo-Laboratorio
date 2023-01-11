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

      this.api.getAllUsers().subscribe(users => {
        this.userModel = users.json().filter((persona) => {
          return persona.id == this.route.snapshot.params.id
        })[0]
      })  
      
   
  }

  
  mostrame() {
    console.log("hola")
  }
  


  modificarPersona(data) {

    if (data.nombre === '') {
      data.nombre = this.userModel.primerNombre
    }

    if (data.apellido === '') {
      data.apellido = this.userModel.primerApellido
    }

    if (data.telefono === '') {
      data.telefono = this.userModel.telefono
    }

    if (data.direccion === '') {
      data.direccion = this.userModel.direccion
    }

    if (data.correo === '') {
      data.correo = this.userModel.correo
    }

    if (data.fecha === '') {
      data.fecha = this.userModel.fechaNacimiento
    }

      this.api.updateUser(this.route.snapshot.params.id, {
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


