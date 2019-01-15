using SincoABR.Entities;
using SincoABR.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SincoABR.Business
{
    public class MatterBusiness
    {
        public List<Matter> GetAll()
        {
            MatterRepository repository = new MatterRepository();
            return repository.GetAll();
        }

        public Matter GetById(int id)
        {
            MatterRepository repository = new MatterRepository();
            return repository.GetById(id);
        }

        public int Save(Matter matter)
        {
            MatterRepository repository = new MatterRepository();
            return repository.Save(matter);
        }

        public void Update(Matter matter)
        {
            MatterRepository repository = new MatterRepository();
            repository.Update(matter);
        }
    }
}
