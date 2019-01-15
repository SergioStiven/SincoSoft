using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SincoABR.Entities
{
    public class Teacher
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public int TypeId { get; set; }
        public string Identification { get; set; }
        public int Grade { get; set; }
        public int StudyDay { get; set; }

        public List<Matter> Matters { get; set; }
    }
}
