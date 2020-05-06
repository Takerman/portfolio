﻿using Microsoft.AspNetCore.Hosting;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

namespace Tanyo.Portfolio.Web.Models.Services
{
    public class PricingService
    {
        public PricingService(IWebHostEnvironment webHostEnvironment)
        {
            WebHostEnvironment = webHostEnvironment;
        }

        public IWebHostEnvironment WebHostEnvironment { get; }

        private string GetFileName(string fileName)
        {
            return Path.Combine(WebHostEnvironment.WebRootPath, "data", fileName);
        }

        public IEnumerable<Price> GetPrices()
        {
            var filePath = GetFileName("pricing.json");

            using (var jsonFileReader = File.OpenText(filePath))
            {
                return JsonSerializer.Deserialize<Price[]>(jsonFileReader.ReadToEnd(),
                    new JsonSerializerOptions()
                    {
                        PropertyNameCaseInsensitive = true
                    }); ;
            }
        }
    }
}