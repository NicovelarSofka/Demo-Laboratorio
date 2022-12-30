import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { CrearPersona } from "../commands/CrearPersona";
import { ModificarPersona } from "../commands/ModificarPersona";


@Injectable()
export class ApiService {

    constructor(private http: Http) { }

    getAllUsers() {
        let users

        users = 
            [
            {
                    "Id":1,
                    "Nombre": "Marcos Morillas",
                    "Cedula": 73965517,
                    "Fecha": "10/1/1970",
                    "Telefono": "097874678",
                    "Direccion": "Calle Toledo"
                },
            {
                    "Id": 2,
                    "Nombre": "Enrique Paz",
                    "Cedula": 25795275,
                    "Fecha": "23/5/1995",
                    "Telefono": "093678543",
                    "Direccion": "Avenida Francia"
                },
            {
                    "Id": 3,
                    "Nombre": "Paula Ramos",
                    "Cedula": 73965517,
                    "Fecha": "19/10/2000",
                    "Telefono": "095840175",
                    "Direccion": "Calle Don Alberto"
                }
            ]        
        return users
        /*return this.http.get ( "endpoint" );*/
    }

    createUser( command: CrearPersona ) {
        return this.http.post ( "endpoint", command )
    }

    updateUser( id: number, command: ModificarPersona ) {
        return this.http.post ( "endpoint" + id, command )
    }

    deleteUser(id: number) {
        return this.http.post ( "endpoint" , id )
    }
}

