using SincoABR.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SincoABR.Repositories
{
    public class StudentRepository
    {
        public List<Student> GetAll()
        {
            return _dataStudents;
        }

        public Student GetById(int id)
        {
            return _dataStudents.Where(x => x.Id == id).FirstOrDefault();
        }

        List<Student> _dataStudents = new List<Student>
            {
                new Student
                {
                    Id = 1,
                    Name = "Sergio Stiven",
                    LastName = "Gil Silva",
                    TypeId = 1,
                    Identification = "1026580774",
                    Address = "Calle 100 # 33 - 56",
                    City = "Bogotá",
                    Phone = "3108568706",
                    Dbo = DateTime.Now.AddYears(-24),
                    Grade = 11,
                    StudyDay = 1
                },
                new Student
                {
                    Id = 1,
                    Name = "Jose Eduardo",
                    LastName = "Parra Monsalve",
                    TypeId = 1,
                    Identification = "52657895",
                    Address = "Kr 30 # 26 - 16",
                    City = "Bogotá",
                    Phone = "3002546897",
                    Dbo = DateTime.Now.AddYears(-20),
                    Grade = 10,
                    StudyDay = 1
                }
            };

    }
}
