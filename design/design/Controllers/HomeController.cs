using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace design.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult LedigaObjekt()
        {
            return View();
        }
        public ActionResult Intresseanmalan2()
        {
            return View();
        }
        public ActionResult InfoObjekt()
        {
            return View();
        }
        public ActionResult Intresseanmalan()
        {
            return View();
        }

        public ActionResult studentboende()
        {
            return View();
        }

        public ActionResult seriorboende()
        {
            return View();
        }

        public ActionResult omoss()
        {
            return View();
        }

        public ActionResult Kontakt()
        {
            return View();
        }

        public ActionResult Varafastigheter()
        {
            return View();
        }

        public ActionResult FragorOchSvar()
        {
            return View();
        }

        public ActionResult Nyheter()
        {
            return View();
        }
        public ActionResult Felanmalan()
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
    }
}