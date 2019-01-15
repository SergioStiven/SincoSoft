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
    [RoutePrefix("api/teachers")]
    public class TeachersController : ApiController
    {

        TeacherBusiness _teacherBusiness;

        public TeachersController()
        {
            _teacherBusiness = new TeacherBusiness();
        }

        [Route("getall")]
        [HttpGet]
        public IHttpActionResult GetAll()
        {
            try
            {
                List<Teacher> teachers = _teacherBusiness.GetAll();
                return Ok(teachers);
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
                Teacher teacher = _teacherBusiness.GetById(id);
                return Ok(teacher);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [Route("save")]
        [HttpPost]
        public IHttpActionResult Save(Teacher teacher)
        {
            try
            {
                int id = _teacherBusiness.Save(teacher);
                return Ok(id);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [Route("update/{id}")]
        [HttpPut]
        public IHttpActionResult Update(Teacher teacher, int id)
        {
            try
            {
                teacher.Id = id;
                _teacherBusiness.Update(teacher);
                return Ok(id);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}
