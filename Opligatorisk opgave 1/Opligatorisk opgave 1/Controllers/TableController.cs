using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Opligatorisk_opgave_1.DAL;
using Opligatorisk_opgave_1.Models;

namespace Opligatorisk_opgave_1.Controllers
{
    public class TableController : Controller
    {
        private IReadEmbeddedStockRepository readFromDb = new ReadEmbeddedStockRepository(new EmbeddedStockDbEntities());
        // GET: Table
        public ActionResult ComponentTable()
        {
            var test = readFromDb.GetAllComponents();
            var toView = new List<ComponentTable> { };

            foreach (Component component in test)
            {
                ComponentTable tmpComponentTable = new ComponentTable() {ComponentId = component.ComponentId, ComponentName = component.ComponentName, Amount = component.SpecificComponents.Count};
                if (component.Category != null)
                {
                    tmpComponentTable.CategoryName = component.Category.Name;
                }
                else{tmpComponentTable.CategoryName = "";}

                toView.Add(tmpComponentTable);
            }
            //var tmp = db.Invites.ToList();
            

            return View(toView);
        }

        public ActionResult Index(int id)
        {
            return View();
        }

        [HttpPost, ActionName("Accept")]
        [ValidateAntiForgeryToken]
        public ActionResult AcceptConfirmed(int id)
        {
            return RedirectToAction("Index", new { id = id });
        }
    }
}