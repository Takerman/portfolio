﻿using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Tanyo.Portfolio.Data.Entities
{
    public class NavLink
    {
        [Key]
        public int ID { get; set; }

        public object Data;

        [JsonPropertyName("action")]
        public string Action { get; set; }

        [JsonPropertyName("controller")]
        public string Controller { get; set; }

        [JsonPropertyName("label")]
        public string Label { get; set; }
    }
}