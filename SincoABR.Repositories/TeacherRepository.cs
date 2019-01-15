using SincoABR.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SincoABR.Repositories
{
    public class TeacherRepository
    {
        public List<Teacher> GetAll()
        {
            return _dataTeachers;
        }

        public Teacher GetById(int id)
        {
            return _dataTeachers.Where(x => x.Id == id).FirstOrDefault();
        }

        public int Save(Teacher student)
        {
            student.Id = _dataTeachers.OrderByDescending(s => s.Id).FirstOrDefault().Id + 1;
            _dataTeachers.Add(student);
            return student.Id;
        }

        public void Update(Teacher student)
        {
            List<Teacher> list = new List<Teacher>();
            foreach (var item in _dataTeachers)
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
            _dataTeachers = list;
        }

        List<Teacher> _dataTeachers = new List<Teacher>
            {
                new Teacher
                {
                    Id = 1,
                    Name = "Carlos Alberto",
                    LastName = "Zambrano",
                    TypeId = 1,
                    Identification = "1026580774",
                    Grade = 11,
                    StudyDay = 1,
                    Matters = new List<Matter>
                    {
                        new Matter
                        {
                            Id = 1,
                            Name = "Matemáticas",
                            Note = "4.5",
                            Status = 1
                        }
                    }
                },
                new Teacher
                {
                    Id = 2,
                    Name = "Alain",
                    LastName = "Tapia",
                    TypeId = 1,
                    Identification = "52657895",
                    Grade = 10,
                    StudyDay = 1,
                    Matters = new List<Matter>
                    {
                        new Matter
                        {
                            Id = 1,
                            Name = "Ciencias",
                            Note = "4.7",
                            Status = 1
                        }
                    }
                }
            };

    }
}
