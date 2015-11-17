using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Opligatorisk_opgave_1.DAL
{
    public interface IWriteEmbeddedStockRepository
    {
        void AddNewCategory(Categories category);
        void RemoveCategory(int catId);
        void AddNewComponent(Components comp);
        void AddNewSpecificComponent(SpecificComponents specComp);
        void RemoveComponent(int compId);
        void RemoveSpecificComponent(int specCompId);
        void AddLoanInformation(LoanInformation loan);
        void RemoveLoanInformation(int loanId);
    }
}
