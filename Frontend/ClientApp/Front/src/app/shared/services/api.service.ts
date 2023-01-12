import { Injectable } from "@angular/core"
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CrearPersona } from "../commands/crearpersona"
import { ModificarPersona } from "../commands/modificarpersona"

@Injectable()
export class ApiService {

    constructor(private http: Http) { }

    getAllUsers() {
         return this.http.get("http://localhost:54384/api/v1/Usuarios/ObtenerUsuarios");
    }

    createUser( command: CrearPersona ) {
        return this.http.post ( "http://localhost:54384/api/v1/Usuarios/GuardarUsuario",command )
    }

    updateUser( id: number, command: ModificarPersona ) {
        return this.http.post ( "http://localhost:54384/api/v1/Usuarios/ActualizarUsuario/" + id, command )
    }

    deleteUser(id: number) {
        return this.http.post ( "endpoint" , id )
    }
}

