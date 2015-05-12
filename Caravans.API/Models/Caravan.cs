using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace Caravans.API.Models
{
    public class Caravan
    {
        public string RecordId { get; set; }

        public string SaleStatus { get; set; }

        public string Title { get; set; }

        public string Category { get; set; }

        public string SubCategory { get; set; }

        public string ListingType { get; set; }

        public int Price { get; set; }

        public string Comment { get; set; }

        public Media Media { get; set; }

        public string DetailsUrl { get; set; }

    }

    public class Media
    {
        public IEnumerable<string> Photos { get; set; }
    }

}