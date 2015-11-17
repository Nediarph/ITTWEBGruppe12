using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Opligatorisk_opgave_1.Controllers
{
    public class TableController : Controller
    {
        //private ScrumCatDataEntities db = new ScrumCatDataEntities();
        // GET: Table
        public ActionResult ComponentTable()
        {
            //var tmp = db.Invites.ToList();
            var toView = new List<String> {};

            return View(toView);
        }

        public ActionResult Index()
        {
            return View();
        }
    }
}