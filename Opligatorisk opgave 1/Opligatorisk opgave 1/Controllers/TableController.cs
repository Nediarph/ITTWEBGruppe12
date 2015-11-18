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

        public ActionResult Details(int id)
        {
            var test = readFromDb.GetAllSpecificComponentsById(id);
            
            var toView = new List<DetailsTable> {};

            foreach (var component in test)
            {
                DetailsTable tmpDetailsTable = new DetailsTable() { ComponentId = component.ComponentId, ComponentName = component.Component.ComponentName};
                if (component.LoanInformations != null)
                {
                    var tmp = component.LoanInformations.First();
                    tmpDetailsTable.ReturnDate = tmp.ReturnDate.ToShortDateString();
                }
                else{tmpDetailsTable.ReturnDate = "";}

                toView.Add(tmpDetailsTable);
            }

            return View(toView);
        }

        public ActionResult LoanInformation(int id)
        {
            return View();
        }

        public ActionResult Index(int id)
        {
            return View();
        }

    }
}