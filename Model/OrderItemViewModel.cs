using DutchTreat.Data.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Model
{
    public class OrderItemViewModel
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        [Required]
        public int ProductId { get; set; }
        public decimal ProductPrice { get; set; }
        public string ProductTitle { get; set; }
        public string ProductArtDescription { get; set; }
        public string ProductArtDating { get; set; }
        public string ProductArtId { get; set; }
        public string ProductArtist { get; set; }
      
    }
}
