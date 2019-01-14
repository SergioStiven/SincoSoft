using SincoABR.Business;
using SincoABR.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SincoABR.WebApi.Controllers
{
    public class StudentController : ApiController
    {

        StudentBusiness _studentBusiness;

        public StudentController()
        {
            _studentBusiness = new StudentBusiness();
        }

        public IHttpActionResult Get()
        {
            try
            {
                List<Student> students = _studentBusiness.GetAll();
                return Ok(students);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
        
    }
}
