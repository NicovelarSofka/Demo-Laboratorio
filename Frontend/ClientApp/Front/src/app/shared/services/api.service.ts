import { Injectable } from "@angular/core"
import { Http } from "@angular/http";
import { CrearPersona } from "../commands/crearpersona"
import { ModificarPersona } from "../commands/modificarpersona"

@Injectable()
export class ApiService {

    constructor(private http: Http) { }

    getAllUsers()  {
        let users

        users = 
        [{"Id":22,"Identificacion":"MarMor","PrimerNombre":"Marcos","PrimerApellido":"Morillas","Telefono":"097874678","Direccion":"Calle Toledo","Correo":"marquitos@gmail.com","FechaNacimiento":"1905-05-14T00:00:00"},{"Id":23,"Identificacion":"EnrPaz","PrimerNombre":"Enrique","PrimerApellido":"Paz","Telefono":"093678543","Direccion":"Avenida Francia","Correo":"enriquepaz@gmail.com","FechaNacimiento":"1905-05-22T00:00:00"},{"Id":24,"Identificacion":"PauRam","PrimerNombre":"Paula","PrimerApellido":"Ramos","Telefono":"095840175","Direccion":"Calle Don Alberto","Correo":"paulitaramos@gmail.com","FechaNacimiento":"1905-05-26T00:00:00"},{"Id":25,"Identificacion":"PabGon","PrimerNombre":"Pablo","PrimerApellido":"Gonzales","Telefono":"092487245","Direccion":"Edificio Santa Rosa","Correo":"elpablo@gmail.com","FechaNacimiento":"1905-06-03T00:00:00"},{"Id":26,"Identificacion":"SofMor","PrimerNombre":"Sofia","PrimerApellido":"Morales","Telefono":"093847162","Direccion":"Esquina Don Pascual","Correo":"sofimorales@gmail.com","FechaNacimiento":"1905-06-10T00:00:00"}]
        return users
        // return this.http.get("http://localhost:63177/api/v1/Usuarios/ObtenerUsuarios");
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

