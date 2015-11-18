using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Runtime.Remoting.Contexts;

namespace Opligatorisk_opgave_1.DAL
{
    public class ReadEmbeddedStockRepository : IReadEmbeddedStockRepository
    {
        private EmbeddedStockDbEntities dbContext;
        public ReadEmbeddedStockRepository(EmbeddedStockDbEntities context)
        {
            dbContext = context;
        }
        public IEnumerable<Component> GetAllComponents()
        {
                List<Component> components = dbContext.Components.ToList();

                return components;
        }

        public IEnumerable<SpecificComponent> GetAllSpecificComponentsById(int id)
        {
                List<SpecificComponent> specficComponents =
                    dbContext.SpecificComponents.Where(x => x.ComponentId == id).ToList();
                return specficComponents;
        }

        public IEnumerable<LoanInformation> GetLoanInformationBySpecificId(int specId)
        {
                IEnumerable<LoanInformation> loanInfo =
                    dbContext.LoanInformation.Where(x => x.SpecCompId == specId).ToList();

                return loanInfo;
        }

        public IEnumerable<Category> GetAllCategories()
        {
                IEnumerable<Category> categories = dbContext.Categories.ToList();
                return categories;
        }
    }
}