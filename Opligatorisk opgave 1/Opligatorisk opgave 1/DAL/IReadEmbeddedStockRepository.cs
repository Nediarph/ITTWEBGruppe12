using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Opligatorisk_opgave_1.DAL
{
    public interface IReadEmbeddedStockRepository
    {
        IEnumerable<Components> GetAllComponents();
        IEnumerable<SpecificComponents> GetAllSpecificComponentsById(int id);
        LoanInformation GetLoanInformationBySpecificId(int specId);
        IEnumerable<Categories> GetAllCategories();

    }
}
