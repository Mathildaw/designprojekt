using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace design.Controllers
{
    public class omossController : Controller
    {
        // GET: omoss
        public ActionResult omoss()
        {
            return View("omoss");
        }

        // GET: omoss/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: omoss/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: omoss/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: omoss/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: omoss/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: omoss/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: omoss/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
