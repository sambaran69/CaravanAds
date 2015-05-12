using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Caravans.API.Models
{
    public class CaravanDetail
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

        public Seller Seller { get; set; }

        public CaravanSpecification Specification { get; set; }

        public string DetailsUrl { get; set; }
    }

    public class Seller
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string EmailAddress { get; set; }

        public string Suburb { get; set; }

        public string State { get; set; }

        public string Postcode { get; set; }

        public string Country { get; set; }

    }

    public class CaravanSpecification
    {
        public string SourceId { get; set; }

        public string Make { get; set; }

        public string Model { get; set; }

        public int ReleaseYear { get; set; }

        public IEnumerable<CaravanAttribute> Attributes { get; set; }

    }

    public class CaravanAttribute
    {
        public string Name { get; set; }

        public string FeatureGroup { get; set; }

        public string DisplayName { get; set; }

        public string Value { get; set; }

        public string Unit { get; set; }
    }

}