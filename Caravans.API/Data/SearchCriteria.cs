using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Caravans.API.Data
{
    public class SearchCriteria
    {

        public List<QueryOption> QueryOptions { get; set; }

    }

    public class QueryOption
    {
        public string KeyName { get; set; }

        public string KeyValue { get; set; }
    }
}