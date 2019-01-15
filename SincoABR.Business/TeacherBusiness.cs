using SincoABR.Entities;
using SincoABR.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SincoABR.Business
{
    public class TeacherBusiness
    {
        public List<Teacher> GetAll()
        {
            TeacherRepository repository = new TeacherRepository();
            return repository.GetAll();
        }

        public Teacher GetById(int id)
        {
            TeacherRepository repository = new TeacherRepository();
            return repository.GetById(id);
        }

        public int Save(Teacher student)
        {
            TeacherRepository repository = new TeacherRepository();
            return repository.Save(student);
        }

        public void Update(Teacher student)
        {
            TeacherRepository repository = new TeacherRepository();
            repository.Update(student);
        }
    }
}
