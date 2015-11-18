using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Contexts;

namespace Opligatorisk_opgave_1.DAL
{
    public class ReadEmbeddedStockRepository : IReadEmbeddedStockRepository
    {
        public IEnumerable<Component> GetAllComponents()
        {
            using (var dbContext = new EmbeddedStockDbEntities())
            {
                List<Component> components = dbContext.Components.ToList();

                return components;
            }
        }

        public IEnumerable<SpecificComponent> GetAllSpecificComponentsById(int id)
        {
            using (var dbContext = new EmbeddedStockDbEntities())
            {
                List<SpecificComponent> specficComponents =
                    dbContext.SpecificComponents.Where(x => x.ComponentId == id).ToList();
                return specficComponents;
            }
        }

        public IEnumerable<LoanInformation> GetLoanInformationBySpecificId(int specId)
        {
            using (var dbContext = new EmbeddedStockDbEntities())
            {
                IEnumerable<LoanInformation> loanInfo =
                    dbContext.LoanInformation.Where(x => x.SpecCompId == specId).ToList();

                return loanInfo;
            }
        }

        public IEnumerable<Category> GetAllCategories()
        {
            using (var dbContext = new EmbeddedStockDbEntities())
            {
                IEnumerable<Category> categories = dbContext.Categories.ToList();
                return categories;
            }
        }
    }
}