using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Data
{
    public class RepositorioUsuarios
    {
        public bool GuardarUsuario(Usuarios usuarios)
        {
            using (var db = new LaboratorioContext())
            {
                db.Usuarios.Add(usuarios);
                db.SaveChanges();
                return true;
            }
        }

        public bool ActualizarUsuario(Usuarios usuarios)
        {
            using (var db = new LaboratorioContext())
            {
                var user = db.Usuarios.Find(usuarios.Id);
                user.PrimerNombre = usuarios.PrimerNombre;
                user.SegundoNombre = usuarios.SegundoNombre;
                user.PrimerApellido = usuarios.PrimerApellido;
                user.SegundoApellido = usuarios.SegundoApellido;
                user.Telefono = usuarios.Telefono;
                user.Correo = usuarios.Correo;
                user.Direccion = usuarios.Direccion;
                user.FechaNacimiento = usuarios.FechaNacimiento;
                db.SaveChanges();
                return true;
            }
        }
        public IEnumerable<Usuarios> ObtenerUsuarios()
        {
            var usuarios = new List<Usuarios>();

            using (var db = new LaboratorioContext())
            {
                try
                {
                    usuarios = db.Usuarios.ToList();
                }
                catch (Exception x)
                {

                    throw x;
                }

                return usuarios;
            }
        }
    }
}
