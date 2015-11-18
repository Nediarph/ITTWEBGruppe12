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
        private IWriteEmbeddedStockRepository writeToDb = new WriteEmbeddedStockRepository(new EmbeddedStockDbEntities());
        // GET: Table
        public ActionResult ComponentTable()
        {
            var componentList = readFromDb.GetAllComponents();
            var toView = new List<ComponentTable> { };

            foreach (Component component in componentList)
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
            var componentList = readFromDb.GetAllSpecificComponentsById(id);
            
            var toView = new List<DetailsTable> {};

            foreach (var component in componentList)
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
            var toView = new LoanInfo();
            List<LoanInformation> dbLoan = readFromDb.GetLoanInformationBySpecificId(id).ToList();

            if (dbLoan.Count != 0)
            {
                var loan = dbLoan.First();

                toView.LoanDate = loan.LoanDate.ToShortDateString();
                toView.ReturnDate = loan.ReturnDate.ToShortDateString();
                toView.Name = loan.LoaneeName;
                toView.Email = loan.LoaneeEmail;
                toView.ComponentName = loan.SpecificComponent.Component.ComponentName;
                toView.SpecificComponentId = loan.SpecCompId.ToString();
                
            }

            return View(toView);
        }

        public ActionResult Index(int id)
        {
            return View();
        }

        public ActionResult RemoveLoanInformation(int componentId, int specificComponentId)
        {
            writeToDb.RemoveLoanInformation(specificComponentId);

            return RedirectToAction("DetailsView", new {id = componentId});
        }

        public ActionResult RemoveSpecificComponent(int componentId, int specificComponentId)
        {
            writeToDb.RemoveSpecificComponent(specificComponentId);

            return RedirectToAction("DetailsView", new { id = componentId });
        }

        public ActionResult RemoveComponent(int componentId)
        {
            writeToDb.RemoveComponent(componentId);

            return RedirectToAction("ComponentTable");
        }

    }
}