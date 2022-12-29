import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { CrearPersona } from "../commands/CrearPersona";
import { ModificarPersona } from "../commands/ModificarPersona";


@Injectable()
export class ApiService {

    constructor(private http: Http) { }

    getAllUsers() {
        return this.http.get ( "endpoint" );
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

