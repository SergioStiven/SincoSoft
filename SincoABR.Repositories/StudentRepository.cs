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

        public int Save(Student student)
        {
            student.Id = _dataStudents.OrderByDescending(s => s.Id).FirstOrDefault().Id + 1;
            _dataStudents.Add(student);
            return student.Id;
        }

        public void Update(Student student)
        {
            List<Student> list = new List<Student>();
            foreach (var item in _dataStudents)
            {
                if (item.Id == student.Id)
                {
                    list.Add(student);
                }
                else
                {
                    list.Add(item);
                }
            }
            _dataStudents = list;
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
                    Dob = DateTime.Now.AddYears(-24).ToString("dd/MM/yyyy"),
                    Grade = 11,
                    StudyDay = 1,
                    Matters = new List<Matter>
                    {
                        new Matter
                        {
                            Id = 1,
                            Name = "Matemáticas",
                            Note = "4.5",
                            Teacher = new Teacher
                            {
                                Id = 1,
                                Name = "Carlos Alberto",
                                LastName = "Zambrano",
                                TypeId = 1,
                                Identification = "1026580774",
                                Grade = 11,
                                StudyDay = 1
                            }
                        },
                        new Matter
                        {
                            Id = 2,
                            Name = "Ciencias",
                            Note = "4.7",
                            Teacher = new Teacher
                            {
                                Id = 2,
                                Name = "Alain",
                                LastName = "Tapia",
                                TypeId = 1,
                                Identification = "52657895",
                                Grade = 10,
                                StudyDay = 1
                            }
                        }
                    }
                },
                new Student
                {
                    Id = 2,
                    Name = "Jose Eduardo",
                    LastName = "Parra Monsalve",
                    TypeId = 1,
                    Identification = "52657895",
                    Address = "Kr 30 # 26 - 16",
                    City = "Bogotá",
                    Phone = "3002546897",
                    Dob = DateTime.Now.AddYears(-20).ToString("dd/MM/yyyy"),
                    Grade = 10,
                    StudyDay = 1,
                    Matters = new List<Matter>
                    {
                        new Matter
                        {
                            Id = 1,
                            Name = "Español",
                            Note = "3.5",
                            Teacher = new Teacher
                            {
                                Id = 1,
                                Name = "Carlos Alberto",
                                LastName = "Zambrano",
                                TypeId = 1,
                                Identification = "1026580774",
                                Grade = 11,
                                StudyDay = 1
                            }
                        },
                        new Matter
                        {
                            Id = 2,
                            Name = "Inglés",
                            Note = "5.0",
                            Teacher = new Teacher
                            {
                                Id = 2,
                                Name = "Alain",
                                LastName = "Tapia",
                                TypeId = 1,
                                Identification = "52657895",
                                Grade = 10,
                                StudyDay = 1
                            }
                        }
                    }
                }
            };

    }
}
