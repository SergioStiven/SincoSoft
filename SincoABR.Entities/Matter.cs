using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SincoABR.Entities
{
    public class Matter
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Note { get; set; }
        public int Status { get; set; }

        public Student Student { get; set; }
        public Teacher Teacher { get; set; }
    }
}
