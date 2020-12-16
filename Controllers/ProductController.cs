using DutchTreat.Data;
using DutchTreat.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Controllers
{
    [Route("api/Products")]
    [ApiController]
    [Produces("application/json")]
    public class ProductController:ControllerBase
    {
        private readonly DutchContext _dutchContext;

        public ProductController(DutchContext dutchContext)
        {
            this._dutchContext = dutchContext;
        }
        [HttpGet]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public ActionResult<IEnumerable<Product>> Get()
        {
            try
            {
                return Ok(_dutchContext.Products.OrderBy(p=>p.Title).ToList());
            }
            catch
            {
                return BadRequest("Falied to Get Products");
               
            }
        }
    }
}
