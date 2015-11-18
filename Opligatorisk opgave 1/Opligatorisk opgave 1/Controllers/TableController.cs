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

            return View(toView);
        }

        public ActionResult DetailsView(int id)
        {
            var test = readFromDb.GetAllSpecificComponentsById(id);
            
            var toView = new List<DetailsTable> {};

            foreach (var component in test)
            {
                DetailsTable tmpDetailsTable = new DetailsTable() { ComponentId = id, SpecificComponentId = component.ComponentId, ComponentName = component.Component.ComponentName};
                if (component.LoanInformations.Count != 0)
                {
                    var tmp = component.LoanInformations.First();
                    tmpDetailsTable.ReturnDate = tmp.ReturnDate.ToShortDateString();
                }
                else{tmpDetailsTable.ReturnDate = "";}

                toView.Add(tmpDetailsTable);
            }

            return View(toView);
        }

        public ActionResult LoanInformationView(int id)
        {
            return View();
        }

        public ActionResult Index(int id)
        {
            return View();
        }

        public ActionResult removeLoanInformation(int componentId, int speceficComponentId)
        {

            return RedirectToAction("DetailsView", new {id = componentId});
        }

        public ActionResult removeComponent(int componentId, int speceficComponentId)
        {

            return RedirectToAction("DetailsView", new { id = componentId });
        }

    }
}