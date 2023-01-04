using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Data
{
    public class RepositorioUsuarios
    {
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
