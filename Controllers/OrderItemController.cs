using AutoMapper;
using DutchTreat.Data;
using DutchTreat.Data.Entities;
using DutchTreat.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Controllers
{
    [Route("api/orders/{orderid}/items")]
    public class OrderItemController : ControllerBase
    {
        private readonly DutchContext _dutchContext;
        private readonly IMapper mapper;

        public OrderItemController(DutchContext dutchContext,IMapper mapper)
        {
            this._dutchContext = dutchContext;
            this.mapper = mapper;
        }
        [HttpGet]
        public IActionResult Get(int orderid)
        {
            try
            {
                var orderItems = (_dutchContext.Orders.Include(x => x.Items).ThenInclude(x => x.Product).Where(x => x.Id == orderid).FirstOrDefault()).Items;
                if (orderItems != null)
                {
                    return Ok(mapper.Map<IEnumerable< OrderItem>,IEnumerable< OrderItemViewModel>>(orderItems));
                }
                else
                {
                    return NotFound();
                }
            }
            catch
            {
                return BadRequest("Ordere Item not found");
            }
        }
        [HttpGet("{id}")]
        public IActionResult Get(int orderid,int id)
        {
            try
            {
                var orderItems = (_dutchContext.Orders.Include(x => x.Items).ThenInclude(x => x.Product).Where(x => x.Id == orderid).FirstOrDefault()).Items;
                var item = orderItems.Where(x => x.Id == id).FirstOrDefault();
                if (item != null)
                {
                    return Ok(mapper.Map<OrderItem, OrderItemViewModel>(item));
                }
                else
                {
                    return NotFound();
                }
            }
            catch
            {
                return BadRequest("Ordere Item not found");
            }
        }
    }
}
