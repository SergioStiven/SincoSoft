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
    [RoutePrefix("api/students")]
    public class StudentsController : ApiController
    {

        StudentBusiness _studentBusiness;

        public StudentsController()
        {
            _studentBusiness = new StudentBusiness();
        }

        [Route("getall")]
        [HttpGet]
        public IHttpActionResult GetAll()
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

        [Route("getbyid/{id}")]
        [HttpGet]
        public IHttpActionResult GetById(int id)
        {
            try
            {
                Student student = _studentBusiness.GetById(id);
                return Ok(student);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

    }
}
