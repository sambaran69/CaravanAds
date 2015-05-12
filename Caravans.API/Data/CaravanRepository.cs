using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using RestSharp;
using Newtonsoft.Json;
using Caravans.API.Models;

namespace Caravans.API.Data
{
    public class CaravanRepository
    {

        private const string _baseUrl = "http://lifestyle-data-service.azurewebsites.net/";
        private const string _caravansResource = "api/v1/items";

        internal CaravanResponseEntity RetrieveAll()
        {
            return GetCaravan(string.Empty);
        }

        internal CaravanResponseEntity Retrieve(string queryString)
        {
            return GetCaravan(queryString);
        }

        internal CaravanDetail RetrieveItem(string id)
        {
            return GetCaravanDetail(id);
        }

        public CaravanResponseEntity GetCaravan(string queryString)
        {
            //Create a restclient  
            var client = new RestClient();
            client.BaseUrl = new Uri(_baseUrl);

            //Create request with GET
            var resourceUrl = _caravansResource + queryString;
            var request = new RestRequest(resourceUrl, Method.GET);
            var response = client.Execute(request);

            return JsonConvert.DeserializeObject<CaravanResponseEntity>(response.Content);
        }

        public CaravanDetail GetCaravanDetail(string id)
        {
            //Create a restclient  
            var client = new RestClient();
            client.BaseUrl = new Uri(_baseUrl);

            //Create request with GET
            var resourceUrl = _caravansResource + "/" + id;
            var request = new RestRequest(resourceUrl, Method.GET);
            var response = client.Execute(request);

            return JsonConvert.DeserializeObject<CaravanDetail>(response.Content);
        }

    }
}