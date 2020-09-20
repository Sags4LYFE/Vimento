﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Vimento.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult MapAddress()
        {
            return View();
        }

        public ActionResult Charts()
        {
            return View();
        }

        public ActionResult ArcGisMap()
        {
            return View();
        }

        public ActionResult Leaflet()
        {
            return View();
        }
    }
}