using System.Collections.Generic;
using System.Runtime.Remoting.Contexts;

namespace Opligatorisk_opgave_1.DAL
{
    public class ReadEmbeddedStockRepository : IReadEmbeddedStockRepository
    {
        public ReadEmbeddedStockRepository()
        {
            
        }
        public IEnumerable<Components> GetAllComponents()
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<SpecificComponents> GetAllSpecificComponentsById(int id)
        {
            throw new System.NotImplementedException();
        }

        public LoanInformation GetLoanInformationBySpecificId(int specId)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Categories> GetAllCategories()
        {
            throw new System.NotImplementedException();
        }
    }
}