﻿using Tanyo.Portfolio.BLL.Services.Interfaces;
using Tanyo.Portfolio.Data.Contexts;
using Tanyo.Portfolio.Data.Entities;

namespace Tanyo.Portfolio.Web.Models.Services
{
    public class NavLinksService : INavLinksService
    {
        public IEnumerable<NavLink> GetLinks()
        {
            using var context = new MainContext();
            return context.NavLinks.ToList();
        }
    }
}