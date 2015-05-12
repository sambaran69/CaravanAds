using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Caravans.API.Models;

namespace Caravans.API.Data
{
    public class CaravanResponseEntity
    {
        public IEnumerable<Caravan> Items { get; set; }

        public CaravanContext SearchContext { get; set; }
    }

    public class CaravanContext
    {
        public int NumberOfItems { get; set; }

        public int NumberofPages { get; set; }

        public int RecordOffset { get; set; }

        public int ItemsPerPage { get; set; }

        public int PageNumber { get; set; }

        public int TotalNumberOfItems { get; set; }

    }
}