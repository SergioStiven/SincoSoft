using SincoABR.Entities;
using SincoABR.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SincoABR.Business
{
    public class StudentBusiness
    {
        public List<Student> GetAll()
        {
            StudentRepository repository = new StudentRepository();
            return repository.GetAll();
        }

        public Student GetById(int id)
        {
            StudentRepository repository = new StudentRepository();
            return repository.GetById(id);
        }

        public int Save(Student student)
        {
            StudentRepository repository = new StudentRepository();
            return repository.Save(student);
        }

        public void Update(Student student)
        {
            StudentRepository repository = new StudentRepository();
            repository.Update(student);
        }
    }
}
