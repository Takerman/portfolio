﻿using Tanyo.Portfolio.BLL.Services.Interfaces;
using Tanyo.Portfolio.Data.Contexts;
using Tanyo.Portfolio.Data.Entities;

namespace Tanyo.Portfolio.BLL.Services
{
    public class CompaniesService : ICompaniesService
    {
        public IEnumerable<Company> GetCompanies()
        {
            using var context = new MainContext();
            return context.Companies.ToList();
        }
    }
}