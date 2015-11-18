using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Opligatorisk_opgave_1.DAL
{
    public interface IWriteEmbeddedStockRepository
    {
        void AddNewCategory(Category category);
        void RemoveCategory(int catId);
        void UpdateCategory(int catId, Category category);
        void AddNewComponent(Component comp);
        void AddNewSpecificComponent(SpecificComponent specComp);
        void RemoveComponent(int compId);
        void RemoveSpecificComponent(int specCompId);
        void AddLoanInformation(LoanInformation loan);
        void RemoveLoanInformation(int loanId);
        void UpdateComponent(int compId, Component component);
        void UpdateSpecificComponent(int specId, SpecificComponent component);
        void UpdateLoanInformation(int loanId, LoanInformation loan);
    }
}
