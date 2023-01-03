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
            using (var db = new LaboratorioContext())
            {
                return db.Usuarios.ToList();
            }
        }
    }
}
