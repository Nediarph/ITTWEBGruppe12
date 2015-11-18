using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Opligatorisk_opgave_1.DAL
{
    public interface IReadEmbeddedStockRepository
    {
        IEnumerable<Component> GetAllComponents();
        IEnumerable<SpecificComponent> GetAllSpecificComponentsById(int id);
        IEnumerable<LoanInformation> GetLoanInformationBySpecificId(int specId);
        IEnumerable<Category> GetAllCategories();

    }
}
