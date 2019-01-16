using SincoABR.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SincoABR.Repositories
{
    public class MatterRepository
    {
        public List<Matter> GetAll()
        {
            return _dataMatters;
        }

        public Matter GetById(int id)
        {
            return _dataMatters.Where(x => x.Id == id).FirstOrDefault();
        }

        public int Save(Matter matter)
        {
            matter.Id = _dataMatters.OrderByDescending(s => s.Id).FirstOrDefault().Id + 1;
            _dataMatters.Add(matter);
            return matter.Id;
        }

        public void Update(Matter matter)
        {
            List<Matter> list = new List<Matter>();
            foreach (var item in _dataMatters)
            {
                if (item.Id == matter.Id)
                {
                    list.Add(matter);
                }
                else
                {
                    list.Add(item);
                }
            }
            _dataMatters = list;
        }

        List<Matter> _dataMatters = new List<Matter>
            {
                new Matter
                {
                    Id = 1,
                    Name = "Matemáticas",
                    Note = "4.5"
                },
                new Matter
                {
                    Id = 2,
                    Name = "Ciencias",
                    Note = "5.0"
                },
                new Matter
                {
                    Id = 3,
                    Name = "Español",
                    Note = "3.0"
                },
                new Matter
                {
                    Id = 3,
                    Name = "Sociales",
                    Note = "4.0"
                }
            };

    }
}
