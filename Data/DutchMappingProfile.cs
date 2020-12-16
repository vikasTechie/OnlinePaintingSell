using AutoMapper;
using DutchTreat.Data.Entities;
using DutchTreat.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Data
{
    public class DutchMappingProfile:Profile
    {
        public DutchMappingProfile()
        {
            CreateMap<Order, OrderViewModel>()
                .ForMember(x=>x.OrderID,x=>x.MapFrom(x=>x.Id)).ReverseMap();
            CreateMap<OrderItem, OrderItemViewModel>().ReverseMap();
        }
    }
}
