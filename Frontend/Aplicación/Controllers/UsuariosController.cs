using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Aplicación.Controllers
{
    [Microsoft.AspNetCore.Mvc.Route("api/v1/[controller]")]
    public class UsuariosController : ControllerBase
    {

        [Microsoft.AspNetCore.Mvc.HttpGet("ObtenerUsuarios")]
        public IEnumerable<Usuarios> ObtenerUsarios()
        {
            return new RepositorioUsuarios().ObtenerUsuarios();
            //return new List<Usuarios>() { new Usuarios {  PrimerNombre = "Juan" , PrimerApellido = "Rodriguez"  ,Correo = "Gmail.com"  } };
        }


        [Microsoft.AspNetCore.Mvc.HttpPost("GuardarUsuario")]
        public bool GuardarUsuario([FromBody] Usuarios usuarios)
        {
            return new RepositorioUsuarios().GuardarUsuario(usuarios);
        }

        [Microsoft.AspNetCore.Mvc.HttpPut("ActualizarUsuario")]
        public bool ActualizarUsuario(Usuarios usuarios)
        {
            return new RepositorioUsuarios().GuardarUsuario(usuarios);
        }


    }
}
