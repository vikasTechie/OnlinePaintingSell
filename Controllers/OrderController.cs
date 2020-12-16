using AutoMapper;
using DutchTreat.Data;
using DutchTreat.Data.Entities;
using DutchTreat.Model;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Controllers
{
    [Route("api/orders")]
    [ApiController]
    [Produces("application/json")]
    [Authorize(AuthenticationSchemes =JwtBearerDefaults.AuthenticationScheme)]
    
    public class OrderController:ControllerBase
    {
        private readonly DutchContext _dutchContext;
        private readonly IMapper mapper;

        public OrderController(DutchContext dutchContext,IMapper mapper)
        {
            this._dutchContext = dutchContext;
            this.mapper = mapper;
        }
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var orders = _dutchContext.Orders.Include(x => x.Items).ThenInclude(x => x.Product).ToList();
                 return Ok(mapper.Map<IEnumerable<Order>,IEnumerable<OrderViewModel>>( orders));
            }
            catch
            {
                return BadRequest("Order not Found");
            }
        }
        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var order = (_dutchContext.Orders.Include(x => x.Items).ThenInclude(x => x.Product).Where(x=>x.Id==id).FirstOrDefault());
                if(order!=null)
                {
                    return Ok(mapper.Map<Order,OrderViewModel>( order));
                }
                else
                {
                    return NotFound();
                }
            }
            catch
            {
                return BadRequest("Order not Found");
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]OrderViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newOrder = mapper.Map<OrderViewModel, Order>(model);
                    if(newOrder.OrderDate==DateTime.MinValue)
                    {
                        newOrder.OrderDate = DateTime.Now;
                    }
                    _dutchContext.Add(newOrder);
                    _dutchContext.SaveChanges();
                    
                    return Created($"/api/orders/{newOrder.Id}", mapper.Map<Order,OrderViewModel>(newOrder));
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch(Exception ex)
            {
                return BadRequest("Failed to save new order");
            }
        }

    }
}
