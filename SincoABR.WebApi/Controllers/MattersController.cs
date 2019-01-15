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
    [RoutePrefix("api/matters")]
    public class MattersController : ApiController
    {

        MatterBusiness _matterBusiness;

        public MattersController()
        {
            _matterBusiness = new MatterBusiness();
        }

        [Route("getall")]
        [HttpGet]
        public IHttpActionResult GetAll()
        {
            try
            {
                List<Matter> matters = _matterBusiness.GetAll();
                return Ok(matters);
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
                Matter matter = _matterBusiness.GetById(id);
                return Ok(matter);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [Route("save")]
        [HttpPost]
        public IHttpActionResult Save(Matter matter)
        {
            try
            {
                int id = _matterBusiness.Save(matter);
                return Ok(id);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [Route("update/{id}")]
        [HttpPut]
        public IHttpActionResult Update(Matter matter, int id)
        {
            try
            {
                matter.Id = id;
                _matterBusiness.Update(matter);
                return Ok(id);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}
