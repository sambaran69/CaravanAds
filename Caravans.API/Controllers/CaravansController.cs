using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Caravans.API.Models;
using Caravans.API.Data;

namespace Caravans.API.Controllers
{
    public class CaravansController : ApiController
    {
        // GET api/caravans
        public CaravanResponseEntity Get()
        {
            var caravanRepository = new CaravanRepository();
            return caravanRepository.RetrieveAll();
        }

        // GET api/caravans
        public CaravanResponseEntity Get([FromUri]string search)
        {
            var caravanRepository = new CaravanRepository();
            return caravanRepository.Retrieve(search);
        }

        // GET api/caravans/5
        public CaravanDetail GetCaravan([FromUri]string id)
        {
            var caravanRepository = new CaravanRepository();
            return caravanRepository.RetrieveItem(id);
        }

        // POST api/caravans
        public void Post([FromBody]string value)
        {
        }

        // PUT api/caravans/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/caravans/5
        public void Delete(int id)
        {
        }
    }
}
